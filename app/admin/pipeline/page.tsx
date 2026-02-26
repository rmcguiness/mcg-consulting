"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Prospect {
  Name: string;
  Category: string;
  Location: string;
  Phone: string;
  Email: string;
  Website: string;
  Rating: string;
  Score: string;
  Priority: string;
  Deal_Value: string;
  Status: string;
  Notes: string;
  Last_Contact?: string;
  Next_Followup?: string;
}

const STAGES = [
  "To Contact",
  "Reached Out",
  "Discovery",
  "Proposal Sent",
  "Closed",
] as const;

const stageConfig: Record<
  string,
  { color: string; bg: string; headerBg: string }
> = {
  "To Contact": {
    color: "text-blue-700",
    bg: "border-blue-200",
    headerBg: "bg-blue-50",
  },
  "Reached Out": {
    color: "text-purple-700",
    bg: "border-purple-200",
    headerBg: "bg-purple-50",
  },
  Discovery: {
    color: "text-indigo-700",
    bg: "border-indigo-200",
    headerBg: "bg-indigo-50",
  },
  "Proposal Sent": {
    color: "text-orange-700",
    bg: "border-orange-200",
    headerBg: "bg-orange-50",
  },
  Closed: {
    color: "text-green-700",
    bg: "border-green-200",
    headerBg: "bg-green-50",
  },
};

const priorityBadge: Record<string, string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-gray-100 text-gray-600",
};

const MOVE_OPTIONS = [
  "To Contact",
  "Reached Out",
  "Discovery",
  "Proposal Sent",
  "Won",
  "Lost",
];

function parseDealValue(val: string): number {
  const match = val.match(/\$([\d,]+)/);
  return match ? parseInt(match[1].replace(",", "")) : 0;
}

function daysSince(dateStr?: string): string {
  if (!dateStr) return "Not contacted";
  const d = new Date(dateStr + "T00:00:00");
  const now = new Date();
  const diff = Math.floor(
    (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diff === 0) return "Today";
  if (diff === 1) return "1 day ago";
  return `${diff} days ago`;
}

function isOverdue(prospect: Prospect): boolean {
  if (!prospect.Next_Followup) return false;
  const followup = new Date(prospect.Next_Followup + "T00:00:00");
  followup.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return followup <= today;
}

export default function PipelinePage() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/prospects")
      .then((res) => {
        if (res.status === 401) {
          router.push("/admin/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.prospects) setProspects(data.prospects);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [router]);

  async function moveProspect(name: string, newStatus: string) {
    setUpdating(name);
    try {
      const res = await fetch(
        `/api/admin/prospects/${encodeURIComponent(name)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (res.ok) {
        setProspects((prev) =>
          prev.map((p) =>
            p.Name === name
              ? {
                  ...p,
                  Status: newStatus,
                  Last_Contact: new Date().toISOString().split("T")[0],
                }
              : p
          )
        );
      }
    } catch (err) {
      console.error("Failed to move prospect:", err);
    } finally {
      setUpdating(null);
    }
  }

  function getStageProspects(stage: string): Prospect[] {
    if (stage === "Closed") {
      return prospects.filter(
        (p) => p.Status === "Won" || p.Status === "Lost"
      );
    }
    return prospects.filter((p) => p.Status === stage);
  }

  function getStageValue(stage: string): number {
    return getStageProspects(stage).reduce(
      (sum, p) => sum + parseDealValue(p.Deal_Value),
      0
    );
  }

  const totalPipeline = prospects.reduce(
    (sum, p) => sum + parseDealValue(p.Deal_Value),
    0
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-50 flex items-center justify-center">
        <p className="text-navy-500">Loading pipeline...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Header */}
      <header className="bg-navy-900 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">MCG Admin</h1>
          <button
            onClick={() => {
              document.cookie = "admin_auth=; path=/; max-age=0";
              router.push("/admin/login");
            }}
            className="text-sm text-navy-300 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
        <nav className="flex gap-6 mt-3 border-t border-navy-700 pt-3">
          <Link
            href="/admin"
            className="text-sm text-navy-300 hover:text-white transition-colors"
          >
            Leads
          </Link>
          <Link
            href="/admin/pipeline"
            className="text-sm font-medium text-white border-b-2 border-white pb-1"
          >
            Pipeline
          </Link>
        </nav>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        {/* Revenue Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <div className="card-ios !p-4 col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-xs text-navy-500 uppercase tracking-wide">
              Total Pipeline
            </p>
            <p className="text-2xl font-bold text-navy-900">
              ${totalPipeline.toLocaleString()}
            </p>
            <p className="text-xs text-navy-400">
              {prospects.length} leads
            </p>
          </div>
          {STAGES.map((stage) => {
            const value = getStageValue(stage);
            const count = getStageProspects(stage).length;
            const cfg = stageConfig[stage];
            return (
              <div key={stage} className="card-ios !p-4">
                <p
                  className={`text-xs font-medium uppercase tracking-wide ${cfg.color}`}
                >
                  {stage}
                </p>
                <p className="text-lg font-bold text-navy-900">
                  {value > 0 ? `$${value.toLocaleString()}` : "$0"}
                </p>
                <p className="text-xs text-navy-400">
                  {count} {count === 1 ? "lead" : "leads"}
                </p>
              </div>
            );
          })}
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STAGES.map((stage) => {
            const stageProspects = getStageProspects(stage);
            const cfg = stageConfig[stage];
            return (
              <div key={stage} className="flex flex-col">
                {/* Column Header */}
                <div
                  className={`rounded-t-lg border ${cfg.bg} ${cfg.headerBg} px-4 py-3`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-sm font-semibold ${cfg.color}`}
                    >
                      {stage}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.headerBg} ${cfg.color}`}
                    >
                      {stageProspects.length}
                    </span>
                  </div>
                </div>

                {/* Cards */}
                <div
                  className={`flex-1 bg-white border-x border-b ${cfg.bg} rounded-b-lg p-3 space-y-3 min-h-[200px]`}
                >
                  {stageProspects.length === 0 && (
                    <p className="text-xs text-navy-300 text-center py-8">
                      No leads
                    </p>
                  )}
                  {stageProspects.map((prospect) => (
                    <div
                      key={prospect.Name}
                      className="bg-white border border-navy-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Name & Priority */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-sm font-semibold text-navy-900 leading-tight flex items-center gap-1">
                          {prospect.Name}
                          {isOverdue(prospect) && (
                            <span title="Overdue follow-up" className="text-red-500 text-xs">
                              🔔
                            </span>
                          )}
                        </h4>
                        <span
                          className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                            priorityBadge[prospect.Priority] ||
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {prospect.Priority}
                        </span>
                      </div>

                      {/* Deal Value */}
                      <p className="text-sm font-medium text-navy-700 mb-1">
                        {prospect.Deal_Value}
                      </p>

                      {/* Category */}
                      <p className="text-xs text-navy-400 mb-2">
                        {prospect.Category}
                      </p>

                      {/* Days since contact */}
                      <p className="text-xs text-navy-400 mb-3">
                        {daysSince(prospect.Last_Contact)}
                      </p>

                      {/* Won/Lost badge */}
                      {(prospect.Status === "Won" ||
                        prospect.Status === "Lost") && (
                        <span
                          className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${
                            prospect.Status === "Won"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {prospect.Status}
                        </span>
                      )}

                      {/* Move To dropdown */}
                      <select
                        value=""
                        disabled={updating === prospect.Name}
                        onChange={(e) => {
                          if (e.target.value) {
                            moveProspect(prospect.Name, e.target.value);
                          }
                        }}
                        className="w-full text-xs border border-navy-200 rounded-md px-2 py-1.5 text-navy-600 bg-navy-50 hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <option value="">
                          {updating === prospect.Name
                            ? "Updating..."
                            : "Move to..."}
                        </option>
                        {MOVE_OPTIONS.filter(
                          (s) => s !== prospect.Status
                        ).map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
