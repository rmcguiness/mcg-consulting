import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";
import type { ReactElement } from "react";
import ProposalPDF from "@/components/admin/ProposalPDF";
import type { ProposalData } from "@/components/admin/ProposalPDF";

export async function POST(request: NextRequest) {
  try {
    const data: ProposalData = await request.json();

    if (!data.businessName || !data.price) {
      return NextResponse.json(
        { error: "Business name and price are required" },
        { status: 400 }
      );
    }

    const element = createElement(ProposalPDF, { data }) as ReactElement;
    const buffer = await renderToBuffer(element);
    const uint8 = new Uint8Array(buffer);

    return new NextResponse(uint8, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="MCG-Proposal-${data.businessName}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
