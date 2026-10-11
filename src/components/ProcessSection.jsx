import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      aria-label={t.process.sectionAria}
      className="w-full bg-sand/25 hairline-b"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-28">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="font-mono text-xs text-terracotta font-semibold uppercase tracking-widest">
            {t.process.metaLeft}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-2 mb-4">
            {t.process.heading}
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            {t.process.quote}
          </p>
        </div>

        {/* Mobile Connected Vertical Timeline (<768px) */}
        <div className="md:hidden relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-ink/20">
          {t.process.steps.map((step, index) => (
            <div key={step.number} className="relative">
              <span
                className={`absolute -left-[21px] top-1.5 w-3 h-3 rounded-full ring-4 ring-alabaster ${
                  index === 0 || index === 3 ? "bg-terracotta" : "bg-ink"
                }`}
              />
              <span className="font-mono text-[10px] font-bold text-terracotta tracking-widest uppercase">
                {step.number}
              </span>
              <h3 className="font-headline text-lg font-semibold text-ink mt-0.5">
                {step.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed mt-1.5">
                {step.description}
              </p>
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mt-2">
                {step.phaseNote}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop & Tablet 4-Column Architectural Timeline (>=768px) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.process.steps.map((step) => (
            <article
              key={step.number}
              className="relative bg-alabaster p-7 xl:p-8 rounded-lg hairline-box hover:border-terracotta transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-terracotta font-bold uppercase tracking-widest mb-5">
                  {step.number}
                </div>
                <h3 className="font-headline text-xl font-medium text-ink mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-ink/10 font-mono text-[11px] text-muted uppercase">
                {step.phaseNote}
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Budget Assurance Box */}
        <div className="mt-10 md:mt-12 p-6 md:p-8 bg-alabaster rounded-lg hairline-box flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-terracotta flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-medium text-ink">
                {t.process.assuranceTitle}
              </h3>
              <p className="font-body text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                {t.process.assuranceText}
              </p>
            </div>
          </div>

          <a
            href="#concierge"
            className="min-h-[44px] inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-terracotta font-bold whitespace-nowrap hover:underline py-2"
          >
            <span>{t.process.assuranceCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
