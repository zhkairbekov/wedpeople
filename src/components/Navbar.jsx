import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, MessageCircle, Instagram } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Navbar({ onOpenConcierge }) {
  const { lang, setLang, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-obsidian text-alabaster border-b border-white/10"
            : isScrolled
            ? "bg-alabaster/95 backdrop-blur-md shadow-sm hairline-b text-ink"
            : "bg-alabaster/90 backdrop-blur-md hairline-b text-ink"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Compact Brand Lockup */}
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex flex-col justify-center shrink-0 group"
          >
            <span
              className={`font-headline text-lg sm:text-xl md:text-2xl font-bold tracking-tight uppercase leading-none transition-colors ${
                isMobileMenuOpen
                  ? "text-alabaster"
                  : "text-ink group-hover:text-terracotta"
              }`}
            >
              {t.brand.name}
            </span>
          </a>

          {/* Center: Adaptive Desktop Navigation */}
          <nav
            aria-label={t.nav.ariaMain}
            className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 text-[11px] xl:text-xs tracking-wider uppercase font-medium"
          >
            {t.nav.items.map((item) => (
              <a
                key={item.index}
                href={item.href}
                className="whitespace-nowrap text-muted hover:text-terracotta transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-terracotta hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Language Switcher + CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3.5 shrink-0">
            {/* Compact Language Switcher (RU / ҚАЗ) */}
            <div
              role="group"
              aria-label={t.nav.langLabel}
              className={`inline-flex items-center rounded-md p-0.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                isMobileMenuOpen
                  ? "bg-white/10 border border-white/15"
                  : "bg-sand/70 hairline-box"
              }`}
            >
              <button
                type="button"
                onClick={() => setLang("ru")}
                aria-pressed={lang === "ru"}
                className={`px-2 py-1 rounded-[4px] leading-none transition-all duration-150 ${
                  lang === "ru"
                    ? isMobileMenuOpen
                      ? "bg-alabaster text-obsidian font-bold"
                      : "bg-ink text-alabaster font-semibold shadow-sm"
                    : isMobileMenuOpen
                    ? "text-alabaster/70 hover:text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang("kk")}
                aria-pressed={lang === "kk"}
                className={`px-2 py-1 rounded-[4px] leading-none transition-all duration-150 ${
                  lang === "kk"
                    ? "bg-terracotta text-white font-semibold shadow-sm"
                    : isMobileMenuOpen
                    ? "text-alabaster/70 hover:text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                ҚАЗ
              </button>
            </div>

            {/* Desktop / Tablet Primary CTA */}
            <a
              href="#concierge"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (onOpenConcierge) {
                  e.preventDefault();
                  onOpenConcierge();
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 bg-terracotta text-white px-3.5 md:px-4 xl:px-5 py-2 md:py-2.5 rounded-md text-[11px] xl:text-xs tracking-wider uppercase font-medium whitespace-nowrap shadow-sm hover:bg-[#b84315] active:scale-95 transition-all duration-200"
            >
              <span>{t.nav.bookMeeting}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>

            {/* Mobile Menu Toggle Button (<1024px) */}
            <button
              type="button"
              aria-label={
                isMobileMenuOpen ? t.nav.closeMenuAria : t.nav.openMenuAria
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`lg:hidden w-10 h-10 rounded-md flex items-center justify-center transition-all duration-150 active:scale-95 ${
                isMobileMenuOpen
                  ? "bg-white/10 text-alabaster border border-white/20"
                  : "bg-alabaster text-ink hairline-box hover:border-terracotta"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Navigation Drawer (positioned below sticky header) */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.ariaMobileMenu}
        className={`lg:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 z-40 bg-obsidian text-alabaster transition-all duration-300 ease-out flex flex-col justify-between overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="px-5 sm:px-8 py-5 flex-1 flex flex-col justify-between max-w-xl mx-auto w-full">
          <ul className="divide-y divide-white/10">
            {t.nav.items.map((item) => (
              <li key={item.index}>
                <a
                  href={item.href}
                  onClick={handleMobileNavClick}
                  className="group py-3.5 flex items-center justify-between gap-4 transition-colors duration-200"
                >
                  <div className="flex flex-col">
                    <span className="font-headline text-lg sm:text-xl italic text-alabaster group-hover:text-terracotta transition-colors duration-200">
                      {item.mobileTitle}
                    </span>
                    <span className="font-body text-xs text-alabaster/55 mt-0.5">
                      {item.mobileSubtitle}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-champagne group-hover:text-terracotta tracking-wider shrink-0">
                    {item.index}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 pb-4">
            <a
              href="#concierge"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (onOpenConcierge) {
                  e.preventDefault();
                  onOpenConcierge();
                }
              }}
              className="w-full h-12 bg-terracotta hover:bg-[#b84315] text-white flex items-center justify-center gap-2 rounded-md font-mono uppercase tracking-wider font-semibold text-xs shadow-md active:scale-[0.98] transition-all"
            >
              <span>{t.nav.bookMeeting}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={t.brand.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-3 rounded-md hairline-dark-box bg-white/5 flex items-center justify-center gap-2 font-mono text-[11px] text-alabaster hover:text-champagne transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href={t.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-3 rounded-md hairline-dark-box bg-white/5 flex items-center justify-center gap-2 font-mono text-[11px] text-alabaster hover:text-champagne transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>@wedpeople</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
