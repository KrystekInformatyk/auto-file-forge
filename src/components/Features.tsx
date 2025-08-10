import { ShieldCheck, Cog, Eye, GitCompare, FileText, UploadCloud } from "lucide-react";

const features = [
  { icon: UploadCloud, title: "File Watchers", desc: "Local folders, network shares, email inboxes, and cloud buckets." },
  { icon: FileText, title: "Smart Classification", desc: "Auto-detect type: scans, office docs, images, receipts, and more." },
  { icon: GitCompare, title: "Powerful Pipeline", desc: "OCR, PDF/A, compression, format conversion, renaming, routing." },
  { icon: Eye, title: "Metadata Extraction", desc: "Dates, amounts, names — build filenames and tags automatically." },
  { icon: Cog, title: "Rules Engine", desc: "If-this-then-that rules decide when and how to process files." },
  { icon: ShieldCheck, title: "Private by Design", desc: "Run entirely local for security; add signing, translate, or APIs." },
];

export const Features = () => {
  return (
    <section className="container py-10 sm:py-14">
      <h2 className="text-center text-2xl font-semibold sm:text-3xl">Built for busy teams</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
        Automate the boring work and keep full control over your documents.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article key={f.title} className="group rounded-xl border bg-card/60 p-5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5">
            <f.icon className="mb-3 opacity-80" />
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
