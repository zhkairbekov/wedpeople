import React from "react";
import { Compass, Feather, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function PhilosophySection() {
  const { t } = useLanguage();

  const renderIcon = (name) => {
    switch (name) {
      case "compass":
        return <Compass className="w-5 h-5 text-terracotta" />;
      case "feather":
        return <Feather className="w-5 h-5 text-terracotta" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-terracotta" />;
    }
  };

  return (
    <section
      id="philosophy"
      aria-label={t.philosophy.sectionAria}
      className="w-full bg-sand/45 hairline-b"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-28">
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-terracotta font-semibold uppercase tracking-widest">
              {t.philosophy.metaLeft}
            </span>
            <span className="text-ink/20">|</span>
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              {t.philosophy.metaCenter}
            </span>
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-muted uppercase tracking-widest">
            {t.philosophy.metaRight}
          </span>
        </div>

        <div className="max-w-4xl mx-auto my-6 md:my-12 text-center relative px-2 sm:px-6">
          <span
            aria-hidden="true"
            className="text-terracotta/25 text-6xl md:text-7xl font-headline leading-none block select-none"
          >
            “
          </span>

          <blockquote className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal italic leading-[1.3] tracking-tight text-ink -mt-4 md:-mt-6">
            {t.philosophy.quote}
          </blockquote>

          <p className="font-body text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto mt-6 leading-relaxed">
            {t.philosophy.subtext}
          </p>

          <div className="mt-8 pt-6 hairline-t max-w-md mx-auto flex flex-col items-center justify-center space-y-2">
            <p className="font-serifAlt italic text-xl md:text-2xl text-terracotta font-medium">
              {t.brand.manifestoSignoff} — {t.brand.founderName}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-muted">
              <span className="uppercase tracking-wider">
                {t.brand.founderHandle}
              </span>
              <span>•</span>
              <a
                href={t.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors underline underline-offset-4"
              >
                {t.brand.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-16 hairline-t mt-12 md:mt-16">
          {t.philosophy.pillars.map((pillar) => (
            <article
              key={pillar.index}
              className="p-6 sm:p-8 bg-alabaster rounded-lg hairline-box flex flex-col justify-between hover:border-terracotta transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <span className="font-mono text-xs text-terracotta font-semibold uppercase tracking-widest">
                    {pillar.index}
                  </span>
                  {renderIcon(pillar.iconName)}
                </div>
                <h2 className="font-headline text-xl sm:text-2xl font-medium tracking-tight mb-3 text-ink">
                  {pillar.title}
                </h2>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink/10">
                <span className="font-mono text-[11px] text-muted tracking-wider uppercase">
                  {pillar.footerTag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
