"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
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
  Last_Contact: string;
  Next_Followup: string;
}

interface FollowupItem extends Prospect {
  days_overdue?: number;
  days_until?: number;
}

const statusColors: Record<string, string> = {
  "To Contact": "bg-blue-100 text-blue-800",
  "In Progress": "bg-yellow-100 text-yellow-800",
  "Reached Out": "bg-purple-100 text-purple-800",
  Discovery: "bg-indigo-100 text-indigo-800",
  "Proposal Sent": "bg-orange-100 text-orange-800",
  Won: "bg-green-100 text-green-800",
  Lost: "bg-red-100 text-red-800",
};

const priorityColors: Record<string, string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-gray-100 text-gray-600",
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

export default function AdminPortal() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [overdue, setOverdue] = useState<FollowupItem[]>([]);
  const [upcoming, setUpcoming] = useState<FollowupItem[]>([]);
  const [followupDate, setFollowupDate] = useState<Record<string, string>>({});
  const router = useRouter();

  const fetchFollowups = useCallback(() => {
    fetch("/api/admin/followups")
      .then((res) => res.json())
      .then((data) => {
        if (data.overdue) setOverdue(data.overdue);
        if (data.upcoming) setUpcoming(data.upcoming);
      })
      .catch(console.error);
  }, []);

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
        if (data?.prospects) {
          const sorted = [...data.prospects].sort(
            (a: Prospect, b: Prospect) =>
              parseInt(b.Score || "0") - parseInt(a.Score || "0")
          );
          setProspects(sorted);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    fetchFollowups();
  }, [router, fetchFollowups]);

  function handleLogout() {
    document.cookie = "admin_auth=; path=/; max-age=0";
    router.push("/admin/login");
  }

  async function handleFollowupAction(
    name: string,
    action: "done" | "skip"
  ) {
    const last_contact = action === "done" ? todayStr() : undefined;
    const next_followup = action === "done" ? addDays(7) : addDays(3);

    await fetch("/api/admin/followups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, last_contact, next_followup }),
    });

    // Refresh data
    fetchFollowups();
    const res = await fetch("/api/admin/prospects");
    const data = await res.json();
    if (data?.prospects) {
      const sorted = [...data.prospects].sort(
        (a: Prospect, b: Prospect) =>
          parseInt(b.Score || "0") - parseInt(a.Score || "0")
      );
      setProspects(sorted);
    }
  }

  async function handleScheduleFollowup(name: string, date: string) {
    if (!date) return;
    await fetch("/api/admin/followups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, next_followup: date }),
    });
    setFollowupDate((prev) => ({ ...prev, [name]: "" }));
    fetchFollowups();
    const res = await fetch("/api/admin/prospects");
    const data = await res.json();
    if (data?.prospects) {
      const sorted = [...data.prospects].sort(
        (a: Prospect, b: Prospect) =>
          parseInt(b.Score || "0") - parseInt(a.Score || "0")
      );
      setProspects(sorted);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-50 flex items-center justify-center">
        <p className="text-navy-500">Loading...</p>
      </div>
    );
  }

  const totalPipeline = prospects.reduce((sum, p) => {
    const match = p.Deal_Value.match(/\$([\d,]+)/);
    return sum + (match ? parseInt(match[1].replace(",", "")) : 0);
  }, 0);

  const hasFollowups = overdue.length > 0 || upcoming.length > 0;

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Header */}
      <header className="bg-navy-900 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">MCG Admin</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-navy-300 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
        <nav className="flex gap-6 mt-3 border-t border-navy-700 pt-3">
          <Link
            href="/admin"
            className="text-sm font-medium text-white border-b-2 border-white pb-1"
          >
            Leads
          </Link>
          <Link
            href="/admin/pipeline"
            className="text-sm text-navy-300 hover:text-white transition-colors"
          >
            Pipeline
          </Link>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Follow-ups Section */}
        {hasFollowups && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-navy-900 mb-3">
              Follow-ups
              {overdue.length > 0 && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                  {overdue.length} overdue
                </span>
              )}
              {upcoming.length > 0 && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                  {upcoming.length} upcoming
                </span>
              )}
            </h2>
            <div className="space-y-2">
              {overdue.map((item) => (
                <div
                  key={item.Name + "-overdue"}
                  className="card-ios !p-3 border-l-4 border-l-red-500 flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-navy-900 text-sm">
                        {item.Name}
                      </span>
                      <span className="text-xs text-navy-500">
                        {item.Category}
                      </span>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[item.Status] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.Status}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        {item.days_overdue === 0
                          ? "Due today"
                          : `${item.days_overdue}d overdue`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() =>
                        handleFollowupAction(item.Name, "done")
                      }
                      className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-700 transition-colors"
                    >
                      Mark Done + Set Next
                    </button>
                    <button
                      onClick={() =>
                        handleFollowupAction(item.Name, "skip")
                      }
                      className="px-3 py-1.5 rounded-lg bg-navy-100 text-navy-700 text-xs font-medium hover:bg-navy-200 transition-colors"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              ))}
              {upcoming.map((item) => (
                <div
                  key={item.Name + "-upcoming"}
                  className="card-ios !p-3 border-l-4 border-l-yellow-400 flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-navy-900 text-sm">
                        {item.Name}
                      </span>
                      <span className="text-xs text-navy-500">
                        {item.Category}
                      </span>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[item.Status] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.Status}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        {item.days_until === 1
                          ? "Tomorrow"
                          : `In ${item.days_until}d`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() =>
                        handleFollowupAction(item.Name, "done")
                      }
                      className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-700 transition-colors"
                    >
                      Mark Done + Set Next
                    </button>
                    <button
                      onClick={() =>
                        handleFollowupAction(item.Name, "skip")
                      }
                      className="px-3 py-1.5 rounded-lg bg-navy-100 text-navy-700 text-xs font-medium hover:bg-navy-200 transition-colors"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="card-ios !p-4">
            <p className="text-sm text-navy-500">Total Leads</p>
            <p className="text-2xl font-bold text-navy-900">{prospects.length}</p>
          </div>
          <div className="card-ios !p-4">
            <p className="text-sm text-navy-500">Pipeline Value</p>
            <p className="text-2xl font-bold text-navy-900">
              ${totalPipeline.toLocaleString()}+
            </p>
          </div>
          <div className="card-ios !p-4">
            <p className="text-sm text-navy-500">High Priority</p>
            <p className="text-2xl font-bold text-red-600">
              {prospects.filter((p) => p.Priority === "High").length}
            </p>
          </div>
          <div className="card-ios !p-4">
            <p className="text-sm text-navy-500">Avg Score</p>
            <p className="text-2xl font-bold text-navy-900">
              {Math.round(
                prospects.reduce((s, p) => s + parseInt(p.Score || "0"), 0) /
                  (prospects.length || 1)
              )}
            </p>
          </div>
        </div>

        {/* Leads Table */}
        <div className="card-ios !p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-50 border-b border-navy-100">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-navy-700">
                    Name
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-navy-700 hidden sm:table-cell">
                    Category
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-navy-700">
                    Deal Value
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-navy-700 hidden md:table-cell">
                    Priority
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-navy-700">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-navy-700 hidden lg:table-cell">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {prospects.map((prospect, i) => (
                  <Fragment key={i}>
                    <tr
                      onClick={() =>
                        setExpandedRow(expandedRow === i ? null : i)
                      }
                      className={`border-b border-navy-100 cursor-pointer transition-colors hover:bg-navy-50 ${
                        expandedRow === i ? "bg-navy-50" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-navy-900">
                          {prospect.Name}
                        </div>
                        <div className="text-xs text-navy-500 sm:hidden">
                          {prospect.Category}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-navy-700 hidden sm:table-cell">
                        {prospect.Category}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-navy-900">
                        {prospect.Deal_Value}
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            priorityColors[prospect.Priority] ||
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {prospect.Priority}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            statusColors[prospect.Status] ||
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {prospect.Status}
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-navy-100 rounded-full h-2">
                            <div
                              className="bg-navy-700 h-2 rounded-full"
                              style={{
                                width: `${parseInt(prospect.Score || "0")}%`,
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-navy-700">
                            {prospect.Score}
                          </span>
                        </div>
                      </td>
                    </tr>
                    {expandedRow === i && (
                      <tr className="bg-navy-50">
                        <td colSpan={6} className="px-4 py-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-navy-500 mb-1">Contact</p>
                              <p className="text-navy-900">{prospect.Phone}</p>
                              <a
                                href={`mailto:${prospect.Email}`}
                                className="text-blue-600 hover:underline"
                              >
                                {prospect.Email}
                              </a>
                            </div>
                            <div>
                              <p className="text-navy-500 mb-1">Location</p>
                              <p className="text-navy-900">
                                {prospect.Location}
                              </p>
                              <a
                                href={prospect.Website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {prospect.Website}
                              </a>
                            </div>
                            <div className="sm:col-span-2">
                              <p className="text-navy-500 mb-1">Notes</p>
                              <p className="text-navy-800 leading-relaxed">
                                {prospect.Notes}
                              </p>
                            </div>
                            {/* Follow-up scheduling */}
                            <div className="sm:col-span-2 border-t border-navy-200 pt-3">
                              <div className="flex flex-wrap items-center gap-3">
                                <div>
                                  <p className="text-navy-500 text-xs mb-1">
                                    Last Contact
                                  </p>
                                  <p className="text-navy-800 text-sm font-medium">
                                    {prospect.Last_Contact
                                      ? formatDate(prospect.Last_Contact)
                                      : "Never"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-navy-500 text-xs mb-1">
                                    Next Follow-up
                                  </p>
                                  <p className="text-navy-800 text-sm font-medium">
                                    {prospect.Next_Followup
                                      ? formatDate(prospect.Next_Followup)
                                      : "Not scheduled"}
                                  </p>
                                </div>
                                <div className="flex items-end gap-2 ml-auto">
                                  <div>
                                    <label className="text-navy-500 text-xs block mb-1">
                                      Schedule Follow-up
                                    </label>
                                    <input
                                      type="date"
                                      value={followupDate[prospect.Name] || ""}
                                      min={todayStr()}
                                      onChange={(e) =>
                                        setFollowupDate((prev) => ({
                                          ...prev,
                                          [prospect.Name]: e.target.value,
                                        }))
                                      }
                                      onClick={(e) => e.stopPropagation()}
                                      className="border border-navy-200 rounded-md px-2 py-1 text-sm text-navy-800 bg-white"
                                    />
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleScheduleFollowup(
                                        prospect.Name,
                                        followupDate[prospect.Name] || ""
                                      );
                                    }}
                                    disabled={!followupDate[prospect.Name]}
                                    className="px-3 py-1.5 rounded-lg bg-navy-900 text-white text-xs font-medium hover:bg-navy-800 transition-colors disabled:opacity-40"
                                  >
                                    Set
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="sm:col-span-2 flex items-center gap-3 text-xs">
                              <span className="text-navy-500">
                                Google Rating:{" "}
                                <span className="font-medium text-navy-800">
                                  {prospect.Rating}/5
                                </span>
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded-full font-medium md:hidden ${
                                  priorityColors[prospect.Priority] ||
                                  "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {prospect.Priority} Priority
                              </span>
                              <span className="text-navy-500 lg:hidden">
                                Score:{" "}
                                <span className="font-medium text-navy-800">
                                  {prospect.Score}
                                </span>
                              </span>
                              <Link
                                href={`/admin/proposal?prospect=${encodeURIComponent(prospect.Name)}`}
                                className="ml-auto px-3 py-1 rounded-full bg-navy-900 text-white text-xs font-medium hover:bg-navy-800 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Generate Proposal
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
