import { Button } from "@/components/ui/button";
import { Sparkles, Settings2, History } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <header className="relative overflow-hidden py-20 sm:py-28">
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsl(var(--brand)/0.20), transparent 60%)",
          maskImage:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), black, transparent 60%)",
        }}
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <Sparkles className="opacity-80" /> Background automation for your docs
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Automatic Document Converter
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch folders, inboxes, and clouds; detect file types; run OCR and conversions; archive and distribute — all on autopilot.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="animate-pulse-glow">
              <Settings2 /> Configure Rules
            </Button>
            <Button variant="outline" size="lg">
              <History /> View History
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-card/60 p-4 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">Live queue</p>
            <p className="mt-1 text-2xl font-semibold">0 tasks</p>
          </div>
          <div className="rounded-xl border bg-card/60 p-4 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">Throughput</p>
            <p className="mt-1 text-2xl font-semibold">— files/min</p>
          </div>
          <div className="rounded-xl border bg-card/60 p-4 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">Last run</p>
            <p className="mt-1 text-2xl font-semibold">—</p>
          </div>
        </div>
      </div>
    </header>
  );
};
