"use client";
/* global gtag */


/**
 * @fileoverview Main application page for ElectEd
 * Uses dynamic imports for code splitting and lazy loading
 */

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Overview from "../components/Overview";
import ErrorBoundary from "../components/ErrorBoundary";
import Spinner from "../components/Spinner";

/** Lazy-loaded tab components for performance */
const Quiz = dynamic(() => import("@/components/Quiz"), {
  ssr: false,
  loading: () => <Spinner label="Loading Quiz..." />,
});
const Chatbot = dynamic(() => import("@/components/Chatbot"), {
  ssr: false,
});
const Glossary = dynamic(() => import("@/components/Glossary"), {
  ssr: false,
  loading: () => <Spinner label="Loading Glossary..." />,
});
const Timeline = dynamic(() => import("@/components/Timeline"), {
  ssr: false,
  loading: () => <Spinner label="Loading Timeline..." />,
});
const HowToVote = dynamic(() => import("@/components/HowToVote"), {
  ssr: false,
  loading: () => <Spinner label="Loading..." />,
});

/**
 * Main ElectEd application page
 * Manages tab navigation and renders dynamic components
 */
export default function ElectEdApp() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Track tab navigation in Google Analytics
    if (typeof window !== "undefined" && typeof window["gtag"] === "function") {
      window["gtag"]("event", "tab_change", {
        event_category: "navigation",
        event_label: tab,
      });
    }



  };

  return (
    <ErrorBoundary>
      <Header />
      <NavTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="max-w-[960px] mx-auto py-8 px-6" role="main">
        <Suspense fallback={<Spinner />}>
          {activeTab === "overview" && (
            <Overview onNavigate={handleTabChange} />
          )}
          {activeTab === "timeline" && <Timeline />}
          {activeTab === "howtovote" && <HowToVote />}
          {activeTab === "quiz" && <Quiz />}
          {activeTab === "glossary" && <Glossary />}
        </Suspense>
      </main>
      <footer
        className="text-center py-8 border-t-2 border-border text-[#999] bg-cream mt-12"
        style={{ fontSize: "0.78rem", letterSpacing: "0.05em" }}
        role="contentinfo"
      >
        <strong className="text-gold">ElectEd</strong> — A civic education
        resource. For informational purposes only.
        <br />
        Always verify deadlines and requirements with your local election
        authority.
      </footer>
      <Chatbot />
    </ErrorBoundary>
  );
}
