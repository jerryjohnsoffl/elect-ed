"use client";

import { stepsData } from "@/data/electionData";

export default function HowToVote() {
  return (
    <section className="animate-fade-in">
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
          Your Action Plan
        </div>
        <h2
          className="mt-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          How to Vote
        </h2>
        <p className="mt-2.5 text-[#555] max-w-[600px]" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
          Follow these steps to make sure your vote counts. It&apos;s easier
          than you think.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-4">
        {stepsData.map((step, i) => (
          <div
            key={i}
            className="flex gap-6 items-start bg-light border border-border p-6 relative transition-shadow duration-200 hover:shadow-[4px_4px_0_var(--border)]"
          >
            <div
              className="shrink-0 w-11 h-11 bg-ink text-paper flex items-center justify-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
              }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <div
                className="mb-1.5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                }}
              >
                {step.title}
              </div>
              <div style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.6 }}>
                {step.text}
              </div>
              <div
                className="mt-2.5 py-2 px-3 bg-cream border-l-[3px] border-red"
                style={{ fontSize: "0.82rem", color: "#444" }}
              >
                💡 <strong className="text-red">Pro tip:</strong> {step.tip}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
