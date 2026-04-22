"use client";

import { useState } from "react";
import { timelineData } from "@/data/electionData";

export default function Timeline() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

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
          Step by Step
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
          Election Timeline
        </h2>
        <p className="mt-2.5 text-[#555] max-w-[600px]" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
          Click any stage to expand details about what happens and what you
          should do.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {timelineData.map((item, i) => (
          <div
            key={i}
            className={`tl-item relative mb-0 cursor-pointer ${openItems[i] ? "open" : ""}`}
          >
            <div className="tl-dot" />
            <div
              className="p-4 px-5 border border-border bg-light flex justify-between items-center transition-colors duration-200 mb-[2px] hover:bg-cream"
              onClick={() => toggle(i)}
            >
              <div className="flex items-center gap-4">
                <span
                  className="shrink-0 text-white px-2.5 py-1"
                  style={{
                    background: "var(--blue)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.phase}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </span>
              </div>
              <span className="tl-chevron text-[#999] text-xs">▼</span>
            </div>
            <div className="tl-body bg-cream border border-border border-t-0 mb-5">
              <div className="p-5 px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p
                  className="col-span-full"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "#444",
                  }}
                >
                  {item.desc}
                </p>
                {item.details.map((d, j) => (
                  <div
                    key={j}
                    className="border-l-[3px] border-gold py-2.5 px-3 bg-light"
                  >
                    <div
                      className="font-semibold"
                      style={{
                        fontSize: "0.68rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--gold)",
                      }}
                    >
                      {d.label}
                    </div>
                    <div className="mt-1" style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>
                      {d.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
