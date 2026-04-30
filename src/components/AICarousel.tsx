"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { coachingSlides } from "@/data/coachingData";
import { useTranslation } from "../hooks/useTranslation";

export default function AICarousel() {
  const { t } = useTranslation();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // ✅ map index → translation key
  const getSlideKey = (index: number) => {
    return index === 4 ? "investment" : `week-${index + 1}`;
  };

  // sync selected index
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (i: number) => emblaApi?.scrollTo(i);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 pb-2 mb-6 overflow-x-auto scrollbar-hide">
        {coachingSlides.map((_, i) => {
          const key = getSlideKey(i);

          return (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                i === selectedIndex
                  ? "bg-purple-700 text-white border-purple-700 shadow-lg shadow-purple-900/40"
                  : "bg-transparent text-purple-300 border-purple-800 hover:border-purple-500 hover:text-white"
              }`}
            >
              {t(`coachingData.${key}.week`)}
            </button>
          );
        })}
      </div>

      {/* Carousel */}
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {coachingSlides.map((_, index) => {
            const key = getSlideKey(index);

            return (
              <div key={index} className="flex-[0_0_100%] min-w-0 p-1">
                <div className="w-full p-8 md:p-10 rounded-3xl border border-purple-900/60 bg-gradient-to-br from-[#0D0020] via-[#10002B] to-[#0A0018] shadow-2xl shadow-purple-950/50">
                  {/* Tag */}
                  <span className="inline-block px-3 py-1 mb-5 text-xs font-bold tracking-widest text-purple-300 uppercase border rounded-full bg-purple-900/40 border-purple-700/50">
                    {t(`coachingData.${key}.tag`)}
                  </span>

                  {/* Title */}
                  <h2 className="mb-2 text-3xl font-extrabold text-white md:text-4xl">
                    {t(`coachingData.${key}.week`)}:{" "}
                    <span className="gradient-text">
                      {t(`coachingData.${key}.title`)}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-base mb-7 md:text-lg text-purple-300/80">
                    {t(`coachingData.${key}.description`)}
                  </p>

                  {/* Points (always 3) */}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="p-4 transition-all duration-200 border bg-white/5 border-white/10 rounded-xl hover:bg-white/8 hover:border-purple-700/50"
                      >
                        <p className="mb-1 text-sm font-bold text-white">
                          {t(`coachingData.${key}.points.${i}.title`)}
                        </p>
                        <p className="text-xs leading-relaxed text-purple-300/70">
                          {t(`coachingData.${key}.points.${i}.desc`)}
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

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={scrollPrev}
          disabled={selectedIndex === 0}
          className="w-10 h-10 text-purple-300 border border-purple-800 rounded-full disabled:opacity-30"
        >
          ←
        </button>

        <div className="flex gap-2">
          {coachingSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full ${
                i === selectedIndex ? "w-6 bg-purple-500" : "w-2 bg-purple-800"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={selectedIndex === coachingSlides.length - 1}
          className="w-10 h-10 text-purple-300 border border-purple-800 rounded-full disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}
