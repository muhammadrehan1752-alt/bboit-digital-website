import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

export const PROJECTS = [
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
  },
  {
    id: "opp-4",
    title: "Mekran Coastal Tourism Hub",
    sector: "Tourism",
    location: "Kund Malir",
    scale: "$5M - $15M",
    type: "Greenfield",
    status: "Planning",
    description: "Eco-tourism resort development along the pristine Mekran coast, targeting high-end domestic and international tourists.",
    tags: ["Hospitality", "Eco-friendly", "Coastal"]
  },
  {
    id: "opp-5",
    title: "Corporate Dairy Farm & Processing",
    sector: "Livestock",
    location: "Quetta Valley",
    scale: "$2M - $10M",
    type: "Joint Venture",
    status: "Active Search",
    description: "Large-scale corporate dairy farming focused on high-yield breeds and modern UHT milk processing capabilities.",
    tags: ["Agriculture", "FMCG", "Value Chain"]
  },
  {
    id: "opp-6",
    title: "Date Processing & Export Facility",
    sector: "Agriculture",
    location: "Panjgur",
    scale: "$3M - $8M",
    type: "Greenfield",
    status: "Feasibility Ongoing",
    description: "Advanced grading, packing, and processing facility for Balochistan's high-quality dates aimed at European markets.",
    tags: ["Agro-Industry", "Export", "Processing"]
  }
];

export function Invest() {
  const [activeFilter, setActiveFilter] = useState<string>("All Sectors");
  const filters = ["All Sectors", "Minerals", "Energy", "Gwadar", "Agriculture", "Fisheries", "Tourism"];

  const filteredProjects = activeFilter === "All Sectors" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.sector === activeFilter || (activeFilter === "Gwadar" && p.location.includes("Gwadar")));

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 text-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] border border-accent rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
           <div className='mb-6 flex items-center space-x-4'>
             <span className='h-[1px] w-12 bg-accent'></span>
             <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>The Pipeline</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 font-serif">
             Opportunity is <span className="italic text-accent">Everywhere.</span>
           </h1>
           <p className="text-lg text-foreground/60 max-w-2xl font-light leading-relaxed">
             Filter, explore, and compare vetted investment projects across Balochistan's high-growth sectors. From greenfield infrastructure to value-added processing.
           </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-foreground/10 pb-8">
           {filters.map((filter) => (
             <button 
               key={filter} 
               onClick={() => setActiveFilter(filter)}
               className={`px-4 py-2 border ${activeFilter === filter ? 'border-accent bg-accent/10 text-accent' : 'border-foreground/20 text-foreground/60 hover:text-foreground'} text-[10px] uppercase tracking-widest transition-colors`}
             >
               {filter}
             </button>
           ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((opp) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={opp.id} 
                className="group cursor-pointer bg-foreground/5 border border-foreground/10 rounded-xl p-8 hover:bg-foreground/10 transition-all duration-300"
              >
              <div className="flex justify-between items-start mb-12 border-b border-foreground/5 pb-4">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{opp.sector}</span>
                <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight font-serif">
                {opp.title}
              </h3>
              <div className="space-y-3 text-sm text-foreground/60 mb-8 border-l-2 border-accent/30 pl-4">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {opp.location}</p>
                <p className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-accent" /> {opp.type}</p>
                <p className="flex items-center gap-2 text-accent font-mono">{opp.scale}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {opp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-card/40 text-[10px] uppercase tracking-widest text-foreground/80 border border-foreground/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
