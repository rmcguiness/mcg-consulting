import { NextResponse } from "next/server";
import { readFileSync } from "fs";
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

export async function GET() {
  try {
    const csvPath = join(process.env.HOME || "/Users/mcbot", "clawd/crm/prospects.csv");
    const raw = readFileSync(csvPath, "utf-8");
    const lines = raw.split("\n").filter((l) => l.trim());

    if (lines.length < 2) {
      return NextResponse.json({ prospects: [] });
    }

    const headers = parseCSVLine(lines[0]);
    const prospects = lines.slice(1).map((line) => {
      const values = parseCSVLine(line);
      const record: Record<string, string> = {};
      headers.forEach((header, i) => {
        record[header] = values[i] || "";
      });
      return record;
    });

    return NextResponse.json({ prospects });
  } catch (error) {
    console.error("Failed to read prospects CSV:", error);
    return NextResponse.json({ error: "Failed to load prospects" }, { status: 500 });
  }
}
