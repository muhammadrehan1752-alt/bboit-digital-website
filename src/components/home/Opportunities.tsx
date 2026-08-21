import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Building, MapPin, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const OPPORTUNITIES = [
  {
    id: "opp-1",
    title: "Chagai Copper-Gold Extraction Plant",
    sector: "Minerals",
    location: "Chagai District",
    scale: "$50M - $100M",
    type: "Greenfield",
    status: "Feasibility Completed",
    description: "Establishment of a modern extraction and processing facility to capitalize on proven reserves in the Tethyan Copper Belt.",
    tags: ["Mining", "Export-oriented", "High-yield"]
  },
  {
    id: "opp-2",
    title: "Gwadar Seafood Processing Zone",
    sector: "Fisheries",
    location: "Gwadar Port",
    scale: "$10M - $25M",
    type: "Public-Private Partnership",
    status: "Seeking Investors",
    description: "Development of a state-of-the-art seafood processing and packaging zone for export to Middle Eastern and Asian markets.",
    tags: ["Export", "Value Addition", "Tax Exempt"]
  },
  {
    id: "opp-3",
    title: "Hub Industrial Wind Farm",
    sector: "Energy",
    location: "Hub District",
    scale: "$100M+",
    type: "Independent Power Producer",
    status: "Land Allocated",
    description: "A 50MW wind power generation project to supply clean energy to the expanding Hub Industrial Trading Estate.",
    tags: ["Renewable", "Infrastructure", "Power"]
  }
];

export function Opportunities() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const selectedOpp = OPPORTUNITIES.find(o => o.id === selectedId);

  const sectors = ["All", ...Array.from(new Set(OPPORTUNITIES.map(o => o.sector)))];
  const filteredOpps = activeFilter === "All" 
    ? OPPORTUNITIES 
    : OPPORTUNITIES.filter(o => o.sector === activeFilter);

  return (
    <section className="bg-background text-foreground py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 font-serif">
              Opportunity is everywhere.
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl text-balance">
              Discover curated, high-potential projects ready for investment across key growth sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 pb-2">
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap",
                  activeFilter === sector 
                    ? "bg-accent text-primary" 
                    : "bg-foreground/5 text-foreground/60 hover:bg-foreground/15 hover:text-foreground border border-foreground/10"
                )}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredOpps.map((opp) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layoutId={`card-container-${opp.id}`}
                key={opp.id}
                onClick={() => setSelectedId(opp.id)}
                className="group cursor-pointer bg-foreground/5 border border-foreground/10 rounded-[2rem] p-8 hover:bg-foreground/10 transition-colors"
              >
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase">{opp.sector}</span>
                <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <motion.h3 layoutId={`title-${opp.id}`} className="text-2xl font-bold mb-4 leading-tight">
                {opp.title}
              </motion.h3>
              <div className="space-y-2 text-sm text-foreground/60 mb-6">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {opp.location}</p>
                <p className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {opp.type}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {opp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-card/40 rounded-full text-xs text-foreground/80 border border-foreground/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && selectedOpp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-background/90 backdrop-blur-xl"
          >
            <motion.div
              layoutId={`card-container-${selectedOpp.id}`}
              className="bg-background text-foreground w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] relative"
            >
              <div className="sticky top-0 right-0 w-full flex justify-end p-6 z-10 pointer-events-none">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="w-12 h-12 bg-card/5 hover:bg-card/10 rounded-full flex items-center justify-center transition-colors pointer-events-auto backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 md:p-16 pt-0">
                <span className="text-sm font-bold tracking-widest text-accent uppercase mb-4 block">
                  {selectedOpp.sector}
                </span>
                <motion.h2 layoutId={`title-${selectedOpp.id}`} className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl leading-tight">
                  {selectedOpp.title}
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-8 border-y border-foreground/10">
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider mb-2">Location</p>
                    <p className="font-semibold">{selectedOpp.location}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider mb-2">Investment Scale</p>
                    <p className="font-semibold">{selectedOpp.scale}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider mb-2">Project Status</p>
                    <p className="font-semibold">{selectedOpp.status}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wider mb-2">Opportunity Type</p>
                    <p className="font-semibold">{selectedOpp.type}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                      {selectedOpp.description} This strategic project aims to leverage Balochistan's natural advantages and strategic location. Detailed pre-feasibility studies are available for registered investors, outlining projected ROI, land allocation details, and utility infrastructure readiness.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Strategic Importance</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                      Aligned with the provincial growth strategy, this initiative not only promises high returns but also benefits from government-backed incentives including tax holidays and fast-track approvals through the BBoIT single-window facility.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-background p-8 rounded-3xl">
                      <h4 className="font-bold mb-6">Take Action</h4>
                      <button className="w-full bg-accent text-primary py-4 rounded-xl font-medium tracking-wide hover:bg-accent/90 transition-colors mb-4">
                        REQUEST INVESTOR INFO
                      </button>
                      <button className="w-full bg-transparent border border-foreground/20 text-foreground py-4 rounded-xl font-medium tracking-wide hover:bg-background/5 transition-colors">
                        CONTACT INVESTOR DESK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
