import React, { useState } from "react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function HeroSection({ onOpenConcierge }) {
  const { t } = useLanguage();
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const frames = t.hero.showcaseFrames;
  const activeFrame = frames[activeFrameIndex] || frames[0];

  return (
    <section
      aria-label={t.hero.sectionAria}
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-5 sm:pt-8 md:pt-14 pb-12 md:pb-24 hairline-b overflow-hidden"
    >
      {/* Top Editorial Metadata Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 md:pb-6 hairline-b gap-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-mono text-[10px] sm:text-xs text-terracotta font-semibold uppercase tracking-widest">
            {t.hero.metaLeft}
          </span>
          <span className="text-ink/20 hidden sm:inline">|</span>
          <span className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-wider">
            {t.hero.metaCenter}
          </span>
        </div>
        <div className="hidden sm:block font-mono text-[10px] md:text-xs text-muted tracking-widest uppercase">
          {t.hero.metaRight}
        </div>
      </div>

      {/* Main 12-Column Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 pt-6 md:pt-12 items-end">
        {/* Left Column: Monumental Headline, Subtitle, CTA & Factual Pillars (First on mobile for instant clarity) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 md:space-y-10">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 animate-reveal-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand hairline-box">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink font-medium">
                {t.hero.seasonBadge}
              </span>
            </div>

            <h1 className="font-headline text-[34px] sm:text-5xl md:text-6xl xl:text-[72px] font-normal leading-[1.08] tracking-tight text-ink">
              {t.hero.headlinePrefix} <br className="hidden sm:inline" />
              {t.hero.headlineMiddle}
              <span className="italic font-normal font-serifAlt text-terracotta">
                {t.hero.headlineItalic}
              </span>
            </h1>

            <p className="font-body text-sm sm:text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Hero Action Cluster */}
          <div className="space-y-6 md:space-y-8 animate-reveal-delay-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5">
              <a
                href="#concierge"
                onClick={(e) => {
                  if (onOpenConcierge) {
                    e.preventDefault();
                    onOpenConcierge();
                  }
                }}
                className="w-full sm:w-auto min-h-[48px] sm:min-h-[54px] inline-flex items-center justify-between sm:justify-center gap-4 bg-terracotta text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-md text-xs sm:text-sm tracking-wider uppercase font-semibold hover:bg-[#b84315] shadow-md transition-all duration-300 active:scale-[0.98]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#stories"
                className="min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-2 text-ink hover:text-terracotta text-xs sm:text-sm uppercase tracking-wider font-semibold border-b border-ink/25 hover:border-terracotta py-2 transition-all duration-200"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Factual Brand Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 pt-5 md:pt-8 hairline-t max-w-2xl">
              {t.hero.pillars.map((pillar, idx) => (
                <div
                  key={pillar.code}
                  className={`${
                    idx > 0
                      ? "sm:border-l sm:border-ink/10 sm:pl-5 pt-2.5 sm:pt-0 border-t border-ink/10 sm:border-t-0"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-terracotta uppercase tracking-wider block">
                    {pillar.code}
                  </span>
                  <p className="font-body text-xs text-muted leading-snug mt-1">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Asymmetric Dual-Frame Editorial Composition */}
        <div className="lg:col-span-5 relative animate-reveal-delay-2">
          <div className="relative w-full aspect-[4/4.3] sm:aspect-[4/5] overflow-hidden rounded-lg shadow-xl bg-sand hairline-box group">
            <img
              src={activeFrame.src}
              alt={activeFrame.alt}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/15 to-transparent pointer-events-none" />

            {/* Top Frame Selector Pills */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
              <span className="bg-obsidian/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-alabaster hairline-dark-box flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-champagne" />
                <span>
                  {t.hero.frameCounterPrefix} 0{activeFrameIndex + 1} / 03
                </span>
              </span>

              <div
                role="tablist"
                aria-label={t.hero.tablistAria}
                className="flex items-center gap-1 bg-obsidian/75 backdrop-blur-md p-1 rounded hairline-dark-box"
              >
                {frames.map((frame, index) => (
                  <button
                    key={frame.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFrameIndex === index}
                    aria-label={`${t.hero.showFrameAria} ${index + 1}: ${
                      frame.title
                    }`}
                    onClick={() => setActiveFrameIndex(index)}
                    className={`min-w-[30px] min-h-[26px] px-2 rounded text-[10px] font-mono uppercase transition-all ${
                      activeFrameIndex === index
                        ? "bg-terracotta text-white font-bold"
                        : "text-alabaster/70 hover:text-white"
                    }`}
                  >
                    0{index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Real Story Caption Overlay */}
            <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 p-3 sm:p-4 bg-alabaster/95 backdrop-blur-md rounded hairline-box flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-terracotta font-semibold">
                  {activeFrame.tag}
                </p>
                <h2 className="font-headline text-xs sm:text-base font-semibold tracking-tight text-ink mt-0.5">
                  {activeFrame.title}
                </h2>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-muted tracking-wider uppercase text-right">
                {activeFrame.venue}
              </span>
            </div>
          </div>

          {/* Secondary Overlapping Macro Detail Frame */}
          <div className="hidden sm:block absolute -top-6 -left-6 xl:-left-8 w-36 md:w-44 aspect-square rounded-lg overflow-hidden border-4 border-alabaster shadow-xl bg-sand animate-subtle-float">
            <img
              src="/images/hero-detail.jpg"
              alt={t.hero.macroAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
