"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import NavTabs from "@/components/NavTabs";
import Overview from "@/components/Overview";
import HowToVote from "@/components/HowToVote";
import ErrorBoundary from "@/components/ErrorBoundary";

const Quiz = dynamic(() => import("@/components/Quiz"), { ssr: false });
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });
const Glossary = dynamic(() => import("@/components/Glossary"), { ssr: false });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });

export default function ElectEdApp() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ErrorBoundary>
      <Header />
      <NavTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="max-w-[960px] mx-auto py-8 px-6">
        {activeTab === "overview" && (
          <Overview onNavigate={handleTabChange} />
        )}
        {activeTab === "timeline" && <Timeline />}
        {activeTab === "howtovote" && <HowToVote />}
        {activeTab === "quiz" && <Quiz />}
        {activeTab === "glossary" && <Glossary />}
      </main>
      <footer className="text-center py-8 border-t-2 border-border text-[#999] bg-cream mt-12" style={{ fontSize: "0.78rem", letterSpacing: "0.05em" }}>
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
