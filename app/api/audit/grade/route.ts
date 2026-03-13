import { NextRequest, NextResponse } from "next/server";

interface CheckResult {
  name: string;
  passed: boolean;
  score: number;
  detail: string;
  tip: string;
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Normalize URL
    let targetUrl = url.trim();
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      targetUrl = "https://" + targetUrl;
    }

    const checks: CheckResult[] = [];
    let html = "";
    let responseTimeMs = 0;
    let fetchOk = false;
    let isHttps = false;
    let contentLength = 0;
    let fetchError = "";

    // Fetch the page
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const startTime = Date.now();

    try {
      const res = await fetch(targetUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; MCGWebsiteGrader/1.0; +https://mcgconsulting.com)",
        },
        redirect: "follow",
      });
      responseTimeMs = Date.now() - startTime;
      clearTimeout(timeout);

      isHttps = new URL(res.url).protocol === "https:";
      html = await res.text();
      contentLength = new TextEncoder().encode(html).length;
      fetchOk = true;
    } catch (err: unknown) {
      clearTimeout(timeout);
      responseTimeMs = Date.now() - startTime;
      if (err instanceof Error && err.name === "AbortError") {
        fetchError = "The website took longer than 10 seconds to respond.";
      } else {
        fetchError =
          "Could not reach the website. It may be down or blocking automated requests.";
      }
    }

    // 1. Response time
    if (fetchOk) {
      let score = 0;
      let detail = `${responseTimeMs}ms`;
      if (responseTimeMs < 1000) {
        score = 10;
        detail += " — Excellent";
      } else if (responseTimeMs < 3000) {
        score = 7;
        detail += " — Acceptable";
      } else if (responseTimeMs < 5000) {
        score = 4;
        detail += " — Slow";
      } else {
        score = 1;
        detail += " — Very slow";
      }
      checks.push({
        name: "Page Speed",
        passed: score >= 7,
        score,
        detail,
        tip: "Slow sites lose visitors. Over 50% of users leave if a page takes more than 3 seconds.",
      });
    } else {
      checks.push({
        name: "Page Speed",
        passed: false,
        score: 0,
        detail: fetchError,
        tip: "Your site must be reachable to get any bookings.",
      });
    }

    // 2. HTTPS
    checks.push({
      name: "HTTPS Security",
      passed: isHttps,
      score: isHttps ? 10 : 0,
      detail: isHttps
        ? "Site uses HTTPS"
        : "Site does not use HTTPS",
      tip: "Google penalizes non-HTTPS sites in search results, and browsers show 'Not Secure' warnings that scare away customers.",
    });

    if (!fetchOk) {
      // Return partial results
      return NextResponse.json({
        url: targetUrl,
        checks,
        totalScore: Math.round(
          (checks.reduce((sum, c) => sum + c.score, 0) / (checks.length * 10)) * 100
        ),
        grade: "F",
        partial: true,
        error: fetchError,
      });
    }

    const htmlLower = html.toLowerCase();

    // 3. Mobile viewport
    const hasViewport = /meta[^>]+name\s*=\s*["']viewport["']/i.test(html);
    checks.push({
      name: "Mobile Friendly",
      passed: hasViewport,
      score: hasViewport ? 10 : 0,
      detail: hasViewport
        ? "Mobile viewport tag found"
        : "No mobile viewport tag detected",
      tip: "Over 70% of Florida Keys visitors search on their phones. Without a viewport tag, your site looks tiny on mobile.",
    });

    // 4. Page title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : "";
    const hasGoodTitle = title.length > 10;
    checks.push({
      name: "Page Title",
      passed: hasGoodTitle,
      score: hasGoodTitle ? 10 : 0,
      detail: hasGoodTitle
        ? `"${title.substring(0, 60)}${title.length > 60 ? "..." : ""}"`
        : title
          ? `Title too short: "${title}"`
          : "No page title found",
      tip: "The page title is the first thing people see in Google results. A good title drives clicks.",
    });

    // 5. Phone number
    const phoneRegex =
      /(\(?\d{3}\)?[\s\-.]?\d{3}[\s\-.]?\d{4})|(\+1[\s\-.]?\d{3}[\s\-.]?\d{3}[\s\-.]?\d{4})/;
    const hasPhone = phoneRegex.test(html);
    checks.push({
      name: "Phone Number Visible",
      passed: hasPhone,
      score: hasPhone ? 10 : 0,
      detail: hasPhone
        ? "Phone number found on page"
        : "No phone number detected",
      tip: "Many customers — especially older visitors — want to call. Make your number easy to find.",
    });

    // 6. Address/location
    const locationTerms =
      /key west|marathon|islamorada|key largo|big pine|keys|florida|address|location|\d{5}/i;
    const hasLocation = locationTerms.test(html);
    checks.push({
      name: "Location/Address",
      passed: hasLocation,
      score: hasLocation ? 10 : 0,
      detail: hasLocation
        ? "Location reference found"
        : "No address or location mention detected",
      tip: "Local SEO depends on having your address visible. Google uses it to show you in 'near me' searches.",
    });

    // 7. Image alt text
    const imgTags = html.match(/<img[^>]*>/gi) || [];
    const missingAlt = imgTags.filter(
      (tag) => !/alt\s*=\s*["'][^"']+["']/i.test(tag)
    ).length;
    const altPassed = missingAlt <= 3;
    checks.push({
      name: "Image Alt Text",
      passed: altPassed,
      score: altPassed ? 10 : Math.max(0, 10 - missingAlt * 2),
      detail:
        missingAlt === 0
          ? "All images have alt text"
          : `${missingAlt} image${missingAlt === 1 ? "" : "s"} missing alt text`,
      tip: "Alt text helps visually impaired users AND helps Google index your images for search.",
    });

    // 8. Page size
    const pageSizeMB = contentLength / (1024 * 1024);
    const sizeOk = pageSizeMB < 3;
    checks.push({
      name: "Page Size",
      passed: sizeOk,
      score: sizeOk ? 10 : 2,
      detail: `${pageSizeMB.toFixed(2)} MB${sizeOk ? "" : " — too large"}`,
      tip: "Large pages load slowly on mobile networks. Keep it under 3MB for the best experience.",
    });

    // 9. Booking/contact form
    const hasForm = /<form/i.test(html);
    const hasBookingButton =
      /book|reserve|contact|schedule|inquiry|enquiry/i.test(htmlLower) &&
      (/<button/i.test(html) || /<a[^>]+href/i.test(html));
    const hasBooking = hasForm || hasBookingButton;
    checks.push({
      name: "Booking/Contact Form",
      passed: hasBooking,
      score: hasBooking ? 10 : 0,
      detail: hasBooking
        ? "Booking or contact form detected"
        : "No booking form or clear call-to-action found",
      tip: "If visitors can't book directly from your site, you're losing them to competitors who make it easy.",
    });

    // 10. Meta description
    const hasMetaDesc =
      /meta[^>]+name\s*=\s*["']description["'][^>]+content\s*=\s*["'][^"']{20,}/i.test(
        html
      ) ||
      /meta[^>]+content\s*=\s*["'][^"']{20,}[^>]+name\s*=\s*["']description["']/i.test(
        html
      );
    checks.push({
      name: "Meta Description",
      passed: hasMetaDesc,
      score: hasMetaDesc ? 10 : 0,
      detail: hasMetaDesc
        ? "Meta description found"
        : "No meta description or too short",
      tip: "The meta description is the snippet shown under your title in Google. A compelling one gets more clicks.",
    });

    // Calculate totals
    const totalScore = Math.round(
      (checks.reduce((sum, c) => sum + c.score, 0) / (checks.length * 10)) *
        100
    );
    let grade: string;
    if (totalScore >= 90) grade = "A";
    else if (totalScore >= 80) grade = "B";
    else if (totalScore >= 70) grade = "C";
    else if (totalScore >= 60) grade = "D";
    else grade = "F";

    return NextResponse.json({
      url: targetUrl,
      checks,
      totalScore,
      grade,
      partial: false,
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
