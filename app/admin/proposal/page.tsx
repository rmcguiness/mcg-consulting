"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import ProposalPDF, {
  ProposalData,
} from "@/components/admin/ProposalPDF";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const BlobProvider = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.BlobProvider),
  { ssr: false }
);

interface Prospect {
  Name: string;
  Category: string;
  Deal_Value: string;
  Notes: string;
}

const PROJECT_TYPES = [
  "Website Redesign",
  "New Website",
  "Maintenance",
  "SEO",
] as const;

const PAYMENT_OPTIONS = [
  { value: "50/50", label: "50% Upfront / 50% Completion" },
  { value: "100-upfront", label: "100% Upfront" },
] as const;

function todayISO() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseDealPrice(deal: string): number {
  const match = deal.match(/\$([\d,]+)/);
  return match ? parseInt(match[1].replace(",", "")) : 5000;
}

function ProposalGeneratorInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const prospectName = searchParams.get("prospect") || "";

  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const [form, setForm] = useState({
    clientName: "",
    businessName: "",
    projectType: "Website Redesign" as string,
    scope: "",
    price: 5000,
    timeline: "4-6 weeks from project kickoff",
    paymentTerms: "50/50" as string,
  });

  // Load prospects for pre-fill
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
      .catch(console.error);
  }, [router]);

  // Pre-fill when prospect data loads
  useEffect(() => {
    if (!prospectName || prospects.length === 0) return;
    const match = prospects.find(
      (p) => p.Name.toLowerCase() === prospectName.toLowerCase()
    );
    if (!match) return;

    setForm((prev) => ({
      ...prev,
      clientName: match.Name,
      businessName: match.Name,
      scope: buildDefaultScope(match),
      price: parseDealPrice(match.Deal_Value),
    }));
  }, [prospectName, prospects]);

  const proposalData: ProposalData = useMemo(
    () => ({
      ...form,
      date: todayISO(),
    }),
    [form]
  );

  function buildDefaultScope(p: Prospect): string {
    const type = p.Category || "business";
    return (
      `Complete website redesign for ${p.Name}, a ${type.toLowerCase()} based in the Florida Keys. ` +
      `The project includes a modern, mobile-first design with improved user experience, ` +
      `online booking integration, local SEO optimization, and performance improvements ` +
      `to drive more customers and increase conversions.`
    );
  }

  function updateField(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const inputClass =
    "w-full px-3 py-2 rounded-lg border border-navy-200 bg-white text-navy-900 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-navy-700 mb-1";

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Header */}
      <header className="bg-navy-900 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">MCG Admin</h1>
          <Link
            href="/admin"
            className="text-sm text-navy-300 hover:text-white transition-colors"
          >
            &larr; Back to Leads
          </Link>
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
            className="text-sm text-navy-300 hover:text-white transition-colors"
          >
            Pipeline
          </Link>
          <span className="text-sm font-medium text-white border-b-2 border-white pb-1">
            Proposal
          </span>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-6">
          Generate Proposal
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="card-ios space-y-5">
            {/* Client / Business */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Client Name</label>
                <input
                  className={inputClass}
                  value={form.clientName}
                  onChange={(e) => updateField("clientName", e.target.value)}
                  placeholder="Contact name"
                />
              </div>
              <div>
                <label className={labelClass}>Business Name</label>
                <input
                  className={inputClass}
                  value={form.businessName}
                  onChange={(e) => updateField("businessName", e.target.value)}
                  placeholder="Business name"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className={labelClass}>Project Type</label>
              <select
                className={inputClass}
                value={form.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
              >
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Scope */}
            <div>
              <label className={labelClass}>Scope of Work</label>
              <textarea
                className={inputClass + " min-h-[120px] resize-y"}
                value={form.scope}
                onChange={(e) => updateField("scope", e.target.value)}
                placeholder="Describe the project scope..."
                rows={5}
              />
            </div>

            {/* Price + Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Price ($)</label>
                <input
                  className={inputClass}
                  type="number"
                  min={0}
                  step={500}
                  value={form.price}
                  onChange={(e) =>
                    updateField("price", parseInt(e.target.value) || 0)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Timeline</label>
                <input
                  className={inputClass}
                  value={form.timeline}
                  onChange={(e) => updateField("timeline", e.target.value)}
                  placeholder="e.g. 4-6 weeks"
                />
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <label className={labelClass}>Payment Terms</label>
              <select
                className={inputClass}
                value={form.paymentTerms}
                onChange={(e) => updateField("paymentTerms", e.target.value)}
              >
                {PAYMENT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="btn-ios btn-secondary text-sm"
              >
                {showPreview ? "Hide Preview" : "Preview PDF"}
              </button>
              <BlobProvider document={<ProposalPDF data={proposalData} />}>
                {({ url, loading }) => (
                  <a
                    href={url || "#"}
                    download={`MCG-Proposal-${form.businessName || "Client"}.pdf`}
                    className={`btn-ios btn-primary text-sm inline-block ${
                      loading ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    {loading ? "Generating..." : "Download PDF"}
                  </a>
                )}
              </BlobProvider>
            </div>
          </div>

          {/* Preview */}
          <div className="card-ios !p-0 overflow-hidden">
            {showPreview ? (
              <PDFViewer
                width="100%"
                height={700}
                showToolbar={false}
                style={{ border: "none" }}
              >
                <ProposalPDF data={proposalData} />
              </PDFViewer>
            ) : (
              <div className="flex items-center justify-center h-[700px] text-navy-400 text-sm">
                Click &quot;Preview PDF&quot; to see the proposal
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProposalGenerator() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-50 flex items-center justify-center"><p className="text-navy-500">Loading...</p></div>}>
      <ProposalGeneratorInner />
    </Suspense>
  );
}
