import { HiLocationMarker, HiTrendingUp, HiDeviceMobile } from "react-icons/hi";

const stats = [
  {
    icon: HiLocationMarker,
    label: "Keys-Focused Agency",
    detail: "We know the market because we work in it",
  },
  {
    icon: HiTrendingUp,
    label: "Average Site ROI in 6 Months",
    detail: "Our clients see measurable returns fast",
  },
  {
    icon: HiDeviceMobile,
    label: "Mobile-First Design",
    detail: "Built for the 70% browsing on their phones",
  },
];

export default function SocialProof() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="text-center px-6 py-8 rounded-2xl bg-navy-50"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-navy-600">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
