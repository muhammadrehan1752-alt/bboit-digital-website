import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";

const MineralVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-8">
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px]" fill="none">
      <motion.path
        initial={{ pathLength: 0, opacity: 0, y: 20 }}
        animate={{ pathLength: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        d="M100 20 L160 60 L160 140 L100 180 L40 140 L40 60 Z"
        className="stroke-accent"
        strokeWidth="2"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        d="M100 20 L100 100 M40 60 L100 100 M160 60 L100 100 M40 140 L100 100 M160 140 L100 100 M100 180 L100 100"
        className="stroke-accent"
        strokeWidth="1"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        cx="100" cy="100" r="15"
        className="fill-accent/20 stroke-accent"
        strokeWidth="2"
      />
      {/* Abstract gem facets */}
      <motion.path
        initial={{ fillOpacity: 0 }}
        animate={{ fillOpacity: 0.1 }}
        transition={{ duration: 1, delay: 1.5 }}
        d="M100 20 L160 60 L100 100 Z"
        className="fill-accent"
      />
    </svg>
  </div>
);

const EnergyVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-8">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-full h-full max-w-[300px] relative"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0" fill="none">
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          cx="100" cy="100" r="80"
          className="stroke-accent/30"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        {[0, 120, 240].map((deg, i) => (
          <motion.path
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            style={{ transformOrigin: "100px 100px", rotate: `${deg}deg` }}
            d="M100 100 L100 30 Q130 45 100 100"
            className="fill-accent/20 stroke-accent"
            strokeWidth="2"
          />
        ))}
        <circle cx="100" cy="100" r="10" className="fill-accent" />
      </svg>
    </motion.div>
  </div>
);

const AgricultureVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-8">
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px]" fill="none">
      {[40, 70, 100, 130, 160].map((y, i) => (
        <motion.path
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
          d={`M20 ${y} Q60 ${y - 20} 100 ${y} T180 ${y}`}
          className="stroke-accent"
          strokeWidth="2"
        />
      ))}
      <motion.path
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ transformOrigin: "bottom" }}
        d="M100 160 L100 80 M100 80 Q115 70 100 60 Q85 70 100 80"
        className="stroke-accent fill-accent/20"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const FisheriesVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-8">
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px]" fill="none">
      {[100, 120, 140].map((y, i) => (
        <motion.path
          key={i}
          initial={{ pathLength: 0, x: -20 }}
          animate={{ pathLength: 1, x: 0 }}
          transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }}
          d={`M10 ${y} Q55 ${y - 30} 100 ${y} T190 ${y}`}
          className="stroke-accent"
          strokeWidth={3 - i * 0.5}
          style={{ opacity: 1 - i * 0.2 }}
        />
      ))}
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 2], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        cx="100" cy="100" r="20"
        className="stroke-accent"
        strokeWidth="1"
      />
    </svg>
  </div>
);

const IndustryVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-8">
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px]" fill="none">
      {/* Isometric Grid Base */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 1 }}
        d="M20 100 L100 60 L180 100 L100 140 Z"
        className="stroke-accent"
        strokeWidth="1"
      />
      {/* Building 1 */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        d="M80 110 L80 50 L120 30 L120 90 Z M80 50 L60 60 L100 80 L120 30"
        className="stroke-accent fill-accent/10"
        strokeWidth="2"
      />
      {/* Data/Connectivity Nodes */}
      {[
        { cx: 60, cy: 60, delay: 1.5 },
        { cx: 100, cy: 80, delay: 1.7 },
        { cx: 80, cy: 110, delay: 1.9 }
      ].map((node, i) => (
        <motion.circle
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: node.delay }}
          cx={node.cx} cy={node.cy} r="4"
          className="fill-accent"
        />
      ))}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2 }}
        d="M60 60 L100 80 L80 110"
        className="stroke-accent"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  </div>
);

const SECTORS = [
  { 
    id: "minerals", 
    name: "Mines & Minerals", 
    valueProp: "$1 Trillion+ Untapped Value",
    desc: "Balochistan sits on the Tethyan Metallogenic Belt. Home to world-class deposits of copper, gold, barite, and rare earth elements awaiting mechanized extraction.",
    metrics: [{ label: "Copper & Gold", val: "World-Class" }, { label: "Geological Mapping", val: "Expanding" }],
    Visual: MineralVisual,
  },
  { 
    id: "energy", 
    name: "Renewable Energy", 
    valueProp: "High Irradiance & Wind Corridors",
    desc: "The future of Pakistan's energy mix. Immense potential for mega-scale solar parks and wind farms along the Hub coastal corridor.",
    metrics: [{ label: "Wind Potential", val: "50GW+" }, { label: "Solar Irradiance", val: "Premium" }],
    Visual: EnergyVisual,
  },
  { 
    id: "agriculture", 
    name: "Agriculture & Livestock", 
    valueProp: "Premium Organic & Halal Exports",
    desc: "Diverse climatic zones perfect for high-value orchards, corporate farming, and a massive halal meat export industry targeting the Middle East.",
    metrics: [{ label: "Arable Land", val: "44% of PK" }, { label: "Halal Market", val: "Global Access" }],
    Visual: AgricultureVisual,
  },
  { 
    id: "fisheries", 
    name: "Maritime & Fisheries", 
    valueProp: "The Blue Economy",
    desc: "750 kilometers of pristine Arabian Sea coastline. Unprecedented opportunities in commercial fishing, seafood processing, and aquaculture.",
    metrics: [{ label: "Coastline", val: "750km" }, { label: "Export Focus", val: "Value-Added Seafood" }],
    Visual: FisheriesVisual,
  },
  { 
    id: "industries", 
    name: "SEZs & Manufacturing", 
    valueProp: "Tax-Free Industrial Havens",
    desc: "Plug-and-play industrial infrastructure with Special Economic Zones (SEZs) offering massive tax holidays and direct connectivity to ports.",
    metrics: [{ label: "Tax Holidays", val: "Up to 23 Yrs" }, { label: "Key SEZs", val: "Gwadar, Hub, Bostan" }],
    Visual: IndustryVisual,
  },
];

export function Sectors() {
  const [activeSector, setActiveSector] = useState(SECTORS[0]);

  return (
    <section className="bg-background py-32 border-t border-foreground/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className='mb-6 flex items-center justify-center md:justify-start space-x-4'>
               <span className='h-[1px] w-12 bg-accent'></span>
               <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>Investment Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-serif text-foreground">
              Strategic <span className="italic text-accent">Sectors.</span>
            </h2>
          </div>
          <p className="text-foreground/60 text-lg max-w-lg font-light leading-relaxed">
            Discover precision-targeted economic zones designed for high-yield returns and sustainable, long-term global partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left: Sector Navigation List */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {SECTORS.map((sector) => {
              const isActive = activeSector.id === sector.id;
              return (
                <button
                  key={sector.id}
                  onMouseEnter={() => setActiveSector(sector)}
                  onClick={() => setActiveSector(sector)}
                  className={cn(
                    "group relative text-left p-6 rounded-2xl transition-all duration-500 overflow-hidden border",
                    isActive ? "bg-foreground/5 border-foreground/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent border-transparent hover:bg-foreground/5"
                  )}
                >
                  {/* Active Indicator Line */}
                  <div className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 bg-accent transition-transform duration-500 origin-top",
                    isActive ? "scale-y-100" : "scale-y-0"
                  )} />

                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className={cn(
                        "text-xl md:text-2xl font-bold font-serif tracking-tight transition-colors duration-300 mb-1",
                        isActive ? "text-foreground" : "text-foreground/50 group-hover:text-foreground/80"
                      )}>
                        {sector.name}
                      </h3>
                      <p className={cn(
                        "text-xs uppercase tracking-widest transition-colors duration-300 font-bold",
                        isActive ? "text-accent" : "text-transparent"
                      )}>
                        {sector.valueProp}
                      </p>
                    </div>
                    <ChevronRight className={cn(
                      "w-6 h-6 transition-all duration-300",
                      isActive ? "text-accent translate-x-1 opacity-100" : "text-foreground/20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                    )} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Sector Presentation */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full"
              >
                <div className="h-full w-full glass-dark rounded-[2rem] border border-foreground/10 overflow-hidden relative flex flex-col group">
                  
                  {/* Animated Visual Background / Header */}
                  <div className="relative h-64 bg-[#0A120D] border-b border-foreground/5 overflow-hidden">
                     {/* Glow behind visual */}
                     <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-50" />
                     
                     {/* Dynamic Visual Component */}
                     <activeSector.Visual />
                  </div>

                  {/* Text & Metrics Area */}
                  <div className="p-8 md:p-12 flex-grow flex flex-col justify-between relative z-10 bg-gradient-to-b from-transparent to-black/60">
                    <div>
                      <h4 className="text-3xl font-serif text-foreground mb-4">{activeSector.name}</h4>
                      <p className="text-foreground/70 text-base md:text-lg font-light leading-relaxed mb-8">
                        {activeSector.desc}
                      </p>
                    </div>
                    
                    <div>
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-foreground/10 mb-8">
                        {activeSector.metrics.map((metric, i) => (
                          <div key={i}>
                            <span className="block text-[10px] uppercase tracking-widest text-foreground/40 mb-1">{metric.label}</span>
                            <span className="block text-lg font-bold text-accent font-serif">{metric.val}</span>
                          </div>
                        ))}
                      </div>

                      <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-foreground hover:text-accent transition-colors group/btn">
                        View Detailed Prospectus
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
