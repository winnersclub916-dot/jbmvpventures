"use client";

import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
  className?: string;
}

export default function TestimonialsCarousel({
  testimonials,
  title = "Success Stories",
  description = "Hear from our successful WINNERS network members",
  className = ""
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`py-14 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border bg-card p-6 md:p-10 shadow-xs">
          <div className="flex items-start gap-6">
            <div className="size-16 rounded-full bg-muted shrink-0" />
            <div className="flex-1">
              <blockquote className="italic text-base md:text-lg leading-relaxed text-foreground/90">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-primary">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrevious}
                aria-label="previous" 
                className="size-9 grid place-items-center rounded-full bg-amber-400 text-black hover:bg-amber-300 transition-colors"
              >
                ←
              </button>
              <button 
                onClick={handleNext}
                aria-label="next" 
                className="size-9 grid place-items-center rounded-full bg-amber-400 text-black hover:bg-amber-300 transition-colors"
              >
                →
              </button>
            </div>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`size-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-amber-500' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
