import { motion, useInView, animate, useMotionValue, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, duration, inView }: { from: number, to: number, duration: number, inView: boolean }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span>{count}</span>;
}

const LandVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-white/20 fill-none absolute inset-0 transform scale-150 pointer-events-none" preserveAspectRatio="none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
      d="M-10,40 Q20,20 40,50 T90,40 T120,60" 
      strokeWidth="0.5"
    />
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      d="M-10,60 Q20,40 40,70 T90,60 T120,80" 
      strokeWidth="0.5"
    />
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
      d="M-10,80 Q20,60 40,90 T90,80 T120,100" 
      strokeWidth="0.5"
    />
  </svg>
);

const CoastlineVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#407BFF]/40 fill-none absolute bottom-0 pointer-events-none" preserveAspectRatio="none">
    <motion.path 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
      d="M0,80 Q25,70 50,80 T100,80" 
      strokeWidth="2"
    />
    <motion.path 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
      d="M0,90 Q25,80 50,90 T100,90" 
      strokeWidth="2"
      className="stroke-[#407BFF]/20"
    />
  </svg>
);

const ZonesVisual = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Expanding nodes */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [0, 1.5, 1], opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + (i * 0.15), duration: 0.6 }}
        className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(170, 179, 98,1)]"
        style={{
          top: `${30 + Math.random() * 40}%`,
          left: `${20 + Math.random() * 60}%`,
        }}
      />
    ))}
    <svg className="absolute inset-0 w-full h-full stroke-accent/20" strokeDasharray="2 4" fill="none">
       <motion.path 
         initial={{ pathLength: 0 }}
         whileInView={{ pathLength: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 2.5, delay: 0.8 }}
         d="M30,30 L70,70 M70,30 L30,70 M50,20 L50,80" 
         strokeWidth="0.5"
       />
    </svg>
  </div>
);

const MineralVisual = () => (
  <div className="absolute inset-0 flex flex-col justify-end pointer-events-none overflow-hidden">
    <motion.div 
      initial={{ height: "0%" }}
      whileInView={{ height: "40%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      className="w-full bg-[#AAB362]/5 border-t border-[#AAB362]/20"
    />
    <motion.div 
      initial={{ height: "0%" }}
      whileInView={{ height: "25%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      className="w-full bg-[#AAB362]/10 border-t border-[#AAB362]/30"
    />
    <motion.div 
      initial={{ height: "0%" }}
      whileInView={{ height: "10%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
      className="w-full bg-[#AAB362]/20 border-t border-[#AAB362]/50"
    />
  </div>
);

const STATS = [
  { num: 347, text: null, suffix: "K", unit: "sq km", label: "Land Area", desc: "44% of Pakistan's total landmass", progress: 44, Visual: LandVisual },
  { num: 750, text: null, suffix: "", unit: "km", label: "Coastline", desc: "Strategic access to the Arabian Sea", progress: 100, Visual: CoastlineVisual },
  { num: 10, text: null, suffix: "+", unit: "Zones", label: "Economic Nodes", desc: "Established and planned SEZs", progress: 60, Visual: ZonesVisual },
  { num: null, text: "Trillions", suffix: "", unit: "USD", label: "Mineral Value", desc: "Estimated untapped natural resources", progress: 85, Visual: MineralVisual },
];

export function DataMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background text-foreground py-32 border-t border-foreground/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <div className='mb-6 flex items-center space-x-4'>
             <span className='h-[1px] w-12 bg-accent'></span>
             <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>The Scale</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4 font-serif">
            Balochistan by <span className="italic text-accent">The Numbers.</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl text-balance font-light">
            Verified data showcasing the sheer scale of opportunity in the province, where immense landmass translates into immense potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Visual = stat.Visual;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative p-8 rounded-2xl bg-foreground/5 border border-foreground/10 group overflow-hidden h-[260px] flex flex-col justify-end"
              >
                {/* Embedded Conceptual Visual */}
                <Visual />

                <div className="relative z-10 mb-4">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-bold tracking-tighter text-foreground font-serif">
                      {stat.num !== null ? (
                        <Counter from={0} to={stat.num} duration={2.5} inView={isInView} />
                      ) : (
                        <motion.span
                          initial={{ opacity: 0, filter: "blur(10px)" }}
                          whileInView={{ opacity: 1, filter: "blur(0px)" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        >
                          {stat.text}
                        </motion.span>
                      )}
                      <span className="text-4xl">{stat.suffix}</span>
                    </span>
                    <span className="text-sm text-accent font-medium tracking-widest uppercase">{stat.unit}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/90 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-foreground/50 text-xs leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="relative w-full h-[2px] bg-foreground/10 rounded-full mt-auto overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${stat.progress}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                     className="absolute top-0 left-0 h-full bg-accent"
                   />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
