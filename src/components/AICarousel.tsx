"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { coachingSlides } from "@/data/coachingData";
import { useTranslation } from "@/hooks/useTranslation";

export default function AICarousel() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const getSlideKey = (index: number) => {
    if (index === 4) return "investment";
    return `week-${index + 1}`;
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect); // void, not returned
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Week Tab Bar */}
      <div className="flex gap-2 pb-2 mb-6 overflow-x-auto scrollbar-hide">
        {coachingSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
              i === selectedIndex
                ? "bg-purple-700 text-white border-purple-700 shadow-lg shadow-purple-900/40"
                : "bg-transparent text-purple-300 border-purple-800 hover:border-purple-500 hover:text-white"
            }`}
          >
            {t(`coachingData.${getSlideKey(i)}.week`)}
          </button>
        ))}
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {coachingSlides.map((slide, index) => {
            const slideKey = getSlideKey(index);
            return (
              <div key={index} className="flex-[0_0_100%] min-w-0 p-1">
                {/* Slide Card */}
                <div className="w-full p-8 md:p-10 rounded-3xl border border-purple-900/60 bg-gradient-to-br from-[#0D0020] via-[#10002B] to-[#0A0018] shadow-2xl shadow-purple-950/50">
                  {/* Tag */}
                  <span className="inline-block px-3 py-1 mb-5 text-xs font-bold tracking-widest text-purple-300 uppercase border rounded-full bg-purple-900/40 border-purple-700/50">
                    {t(`coachingData.${slideKey}.tag`)}
                  </span>

                  {/* Heading */}
                  <h2 className="mb-2 text-3xl font-extrabold text-white md:text-4xl">
                    {t(`coachingData.${slideKey}.week`)}:{" "}
                    <span className="gradient-text">
                      {t(`coachingData.${slideKey}.title`)}
                    </span>
                  </h2>

                  {/* Goal line */}
                  <p className="text-base mb-7 md:text-lg text-purple-300/80">
                    <span className="font-semibold text-purple-200">Goal:</span>{" "}
                    {t(`coachingData.${slideKey}.description`)}
                  </p>

                  {/* Feature Cards Grid */}
                  <div
                    className={`grid gap-3 ${
                      slide.points.length === 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-1 md:grid-cols-2"
                    }`}
                  >
                    {slide.points.map((_, i) => (
                      <div
                        key={i}
                        className="p-4 transition-all duration-200 border bg-white/5 border-white/10 rounded-xl hover:bg-white/8 hover:border-purple-700/50"
                      >
                        <p className="mb-1 text-sm font-bold text-white">
                          {t(`coachingData.${slideKey}.points.${i}.title`)}
                        </p>
                        <p className="text-xs leading-relaxed text-purple-300/70">
                          {t(`coachingData.${slideKey}.points.${i}.desc`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Row */}
      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Prev */}
        <button
          onClick={scrollPrev}
          disabled={selectedIndex === 0}
          className="flex items-center justify-center w-10 h-10 text-purple-300 transition-all duration-200 border border-purple-800 rounded-full hover:bg-purple-900/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {coachingSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-purple-500"
                  : "w-2 bg-purple-800 hover:bg-purple-600"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={scrollNext}
          disabled={selectedIndex === coachingSlides.length - 1}
          className="flex items-center justify-center w-10 h-10 text-purple-300 transition-all duration-200 border border-purple-800 rounded-full hover:bg-purple-900/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
