"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { suggestedChips } from "@/data/electionData";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi! I'm ElectEd 🗳️ — ask me anything about voting, registration, or election terms. Or tap a question below!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || isLoading) return;

    setInput("");
    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Build history (exclude the initial bot greeting)
      const history = newMessages
        .slice(1) // skip greeting
        .map((m) => ({ role: m.role === "bot" ? "model" : "user", content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: history.slice(0, -1), // don't double-send the current message
        }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              "I'm having trouble connecting right now. Please try again in a moment! 🗳️",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Oops! Something went wrong. Check your connection and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Simple markdown-like formatting for bot messages
  const formatBotMessage = (text) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      // Bold
      let formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      
      // Bullets
      if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
        return (
          <li key={i} className="ml-4 list-disc" dangerouslySetInnerHTML={{ __html: formatted.trim().substring(2) }} />
        );
      }

      if (line.trim() === "") return <br key={i} />;
      return (
        <p
          key={i}
          className="my-1 first:mt-0 last:mb-0"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  };

  return (
    <>
      {/* FAB */}
      <button
        className="fixed bottom-7 right-7 w-14 h-14 bg-blue text-white border-none rounded-full text-2xl cursor-pointer z-[500] transition-all duration-200 hover:bg-red hover:scale-105"
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
        onClick={() => setIsOpen(!isOpen)}
        title="Ask a question"
        aria-label="Ask a question"
        id="chat-fab"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Panel */}
      <div className={`chat-panel ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div
          className="bg-ink text-paper py-3 px-4 flex justify-between items-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.95rem",
            fontWeight: 700,
          }}
        >
          <span>🗳️ Ask ElectEd</span>
          <button
            className="bg-transparent border-none text-paper text-lg cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.role === "user" ? "user" : "bot"}`}>
              {msg.role === "bot" ? formatBotMessage(msg.content) : msg.content}
            </div>
          ))}
          {isLoading && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chips */}
        <div className="py-2.5 px-4 flex flex-wrap gap-1.5 border-t border-border bg-cream">
          {suggestedChips.map((chip) => (
            <button
              key={chip}
              className="chip"
              onClick={() => sendMessage(chip)}
              disabled={isLoading}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex border-t border-border">
          <input
            className="flex-1 border-none py-3 px-4 bg-paper outline-none"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
            }}
            placeholder="Type a question…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            className="bg-blue text-white border-none px-4 cursor-pointer text-lg transition-colors duration-200 hover:bg-red disabled:opacity-50"
            onClick={() => sendMessage()}
            disabled={isLoading}
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
}
