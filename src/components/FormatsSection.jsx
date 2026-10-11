import React, { useState } from "react";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function FormatsSection({ onSelectFormat }) {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState("format-1");

  const toggleFormat = (id) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="formats"
      aria-label={t.formats.sectionAria}
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-28 hairline-b bg-alabaster"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 md:pb-10 hairline-b gap-5">
        <div>
          <span className="font-mono text-xs text-terracotta font-semibold uppercase tracking-widest">
            {t.formats.metaLeft}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-2">
            {t.formats.heading}
          </h2>
        </div>
        <p className="font-body text-sm text-muted max-w-md leading-relaxed">
          {t.formats.subtitle}
        </p>
      </div>

      {/* Mobile & Tablet Tactile Accordion (<1024px) */}
      <div className="lg:hidden space-y-3 mt-8">
        {t.formats.items.map((format) => {
          const isExpanded = expandedId === format.id;
          return (
            <div
              key={format.id}
              className="hairline-box rounded-lg overflow-hidden bg-alabaster transition-colors"
            >
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => toggleFormat(format.id)}
                className="w-full min-h-[58px] px-4 sm:px-5 py-4 flex items-center justify-between text-left active:bg-sand/50 transition-colors"
              >
                <div className="flex items-baseline gap-3 pr-3">
                  <span className="font-mono text-xs font-bold text-terracotta">
                    {format.index}
                  </span>
                  <div>
                    <span className="font-headline text-lg font-medium text-ink block">
                      {format.title}
                    </span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mt-0.5">
                      {format.subtitle}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-terracotta" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-2 text-sm text-muted leading-relaxed border-t border-ink/10 bg-sand/20 space-y-4">
                  <p>{format.description}</p>
                  <ul className="space-y-2 font-mono text-xs text-ink">
                    {format.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <a
                      href="#concierge"
                      onClick={() => onSelectFormat?.(format.formKey)}
                      className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded bg-terracotta text-white font-mono text-xs uppercase tracking-wider font-semibold"
                    >
                      <span>{t.formats.discussMobileCta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Editorial Index Table Layout (>=1024px) */}
      <div className="hidden lg:block divide-y divide-ink/10 mt-8">
        {t.formats.items.map((format) => {
          const isExpanded = expandedId === format.id;
          return (
            <div
              key={format.id}
              className="py-9 group hover:bg-sand/35 transition-colors duration-300 px-6 rounded"
            >
              <div
                onClick={() => toggleFormat(format.id)}
                className="grid grid-cols-12 gap-6 items-start cursor-pointer"
              >
                <div className="col-span-1 pt-1">
                  <span className="font-mono text-xl text-terracotta font-light">
                    {format.index}
                  </span>
                </div>

                <div className="col-span-4">
                  <h3 className="font-headline text-2xl xl:text-3xl font-medium text-ink group-hover:text-terracotta transition-colors">
                    {format.title}
                  </h3>
                  <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1.5">
                    {format.subtitle}
                  </p>
                </div>

                <div className="col-span-5 space-y-4">
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {format.description}
                  </p>
                  {isExpanded && (
                    <ul className="grid grid-cols-1 gap-2 pt-2 border-t border-ink/10 font-mono text-xs text-ink">
                      {format.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-terracotta flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="col-span-2 text-right flex flex-col items-end justify-between gap-3">
                  <a
                    href="#concierge"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFormat?.(format.formKey);
                    }}
                    className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-ink hover:text-terracotta font-semibold py-1"
                  >
                    <span>{t.formats.discussDesktopCta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    {isExpanded ? t.formats.hideDetails : t.formats.showDetails}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
