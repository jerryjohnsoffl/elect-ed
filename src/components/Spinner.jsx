"use client";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div 
        className="w-8 h-8 border-4 border-border border-t-red rounded-full"
        style={{
          borderTopColor: "var(--red)",
          animation: "spin 1s linear infinite"
        }}
      ></div>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
