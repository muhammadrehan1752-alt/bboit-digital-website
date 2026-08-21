import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Anchor, Globe, Boxes } from "lucide-react";

export function Gwadar() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 1]);

  return (
    <section ref={targetRef} className="relative min-h-screen bg-support text-foreground overflow-hidden flex items-center py-32">
      {/* Ocean Current Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-30 mix-blend-screen"
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[200%] text-blue-300">
           <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" opacity="0.1" />
           <path d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" fill="currentColor" opacity="0.2" />
           <path d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }}>
            <h2 className="text-sm tracking-[0.2em] font-bold text-blue-300 uppercase mb-4">Strategic Masterpiece</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
              THE PORT<br />OF GWADAR
            </h3>
            <p className="text-xl text-blue-100/70 text-balance mb-12">
              The crown jewel of the China-Pakistan Economic Corridor (CPEC). A deep-sea port transforming regional logistics, industry, and global trade connectivity.
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              {[
                { icon: Anchor, title: "Deep Sea Port", desc: "Handling massive cargo vessels with world-class efficiency." },
                { icon: Boxes, title: "Free Zone", desc: "Tax holidays and incentives for export-oriented manufacturing." },
                { icon: Globe, title: "Global Connectivity", desc: "Shortest route from Central Asia to global maritime trade." }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-blue-100/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="bg-foreground text-support px-8 py-4 rounded-full font-medium tracking-wide hover:bg-foreground/90 transition-colors flex items-center gap-2">
              EXPLORE GWADAR MASTER PLAN <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden glass-dark border border-foreground/10 hidden lg:flex items-center justify-center p-12">
             {/* Abstract Gwadar Representation */}
             <div className="w-full h-full relative">
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-blue-500/20 rounded-t-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/30 rounded-full flex items-center justify-center">
                   <div className="w-48 h-48 border border-blue-400/40 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-blue-500/20 rounded-full animate-pulse flex items-center justify-center backdrop-blur-md border border-blue-300/50">
                         <span className="font-bold tracking-widest text-blue-200">PORT</span>
                      </div>
                   </div>
                </div>
                {/* Simulated Trade Lines emanating from port */}
                <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))'}}>
                  <path d="M250,300 L100,100" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M250,300 L400,100" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M250,300 L50,250" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
