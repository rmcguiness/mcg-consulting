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

function getCSVPath(): string {
  return join(process.env.HOME || "/Users/mcbot", "clawd/crm/prospects.csv");
}

function readProspects(): { headers: string[]; rows: string[][] } {
  const raw = readFileSync(getCSVPath(), "utf-8");
  const lines = raw.split("\n").filter((l) => l.trim());
  const headers = parseCSVLine(lines[0]);
  const rows = lines.slice(1).map((line) => {
    const values = parseCSVLine(line);
    while (values.length < headers.length) values.push("");
    return values;
  });
  return { headers, rows };
}

function toRecord(headers: string[], values: string[]): Record<string, string> {
  const record: Record<string, string> = {};
  headers.forEach((h, i) => {
    record[h] = values[i] || "";
  });
  return record;
}

// GET: return overdue and upcoming follow-ups
export async function GET() {
  try {
    const { headers, rows } = readProspects();
    const followupIdx = headers.indexOf("Next_Followup");

    if (followupIdx === -1) {
      return NextResponse.json({ overdue: [], upcoming: [] });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const threeDaysOut = new Date(today);
    threeDaysOut.setDate(threeDaysOut.getDate() + 3);

    const overdue: Array<Record<string, string | number>> = [];
    const upcoming: Array<Record<string, string | number>> = [];

    for (const values of rows) {
      const nextFollowup = values[followupIdx];
      if (!nextFollowup) continue;

      const followupDate = new Date(nextFollowup + "T00:00:00");
      followupDate.setHours(0, 0, 0, 0);
      const record = toRecord(headers, values);

      if (followupDate <= today) {
        const diffDays = Math.floor(
          (today.getTime() - followupDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        overdue.push({ ...record, days_overdue: diffDays });
      } else if (followupDate <= threeDaysOut) {
        const diffDays = Math.floor(
          (followupDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        );
        upcoming.push({ ...record, days_until: diffDays });
      }
    }

    // Sort overdue by most overdue first, upcoming by soonest first
    overdue.sort((a, b) => (b.days_overdue as number) - (a.days_overdue as number));
    upcoming.sort((a, b) => (a.days_until as number) - (b.days_until as number));

    return NextResponse.json({ overdue, upcoming });
  } catch (error) {
    console.error("Failed to read followups:", error);
    return NextResponse.json(
      { error: "Failed to load followups" },
      { status: 500 }
    );
  }
}

// POST: update Last_Contact and Next_Followup for a prospect
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, last_contact, next_followup } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const { headers, rows } = readProspects();

    let lastContactIdx = headers.indexOf("Last_Contact");
    if (lastContactIdx === -1) {
      headers.push("Last_Contact");
      lastContactIdx = headers.length - 1;
    }

    let followupIdx = headers.indexOf("Next_Followup");
    if (followupIdx === -1) {
      headers.push("Next_Followup");
      followupIdx = headers.length - 1;
    }

    let found = false;
    for (const values of rows) {
      while (values.length < headers.length) values.push("");
      if (values[0] === name) {
        found = true;
        if (last_contact !== undefined) values[lastContactIdx] = last_contact;
        if (next_followup !== undefined) values[followupIdx] = next_followup;
      }
    }

    if (!found) {
      return NextResponse.json(
        { error: "Prospect not found" },
        { status: 404 }
      );
    }

    const updatedLines = [
      headers.map(escapeCSVField).join(","),
      ...rows.map((values) => values.map(escapeCSVField).join(",")),
    ];
    writeFileSync(getCSVPath(), updatedLines.join("\n") + "\n", "utf-8");

    return NextResponse.json({ success: true, name, last_contact, next_followup });
  } catch (error) {
    console.error("Failed to update followup:", error);
    return NextResponse.json(
      { error: "Failed to update followup" },
      { status: 500 }
    );
  }
}
