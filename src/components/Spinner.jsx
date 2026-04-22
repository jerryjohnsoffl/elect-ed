"use client";

export default function Spinner({ label = "" } = {}) {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-4">
      <div 
        className="w-8 h-8 border-4 border-border border-t-red rounded-full"
        style={{
          borderTopColor: "var(--red)",
          animation: "spin 1s linear infinite"
        }}
      ></div>
      {label && (
        <p className="text-sm font-medium text-ink/60 animate-pulse">
          {label}
        </p>
      )}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

