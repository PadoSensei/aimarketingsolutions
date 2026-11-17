"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Badge } from "./Badge";
import { coachingSlides } from "@/data/coachingData";
import { useTranslation } from "../hooks/useTranslation";

export default function AICarousel() {
  const { t } = useTranslation();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getSlideKey = (index: number) => {
    return index === 4 ? "investment" : `week-${index + 1}`;
  };

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
          const isSelected = i === selectedIndex;

          return (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                isSelected
                  ? "bg-purple-600 text-white border-purple-600 shadow-md"
                  : "bg-card text-foreground/60 border-border hover:text-foreground hover:border-foreground/20"
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
                <div className="w-full p-8 transition-colors duration-300 border shadow-sm md:p-10 rounded-3xl border-border bg-card">
                  {/* Tag */}
                  <Badge variant="solid" className="mb-4">
                    {t(`coachingData.${key}.tag`)}
                  </Badge>

                  {/* Title */}
                  <h2 className="mb-2 text-3xl font-extrabold text-foreground md:text-4xl">
                    {t(`coachingData.${key}.week`)}:{" "}
                    <span className="gradient-text">
                      {t(`coachingData.${key}.title`)}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-base mb-7 md:text-lg text-foreground/70">
                    {t(`coachingData.${key}.description`)}
                  </p>

                  {/* Points */}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="p-4 transition-all duration-200 border bg-background/50 border-border rounded-xl"
                      >
                        <p className="mb-1 text-sm font-bold text-foreground">
                          {t(`coachingData.${key}.points.${i}.title`)}
                        </p>
                        <p className="text-xs leading-relaxed text-foreground/60">
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
          className="w-10 h-10 border rounded-full text-foreground/50 border-border disabled:opacity-30 hover:border-foreground"
        >
          ←
        </button>

        <div className="flex gap-2">
          {coachingSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex
                  ? "w-6 bg-purple-600"
                  : "w-2 bg-border hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={selectedIndex === coachingSlides.length - 1}
          className="w-10 h-10 border rounded-full text-foreground/50 border-border disabled:opacity-30 hover:border-foreground"
        >
          →
        </button>
      </div>
    </div>
  );
}
