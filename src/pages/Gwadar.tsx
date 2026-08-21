import { motion, useScroll, useTransform, animate, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Anchor, ArrowRight, Mountain, Pickaxe, MapPin, Wind, Briefcase } from "lucide-react";

function Counter({ from, to, duration, inView, decimal = false }: { from: number, to: number, duration: number, inView: boolean, decimal?: boolean }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(decimal ? Number(value.toFixed(1)) : Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, decimal]);

  return <span>{count}</span>;
}

export function Gwadar() {
  const targetRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const waveY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const routeScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
  const routeOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div ref={targetRef} className="bg-background text-foreground relative">
      
      {/* Hero Section */}
      <section className="h-screen sticky top-0 flex items-center overflow-hidden border-b border-foreground/5">
        <motion.div 
          style={{ y: waveY }}
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        >
          {/* Subtle ocean waves representation */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] border-t border-[#1B3B5A] bg-gradient-to-b from-[#1B3B5A]/20 to-transparent skew-y-3 origin-left" />
          <div className="absolute bottom-0 left-0 w-full h-[40vh] border-t border-[#1B3B5A]/50 bg-gradient-to-b from-[#1B3B5A]/10 to-transparent -skew-y-2 origin-right" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
           <div className='mb-6 flex items-center space-x-4'>
             <span className='h-[1px] w-12 bg-accent'></span>
             <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>The Crown Jewel</span>
           </div>
           <h1 className="text-7xl md:text-[120px] font-bold tracking-tighter uppercase mb-6 font-serif leading-[0.85]">
             GWADAR<br/>
             <span className="italic text-foreground/20">PORT.</span>
           </h1>
           <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl font-light leading-relaxed">
             Where Balochistan meets the world. The strategic anchor of CPEC, transforming regional logistics, maritime economy, and global trade connectivity.
           </p>
        </div>
      </section>

      {/* Cinematic Trade Route Section */}
      <section className="h-screen sticky top-0 bg-background/95 backdrop-blur-sm flex items-center overflow-hidden border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <h2 className="text-4xl md:text-6xl font-serif mb-6">Global Trade<br/><span className="text-accent italic">Reimagined.</span></h2>
             <p className="text-foreground/60 text-lg leading-relaxed mb-8">
               Gwadar is not just a port; it is a massive economic ecosystem. The Free Zone offers unprecedented tax holidays, while the deep sea port handles massive cargo vessels with world-class efficiency, creating the shortest route from Central Asia to the Arabian Sea.
             </p>
             <div ref={statsRef} className="grid grid-cols-2 gap-8 border-t border-foreground/10 pt-8">
               <div>
                 <span className="text-4xl font-bold font-serif text-accent mb-2 block">
                   {isStatsInView ? <Counter from={0} to={18} duration={2} inView={true} /> : "0"}m
                 </span>
                 <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold">Draft Depth</span>
               </div>
               <div>
                 <span className="text-4xl font-bold font-serif text-accent mb-2 block">
                   {isStatsInView ? <Counter from={0} to={23} duration={2} inView={true} /> : "0"}
                 </span>
                 <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold">Tax Free Years</span>
               </div>
               <div>
                 <span className="text-4xl font-bold font-serif text-accent mb-2 block">
                   {isStatsInView ? <Counter from={0} to={1.2} duration={2} decimal={true} inView={true} /> : "0"}M
                 </span>
                 <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold">Tons Capacity</span>
               </div>
               <div>
                 <span className="text-4xl font-bold font-serif text-accent mb-2 block">
                   {isStatsInView ? <Counter from={0} to={3} duration={2} inView={true} /> : "0"}
                 </span>
                 <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold">Multi-purpose Berths</span>
               </div>
             </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[500px] relative">
            <div className="absolute inset-0 border border-foreground/10 rounded-full flex items-center justify-center bg-foreground/5 overflow-hidden">
               <motion.div style={{ scale: routeScale, opacity: routeOpacity }} className="w-full h-full relative">
                 
                 {/* Map Base SVG Grid */}
                 <svg viewBox="0 0 500 500" className="w-full h-full absolute inset-0 text-foreground/10 pointer-events-none">
                    {/* Lat/Long Grid lines */}
                    <path d="M 0 125 L 500 125 M 0 250 L 500 250 M 0 375 L 500 375" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M 125 0 L 125 500 M 250 0 L 250 500 M 375 0 L 375 500" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    
                    {/* Abstract Landmass / Coastline */}
                    <path d="M 0 200 Q 150 250 250 250 T 500 180" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground/20" />
                 </svg>

                 {/* Animated Trade Routes */}
                 <svg viewBox="0 0 500 500" className="w-full h-full absolute inset-0 text-accent pointer-events-none">
                    {/* Middle East Route */}
                    <motion.path 
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                       d="M 50 150 Q 150 200 250 250" 
                       stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" 
                    />
                    {/* Central Asia Route */}
                    <motion.path 
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
                       d="M 250 50 Q 250 150 250 250" 
                       stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" 
                    />
                    {/* Africa Route */}
                    <motion.path 
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
                       d="M 100 400 Q 150 350 250 250" 
                       stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" 
                    />
                    {/* East Asia Route */}
                    <motion.path 
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
                       d="M 450 350 Q 350 350 250 250" 
                       stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" 
                    />
                    
                    {/* Pulsing Cargo Vessels along paths */}
                    <motion.circle 
                       animate={{ offsetDistance: ["0%", "100%"] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                       r="4" fill="currentColor"
                       style={{ offsetPath: "path('M 50 150 Q 150 200 250 250')" }}
                    />
                    <motion.circle 
                       animate={{ offsetDistance: ["0%", "100%"] }}
                       transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                       r="4" fill="currentColor"
                       style={{ offsetPath: "path('M 250 50 Q 250 150 250 250')" }}
                    />
                 </svg>

                 {/* Gwadar Central Hub */}
                 <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_30px_rgba(170,179,98,0.8)] z-10 flex items-center justify-center">
                    <div className="w-full h-full bg-accent rounded-full animate-ping opacity-50" />
                    <div className="absolute w-2 h-2 bg-card rounded-full" />
                 </div>

                 {/* Regional Nodes */}
                 <div className="absolute top-[30%] left-[10%] w-3 h-3 bg-foreground/50 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-foreground rounded-full"/></div>
                 <div className="absolute top-[10%] left-[50%] w-3 h-3 bg-foreground/50 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-foreground rounded-full"/></div>
                 <div className="absolute top-[80%] left-[20%] w-3 h-3 bg-foreground/50 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-foreground rounded-full"/></div>
                 <div className="absolute top-[70%] left-[90%] w-3 h-3 bg-foreground/50 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-foreground rounded-full"/></div>

               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Zones */}
      <section className="min-h-screen bg-background py-32 relative z-20 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-16 text-center font-bold">Gwadar Ecosystem</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: "Free Zone Phase I & II", icon: Briefcase, desc: "Manufacturing, processing, and assembly units geared for export." },
              { title: "Marine & Fisheries Hub", icon: Anchor, desc: "Modern boat building, seafood processing, and cold storage facilities." },
              { title: "Petrochemical City", icon: Wind, desc: "Designated zones for large-scale energy and petrochemical investments." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-foreground/5 border border-foreground/10 p-10 hover:bg-foreground/10 transition-colors">
                  <Icon className="w-8 h-8 text-accent mb-8" />
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
