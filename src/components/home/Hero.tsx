import { motion, useScroll, useTransform, animate } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Map } from "lucide-react";
import { useState, useEffect } from "react";

function Counter({ from, to, duration, prefix = "", suffix = "" }: { from: number, to: number, duration: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.round(value));
      }
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <span>{prefix}{count}{suffix}</span>;
}

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Dynamic Background Layer */}
      <div className='absolute inset-0 opacity-20 pointer-events-none'>
        <motion.div 
          style={{ y: y1 }}
          className='absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full border border-accent opacity-30' 
        />
        <motion.div 
          style={{ y: y2 }}
          className='absolute top-[10%] right-[0%] w-[500px] h-[500px] rounded-full border border-accent opacity-20' 
        />
        <motion.div 
          style={{ x: y2 }}
          className='absolute bottom-[-20%] left-[-10%] w-[800px] h-[400px] border-t border-accent skew-y-12' 
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-transparent z-0 pointer-events-none" />

      {/* Floating Data Metrics */}
      <motion.div 
         initial={{ opacity: 0, x: -50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
         className="absolute hidden lg:flex flex-col gap-6 left-12 top-1/2 -translate-y-1/2 z-20"
         style={{ y: y1 }}
      >
        <div className="glass-dark border border-foreground/10 p-6 rounded-2xl">
           <span className="text-3xl font-serif text-accent block mb-1">
             <Counter from={0} to={1} duration={2} prefix="$" suffix="T+" />
           </span>
           <span className="text-[10px] uppercase tracking-widest text-foreground/50">Untapped Minerals</span>
        </div>
        <div className="glass-dark border border-foreground/10 p-6 rounded-2xl">
           <span className="text-3xl font-serif text-accent block mb-1">
             <Counter from={0} to={750} duration={2.5} suffix="km" />
           </span>
           <span className="text-[10px] uppercase tracking-widest text-foreground/50">Strategic Coastline</span>
        </div>
        <div className="glass-dark border border-foreground/10 p-6 rounded-2xl">
           <span className="text-3xl font-serif text-accent block mb-1">
             <Counter from={0} to={44} duration={2} suffix="%" />
           </span>
           <span className="text-[10px] uppercase tracking-widest text-foreground/50">Of Pakistan's Landmass</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, y: y2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <div className='mb-6 flex items-center space-x-4'>
            <span className='h-[1px] w-12 bg-accent'></span>
            <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>The Future is Balochistan</span>
            <span className='h-[1px] w-12 bg-accent'></span>
          </div>
          <h1 className="text-6xl md:text-[100px] leading-[0.85] font-light mb-8 font-serif text-foreground uppercase">
            Invest in<br/>
            <span className="font-bold italic text-accent">Balochistan.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance"
        >
          Discover one of the world's most resource-rich strategic gateways. Where geographic legacy meets modern economic intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Link
            to="/invest"
            className="px-10 py-5 bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            EXPLORE OPPORTUNITIES
          </Link>
          <div className='flex flex-col text-left'>
             <span className='text-[10px] uppercase tracking-widest opacity-50 mb-1 text-foreground'>Strategic Hub</span>
             <span className='text-sm font-medium text-foreground'>South Asia Gateway</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-foreground/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
