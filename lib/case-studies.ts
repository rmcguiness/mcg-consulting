/**
 * Case studies data — single source of truth for all case study content.
 * Each entry represents a fictional but realistic client engagement
 * targeting Florida Keys tourism businesses.
 */

/** Represents a single key metric displayed as a stat card. */
export interface CaseStudyMetric {
  value: string;
  label: string;
  color: string;
}

/** Before/after comparison item for the case study narrative. */
export interface BeforeAfter {
  before: string;
  after: string;
}

/** Complete case study data structure. */
export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  timeline: string;
  heroMetric: string;
  heroMetricColor: string;
  tags: string[];
  /** Icon name from react-icons (resolved at component level) */
  iconName: 'trending-up' | 'star' | 'home' | 'device-phone';
  problem: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  beforeAfter: BeforeAfter[];
  clientQuote: string;
  clientName: string;
  clientRole: string;
}

/** Total number of case studies available. */
export const CASE_STUDY_COUNT = 4;

/** All case studies indexed by slug for O(1) lookup. */
export const caseStudiesMap: Record<string, CaseStudy> = {};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'strip-strike-charters',
    title: 'Strip Strike Charters',
    subtitle: 'Fishing Charter — Website Rebuild + Booking Integration + Local SEO',
    category: 'Fishing Charters',
    description:
      'A Key West fishing charter captain was losing bookings to competitors with modern websites while relying on phone calls and word-of-mouth. We built a conversion-optimized site with integrated booking and dominated local search.',
    timeline: '6 weeks',
    heroMetric: '47% more direct bookings',
    heroMetricColor: 'text-green-700 bg-green-50',
    tags: ['Next.js', 'Booking Integration', 'Local SEO', 'Mobile-First'],
    iconName: 'trending-up',
    problem:
      "Strip Strike Charters had been running fishing trips out of Key West for over a decade, but their website looked like it was built in 2012 — because it was. No online booking, no mobile optimization, and buried on page 3 of Google. Captain Mike Torres watched as newer charter operations with slick websites and instant booking scooped up the customers who used to find him through the marina. Walk-in traffic at the dock was declining every season, and phone-only reservations meant missed calls during trips translated directly to lost revenue. The breaking point came when a competitor half his experience started outranking him for every local search term.",
    solution:
      "We built a modern, mobile-first website with professional photography, clear trip options (half-day, full-day, offshore, reef), and — critically — integrated online booking with real-time availability. Customers could see open dates, select their trip, and pay a deposit in under two minutes. We implemented a comprehensive local SEO strategy: optimized Google Business Profile, built citations across 40+ fishing and tourism directories, created location-specific content targeting \"Key West fishing charter,\" \"Key West deep sea fishing,\" and related long-tail keywords. We also added an automated review request system that texted customers after their trip, funneling happy anglers to Google Reviews.",
    results:
      "Within six months, Strip Strike Charters saw a 47% increase in direct bookings compared to the same period the previous year. The new site generated $28,400 in additional revenue — bookings that would have gone to competitors or never happened at all. The automated review funnel brought their Google rating from 4.2 to 4.8 stars with 89 new reviews. Most importantly, they claimed the #1 Google ranking for \"Key West fishing charter,\" the single most valuable search term in their market. Captain Mike now spends his time on the water instead of on the phone.",
    metrics: [
      { value: '47%', label: 'Increase in direct bookings', color: 'text-green-700 bg-green-50' },
      { value: '$28.4K', label: 'Additional revenue (6 months)', color: 'text-emerald-700 bg-emerald-50' },
      { value: '#1', label: 'Google ranking for "Key West fishing charter"', color: 'text-blue-700 bg-blue-50' },
    ],
    beforeAfter: [
      { before: 'Outdated 2012 website with no mobile optimization', after: 'Modern, mobile-first site with sub-2s load times' },
      { before: 'Phone-only bookings — missed calls = lost revenue', after: 'Online booking with real-time availability (24/7)' },
      { before: 'Page 3 on Google — invisible to searchers', after: '#1 ranking for "Key West fishing charter"' },
      { before: '4.2★ Google rating with 23 reviews', after: '4.8★ rating with 112 reviews (automated funnel)' },
    ],
    clientQuote:
      "I was skeptical about spending money on a website when I'd been getting by on referrals for years. But getting by isn't growing. Within two months, I was getting booking notifications on my phone while I was out on the water. That never happened before. The best part? I stopped losing customers to that guy down the dock with the fancy website — because now I've got the fancy website, and the fish to back it up.",
    clientName: 'Captain Mike Torres',
    clientRole: 'Owner, Strip Strike Charters',
  },
  {
    slug: 'sunset-sail-co',
    title: 'Sunset Sail Co.',
    subtitle: 'Sunset Cruises — Direct Booking Site + Commission Elimination',
    category: 'Sunset Cruises',
    description:
      'A popular Key West sunset cruise operator was paying 25-30% commission on every booking through TripAdvisor and Viator. We built a direct booking engine that now captures 62% of reservations commission-free.',
    timeline: '4 weeks',
    heroMetric: '62% direct bookings (was 0%)',
    heroMetricColor: 'text-green-700 bg-green-50',
    tags: ['Direct Booking', 'Email Capture', 'Review Funnel', 'Social Proof'],
    iconName: 'star',
    problem:
      "Sunset Sail Co. runs two catamaran sunset cruises daily out of Key West — a business that should be printing money during peak season. Instead, owner Sarah Chen was watching 25-30% of every ticket price disappear into TripAdvisor and Viator commissions. With tickets at $85/person and boats averaging 30 passengers, that's over $750 per sailing going to platform fees. She had no website of her own, no email list, and no way to take direct bookings. Every single customer came through a third-party platform, and if those platforms changed their algorithms or raised their rates, her business was at their mercy. She knew she needed to own her customer relationship, but didn't know where to start.",
    solution:
      "We built a stunning direct booking website showcasing professional sunset photography, customer testimonials, and a seamless booking flow with calendar availability and instant confirmation. Key to the strategy was an email capture system — every website visitor was offered a 10% early-bird discount in exchange for their email. This built a marketing list of 2,400+ subscribers in the first year. We implemented a post-cruise automated email sequence: thank-you message, photo gallery link, and a gentle nudge to leave a Google review. We kept the TripAdvisor and Viator listings active but updated them to drive traffic to the direct site with messaging like \"Book direct and save\" — turning the platforms from revenue drains into marketing channels.",
    results:
      "Within eight months, 62% of all bookings came through the direct website — up from literally zero. This shift saved Sunset Sail Co. approximately $18,000 per year in platform commissions, money that went straight to the bottom line. The automated review funnel generated 156 new Google reviews, pushing their rating to 4.9 stars and making their Google Business Profile the top result for \"Key West sunset cruise.\" The email list became their most valuable asset — a single \"last-minute availability\" email to the list could fill an empty sailing within hours.",
    metrics: [
      { value: '62%', label: 'Bookings now direct (was 0%)', color: 'text-green-700 bg-green-50' },
      { value: '$18K', label: 'Saved per year in commissions', color: 'text-emerald-700 bg-emerald-50' },
      { value: '4.9★', label: 'Google rating from review funnel', color: 'text-yellow-700 bg-yellow-50' },
    ],
    beforeAfter: [
      { before: '100% of bookings through TripAdvisor/Viator', after: '62% direct bookings, 38% platform (down from 100%)' },
      { before: 'Paying 25-30% commission on every ticket', after: 'Saving $18,000/year in platform fees' },
      { before: 'No customer email list or direct marketing', after: '2,400+ email subscribers for direct outreach' },
      { before: 'Scattered reviews across multiple platforms', after: '4.9★ Google rating with 156 new reviews' },
    ],
    clientQuote:
      "I used to joke that I was working for TripAdvisor, not myself. Thirty percent of every ticket — do the math on two full sailings a day, seven days a week in season. It's painful. Now when I see a booking come in through our own site, that's money that stays with us. The email list has been a game-changer too. Last Tuesday we had a cancellation for 12 seats on the sunset cruise — one email blast and we filled them all in 40 minutes. Try doing that through Viator.",
    clientName: 'Sarah Chen',
    clientRole: 'Owner, Sunset Sail Co.',
  },
  {
    slug: 'coral-bay-vacation-rentals',
    title: 'Coral Bay Vacation Rentals',
    subtitle: 'Vacation Rentals — Direct Booking Platform + Dynamic Pricing',
    category: 'Vacation Rentals',
    description:
      'A Marathon Keys vacation rental operator with 8 properties was paying $180+ per booking in Airbnb/VRBO fees. We built a direct booking platform that now captures 31% of stays and generated $41,200 in additional net revenue in year one.',
    timeline: '8 weeks',
    heroMetric: '$41.2K additional net revenue',
    heroMetricColor: 'text-green-700 bg-green-50',
    tags: ['Direct Booking', 'Dynamic Pricing', 'Loyalty System', 'Calendar Sync'],
    iconName: 'home',
    problem:
      "Coral Bay Vacation Rentals manages eight waterfront properties across Marathon and the Middle Keys — everything from a cozy studio to a four-bedroom house with a private dock. Owner David and Maria Ruiz had built the portfolio over six years, but every booking came through Airbnb or VRBO. The platform fees averaged $180 per booking, and for their most popular properties during peak season, they were paying over $300 per reservation in combined guest and host fees. With an average of 280 bookings per year across all properties, that's over $50,000 annually going to platforms. Repeat guests — and they had many — were paying platform fees every single time even though they already knew and trusted Coral Bay. The Ruizes had no way to offer direct booking, no loyalty program for returning guests, and no control over their pricing strategy beyond what the platforms allowed.",
    solution:
      "We built a comprehensive direct booking website with individual property pages featuring professional photography, virtual tours, amenity details, and neighborhood guides. The booking engine included real-time calendar sync with Airbnb and VRBO (so no double-bookings), secure payment processing, and automated confirmation emails. We implemented a dynamic pricing display that showed guests the savings of booking direct — typically 12-15% less than platform prices, while still netting the Ruizes more per booking. A loyalty discount system gave returning guests an additional 5% off their next stay when booking direct, incentivizing the switch. We also built an automated pre-arrival email sequence with local recommendations, check-in instructions, and a post-stay review request.",
    results:
      "In the first year, 31% of all stays were booked directly through the new website — a number that continues to climb as the email list and repeat guest base grows. At an average savings of $180 per booking in platform fees, plus the higher net revenue from direct pricing, Coral Bay generated $41,200 in additional net revenue in year one. Repeat guest direct booking rate hit 58%, proving that once guests experienced the direct booking flow, they rarely went back to the platforms. The loyalty program now has 340+ enrolled guests, creating a reliable base of future bookings the Ruizes can count on every season.",
    metrics: [
      { value: '31%', label: 'Of stays now booked direct', color: 'text-green-700 bg-green-50' },
      { value: '$41.2K', label: 'Additional net revenue (year 1)', color: 'text-emerald-700 bg-emerald-50' },
      { value: '58%', label: 'Repeat guests book direct', color: 'text-blue-700 bg-blue-50' },
    ],
    beforeAfter: [
      { before: '100% of bookings through Airbnb/VRBO', after: '31% direct bookings (and growing)' },
      { before: 'Paying avg. $180/booking in platform fees', after: 'Direct bookings = $0 platform fees' },
      { before: 'No loyalty program or repeat guest incentives', after: '340+ enrolled loyalty members' },
      { before: 'No control over guest communication pre-arrival', after: 'Automated email sequence with local guides' },
    ],
    clientQuote:
      "We love our guests, and a lot of them come back year after year. It always bothered me that they had to go through Airbnb and pay those service fees every time, and we had to pay our host fees on top of it. Now our repeat guests bookmark our site and book direct — they save money, we make more, everybody wins. The loyalty discount was Maria's idea, and it's been huge. We've got guests who've already booked their third direct stay. That's a relationship Airbnb can't touch.",
    clientName: 'David Ruiz',
    clientRole: 'Co-Owner, Coral Bay Vacation Rentals',
  },
  {
    slug: 'island-hopper-snorkeling',
    title: 'Island Hopper Snorkeling Tours',
    subtitle: 'Snorkeling & Eco-Tours — Mobile Rebuild + Spanish Language + Speed',
    category: 'Snorkeling & Eco-Tours',
    description:
      'A Key Largo snorkeling operator was losing 83% of mobile visitors to a broken, slow-loading site with no Spanish language option — in a market where 28% of tourists speak Spanish. We rebuilt everything mobile-first.',
    timeline: '5 weeks',
    heroMetric: '83% less mobile bounce',
    heroMetricColor: 'text-blue-700 bg-blue-50',
    tags: ['Mobile-First', 'Speed Optimization', 'Spanish/English', 'SEO'],
    iconName: 'device-phone',
    problem:
      "Island Hopper Snorkeling Tours operates daily reef and eco-tours out of Key Largo — prime territory at the doorstep of John Pennekamp Coral Reef State Park. Owner Jorge Delgado knew his mobile site was a disaster: images wouldn't load, the booking button was hidden below the fold, and the page took over 8 seconds to render on a phone. With 74% of his traffic coming from mobile (tourists searching on their phones), he was essentially turning away three out of four potential customers. Adding insult to injury, Key Largo draws significant tourist traffic from Latin America and Spanish-speaking domestic tourists — roughly 28% of his potential market — but his site was English-only. Competitors with bilingual sites were capturing that audience while Jorge's Spanish-speaking customers had to struggle through or give up entirely.",
    solution:
      "We did a complete mobile-first rebuild focused on three pillars: speed, accessibility, and bilingual support. The new site loads in under 1.5 seconds on mobile (down from 8+ seconds) through aggressive image optimization, lazy loading, and edge caching. We redesigned the entire UX for thumb-friendly navigation with the booking CTA always visible. The Spanish language toggle was implemented as a seamless experience — not a separate site, but an integrated toggle that remembers the user's preference. All content, including tour descriptions, safety information, booking flow, and confirmation emails, was professionally translated. We also optimized for bilingual SEO, targeting both \"Key Largo snorkeling\" and \"snorkel en Key Largo\" with dedicated content.",
    results:
      "The results were dramatic. Mobile bounce rate dropped 83% — from 71% to just 12%. Conversions from Spanish-speaking visitors increased 28%, representing a previously untapped revenue stream. The site achieved a 98/100 Google PageSpeed score (mobile), up from 23/100. Within three months, Island Hopper climbed to the #2 Google ranking for \"Key Largo snorkeling\" and #1 for \"snorkel en Key Largo.\" Overall booking conversion rate across all visitors doubled, with mobile conversion specifically increasing by 3.4× compared to the old site.",
    metrics: [
      { value: '83%', label: 'Reduction in mobile bounce rate', color: 'text-blue-700 bg-blue-50' },
      { value: '+28%', label: 'Conversions from Spanish-speaking tourists', color: 'text-green-700 bg-green-50' },
      { value: '#2', label: 'Google ranking for "Key Largo snorkeling"', color: 'text-purple-700 bg-purple-50' },
    ],
    beforeAfter: [
      { before: '8+ second mobile load time', after: 'Under 1.5 seconds (98/100 PageSpeed)' },
      { before: '71% mobile bounce rate', after: '12% mobile bounce rate (83% reduction)' },
      { before: 'English-only site in a bilingual market', after: 'Seamless Spanish/English toggle' },
      { before: 'Not ranking for any local search terms', after: '#2 for "Key Largo snorkeling"' },
    ],
    clientQuote:
      "I'm Cuban-American — I speak Spanish every day — and my own website didn't. That's embarrassing when you think about it. We were leaving money on the table with every Spanish-speaking family that landed on our site and bounced. Now I watch the analytics and see people toggle to Spanish, browse the tour options, and book — all in under three minutes on their phone. Our mobile bookings have more than tripled. I should have done this two years ago.",
    clientName: 'Jorge Delgado',
    clientRole: 'Owner, Island Hopper Snorkeling Tours',
  },
];

// Build the lookup map
caseStudies.forEach((cs) => {
  caseStudiesMap[cs.slug] = cs;
});

/**
 * Retrieve a case study by its URL slug.
 * @param slug - The URL-friendly identifier for the case study
 * @returns The matching CaseStudy or undefined if not found
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesMap[slug];
}

/**
 * Get all case study slugs (useful for generateStaticParams).
 * @returns Array of slug strings
 */
export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
