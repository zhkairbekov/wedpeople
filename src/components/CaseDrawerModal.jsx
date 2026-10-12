import React, { useState, useEffect, useRef } from "react";
import {
  X,
  MapPin,
  ArrowRight,
  Lock,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function CaseDrawerModal({ project, onClose }) {
  const { t } = useLanguage();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isTallImage, setIsTallImage] = useState(false);
  const [clientName, setClientName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const imgRef = useRef(null);

  const checkImageAspect = (imgEl) => {
    if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return;
    // aspect-ratio: 4/5 means width / height = 0.8 (or height / width = 1.25)
    const isTallerThan4by5 = imgEl.naturalHeight / imgEl.naturalWidth > 5 / 4;
    setIsTallImage(isTallerThan4by5);
  };

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && project) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  const slides = project?.gallery || [];
  const currentSlide = slides[activeSlideIndex] || slides[0];

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      checkImageAspect(imgRef.current);
    }
  }, [currentSlide?.src]);

  if (!project) return null;

  const whatsappPrefillHref = `${
    t.brand.whatsappBaseUrl
  }?text=${encodeURIComponent(
    t.drawer.buildWhatsappMessage(project.title, clientName, eventDate)
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName.trim()) return;
    window.open(whatsappPrefillHref, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-drawer-title"
      className="fixed inset-0 z-50 flex items-end sm:items-stretch sm:justify-end bg-obsidian/75 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-[540px] md:max-w-[620px] max-h-[92dvh] sm:max-h-full sm:h-full bg-alabaster text-ink rounded-t-2xl sm:rounded-none shadow-2xl overflow-y-auto flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-ink/15 animate-reveal-up"
      >
        <div className="sticky top-0 z-20 bg-alabaster/95 backdrop-blur-md hairline-b">
          <div className="sm:hidden w-full pt-2.5 pb-1 flex justify-center items-center">
            <div className="w-12 h-1.5 rounded-full bg-muted/30" />
          </div>
          <div className="px-5 sm:px-8 py-3.5 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-terracotta tracking-widest uppercase block font-semibold">
                {project.archiveNumber} • {project.categoryLabel}
              </span>
              <span className="font-mono text-[11px] text-muted uppercase">
                {project.dateOrCity}
              </span>
            </div>

            <button
              type="button"
              aria-label={t.drawer.closeAria}
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] px-3 flex items-center justify-center gap-1.5 rounded hairline-box bg-sand/50 hover:border-terracotta text-ink text-xs font-mono uppercase tracking-wider active:scale-95 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-5 sm:px-8 py-6 space-y-7">
          <header className="space-y-3 hairline-b pb-5">
            <h2
              id="case-drawer-title"
              className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-ink"
            >
              {project.title}
            </h2>
            <p className="font-mono text-xs text-muted tracking-wide flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-terracotta flex-shrink-0" />
              <span>
                {project.venue} ({project.city})
              </span>
            </p>
            <blockquote className="font-headline italic text-sm sm:text-base text-ink/90 pt-2 border-l-2 border-terracotta pl-3.5 leading-relaxed">
              {project.editorialQuote}
            </blockquote>
          </header>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">
                {t.drawer.galleryLabel} ({activeSlideIndex + 1}/{slides.length})
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label={t.drawer.prevSlideAria}
                  onClick={() =>
                    setActiveSlideIndex((prev) =>
                      prev === 0 ? slides.length - 1 : prev - 1
                    )
                  }
                  className="w-8 h-8 rounded hairline-box flex items-center justify-center hover:border-terracotta text-ink"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label={t.drawer.nextSlideAria}
                  onClick={() =>
                    setActiveSlideIndex((prev) =>
                      prev === slides.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-8 h-8 rounded hairline-box flex items-center justify-center hover:border-terracotta text-ink"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <figure className="rounded-lg overflow-hidden hairline-box bg-sand safari-clip-fix">
              <div
                className={`relative w-full overflow-hidden ${
                  isTallImage ? "aspect-[4/5]" : ""
                }`}
              >
                <img
                  ref={imgRef}
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  onLoad={(e) => checkImageAspect(e.currentTarget)}
                  className={`w-full transition-all duration-500 ${
                    isTallImage
                      ? "absolute inset-0 h-full object-cover object-center"
                      : "h-auto block"
                  }`}
                />
              </div>
              <figcaption className="p-3 bg-sand/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-mono text-[10px] text-terracotta uppercase font-semibold">
                  {currentSlide.tag}
                </span>
                <span className="font-headline italic text-xs sm:text-sm text-ink">
                  {currentSlide.caption}
                </span>
              </figcaption>
            </figure>

            <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1 px-1">
              {slides.map((slide, idx) => (
                <button
                  key={slide.tag}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`min-w-[140px] text-left rounded overflow-hidden hairline-box flex-shrink-0 transition-all ${
                    activeSlideIndex === idx
                      ? "ring-2 ring-terracotta bg-sand"
                      : "opacity-75 hover:opacity-100 bg-sand/40"
                  }`}
                >
                  <div className="relative h-20 w-full overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="font-mono text-[9px] text-muted uppercase truncate">
                      {slide.tag}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted font-semibold">
              {t.drawer.storyHeading}
            </h3>
            <p className="font-body text-sm text-ink/90 leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          <article className="bg-sand/60 rounded-lg p-4 sm:p-5 hairline-box space-y-3">
            <header className="flex items-center justify-between hairline-b pb-2.5">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink font-bold">
                {t.drawer.creditsHeading}
              </h3>
              <span className="font-mono text-[10px] text-terracotta font-semibold uppercase">
                {project.city}
              </span>
            </header>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
              {project.credits.map((credit) => (
                <div
                  key={credit.role}
                  className="flex items-baseline justify-between sm:col-span-2 border-b border-ink/5 pb-1.5 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-[11px] text-muted uppercase">
                    {credit.role}
                  </dt>
                  <dd className="font-body font-medium text-ink text-right">
                    {credit.name}{" "}
                    {credit.handle && (
                      <span className="font-mono text-[11px] text-terracotta ml-1">
                        ({credit.handle})
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <div className="bg-white rounded-lg p-5 hairline-box shadow-sm space-y-4">
            <div>
              <span className="font-mono text-[10px] text-terracotta tracking-widest uppercase font-semibold">
                {t.drawer.conciergeBadge}
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-ink mt-0.5">
                {t.drawer.conciergeTitle}
              </h3>
              <p className="font-body text-xs text-muted mt-1">
                {t.drawer.conciergeSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              <div>
                <label
                  htmlFor="drawer-client-name"
                  className="block font-mono text-[10px] uppercase text-muted mb-1"
                >
                  {t.drawer.nameLabel}
                </label>
                <input
                  id="drawer-client-name"
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder={t.drawer.namePlaceholder}
                  className="w-full text-xs font-body rounded hairline-box px-3.5 py-2.5 focus:outline-none focus:border-terracotta bg-alabaster/60 text-ink"
                />
              </div>

              <div>
                <label
                  htmlFor="drawer-event-date"
                  className="block font-mono text-[10px] uppercase text-muted mb-1"
                >
                  {t.drawer.seasonLabel}
                </label>
                <input
                  id="drawer-event-date"
                  type="text"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  placeholder={t.drawer.seasonPlaceholder}
                  className="w-full text-xs font-body rounded hairline-box px-3.5 py-2.5 focus:outline-none focus:border-terracotta bg-alabaster/60 text-ink"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-terracotta hover:bg-[#b84315] text-white font-mono font-semibold text-xs tracking-wider uppercase rounded py-3 transition-colors duration-200 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.drawer.submitButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="flex items-center justify-center gap-1.5 font-mono text-[10px] text-muted text-center pt-1">
                <Lock className="w-3 h-3 text-terracotta" />
                <span>{t.drawer.securityNote}</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
