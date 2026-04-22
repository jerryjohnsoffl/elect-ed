"use client";

import { useState, useMemo } from "react";
import { glossaryData } from "@/data/electionData";

export default function Glossary() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return glossaryData;
    return glossaryData.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.def.toLowerCase().includes(q) ||
        g.tag.toLowerCase().includes(q)
    );
  }, [search]);

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
          Reference
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
          Election Glossary
        </h2>
        <p className="mt-2.5 text-[#555] max-w-[600px]" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
          Search for any election term to get a clear, plain-English definition.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex mb-6 border-2 border-ink">
        <input
          className="flex-1 py-3 px-4 border-none bg-light outline-none"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem" }}
          type="text"
          placeholder="Search terms... (e.g. 'ballot', 'caucus')"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-4 bg-ink text-paper border-none cursor-pointer"
          style={{ fontSize: "1.1rem" }}
          onClick={() => setSearch("")}
        >
          ✕
        </button>
      </div>

      {/* Glossary Grid */}
      {filtered.length === 0 ? (
        <div className="text-center text-[#999] py-8" style={{ fontSize: "0.9rem" }}>
          No terms found for &quot;{search}&quot;. Try a different search.
        </div>
      ) : (
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {filtered.map((g) => (
            <div
              key={g.term}
              className="border border-border bg-light p-4 px-5 transition-shadow duration-200 hover:shadow-[3px_3px_0_var(--border)]"
            >
              <span
                className="inline-block mb-2 py-0.5 px-2 bg-cream border border-border"
                style={{
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--gold)",
                }}
              >
                {g.tag}
              </span>
              <div
                className="mb-1.5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--blue)",
                }}
              >
                {g.term}
              </div>
              <div style={{ fontSize: "0.86rem", lineHeight: 1.6, color: "#555" }}>
                {g.def}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
