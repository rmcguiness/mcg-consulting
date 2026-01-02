'use client';

import { HiExternalLink, HiCode, HiShoppingBag, HiFire, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';

const portfolioItems = [
  {
    title: "NextPlayground",
    description: "A cutting-edge Next.js playground featuring interactive examples, authentication with Supabase, and modern React patterns including Suspense and Promise-based modals.",
    url: "https://next-playground-rcm.vercel.app/",
    icon: HiCode,
    category: "Web Development",
    image: "next-playground",
  },
  {
    title: "Pink Palm",
    description: "A modern food truck website for an Asian fusion restaurant, featuring a bold design, menu showcase, and event booking functionality.",
    url: "https://pink-palm.shop/",
    icon: HiFire,
    category: "Food & Restaurant",
    image: "pink-palm",
  },
  {
    title: "MKR Store",
    description: "A sleek e-commerce platform showcasing products with a modern design, shopping cart functionality, and best-selling products section.",
    url: "https://mkr-ecommerce.vercel.app/",
    icon: HiShoppingBag,
    category: "E-Commerce",
    image: "mkr-store",
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedFrames, setLoadedFrames] = useState<Set<number>>(new Set());
  const [errorFrames, setErrorFrames] = useState<Set<number>>(new Set());
  const timeoutRefs = useRef<Map<number, NodeJS.Timeout>>(new Map());
  const statusRefs = useRef<Map<number, 'loading' | 'loaded' | 'error'>>(new Map());

  // Touch/swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
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
    statusRefs.current.set(index, 'loaded');
    setLoadedFrames((prev) => new Set(prev).add(index));
  };

  const handleIframeError = (index: number) => {
    const timeout = timeoutRefs.current.get(index);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(index);
    }
    statusRefs.current.set(index, 'error');
    setErrorFrames((prev) => new Set(prev).add(index));
  };

  useEffect(() => {
    // Initialize status refs
    portfolioItems.forEach((_, index) => {
      statusRefs.current.set(index, 'loading');
    });

    // Set up timeouts for each iframe (15 seconds)
    portfolioItems.forEach((_, index) => {
      const timeout = setTimeout(() => {
        const status = statusRefs.current.get(index);
        if (status === 'loading') {
          handleIframeError(index);
        }
      }, 15000);
      timeoutRefs.current.set(index, timeout);
    });

    // Cleanup timeouts on unmount
    const timeouts = timeoutRefs.current;
    const statuses = statusRefs.current;
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      timeouts.clear();
      statuses.clear();
    };
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-white to-navy-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Explore some of our recent work and see the results we deliver
          </p>
        </div>

        <div className="relative px-12 sm:px-16 md:px-20 lg:px-24">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-ios hover:shadow-ios-lg active:scale-95 flex items-center justify-center text-navy-900 hover:bg-navy-50 transition-all duration-200 group touch-manipulation"
            aria-label="Previous portfolio item"
          >
            <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-ios hover:shadow-ios-lg active:scale-95 flex items-center justify-center text-navy-900 hover:bg-navy-50 transition-all duration-200 group touch-manipulation"
            aria-label="Next portfolio item"
          >
            <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                WebkitTransform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              }}
            >
              {portfolioItems.map((item, index) => {
                const IconComponent = item.icon;
                const isLoaded = loadedFrames.has(index);
                const hasError = errorFrames.has(index);
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-3 sm:px-6 md:px-8 py-4"
                  >
                    <div className="card-ios hover:shadow-ios group cursor-pointer transition-all duration-300 max-w-full sm:max-w-2xl mx-auto touch-manipulation w-full overflow-hidden">
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

                      <div className="aspect-video bg-gradient-to-br from-navy-100 to-navy-200 rounded-ios mb-4 overflow-hidden relative border border-navy-200">
                        {!isLoaded && !hasError && (
                          <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/90">
                            <div className="text-center">
                              <div className="w-12 h-12 border-4 border-navy-300 border-t-navy-900 rounded-full animate-spin mx-auto mb-2"></div>
                              <p className="text-sm text-navy-600">Loading preview...</p>
                            </div>
                          </div>
                        )}
                        {hasError && (
                          <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/90">
                            <div className="text-center p-4">
                              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <HiExternalLink className="w-8 h-8 text-navy-600" />
                              </div>
                              <p className="text-sm text-navy-600 mb-2">Preview unavailable</p>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-navy-900 font-medium hover:underline"
                              >
                                Visit site directly →
                              </a>
                            </div>
                          </div>
                        )}
                        {!hasError && (
                          <div className="w-full h-full relative" style={{ overflow: 'hidden' }}>
                            <iframe
                              src={item.url}
                              className={`desktop-preview ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                              onLoad={() => handleIframeLoad(index)}
                              onError={() => handleIframeError(index)}
                              title={`${item.title} preview`}
                              loading="eager"
                              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                              style={{ pointerEvents: 'none' }}
                            />
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-navy-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-navy-600 leading-relaxed text-sm">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-navy-100">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-navy-500 group-hover:text-navy-900 transition-colors flex items-center gap-2"
                        >
                          Visit Site
                          <HiExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 touch-manipulation active:scale-110 ${index === currentIndex
                  ? 'bg-navy-900 w-8'
                  : 'bg-navy-300 w-2 md:hover:bg-navy-500'
                  }`}
                aria-label={`Go to portfolio item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

