"use client";

import { useState } from "react";
import Header from "@/components/Header";
import NavTabs from "@/components/NavTabs";
import Overview from "@/components/Overview";
import Timeline from "@/components/Timeline";
import HowToVote from "@/components/HowToVote";
import Quiz from "@/components/Quiz";
import Glossary from "@/components/Glossary";
import Chatbot from "@/components/Chatbot";

export default function ElectEdApp() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
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
    </>
  );
}
