import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const messages = [
    "> Initializing Portfolio...",
    "> Loading Modules...",
    "> Compiling Assets...",
    "> Welcome, Recruiter 🚀",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLines((prev) => [...prev, messages[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 600);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-background">
      <div className="glass-card rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="font-mono text-sm space-y-2">
          {lines.map((line, i) => (
            <div
              key={i}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-primary">{line.substring(0, 2)}</span>
              <span className="text-foreground">{line.substring(2)}</span>
            </div>
          ))}
          {lines.length < messages.length && (
            <span className="typing-cursor" />
          )}
        </div>
        <div className="mt-6 h-1 rounded-full overflow-hidden" style={{ background: 'hsl(var(--muted))' }}>
          <div
            className="h-full rounded-full gradient-accent transition-all duration-500"
            style={{ width: `${(lines.length / messages.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
