import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const sampleRules = [
  { name: "Scans → Searchable PDF/A", when: "file.type = pdf & pdf.scanned = true", actions: "ocr, pdfa, compress", output: "Archive/Invoices" },
  { name: "Photos → OCR PDF", when: "file.type in [jpg,png]", actions: "deskew, ocr", output: "Archive/Scans" },
  { name: "DOCX → Markdown", when: "file.type = docx", actions: "convert:md", output: "KnowledgeBase" },
  { name: "XLSX → CSV", when: "file.type = xlsx", actions: "convert:csv", output: "Exports" },
];

export const RulesPreview = () => {
  return (
    <section className="container py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">Example rules</h2>
        <div className="mt-6 overflow-hidden rounded-xl border bg-card/60 backdrop-blur-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rule</TableHead>
                <TableHead>When</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead>Destination</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleRules.map((r) => (
                <TableRow key={r.name}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.when}</TableCell>
                  <TableCell>{r.actions}</TableCell>
                  <TableCell>{r.output}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
