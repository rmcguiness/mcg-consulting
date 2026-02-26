"use client";

import { Fragment, useEffect, useState } from "react";
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
}

const statusColors: Record<string, string> = {
  "To Contact": "bg-blue-100 text-blue-800",
  "In Progress": "bg-yellow-100 text-yellow-800",
  "Reached Out": "bg-purple-100 text-purple-800",
  "Discovery": "bg-indigo-100 text-indigo-800",
  "Proposal Sent": "bg-orange-100 text-orange-800",
  Won: "bg-green-100 text-green-800",
  Lost: "bg-red-100 text-red-800",
};

const priorityColors: Record<string, string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-gray-100 text-gray-600",
};

export default function AdminPortal() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
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
  }, [router]);

  function handleLogout() {
    document.cookie = "admin_auth=; path=/; max-age=0";
    router.push("/admin/login");
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

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
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
