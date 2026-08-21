import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Pickaxe, Zap, Tractor, Briefcase, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SECTORS_DATA = [
  { id: "minerals", name: "Mines & Minerals", icon: Pickaxe, desc: "World-class deposits of copper, gold, and dimensional stones.", color: "text-accent" },
  { id: "energy", name: "Energy & Power", icon: Zap, desc: "Massive potential for solar, wind, and conventional power.", color: "text-foreground" },
  { id: "agriculture", name: "Agriculture", icon: Tractor, desc: "High-yield arable land for fruits, crops, and corporate farming.", color: "text-foreground" },
  { id: "industry", name: "Industries & SEZs", icon: Briefcase, desc: "Strategically located zones offering tax holidays.", color: "text-foreground" },
];

export function SectorsPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section ref={targetRef} className="relative h-[70vh] flex items-center overflow-hidden border-b border-foreground/5">
        <motion.div style={{ scale }} className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent/10 rounded-full" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-24">
           <div className='mb-6 flex items-center space-x-4'>
             <span className='h-[1px] w-12 bg-accent'></span>
             <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>Economic Engines</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 font-serif max-w-4xl">
             Core <span className="italic text-accent">Sectors.</span>
           </h1>
           <p className="text-xl text-foreground/60 max-w-2xl font-light leading-relaxed">
             Dive into specific investment opportunities, regulatory frameworks, and geological advantages that make these sectors high-yield prospects.
           </p>
        </div>
      </section>

      {/* Deep Dive Example (Minerals) */}
      <section className="py-32 border-b border-foreground/5 relative overflow-hidden">
        {/* Abstract geological layers */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-col">
          <div className="h-1/4 w-full border-b border-foreground/20 skew-y-3" />
          <div className="h-1/4 w-full border-b border-accent/40 skew-y-2" />
          <div className="h-1/4 w-full border-b border-accent/80 skew-y-1" />
          <div className="h-1/4 w-full border-b border-foreground/10 skew-y-0" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="p-4 inline-block bg-accent/10 border border-accent/20 mb-8 rounded-full">
                <Pickaxe className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Mines & Minerals</h2>
              <p className="text-foreground/60 leading-relaxed mb-8 text-lg">
                Balochistan is the mineral heart of Pakistan. Beneath the surface lies a world-class concentration of metallic and non-metallic deposits. The sector is moving from pure extraction to high-value processing.
              </p>
              
              <div className="space-y-6 border-l border-foreground/10 pl-6 mb-12">
                <div>
                  <h4 className="font-bold text-accent mb-1">The Opportunity</h4>
                  <p className="text-sm text-foreground/50">Copper-gold belts, lead-zinc deposits, and high-quality marble requiring modern extraction and processing facilities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-1">Value Chain</h4>
                  <p className="text-sm text-foreground/50">Exploration → Extraction → Local Processing → Export</p>
                </div>
              </div>

              <Link to="/invest" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground hover:text-accent transition-colors">
                View Mineral Projects <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {SECTORS_DATA.filter(s => s.id !== 'minerals').map(sector => (
                <div key={sector.id} className="p-8 border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer group flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <sector.icon className={`w-8 h-8 ${sector.color}`} />
                    <div>
                      <h3 className="font-serif text-2xl mb-1">{sector.name}</h3>
                      <p className="text-xs text-foreground/40">{sector.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-foreground/20 group-hover:text-accent transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
