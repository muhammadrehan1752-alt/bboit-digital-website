import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Target, TrendingUp, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const REGIONS = [
  { 
    id: 'gwadar', 
    name: 'Gwadar District', 
    category: 'Coastal & Trade', 
    top: '80%', left: '25%', 
    info: 'The crown jewel of CPEC. Deep-sea port, free economic zone, and massive potential for seafood processing, petrochemicals, and logistics.', 
    opportunities: ['Gwadar Free Zone Phase II', 'Marine Drive Eco-Tourism', 'Seafood Processing Hub'],
    stats: { value: "$10B+", label: "Target Investment" }
  },
  { 
    id: 'chagai', 
    name: 'Chagai District', 
    category: 'Mining & Minerals', 
    top: '35%', left: '20%', 
    info: 'Home to Reko Diq and Saindak. The global frontier for copper and gold extraction, representing immense subterranean wealth.', 
    opportunities: ['Copper-Gold Extraction', 'Mineral Value Addition', 'Mining Infrastructure & Logistics'],
    stats: { value: "Tethyan", label: "Mineral Belt" }
  },
  { 
    id: 'quetta', 
    name: 'Quetta & Highlands', 
    category: 'Agriculture & Tech', 
    top: '25%', left: '65%', 
    info: 'The provincial capital. High-altitude climate ideal for premium orchards, corporate farming, and a growing IT ecosystem.', 
    opportunities: ['Corporate Agriculture', 'High-Altitude Cold Chain', 'Bostan Special Economic Zone'],
    stats: { value: "1,680m", label: "Elevation" }
  },
  { 
    id: 'hub', 
    name: 'Hub & Lasbela', 
    category: 'Industrial & Energy', 
    top: '75%', left: '75%', 
    info: 'The industrial powerhouse of Balochistan. Strategic proximity to Karachi makes it ideal for SEZs and renewable energy corridors.', 
    opportunities: ['Hub Industrial Estate', 'Wind Power Corridors', 'Manufacturing Assembly Units'],
    stats: { value: "50MW+", label: "Wind Potential" }
  },
  { 
    id: 'nasirabad', 
    name: 'Nasirabad Division', 
    category: 'Canal Agriculture', 
    top: '45%', left: '85%', 
    info: 'The only canal-irrigated division in Balochistan, representing the province\'s traditional agricultural and livestock breadbasket.', 
    opportunities: ['Agro-Processing Hubs', 'Corporate Dairy Farming', 'Textile & Yarn Units'],
    stats: { value: "Primary", label: "Irrigation Hub" }
  }
];

export function Discover() {
  const [selectedRegion, setSelectedRegion] = useState<typeof REGIONS[0] | null>(null);

  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Left Side - Interactive Map */}
        <div className={cn("w-full transition-all duration-500 ease-in-out", selectedRegion ? "lg:w-7/12" : "lg:w-full")}>
          <div className="mb-12">
             <div className='mb-6 flex items-center space-x-4'>
               <span className='h-[1px] w-12 bg-accent'></span>
               <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>Interactive Geography</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 font-serif">
               Discover <span className="italic text-accent">Balochistan.</span>
             </h1>
             <p className="text-xl text-foreground/60 max-w-2xl font-light leading-relaxed">
               Click on strategic regions across the topographic map to reveal specific investment climates, sectors, and active opportunities.
             </p>
          </div>

          <div className="relative w-full aspect-[4/3] max-h-[700px] bg-card/40 border border-foreground/5 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            {/* Topographic Map SVG Base */}
            <div className="absolute inset-0 p-8 opacity-40 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-white/20 fill-none" preserveAspectRatio="none">
                 {/* Abstract Topographic Lines resembling Balochistan */}
                 <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeOut" }} d="M10,20 Q40,10 70,30 T95,60 Q80,90 40,85 T5,50 Z" strokeWidth="0.5"/>
                 <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.2, ease: "easeOut" }} d="M15,25 Q40,15 65,33 T88,60 Q75,85 40,80 T10,50 Z" strokeWidth="0.5"/>
                 <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.4, ease: "easeOut" }} d="M20,30 Q40,20 60,36 T81,60 Q70,80 40,75 T15,50 Z" strokeWidth="0.5"/>
                 <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.6, ease: "easeOut" }} d="M25,35 Q40,25 55,39 T74,60 Q65,75 40,70 T20,50 Z" strokeWidth="0.5" className="stroke-accent/40"/>
              </svg>
            </div>

            {/* Region Hotspots */}
            <div className="absolute inset-0">
              {REGIONS.map((region, i) => (
                <motion.div
                  key={region.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + (i * 0.2), duration: 0.5 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: region.top, left: region.left }}
                >
                  <button
                    onClick={() => setSelectedRegion(region)}
                    className={cn(
                      "group relative flex items-center justify-center",
                      selectedRegion?.id === region.id ? "z-30" : "z-10"
                    )}
                  >
                    {/* Ripple Effect */}
                    {selectedRegion?.id === region.id && (
                      <motion.div
                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                        className="absolute w-8 h-8 rounded-full bg-accent"
                      />
                    )}
                    
                    {/* Core Dot */}
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10",
                      selectedRegion?.id === region.id 
                        ? "bg-accent border-foreground scale-125 shadow-[0_0_20px_rgba(170, 179, 98,0.8)]" 
                        : "bg-card border-accent group-hover:scale-125 group-hover:bg-accent/50"
                    )} />

                    {/* Label */}
                    <div className={cn(
                      "absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded bg-card/80 backdrop-blur-md border border-foreground/10 text-[10px] uppercase tracking-widest font-bold transition-all duration-300",
                      selectedRegion?.id === region.id ? "opacity-100 text-accent border-accent/50" : "opacity-0 group-hover:opacity-100 text-foreground"
                    )}>
                      {region.name}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Side - Slide-out Overlay Panel */}
        <AnimatePresence>
          {selectedRegion && (
            <motion.div
              initial={{ opacity: 0, x: 50, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "100%" }}
              exit={{ opacity: 0, x: 50, width: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:w-5/12 shrink-0 h-full max-h-[850px] sticky top-32"
            >
              <div className="h-full bg-foreground/5 border border-foreground/10 backdrop-blur-xl p-8 md:p-12 flex flex-col relative overflow-y-auto custom-scrollbar">
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedRegion(null)}
                  className="absolute top-8 right-8 p-2 bg-card/50 hover:bg-accent hover:text-primary rounded-full transition-colors border border-foreground/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="mb-8 pr-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-widest font-bold rounded-full mb-4">
                    <MapPin className="w-3 h-3" /> {selectedRegion.category}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif mb-4">{selectedRegion.name}</h2>
                  <p className="text-foreground/60 leading-relaxed font-light">
                    {selectedRegion.info}
                  </p>
                </div>

                {/* Highlight Stat */}
                <div className="bg-card/40 border border-foreground/5 p-6 rounded-xl mb-8 flex items-center justify-between border-l-2 border-l-accent">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-foreground/50 mb-1">{selectedRegion.stats.label}</span>
                    <span className="text-2xl font-bold font-serif text-foreground">{selectedRegion.stats.value}</span>
                  </div>
                  <TrendingUp className="w-8 h-8 text-accent/50" />
                </div>

                {/* Opportunities List */}
                <div className="flex-1">
                  <h3 className="text-sm uppercase tracking-widest font-bold text-foreground/80 mb-6 flex items-center gap-2">
                    <Target className="w-4 h-4 text-accent" /> Key Opportunities
                  </h3>
                  <ul className="space-y-4">
                    {selectedRegion.opportunities.map((opp, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        key={idx}
                        className="group p-4 bg-foreground/5 border border-foreground/5 hover:border-accent/30 hover:bg-foreground/10 transition-all rounded-lg flex items-center justify-between cursor-pointer"
                      >
                        <span className="text-sm font-medium">{opp}</span>
                        <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-accent transition-colors" />
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
