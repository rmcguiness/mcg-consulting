import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, websiteUrl, businessType, name, email, phone, frustration } = body;

    // Validate required fields
    if (!businessName || !websiteUrl || !businessType || !name || !email) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(websiteUrl);
    } catch {
      return NextResponse.json(
        { error: 'Please enter a valid website URL (e.g. https://example.com).' },
        { status: 400 }
      );
    }

    const submission = {
      businessName,
      websiteUrl,
      businessType,
      name,
      email,
      phone: phone || null,
      frustration: frustration || null,
      submittedAt: new Date().toISOString(),
    };

    // Save to JSON file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'audit-submissions.json');

    await fs.mkdir(dataDir, { recursive: true });

    let submissions = [];
    try {
      const existing = await fs.readFile(filePath, 'utf-8');
      submissions = JSON.parse(existing);
    } catch {
      // File doesn't exist yet
    }

    submissions.push(submission);
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));

    // Send notification email if Resend is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: 'Audit Request <onboarding@resend.dev>',
          to: ['ryanmcguiness123@gmail.com'],
          subject: `New Website Audit Request: ${businessName}`,
          html: `
            <h2>New Website Audit Request</h2>
            <p><strong>Business:</strong> ${businessName}</p>
            <p><strong>Website:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>
            <p><strong>Type:</strong> ${businessType}</p>
            <p><strong>Contact:</strong> ${name} (${email}${phone ? `, ${phone}` : ''})</p>
            ${frustration ? `<p><strong>Frustration:</strong> ${frustration}</p>` : ''}
          `,
          replyTo: email,
        });
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { success: true, message: 'Audit request received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Audit API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
