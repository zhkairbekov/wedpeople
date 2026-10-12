import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function PortfolioSection({ onSelectProject }) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? t.portfolio.cases
      : t.portfolio.cases.filter((item) => item.category === activeCategory);

  return (
    <section
      id="stories"
      aria-label={t.portfolio.sectionAria}
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-28 hairline-b"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 md:pb-10 hairline-b gap-6">
        <div>
          <span className="font-mono text-xs text-terracotta font-semibold uppercase tracking-widest">
            {t.portfolio.metaLeft}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-2">
            {t.portfolio.heading}
          </h2>
        </div>

        <div
          role="tablist"
          aria-label={t.portfolio.filterAria}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-5 px-5 lg:mx-0 lg:px-0"
        >
          {t.portfolio.filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-ink text-alabaster font-semibold shadow-sm"
                      : "bg-sand text-muted hover:text-ink hairline-box"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8 pt-10 md:pt-12">
          {filteredProjects.map((project, index) => {
            const isHeadline =
              activeCategory === "all" &&
              index === 0 &&
              project.layoutSpan === "featured";
            const isWide =
              activeCategory === "all" && project.layoutSpan === "wide";
            const isSquare =
              activeCategory === "all" && project.layoutSpan === "square";

            let colSpanClass = "md:col-span-6";
            if (isHeadline) {
              colSpanClass = "md:col-span-12";
            } else if (isWide) {
              colSpanClass = "md:col-span-7";
            } else if (isSquare) {
              colSpanClass = "md:col-span-5";
            }

            if (isHeadline) {
              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="md:col-span-12 group cursor-pointer"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-sand/35 p-5 sm:p-6 md:p-8 rounded-lg hairline-box hover:border-terracotta transition-all duration-300">
                    <div className="lg:col-span-8 w-full overflow-hidden rounded relative aspect-[4/5] sm:aspect-[16/10] bg-sand safari-clip-fix">
                      <img
                        src={project.coverImage}
                        alt={project.coverAlt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3.5 left-3.5 bg-alabaster/95 backdrop-blur-sm px-3 py-1 rounded text-ink font-mono text-[10px] uppercase tracking-widest font-semibold hairline-box">
                        {project.badge}
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
                      <div>
                        <div className="flex items-center space-x-2 text-muted font-mono text-xs uppercase tracking-widest mb-2">
                          <span>{project.dateOrCity}</span>
                        </div>
                        <h3 className="font-headline text-2xl sm:text-3xl font-medium text-ink tracking-tight mb-1 group-hover:text-terracotta transition-colors">
                          {project.title}
                        </h3>
                        {project.coupleHandles && (
                          <p className="font-mono text-xs text-terracotta mb-4">
                            {project.coupleHandles}
                          </p>
                        )}
                        <p className="font-body text-sm text-muted leading-relaxed">
                          {project.shortSummary}
                        </p>
                      </div>

                      <div className="pt-5 hairline-t space-y-2.5 font-mono text-xs">
                        {project.credits.slice(1, 5).map((credit) => (
                          <div
                            key={credit.role}
                            className="flex justify-between gap-2 text-muted"
                          >
                            <span>{credit.role}:</span>
                            <span className="text-ink font-medium text-right truncate">
                              {credit.name}
                            </span>
                          </div>
                        ))}

                        <div className="pt-3 flex items-center justify-between text-terracotta font-semibold uppercase tracking-wider text-[11px]">
                          <span>{t.portfolio.openStoryCta}</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpanClass} group cursor-pointer`}
              >
                <div className="bg-sand/35 p-5 sm:p-6 rounded-lg hairline-box hover:border-terracotta transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div
                      className={`w-full overflow-hidden rounded relative mb-5 bg-sand safari-clip-fix ${
                        isWide
                          ? "aspect-[4/5] sm:aspect-[16/10]"
                          : isSquare
                          ? "aspect-[4/5] sm:aspect-square"
                          : "aspect-[4/5]"
                      }`}
                    >
                      <img
                        src={project.coverImage}
                        alt={project.coverAlt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    <span className="absolute top-3.5 left-3.5 bg-alabaster/95 backdrop-blur-sm px-3 py-1 rounded text-terracotta font-mono text-[10px] uppercase tracking-widest font-semibold hairline-box">
                      {project.badge}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] text-muted tracking-widest uppercase mb-1">
                    {project.dateOrCity}
                  </p>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-headline text-xl sm:text-2xl font-medium text-ink group-hover:text-terracotta transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.coupleHandles && (
                    <p className="font-mono text-[11px] text-terracotta mb-2.5">
                      {project.coupleHandles}
                    </p>
                  )}
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {project.shortSummary}
                  </p>
                </div>

                <div className="pt-5 mt-5 hairline-t font-mono text-xs space-y-2">
                  {project.credits.slice(1, 3).map((credit) => (
                    <div
                      key={credit.role}
                      className="flex justify-between gap-2 text-muted"
                    >
                      <span>{credit.role}:</span>
                      <span className="text-ink font-medium text-right truncate">
                        {credit.name}
                      </span>
                    </div>
                  ))}
                  <div className="pt-2 flex items-center justify-between text-terracotta font-semibold uppercase tracking-wider text-[11px]">
                    <span>{t.portfolio.openCaseCta}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
