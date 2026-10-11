import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function MobileBottomBar({ onOpenConcierge }) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const conciergeEl = document.getElementById("concierge");
      let isNearConcierge = false;

      if (conciergeEl) {
        const rect = conciergeEl.getBoundingClientRect();
        // Hide floating pill once the concierge section enters the viewport
        isNearConcierge = rect.top < window.innerHeight - 80;
      }

      setIsVisible(scrollY > 360 && !isNearConcierge);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-label={t.mobileBar.ariaLabel}
      className={`sm:hidden fixed bottom-4 right-4 z-30 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="#concierge"
        onClick={(e) => {
          if (onOpenConcierge) {
            e.preventDefault();
            onOpenConcierge();
          }
        }}
        className="h-11 pl-3.5 pr-4 bg-obsidian/90 backdrop-blur-md text-alabaster border border-white/15 rounded-full shadow-lg flex items-center gap-2 active:scale-95 transition-transform"
      >
        <span className="w-6 h-6 rounded-full bg-terracotta flex items-center justify-center shrink-0">
          <MessageCircle className="w-3.5 h-3.5 text-white" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider font-medium whitespace-nowrap">
          {t.mobileBar.cta}
        </span>
      </a>
    </div>
  );
}
