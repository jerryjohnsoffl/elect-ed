"use client";

import { useState, useCallback } from "react";
import { quizData } from "@/data/electionData";

export default function Quiz() {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const q = quizData[qIndex];
  const pct = ((qIndex + 1) / quizData.length) * 100;
  const letters = ["A", "B", "C", "D"];

  const selectAnswer = useCallback(
    (i) => {
      if (answered) return;
      setAnswered(true);
      setSelected(i);
      if (i === q.ans) setScore((s) => s + 1);
    },
    [answered, q.ans]
  );

  const nextQuestion = () => {
    if (qIndex + 1 >= quizData.length) {
      setShowResult(true);
    } else {
      setQIndex((i) => i + 1);
      setAnswered(false);
      setSelected(null);
    }
  };

  const restart = () => {
    setQIndex(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setShowResult(false);
  };

  const finalPct = quizData.length > 0 ? score / quizData.length : 0;
  const msgs = [
    "Keep reading — every election guide section will help!",
    "Good effort! Review the Timeline and Glossary to boost your score.",
    "Solid knowledge! A few more reads and you'll ace it.",
    "Excellent! You're well-informed and ready for Election Day!",
    "Perfect score! You're a true civics champion. 🏆",
  ];

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
          Test Your Knowledge
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
          Civics Quiz
        </h2>
        <p className="mt-2.5 text-[#555] max-w-[600px]" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
          10 questions. No time limit. See how much you know about the election
          process.
        </p>
      </div>

      <div className="max-w-[680px]">
        {!showResult ? (
          <div>
            {/* Progress */}
            <div className="flex justify-between items-center mb-2">
              <div
                className="font-semibold"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                Question {qIndex + 1} of {quizData.length}
              </div>
              <div
                style={{
                  fontSize: "0.88rem",
                  color: "#666",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                Score: {score}
              </div>
            </div>
            <div className="bg-border h-1 mb-8 relative">
              <div
                className="h-full bg-red transition-all duration-400"
                style={{ width: `${pct}%` }}
              />
            </div>

            {/* Question */}
            <div
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              {q.q}
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {q.opts.map((opt, i) => {
                let cls = "quiz-option";
                if (answered && i === q.ans) cls += " correct";
                else if (answered && i === selected && i !== q.ans)
                  cls += " wrong";

                return (
                  <button
                    key={i}
                    className={`${cls} bg-light border-[1.5px] border-border py-3.5 px-5 cursor-pointer text-left flex items-center gap-3`}
                    style={{ fontSize: "0.92rem", fontFamily: "var(--font-body)" }}
                    onClick={() => selectAnswer(i)}
                    disabled={answered}
                  >
                    <span
                      className="w-6 h-6 shrink-0 border-[1.5px] border-current flex items-center justify-center"
                      style={{ fontSize: "0.75rem", fontWeight: 700 }}
                    >
                      {letters[i]}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {answered && (
              <div
                className="mt-4 p-4 px-5 border-l-[3px] border-gold bg-cream"
                style={{ fontSize: "0.9rem", lineHeight: 1.6 }}
              >
                {selected === q.ans ? "✅ Correct! " : "❌ Incorrect. "}
                {q.exp}
              </div>
            )}

            {/* Next Button */}
            {answered && (
              <div className="mt-6">
                <button
                  className="py-3 px-6 border-2 border-ink bg-ink text-paper font-semibold tracking-wide uppercase cursor-pointer transition-colors duration-200 hover:bg-red hover:border-red"
                  style={{ fontSize: "0.88rem", fontFamily: "var(--font-body)" }}
                  onClick={nextQuestion}
                >
                  {qIndex + 1 >= quizData.length ? "See Results" : "Next →"}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Results */
          <div className="p-8 border-2 border-border bg-light text-center">
            <div
              className="mb-2"
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--gold)",
              }}
            >
              Final Score
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "4rem",
                fontWeight: 900,
                color: "var(--blue)",
                lineHeight: 1,
              }}
            >
              {score}/{quizData.length}
            </div>
            <p
              className="mt-3 mx-auto max-w-[400px]"
              style={{ fontSize: "1rem", color: "#555" }}
            >
              {msgs[Math.min(msgs.length - 1, Math.floor(finalPct * msgs.length))]}
            </p>
            <div className="mt-6">
              <button
                className="py-3 px-6 border-2 border-ink bg-ink text-paper font-semibold tracking-wide uppercase cursor-pointer transition-colors duration-200 hover:bg-red hover:border-red"
                style={{ fontSize: "0.88rem", fontFamily: "var(--font-body)" }}
                onClick={restart}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
