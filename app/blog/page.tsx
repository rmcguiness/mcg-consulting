import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiArrowRight, HiNewspaper } from "react-icons/hi";

const posts = [
  {
    slug: "losing-customers-to-google",
    title: "Why Florida Keys Businesses Are Losing Customers to Google Before They Even Know It",
    excerpt:
      "You show up every day and run a great operation. But between a tourist opening Google and walking through your door, something's going wrong. Here's what it actually is.",
    category: "SEO & Visibility",
    readTime: "5 min read",
    date: "March 2026",
    tags: ["SEO", "Local Search", "Florida Keys"],
  },
  {
    slug: "5-things-tourism-website-must-have",
    title: "The 5 Things Every Florida Keys Tourism Business Website Must Have in 2026",
    excerpt:
      "A practical checklist for charter boats, restaurants, dive shops, and watersports operators. Run your site against this list — most businesses fail at least two.",
    category: "Website Strategy",
    readTime: "4 min read",
    date: "March 2026",
    tags: ["Checklist", "Mobile", "Booking Systems", "Reviews"],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-3">
                Insights
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                Blog
              </h1>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Practical web strategy for Florida Keys small businesses. No jargon — just what actually works.
              </p>
            </div>

            {/* Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-ios hover:shadow-ios-lg group transition-all duration-300 flex flex-col"
                >
                  {/* Category + Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center">
                        <HiNewspaper className="w-5 h-5 text-navy-900" />
                      </div>
                      <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <HiArrowRight className="w-5 h-5 text-navy-400 group-hover:text-navy-900 group-hover:translate-x-0.5 transition-transform" />
                  </div>

                  {/* Title + Excerpt */}
                  <h2 className="text-lg font-bold text-navy-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-navy-100 flex items-center justify-between">
                      <span className="text-xs text-navy-500">{post.date}</span>
                      <span className="text-xs text-navy-500">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-navy-600 mb-4">
                Want a free audit of your current website?
              </p>
              <Link
                href="/contact"
                className="btn-ios btn-navy inline-flex items-center gap-2"
              >
                Get in touch
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
