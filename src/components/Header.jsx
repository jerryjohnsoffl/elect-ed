"use client";

export default function Header() {
  return (
    <header className="border-b-[3px] border-double border-border py-8 px-8 pb-6 bg-light relative text-center">
      <h1
        className="leading-none tracking-tight"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 900,
          letterSpacing: "-1px",
          color: "var(--ink)",
        }}
      >
        Elect<span className="text-red">Ed</span>
      </h1>
      <p
        className="mt-1.5 font-medium"
        style={{
          fontSize: "0.85rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--gold)",
        }}
      >
        Your Interactive Guide to the Democratic Process
      </p>
      <div
        className="block mt-2"
        style={{
          color: "var(--gold)",
          fontSize: "0.8rem",
          letterSpacing: "1em",
        }}
      >
        ★ ★ ★
      </div>
    </header>
  );
}
