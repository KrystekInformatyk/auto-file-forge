import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const jobs = [
  { id: "a1", file: "Scan_2025-08-10_001.pdf", result: "PDF/A + OCR", status: "Queued" },
  { id: "a2", file: "Receipt_2025-08-09.jpg", result: "PDF + OCR", status: "Done" },
  { id: "a3", file: "Quarterly.xlsx", result: "CSV", status: "Failed" },
];

export const RecentJobs = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {jobs.map((j) => (
          <Card key={j.id} className="transition-transform duration-200 hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle className="text-base">{j.file}</CardTitle>
              <CardDescription>Result: {j.result}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">Status: {j.status}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
