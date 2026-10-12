import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Instagram,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ConciergeSection({ selectedFormatKey }) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [formatKey, setFormatKey] = useState("wedding");
  const [cityAndDate, setCityAndDate] = useState("");

  useEffect(() => {
    if (selectedFormatKey) {
      setFormatKey(selectedFormatKey);
    }
  }, [selectedFormatKey]);

  const activeFormatObj =
    t.concierge.formatOptions.find((item) => item.key === formatKey) ||
    t.concierge.formatOptions[0];

  const whatsappCustomUrl = `${
    t.brand.whatsappBaseUrl
  }?text=${encodeURIComponent(
    t.concierge.buildWhatsappMessage(
      name,
      activeFormatObj.label,
      cityAndDate
    )
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    window.open(whatsappCustomUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="concierge"
      aria-label={t.concierge.sectionAria}
      className="w-full bg-obsidian text-alabaster hairline-dark-t relative overflow-hidden pb-10 lg:pb-12"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-20 md:pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 md:pb-24 hairline-dark-b">
          {/* Left Column: Direct Agency Contacts & Factual Presence */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <div>
              <span className="font-mono text-xs text-champagne font-semibold uppercase tracking-widest block mb-3">
                {t.concierge.metaLeft}
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-alabaster leading-[1.1]">
                {t.concierge.headingLine1} <br />
                {t.concierge.headingLine2} <br />
                <span className="italic font-serifAlt text-terracotta">
                  {t.concierge.headingItalic}
                </span>
              </h2>
              <p className="font-body text-sm sm:text-base text-alabaster/70 font-light mt-5 leading-relaxed">
                {t.concierge.description}
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <a
                href={t.brand.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/[0.04] hairline-dark-box rounded-lg hover:border-terracotta hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-champagne flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-alabaster/50 uppercase tracking-wider block">
                      {t.concierge.whatsappCardLabel}
                    </span>
                    <span className="font-body text-base font-semibold text-alabaster group-hover:text-champagne transition-colors">
                      {t.brand.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-alabaster/50 group-hover:text-alabaster group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={t.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/[0.04] hairline-dark-box rounded-lg hover:border-terracotta hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <Instagram className="w-6 h-6 text-champagne flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-alabaster/50 uppercase tracking-wider block">
                      {t.concierge.instagramCardLabel}
                    </span>
                    <span className="font-body text-base font-semibold text-alabaster group-hover:text-champagne transition-colors">
                      {t.brand.instagramHandle} • {t.brand.founderHandle}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-alabaster/50 group-hover:text-alabaster group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            <div className="pt-6 hairline-dark-t grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded bg-white/[0.02] hairline-dark-box">
                <span className="text-champagne uppercase block mb-1 flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span>ASTANA</span>
                </span>
                <p className="text-alabaster/65 text-[11px] leading-relaxed font-body">
                  {t.concierge.astanaNote}
                </p>
              </div>
              <div className="p-3.5 rounded bg-white/[0.02] hairline-dark-box">
                <span className="text-champagne uppercase block mb-1 flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span>ALMATY</span>
                </span>
                <p className="text-alabaster/65 text-[11px] leading-relaxed font-body">
                  {t.concierge.almatyNote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Concierge Form -> Direct WhatsApp Dispatch */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-12 bg-white/[0.03] hairline-dark-box rounded-xl backdrop-blur-md">
              <h3 className="font-headline text-2xl md:text-3xl font-medium text-alabaster mb-2">
                {t.concierge.formTitle}
              </h3>
              <p className="font-body text-sm text-alabaster/60 mb-8 leading-relaxed">
                {t.concierge.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="concierge-name"
                    className="block font-mono text-xs uppercase tracking-wider text-alabaster/75 mb-2"
                  >
                    {t.concierge.nameLabel}
                  </label>
                  <input
                    id="concierge-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.concierge.namePlaceholder}
                    className="w-full h-12 bg-white/5 border border-white/20 rounded px-4 text-alabaster placeholder-white/30 focus:outline-none focus:border-terracotta font-body text-sm transition-colors"
                  />
                </div>

                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-alabaster/75 mb-3">
                    {t.concierge.formatLabel}
                  </span>
                  <div
                    role="radiogroup"
                    aria-label={t.concierge.formatLabel}
                    className="flex flex-wrap gap-2.5"
                  >
                    {t.concierge.formatOptions.map((option) => {
                      const isChecked = formatKey === option.key;
                      return (
                        <button
                          key={option.key}
                          type="button"
                          role="radio"
                          aria-checked={isChecked}
                          onClick={() => setFormatKey(option.key)}
                          className={`min-h-[40px] px-4 py-2 rounded-full border text-xs font-mono tracking-wider uppercase transition-all ${
                            isChecked
                              ? "bg-terracotta border-terracotta text-white font-semibold"
                              : "border-white/20 text-alabaster/75 hover:border-white/40 bg-white/[0.02]"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="concierge-city-date"
                    className="block font-mono text-xs uppercase tracking-wider text-alabaster/75 mb-2"
                  >
                    {t.concierge.cityDateLabel}
                  </label>
                  <input
                    id="concierge-city-date"
                    type="text"
                    value={cityAndDate}
                    onChange={(e) => setCityAndDate(e.target.value)}
                    placeholder={t.concierge.cityDatePlaceholder}
                    className="w-full h-12 bg-white/5 border border-white/20 rounded px-4 text-alabaster placeholder-white/30 focus:outline-none focus:border-terracotta font-body text-sm transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full min-h-[54px] bg-terracotta hover:bg-[#b84315] text-white py-4 px-8 rounded font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.concierge.submitButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="font-body text-[11px] text-alabaster/45 text-center leading-relaxed">
                  {t.concierge.bottomNotePrefix}
                  {t.brand.phoneDisplay}
                  {t.concierge.bottomNoteSuffix}
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Monumental Bottom Footer */}
        <footer className="pt-12 md:pt-16">
          <div className="text-center pb-10 md:pb-12 select-none overflow-hidden">
            <span className="font-headline text-[12vw] sm:text-[13vw] font-bold tracking-tighter leading-none text-white/[0.06] block uppercase hover:text-white/[0.09] transition-colors duration-500">
              WEDPEOPLE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 hairline-dark-b text-xs font-mono text-alabaster/60">
            <div className="md:col-span-5 flex items-center gap-4">
              <img
                src="/images/tilda-logo.png"
                alt="WedPeople"
                className="w-16 h-auto object-contain opacity-85"
              />
              <div>
                <span className="text-alabaster uppercase tracking-widest font-semibold block mb-1">
                  {t.concierge.footerTagline}
                </span>
                <p className="text-alabaster/45">{t.concierge.footerSub}</p>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-wrap gap-x-7 gap-y-2.5 justify-start md:justify-end text-alabaster/65">
              <a
                href="#philosophy"
                className="hover:text-champagne transition-colors"
              >
                {t.concierge.footerLinks.philosophy}
              </a>
              <a
                href="#stories"
                className="hover:text-champagne transition-colors"
              >
                {t.concierge.footerLinks.stories}
              </a>
              <a
                href="#culture"
                className="hover:text-champagne transition-colors"
              >
                {t.concierge.footerLinks.culture}
              </a>
              <a
                href="#formats"
                className="hover:text-champagne transition-colors"
              >
                {t.concierge.footerLinks.formats}
              </a>
              <a
                href="#process"
                className="hover:text-champagne transition-colors"
              >
                {t.concierge.footerLinks.process}
              </a>
              <a
                href={t.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors"
              >
                Instagram (@wedpeople)
              </a>
            </div>
          </div>

          {/* Final Copyright & Developer Credit Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-[11px] font-mono text-alabaster/45 gap-6">
            <div className="space-y-1.5">
              <div>
                © {new Date().getFullYear()} WEDPEOPLE Agency. ASTANA • ALMATY.
              </div>
              <div className="flex items-center space-x-2">
                <span>{t.concierge.footerCities}</span>
                <span>•</span>
                <span className="text-terracotta">
                  {t.concierge.footerLove}
                </span>
              </div>
            </div>

            <a
              data-v-5551e99b=""
              href="https://kairbekoff.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3.5 px-4 py-3 rounded-2xl shadow-xs transition-all self-start md:self-auto"
            >
              <div
                data-v-5551e99b=""
                className="w-10 h-10 rounded-xl text-[#C5A880] flex items-center justify-center font-bold text-xs tracking-wider shadow-xs group-hover:scale-105 transition-transform shrink-0 overflow-hidden"
              >
                <img
                  data-v-5551e99b=""
                  src="/images/developer-logo.webp"
                  alt="Zhanat Kairbekov - Developer"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div data-v-5551e99b="" className="font-body">
                <div
                  data-v-5551e99b=""
                  className="text-[10px] uppercase font-bold text-gray-400 tracking-wider"
                >
                  {t.concierge.devBadge}
                </div>
                <div
                  data-v-5551e99b=""
                  className="text-xs sm:text-sm font-bold text-gray-400 transition-colors flex items-center gap-1.5 group-hover:text-[#D9531D]"
                >
                  <span data-v-5551e99b="">{t.concierge.devName}</span>
                  <span
                    data-v-5551e99b=""
                    className="material-symbols-outlined text-xs text-gray-400 group-hover:text-[#D9531D]"
                  >
                    open_in_new
                  </span>
                </div>
              </div>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
