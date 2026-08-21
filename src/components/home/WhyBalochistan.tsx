import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "motion/react";
import { Mountain, MapPin, Pickaxe, Users, Truck, ArrowUpRight } from "lucide-react";

function Counter({ from, to, duration, prefix = "", suffix = "", inView }: { from: number, to: number, duration: number, prefix?: string, suffix?: string, inView: boolean }) {
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

  return <span>{prefix}{count}{suffix}</span>;
}

const STORIES = [
  {
    id: "landscape",
    title: "THE LANDSCAPE",
    subtitle: "A canvas of monumental scale.",
    description: "Covering 44% of Pakistan's landmass, Balochistan offers unparalleled geographic depth, from deep-sea ports to mineral-rich mountain ranges.",
    icon: Mountain,
    color: "from-primary/80 to-charcoal",
    stat: { label: "Of National Landmass", to: 44, suffix: "%", duration: 2 }
  },
  {
    id: "location",
    title: "STRATEGIC LOCATION",
    subtitle: "The gateway to Central and South Asia.",
    description: "Positioned at the crossroads of global trade routes, connecting the Middle East, Central Asia, and the massive markets of South Asia.",
    icon: MapPin,
    color: "from-support/80 to-charcoal",
    stat: { label: "Borders", to: 3, suffix: " Countries", duration: 1.5 }
  },
  {
    id: "resources",
    title: "NATURAL WEALTH",
    subtitle: "Trillions in untapped potential.",
    description: "Home to world-class deposits of copper, gold, natural gas, and extensive coastline ripe for fisheries and renewable energy.",
    icon: Pickaxe,
    color: "from-accent/80 to-charcoal",
    stat: { label: "Estimated Mineral Value", to: 1, prefix: "$", suffix: " Trillion+", duration: 2.5 }
  },
  {
    id: "people",
    title: "THE PEOPLE",
    subtitle: "Resilient, young, and ready.",
    description: "A growing, dynamic workforce driven by an entrepreneurial spirit and a deep connection to the region's heritage and future.",
    icon: Users,
    color: "from-secondary/80 to-charcoal",
    stat: { label: "Population Under 30", to: 65, suffix: "%", duration: 2 }
  },
  {
    id: "infrastructure",
    title: "INFRASTRUCTURE",
    subtitle: "Building the future network.",
    description: "Rapidly expanding road networks, industrial zones, and the crown jewel of the CPEC: the Gwadar deep seaport.",
    icon: Truck,
    color: "from-primary/80 to-charcoal",
    stat: { label: "Gwadar Free Zone", to: 2281, suffix: " Acres", duration: 3 }
  },
  {
    id: "opportunity",
    title: "THE OPPORTUNITY",
    subtitle: "Your next great investment.",
    description: "Favorable policies, SEZs, and a dedicated facilitation board ready to turn your capital into generational growth.",
    icon: ArrowUpRight,
    color: "from-accent/80 to-charcoal",
    stat: { label: "Special Economic Zones", to: 4, suffix: " Active", duration: 1.5 }
  }
];

function StorySlide({ story, index, total }: { story: any, index: number, total: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40%" });
  const Icon = story.icon;

  return (
    <div
      ref={ref}
      className="h-screen w-screen flex flex-col justify-center items-center p-6 md:p-24 flex-shrink-0 relative"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-20`} />
      
      {/* Content Card */}
      <div className="max-w-4xl w-full relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="mb-8 p-4 inline-flex items-center justify-center rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-accent/50 text-xl font-mono tracking-wider">0{index + 1}</span>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">{story.title}</h3>
          </div>
          
          <h4 className="text-xl md:text-2xl text-secondary-foreground mb-6 font-serif italic">
            {story.subtitle}
          </h4>
          
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl text-balance">
            {story.description}
          </p>
        </div>

        {/* Dynamic Metric Card */}
        <div className="flex-1 w-full md:w-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark border border-foreground/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h5 className="text-6xl md:text-7xl font-serif text-accent mb-4">
               {isInView ? (
                 <Counter 
                   from={0} 
                   to={story.stat.to} 
                   duration={story.stat.duration} 
                   prefix={story.stat.prefix} 
                   suffix={story.stat.suffix} 
                   inView={isInView} 
                 />
               ) : "0"}
            </h5>
            <span className="text-sm uppercase tracking-[0.3em] font-bold text-foreground/50">{story.stat.label}</span>
          </motion.div>
        </div>
      </div>
      
      {/* Visual progression line */}
      <div className="absolute bottom-12 md:bottom-24 left-0 w-full px-6 md:px-24 flex items-center">
        <div className="h-[1px] bg-foreground/10 w-full relative">
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="absolute top-0 left-0 h-full bg-accent origin-left"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function WhyBalochistan() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.333333%"]); // (n-1)/n where n=6

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background text-foreground">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title overlay */}
        <div className="absolute top-12 left-6 md:left-12 md:top-24 z-10">
          <h2 className="text-sm tracking-[0.2em] text-accent font-semibold mb-2">DISCOVER</h2>
          <p className="text-3xl md:text-5xl font-serif text-foreground tracking-tight">Why Balochistan?</p>
        </div>

        <motion.div style={{ x }} className="flex">
          {STORIES.map((story, index) => (
             <StorySlide key={story.id} story={story} index={index} total={STORIES.length} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
