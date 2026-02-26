import { NextResponse, NextRequest } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        fields.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
  }
  fields.push(current.trim());
  return fields;
}

function escapeCSVField(field: string): string {
  if (field.includes(",") || field.includes('"') || field.includes("\n")) {
    return `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

const VALID_STATUSES = [
  "To Contact",
  "Reached Out",
  "Discovery",
  "Proposal Sent",
  "Won",
  "Lost",
];

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    const decodedName = decodeURIComponent(name);
    const body = await request.json();
    const { status } = body;

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const csvPath = join(
      process.env.HOME || "/Users/mcbot",
      "clawd/crm/prospects.csv"
    );
    const raw = readFileSync(csvPath, "utf-8");
    const lines = raw.split("\n").filter((l) => l.trim());

    if (lines.length < 2) {
      return NextResponse.json(
        { error: "No prospects found" },
        { status: 404 }
      );
    }

    const headers = parseCSVLine(lines[0]);
    const statusIdx = headers.indexOf("Status");
    let lastContactIdx = headers.indexOf("Last_Contact");

    // Add Last_Contact header if missing
    if (lastContactIdx === -1) {
      headers.push("Last_Contact");
      lastContactIdx = headers.length - 1;
    }

    let found = false;
    const today = new Date().toISOString().split("T")[0];
    const updatedLines = [headers.map(escapeCSVField).join(",")];

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      // Pad values array to match headers length
      while (values.length < headers.length) {
        values.push("");
      }
      if (values[0] === decodedName) {
        found = true;
        values[statusIdx] = status;
        values[lastContactIdx] = today;
      }
      updatedLines.push(values.map(escapeCSVField).join(","));
    }

    if (!found) {
      return NextResponse.json(
        { error: "Prospect not found" },
        { status: 404 }
      );
    }

    writeFileSync(csvPath, updatedLines.join("\n") + "\n", "utf-8");
    return NextResponse.json({ success: true, name: decodedName, status });
  } catch (error) {
    console.error("Failed to update prospect:", error);
    return NextResponse.json(
      { error: "Failed to update prospect" },
      { status: 500 }
    );
  }
}
