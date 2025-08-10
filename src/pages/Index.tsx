import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pipeline } from "@/components/Pipeline";
import { RulesPreview } from "@/components/RulesPreview";
import { RecentJobs } from "@/components/RecentJobs";
import { Seo } from "@/components/Seo";

const Index = () => {
  const title = "Automatic Document Converter — Background OCR & File Rules";
  const description = "Detect new files, auto-convert with OCR, PDF/A, and format rules. Secure, local, with logs and history.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Automatic Document Converter",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS, Linux",
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <Seo title={title} description={description} canonical={window.location.href} jsonLd={jsonLd} />
      <main>
        <Hero />
        <Features />
        <Pipeline />
        <RulesPreview />
        <RecentJobs />
      </main>
    </>
  );
};

export default Index;
