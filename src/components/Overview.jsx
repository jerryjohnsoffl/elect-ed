"use client";

/**
 * @fileoverview Overview tab — landing section of ElectEd
 * Features navigation cards and a Gemini-powered Civic Fact of the Day
 */

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Overview component — home tab with feature cards and AI-powered fact widget
 * @param {{ onNavigate: (tab: string) => void }} props
 */
function Overview({ onNavigate }) {
  const [civicFact, setCivicFact] = useState("");
  const [factLoading, setFactLoading] = useState(true);

  /** Fetch a Gemini-generated civic fact on mount */
  useEffect(() => {
    let cancelled = false;
    async function fetchFact() {
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message:
              "Share one fascinating, little-known civic or election fact in exactly 1–2 sentences. Be specific and surprising.",
            history: [],
          }),
        });
        const data = await res.json();
        if (!cancelled && data.reply) {
          setCivicFact(data.reply);
        }
      } catch {
        if (!cancelled)
          setCivicFact(
            "Did you know? The secret ballot was first introduced in Australia in 1856 — and is now used in democracies worldwide. 🗳️"
          );
      } finally {
        if (!cancelled) setFactLoading(false);
      }
    }
    fetchFact();
    return () => { cancelled = true; };
  }, []);

  const cards = [
    {
      num: "01",
      icon: "📅",
      title: "Election Timeline",
      text: "From announcement to results — see every stage of the electoral calendar and what happens when.",
      tab: "timeline",
    },
    {
      num: "02",
      icon: "🗳️",
      title: "How to Vote",
      text: "Step-by-step instructions: registration, finding your polling place, casting your ballot, and more.",
      tab: "howtovote",
    },
    {
      num: "03",
      icon: "🧠",
      title: "Test Yourself",
      text: "Think you know elections? Take our interactive quiz and find out how civics-savvy you really are.",
      tab: "quiz",
    },
    {
      num: "04",
      icon: "📖",
      title: "Glossary",
      text: 'Confused by "gerrymandering" or "runoff"? Search our plain-English dictionary of election terms.',
      tab: "glossary",
    },
  ];

  return (
    <section className="animate-fade-in" aria-labelledby="overview-heading">
      {/* Section Header */}
      <div className="border-b-2 border-border pb-4 mb-8">
        <div
          className="font-semibold"
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--red)",
          }}
        >
          Start Here
        </div>
        <h2
          id="overview-heading"
          className="mt-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          Understanding Elections
        </h2>
        <p
          className="mt-2.5 text-[#555] max-w-[600px]"
          style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
        >
          Elections are the backbone of democracy. This guide walks you through
          everything — from registering to understanding results.
        </p>
      </div>

      {/* AI-Powered Civic Fact of the Day */}
      <div
        className="mb-8 p-5 border-l-4 border-blue bg-light relative overflow-hidden"
        style={{ borderLeft: "4px solid var(--blue)" }}
        aria-live="polite"
        aria-label="AI-generated civic fact"
      >
        <div
          className="mb-1.5 flex items-center gap-2"
          style={{
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "var(--blue)",
            fontWeight: 700,
          }}
        >
          <span>✨</span>
          <span>AI Civic Fact of the Day</span>
          <span
            style={{
              fontSize: "0.6rem",
              background: "var(--blue)",
              color: "white",
              padding: "1px 6px",
              borderRadius: "2px",
            }}
          >
            Powered by Gemini
          </span>
        </div>
        {factLoading ? (
          <div
            style={{
              height: "1.2rem",
              width: "80%",
              background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s infinite",
              borderRadius: "3px",
            }}
          />
        ) : (
          <p style={{ fontSize: "0.92rem", color: "#333", lineHeight: 1.6, margin: 0 }}>
            {civicFact}
          </p>
        )}
      </div>

      {/* Stamp */}
      <div className="mb-6">
        <div className="stamp-box">CIVIC DUTY</div>
      </div>

      {/* Key Facts Bar */}
      <div
        className="bg-[var(--blue)] text-white p-4 px-6 flex justify-center gap-8 flex-wrap mb-8"


        role="region"
        aria-label="Key election facts"
      >
        {[
          { num: "3", label: "Levels of Govt." },
          { num: "18+", label: "Voting Age" },
          { num: "4", label: "Key Stages" },
          { num: "100%", label: "Your Voice Counts" },
        ].map((fact) => (
          <div key={fact.label} className="text-center">
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#ffd700",
              }}
            >
              {fact.num}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                opacity: 0.8,
              }}
            >
              {fact.label}
            </div>
          </div>
        ))}
      </div>

      {/* Cards Grid */}
      <div
        className="grid gap-6 mb-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        role="list"
        aria-label="Navigation cards"
      >
        {cards.map((card) => (
          <div
            key={card.num}
            className="bg-light border border-border p-6 relative cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            onClick={() => onNavigate(card.tab)}
            role="listitem"
            tabIndex={0}
            aria-label={`Navigate to ${card.title}`}
            onKeyDown={(e) => e.key === "Enter" && onNavigate(card.tab)}
          >
            <div
              className="absolute top-4 right-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3rem",
                fontWeight: 900,
                color: "var(--border)",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {card.num}
            </div>
            <div className="text-3xl mb-3" aria-hidden="true">{card.icon}</div>
            <div
              className="mb-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 700,
              }}
            >
              {card.title}
            </div>
            <div style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.6 }}>
              {card.text}
            </div>
          </div>
        ))}
      </div>

      {/* Why Voting Matters */}
      <div className="bg-cream border border-border p-6 mt-4">
        <div
          className="mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 700,
          }}
        >
          Why Does Voting Matter?
        </div>
        <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.7 }}>
          Every elected official — from your local school board to the head of
          government — gains power through votes. Elections decide who writes
          laws, manages budgets, leads the military, and shapes your daily life.
          A single vote can tip a close race. Voter turnout directly impacts
          policy outcomes. By participating, you shape the world around you.
        </p>
      </div>
    </section>
  );
}

Overview.propTypes = {
  /** Callback to navigate to another tab */
  onNavigate: PropTypes.func.isRequired,
};

export default Overview;
