import React from "react";
import { Feather } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function CultureSection() {
  const { t } = useLanguage();

  return (
    <section
      id="culture"
      aria-label={t.culture.sectionAria}
      className="w-full bg-obsidian text-alabaster hairline-dark-b relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-terracotta/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32 relative z-10">
        <div className="flex items-center space-x-3 mb-10 md:mb-16">
          <span className="font-mono text-xs text-champagne font-semibold uppercase tracking-widest">
            {t.culture.metaLeft}
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
            {t.culture.metaRight}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-7 md:space-y-8">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-alabaster">
              {t.culture.headingLine1} <br />
              <span className="italic font-serifAlt text-champagne">
                {t.culture.headingItalic}
              </span>
            </h2>

            <div className="space-y-5 text-alabaster/75 font-light text-base md:text-lg leading-relaxed">
              <p>{t.culture.paragraph1}</p>
              <p>{t.culture.paragraph2}</p>
            </div>

            <div className="p-5 sm:p-7 bg-white/[0.04] hairline-dark-box rounded-lg backdrop-blur-sm space-y-3.5">
              <div className="flex items-center space-x-3 text-champagne">
                <Feather className="w-5 h-5 flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  {t.culture.symbolTitle}
                </span>
              </div>
              <p className="font-body text-sm text-alabaster/85 leading-relaxed">
                {t.culture.symbolQuote}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 hairline-dark-t">
              {t.culture.principles.map((item) => (
                <div
                  key={item.code}
                  className="p-4 sm:p-0 rounded bg-white/[0.03] sm:bg-transparent hairline-dark-box sm:border-0"
                >
                  <span className="font-mono text-champagne text-xs uppercase tracking-wider font-semibold block mb-1.5">
                    {item.code}
                  </span>
                  <h3 className="font-headline text-sm font-medium text-alabaster mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-alabaster/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden hairline-dark-box aspect-[4/5] sm:aspect-[3/4] shadow-2xl bg-obsidian">
              <img
                src="/images/culture-spotlight.jpg"
                alt={t.culture.imageAlt}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent opacity-90" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest block mb-1.5">
                  {t.culture.imageBadge}
                </span>
                <p className="font-headline text-base sm:text-lg italic text-alabaster leading-snug">
                  {t.culture.imageQuote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
