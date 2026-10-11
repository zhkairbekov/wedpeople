import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import PhilosophySection from "./components/PhilosophySection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import CultureSection from "./components/CultureSection.jsx";
import FormatsSection from "./components/FormatsSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import ConciergeSection from "./components/ConciergeSection.jsx";
import MobileBottomBar from "./components/MobileBottomBar.jsx";
import CaseDrawerModal from "./components/CaseDrawerModal.jsx";

function AppContent() {
  const { t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedFormatKey, setSelectedFormatKey] = useState("wedding");

  const selectedProject = selectedProjectId
    ? t.portfolio.cases.find((item) => item.id === selectedProjectId) || null
    : null;

  const scrollToConcierge = (prefillFormatKey) => {
    if (prefillFormatKey) {
      setSelectedFormatKey(prefillFormatKey);
    }
    const el = document.getElementById("concierge");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-alabaster text-ink">
      {/* 01. Sticky Editorial Header & Mobile Drawer */}
      <Navbar onOpenConcierge={() => scrollToConcierge()} />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <HeroSection onOpenConcierge={() => scrollToConcierge()} />

        {/* 03. Brand Manifesto & Philosophy */}
        <PhilosophySection />

        {/* 04. Curated Portfolio / Real Stories */}
        <PortfolioSection
          onSelectProject={(project) => setSelectedProjectId(project.id)}
        />

        {/* 05. Cultural Code Spotlight */}
        <CultureSection />

        {/* 06. Formats & Full-Cycle Services */}
        <FormatsSection
          onSelectFormat={(formatKey) => scrollToConcierge(formatKey)}
        />

        {/* 07. Transparent Process & Budget Architecture */}
        <ProcessSection />

        {/* 08. Consultation Concierge & Monumental Footer */}
        <ConciergeSection selectedFormatKey={selectedFormatKey} />
      </main>

      {/* 09. Fixed Bottom Thumb Bar (Mobile & Tablet) */}
      <MobileBottomBar onOpenConcierge={() => scrollToConcierge()} />

      {/* 10. Interactive Project Case Study Drawer / Modal */}
      <CaseDrawerModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
