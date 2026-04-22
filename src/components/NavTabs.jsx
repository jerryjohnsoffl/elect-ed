"use client";

import PropTypes from "prop-types";

const tabs = [
  { id: "overview", icon: "📋", label: "Overview" },
  { id: "timeline", icon: "📅", label: "Timeline" },
  { id: "howtovote", icon: "🗳️", label: "How to Vote" },
  { id: "quiz", icon: "🧠", label: "Quiz" },
  { id: "glossary", icon: "📖", label: "Glossary" },
];

function NavTabs({ activeTab, onTabChange }) {
  return (
    <nav
      className="flex justify-center border-b-2 border-border bg-cream overflow-x-auto"
      style={{ scrollbarWidth: "none" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-btn ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon} {tab.label}
        </button>
      ))}
    </nav>
  );
}

NavTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default NavTabs;
