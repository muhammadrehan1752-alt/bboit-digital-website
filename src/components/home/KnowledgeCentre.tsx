import { FileText, Download, Eye } from "lucide-react";

const DOCUMENTS = [
  { type: "Investment Guide", title: "Balochistan Investment Guide 2026", year: "2026", format: "PDF", size: "4.2 MB" },
  { type: "Sector Profile", title: "Mines & Minerals Exploration Framework", year: "2025", format: "PDF", size: "2.1 MB" },
  { type: "Policy", title: "Special Economic Zones Incentives", year: "2025", format: "PDF", size: "1.8 MB" },
  { type: "Tender", title: "Gwadar Free Zone Phase II Infrastructure", year: "2026", format: "ZIP", size: "12.5 MB" },
];

export function KnowledgeCentre() {
  return (
    <section className="bg-background py-32 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground uppercase mb-4 font-serif">
              Knowledge Centre
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl text-balance">
              Access official investment guides, sector profiles, policies, and tender documents.
            </p>
          </div>
          <button className="text-accent font-medium tracking-wide uppercase text-sm hover:text-foreground transition-colors">
            View Document Library →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCUMENTS.map((doc, i) => (
            <div key={i} className="group bg-foreground/5 border border-foreground/10 rounded-xl p-8 hover:bg-foreground/10 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-semibold tracking-wide text-foreground/60">
                    {doc.format}
                  </span>
                  <FileText className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
                </div>
                <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">
                  {doc.type}
                </h4>
                <h3 className="text-xl font-bold leading-tight text-foreground mb-4">
                  {doc.title}
                </h3>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                <span className="text-xs text-foreground/40 font-mono">{doc.year} • {doc.size}</span>
                <div className="flex gap-2">
                  <button className="p-2 bg-foreground/5 rounded-full hover:bg-foreground/20 hover:text-foreground transition-colors" title="Preview">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-foreground/5 rounded-full hover:bg-accent hover:text-primary transition-colors" title="Download">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
