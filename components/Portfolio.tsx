"use client";

import {
  HiExternalLink,
  HiCode,
  HiShoppingBag,
  HiFire,
  HiChevronLeft,
  HiChevronRight,
  HiHome,
  HiHeart,
  HiChartBar,
} from "react-icons/hi";
import { HiArrowUpRight, HiAcademicCap } from "react-icons/hi2";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const portfolioItems = [
  {
    title: "The Coastal Bun",
    description:
      "A full-stack food truck website for an Asian fusion bao bun business in the Florida Keys — mobile-first design, Square online ordering, location tracker, and SEO-optimized for local tourism search.",
    url: "https://costalbun.shop",
    icon: HiFire,
    category: "Restaurant & Food Service",
    image: "coastal-buns",
    tech: "Next.js 14, Tailwind CSS, Square Payments",
  },
  {
    title: "Price Tracker",
    description:
      "A grocery price comparison SaaS app with a mobile companion. Compare prices across stores, track price history, and get alerts on deals — built with Next.js and Expo.",
    url: "https://price-tracker-lyart.vercel.app",
    icon: HiChartBar,
    category: "SaaS / Consumer App",
    image: "price-tracker",
    tech: "Next.js 14, Expo, PostgreSQL, Clerk, Stripe",
  },
  {
    title: "McCaffery HVAC",
    description:
      "Business website for a local HVAC company featuring service breakdowns, a contact form, and a clean professional design that builds trust with homeowners.",
    url: "https://mccaffery-hvac.vercel.app/",
    icon: HiHome,
    category: "Local Business / Service",
    image: "mccaffery-hvac",
    tech: "Next.js, TypeScript, Tailwind CSS",
  },
  {
    title: "Compassionate Care",
    description:
      "An accessibility-first website for an autism home and community care practice — ARIA-compliant, SEO-optimized for local care searches, with integrated lead capture.",
    url: "",
    icon: HiHeart,
    category: "Healthcare",
    image: "autism-care",
    tech: "HTML5, CSS3, Vanilla JS, Formspree",
  },
  {
    title: "FL Keys Flight Academy",
    description:
      "Website for a Florida Keys flight academy featuring course information, instructor bios, and enrollment — designed to convert prospective student pilots.",
    url: "",
    icon: HiAcademicCap,
    category: "Education & Aviation",
    image: "flight-academy",
    tech: "Next.js, TypeScript, Tailwind CSS",
  },
  {
    title: "Country Farms",
    description:
      "A modern convenience store website for a local grocery store, featuring a bold design, store showcase, and SEO optimization.",
    url: "https://country-farms-convenience.vercel.app/",
    icon: HiShoppingBag,
    category: "Convenience Store",
    image: "country-farms",
    tech: "Next.js, Tailwind CSS",
  },
  {
    title: "NextPlayground",
    description:
      "A cutting-edge Next.js playground featuring interactive examples, authentication with Supabase, and modern React patterns including Suspense and Promise-based modals.",
    url: "https://next-playground-rcm.vercel.app/",
    icon: HiCode,
    category: "Web Development",
    image: "next-playground",
    tech: "Next.js, Supabase, React",
  },
  {
    title: "MKR Store",
    description:
      "A sleek e-commerce platform showcasing products with a modern design, shopping cart functionality, and best-selling products section.",
    url: "https://mkr-ecommerce.vercel.app/",
    icon: HiShoppingBag,
    category: "E-Commerce",
    image: "mkr-store",
    tech: "Next.js, Tailwind CSS",
  },
];

interface PortfolioProps {
  showViewMore?: boolean;
}

export default function Portfolio({ showViewMore = false }: PortfolioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedFrames, setLoadedFrames] = useState<Set<number>>(new Set());
  const [errorFrames, setErrorFrames] = useState<Set<number>>(new Set());
  const [retryCounts, setRetryCounts] = useState<Map<number, number>>(
    new Map(),
  );
  const timeoutRefs = useRef<Map<number, NodeJS.Timeout>>(new Map());
  const statusRefs = useRef<Map<number, "loading" | "loaded" | "error">>(
    new Map(),
  );
  const iframeRefs = useRef<Map<number, HTMLIFrameElement | null>>(new Map());
  const handleIframeErrorRef =
    useRef<(index: number, shouldRetry: boolean) => void>();
  const maxRetries = 3;

  // Touch/swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length,
    );
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Reset touch values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleIframeLoad = (index: number) => {
    // Clear timeout if it exists
    const timeout = timeoutRefs.current.get(index);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(index);
    }

    // Verify iframe actually loaded by checking if it has content
    const iframe = iframeRefs.current.get(index);
    if (iframe) {
      try {
        // Try to access iframe content to verify it loaded
        // This will throw if blocked by CORS/X-Frame-Options
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          statusRefs.current.set(index, "loaded");
          setLoadedFrames((prev) => new Set(prev).add(index));
          setErrorFrames((prev) => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
          return;
        }
      } catch (e) {
        // CORS/X-Frame-Options blocked - this is expected for cross-origin
        // If we can't access the document, assume it loaded if onLoad fired
        statusRefs.current.set(index, "loaded");
        setLoadedFrames((prev) => new Set(prev).add(index));
        setErrorFrames((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
        return;
      }
    }

    // Fallback: if onLoad fired, assume it's loaded
    statusRefs.current.set(index, "loaded");
    setLoadedFrames((prev) => new Set(prev).add(index));
    setErrorFrames((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleIframeError = useCallback(
    (index: number, shouldRetry: boolean = true) => {
      const timeout = timeoutRefs.current.get(index);
      if (timeout) {
        clearTimeout(timeout);
        timeoutRefs.current.delete(index);
      }

      const currentRetries = retryCounts.get(index) || 0;

      if (shouldRetry && currentRetries < maxRetries) {
        // Retry with exponential backoff
        const delay = Math.min(1000 * Math.pow(2, currentRetries), 5000);
        setRetryCounts((prev) => {
          const newMap = new Map(prev);
          newMap.set(index, currentRetries + 1);
          return newMap;
        });

        setTimeout(() => {
          const iframe = iframeRefs.current.get(index);
          if (iframe) {
            // Reset status and reload
            statusRefs.current.set(index, "loading");
            setErrorFrames((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
            setLoadedFrames((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });

            // Force reload by removing and re-adding src
            const url = iframe.src;
            iframe.src = "";
            setTimeout(() => {
              if (iframe) {
                iframe.src = url;
                // Set up new timeout
                const newTimeout = setTimeout(() => {
                  if (
                    statusRefs.current.get(index) === "loading" &&
                    handleIframeErrorRef.current
                  ) {
                    handleIframeErrorRef.current(index, false);
                  }
                }, 10000);
                timeoutRefs.current.set(index, newTimeout);
              }
            }, 100);
          }
        }, delay);
      } else {
        // Max retries reached or shouldRetry is false
        statusRefs.current.set(index, "error");
        setErrorFrames((prev) => new Set(prev).add(index));
      }
    },
    [retryCounts, maxRetries],
  );

  // Store the latest version of handleIframeError in ref for recursive calls
  handleIframeErrorRef.current = handleIframeError;

  const retryIframeLoad = (index: number) => {
    const iframe = iframeRefs.current.get(index);
    if (iframe) {
      // Reset retry count and error state
      setRetryCounts((prev) => {
        const newMap = new Map(prev);
        newMap.set(index, 0);
        return newMap;
      });
      setErrorFrames((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
      setLoadedFrames((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });

      statusRefs.current.set(index, "loading");

      // Force reload
      const url = iframe.src;
      iframe.src = "";
      setTimeout(() => {
        if (iframe) {
          iframe.src = url;
          // Set up timeout
          const timeout = setTimeout(() => {
            if (
              statusRefs.current.get(index) === "loading" &&
              handleIframeErrorRef.current
            ) {
              handleIframeErrorRef.current(index, false);
            }
          }, 10000);
          timeoutRefs.current.set(index, timeout);
        }
      }, 100);
    }
  };

  useEffect(() => {
    // Initialize status refs
    portfolioItems.forEach((_, index) => {
      statusRefs.current.set(index, "loading");
    });

    // Set up timeouts for each iframe (10 seconds, shorter for faster feedback)
    portfolioItems.forEach((_, index) => {
      const timeout = setTimeout(() => {
        const status = statusRefs.current.get(index);
        if (status === "loading" && handleIframeErrorRef.current) {
          handleIframeErrorRef.current(index, true);
        }
      }, 10000);
      timeoutRefs.current.set(index, timeout);
    });

    // Cleanup timeouts on unmount
    const timeouts = timeoutRefs.current;
    const statuses = statusRefs.current;
    const iframes = iframeRefs.current;
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      timeouts.clear();
      statuses.clear();
      iframes.clear();
    };
  }, []);

  // Preload iframes based on view mode
  useEffect(() => {
    if (showViewMore) {
      // Carousel view: preload adjacent iframes when current index changes
      const indicesToPreload = [
        currentIndex,
        (currentIndex + 1) % portfolioItems.length,
        (currentIndex - 1 + portfolioItems.length) % portfolioItems.length,
      ];

      indicesToPreload.forEach((index) => {
        const iframe = iframeRefs.current.get(index);
        const status = statusRefs.current.get(index);

        // If iframe exists but hasn't loaded and isn't in error state, ensure it's loading
        if (iframe && status === "loading" && !iframe.src) {
          iframe.src = portfolioItems[index].url;
        }
      });
    } else {
      // Grid view: preload all iframes
      portfolioItems.forEach((_, index) => {
        const iframe = iframeRefs.current.get(index);
        const status = statusRefs.current.get(index);

        // If iframe exists but hasn't loaded and isn't in error state, ensure it's loading
        if (iframe && status === "loading" && !iframe.src) {
          iframe.src = portfolioItems[index].url;
        }
      });
    }
  }, [currentIndex, showViewMore]);

  return (
    <section
      id="portfolio"
      className="section-padding bg-gradient-to-br from-white to-navy-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 max-w-2xl mx-auto">
            Explore some of our recent work and see the results we deliver
          </p>
        </div>

        {showViewMore ? (
          // Carousel view for home page with Rolodex effect
          <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-ios hover:shadow-ios-lg active:scale-95 flex items-center justify-center text-navy-900 hover:bg-navy-50 transition-all duration-200 group touch-manipulation"
              aria-label="Previous portfolio item"
            >
              <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-ios hover:shadow-ios-lg active:scale-95 flex items-center justify-center text-navy-900 hover:bg-navy-50 transition-all duration-200 group touch-manipulation"
              aria-label="Next portfolio item"
            >
              <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
            </button>

            {/* Carousel Container - Rolodex style */}
            <div
              ref={carouselRef}
              className="relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px]"
              style={{ perspective: "2000px" }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {portfolioItems.map((item, index) => {
                const IconComponent = item.icon;
                const isLoaded = loadedFrames.has(index);
                const hasError = errorFrames.has(index);

                // Calculate position relative to current index
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);

                // Only render cards within ±2 positions of current
                if (absOffset > 2) return null;

                // Calculate transforms for Rolodex effect
                const isActive = offset === 0;
                const translateX = offset * 45; // Percentage shift
                const translateZ = isActive ? 0 : -150 - absOffset * 50; // Depth
                const scale = isActive ? 1 : 0.85 - absOffset * 0.1;
                const opacity = isActive ? 1 : 0.5 - absOffset * 0.15;
                const rotateY = offset * 8; // Slight rotation for depth
                const zIndex = 10 - absOffset;

                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    onClick={() => {
                      if (!isActive && absOffset === 1) {
                        setCurrentIndex(index);
                      }
                    }}
                  >
                    <div className="h-full flex items-center justify-center px-4 sm:px-8 md:px-12">
                      <div
                        className={`card-ios h-auto hover:shadow-ios ${isActive ? "cursor-default" : "cursor-pointer"} transition-all duration-300 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto touch-manipulation w-full`}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-navy-900 transform transition-transform duration-300" />
                            <span className="hidden sm:flex text-xs sm:text-sm font-medium text-navy-600 bg-navy-50 px-2 sm:px-3 py-1 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isActive) e.preventDefault();
                            }}
                            className={`text-navy-400 hover:text-navy-900 transition-colors ${!isActive ? "pointer-events-none" : ""}`}
                          >
                            <HiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                        </div>

                        <div className="preview-container bg-gradient-to-br from-navy-100 to-navy-200 rounded-ios mb-4 border border-navy-200">
                          {!isLoaded && !hasError && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/90 rounded-ios">
                              <div className="text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-navy-300 border-t-navy-900 rounded-full animate-spin mx-auto mb-2"></div>
                                <p className="text-xs sm:text-sm text-navy-600">
                                  Loading preview...
                                </p>
                              </div>
                            </div>
                          )}
                          {hasError && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/90 rounded-ios">
                              <div className="text-center p-3 sm:p-4">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                  <HiExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-navy-600" />
                                </div>
                                <p className="text-xs sm:text-sm text-navy-600 mb-2">
                                  Preview unavailable
                                </p>
                                {isActive && (
                                  <div className="flex flex-col gap-2 items-center">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        retryIframeLoad(index);
                                      }}
                                      className="text-xs sm:text-sm text-navy-900 font-medium hover:underline px-2 sm:px-3 py-1 rounded-md hover:bg-navy-50 transition-colors"
                                    >
                                      Retry loading
                                    </button>
                                    <a
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs sm:text-sm text-navy-500 hover:text-navy-900 font-medium hover:underline"
                                    >
                                      Visit site directly →
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          {item.url ? (
                            <iframe
                              ref={(el) => {
                                if (el) {
                                  iframeRefs.current.set(index, el);
                                }
                              }}
                              src={item.url}
                              className={`desktop-preview ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                              onLoad={() => handleIframeLoad(index)}
                              onError={() => handleIframeError(index, true)}
                              title={`${item.title} preview`}
                              loading={absOffset <= 1 ? "eager" : "lazy"}
                              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                              style={{ pointerEvents: "none" }}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-navy-50 rounded-ios">
                              <div className="text-center p-4">
                                <IconComponent className="w-12 h-12 text-navy-300 mx-auto mb-2" />
                                <p className="text-sm text-navy-500">Client project</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
                          {item.title}
                        </h3>
                        <div className="mb-1 sm:hidden">
                          <span className="text-xs font-medium text-navy-600 bg-navy-50 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>

                        <p className="text-navy-600 leading-relaxed text-xs sm:text-sm">
                          {item.description}
                        </p>

                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-navy-100">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (!isActive) e.preventDefault();
                            }}
                            className={`text-xs sm:text-sm text-navy-500 hover:text-navy-900 transition-colors flex items-center gap-2 ${!isActive ? "pointer-events-none" : ""}`}
                          >
                            Visit Site
                            <HiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 touch-manipulation active:scale-110 ${
                    index === currentIndex
                      ? "bg-navy-900 w-8"
                      : "bg-navy-300 w-2 md:hover:bg-navy-500"
                  }`}
                  aria-label={`Go to portfolio item ${index + 1}`}
                />
              ))}
            </div>

            {showViewMore && (
              <div className="text-center mt-10">
                <Link
                  href="/portfolio"
                  className="btn-ios btn-secondary inline-flex items-center gap-2"
                >
                  View All Projects
                  <HiArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        ) : (
          // Grid view for dedicated portfolio page
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => {
              const IconComponent = item.icon;
              const isLoaded = loadedFrames.has(index);
              const hasError = errorFrames.has(index);
              return (
                <div
                  key={index}
                  className="card-ios h-full hover:shadow-ios-lg group transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-10 h-10 text-navy-900 transform transition-transform duration-300" />
                      <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-navy-400 hover:text-navy-900 transition-colors"
                    >
                      <HiExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="preview-container bg-gradient-to-br from-navy-100 to-navy-200 rounded-ios mb-4 border border-navy-200">
                    {!isLoaded && !hasError && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/90 rounded-ios">
                        <div className="text-center">
                          <div className="w-12 h-12 border-4 border-navy-300 border-t-navy-900 rounded-full animate-spin mx-auto mb-2"></div>
                          <p className="text-sm text-navy-600">
                            Loading preview...
                          </p>
                        </div>
                      </div>
                    )}
                    {hasError && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/90 rounded-ios">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <HiExternalLink className="w-8 h-8 text-navy-600" />
                          </div>
                          <p className="text-sm text-navy-600 mb-2">
                            Preview unavailable
                          </p>
                          <div className="flex flex-col gap-2 items-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                retryIframeLoad(index);
                              }}
                              className="text-sm text-navy-900 font-medium hover:underline px-3 py-1 rounded-md hover:bg-navy-50 transition-colors"
                            >
                              Retry loading
                            </button>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-navy-500 hover:text-navy-900 font-medium hover:underline"
                            >
                              Visit site directly →
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.url ? (
                      <iframe
                        ref={(el) => {
                          if (el) {
                            iframeRefs.current.set(index, el);
                          }
                        }}
                        src={item.url}
                        className={`desktop-preview ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                        onLoad={() => handleIframeLoad(index)}
                        onError={() => handleIframeError(index, true)}
                        title={`${item.title} preview`}
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                        style={{ pointerEvents: "none" }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-navy-50 rounded-ios">
                        <div className="text-center p-4">
                          <IconComponent className="w-12 h-12 text-navy-300 mx-auto mb-2" />
                          <p className="text-sm text-navy-500">Client project</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-navy-600 leading-relaxed text-sm mb-4 flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-navy-100">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-navy-500 group-hover:text-navy-900 transition-colors flex items-center gap-2"
                      >
                        Visit Site
                        <HiExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-sm text-navy-400">
                        Private client project
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
