import { ArrowRight, Cog, Folder, ScanText, FileCode2, HardDriveDownload } from "lucide-react";

export const Pipeline = () => {
  const steps = [
    { icon: Folder, title: "Watch", desc: "Folders · Inboxes · Cloud" },
    { icon: ScanText, title: "Classify", desc: "PDF · Image · Office" },
    { icon: Cog, title: "Process", desc: "OCR · Convert · Compress" },
    { icon: FileCode2, title: "Name", desc: "Use metadata & content" },
    { icon: HardDriveDownload, title: "Deliver", desc: "Archive · Distribute" },
  ];

  return (
    <section className="container py-10">
      <h2 className="text-center text-2xl font-semibold sm:text-3xl">How it flows</h2>
      <div className="mt-8 grid grid-cols-1 items-center gap-4 sm:grid-cols-5">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-center justify-center">
            <div className="rounded-xl border bg-card/60 p-5 text-center backdrop-blur-sm">
              <s.icon className="mx-auto mb-3" />
              <p className="font-medium">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="mx-2 hidden opacity-60 sm:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
