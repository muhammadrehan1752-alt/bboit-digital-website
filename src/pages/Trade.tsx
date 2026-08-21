import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Trade() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Abstract Trade Map Background */}
      <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center pointer-events-none">
         <div className="w-full max-w-4xl h-[600px] border border-foreground/10 rounded-full flex items-center justify-center relative">
            <div className="w-[80%] h-[80%] border border-accent/20 rounded-full" />
            <div className="w-[60%] h-[60%] border border-accent/40 rounded-full" />
            {/* Pulsing origin node (Gwadar/Balochistan) */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_rgba(170, 179, 98,1)] -translate-x-1/2 -translate-y-1/2" />
            
            {/* Outgoing lines */}
            <svg className="absolute inset-0 w-full h-full text-foreground/30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none">
              <path d="M 50% 50% L 20% 20%" />
              <path d="M 50% 50% L 80% 30%" />
              <path d="M 50% 50% L 70% 80%" />
              <path d="M 50% 50% L 30% 70%" />
            </svg>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center">
           <div className='mb-6 flex items-center justify-center space-x-4'>
             <span className='h-[1px] w-12 bg-accent'></span>
             <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>Connectivity</span>
             <span className='h-[1px] w-12 bg-accent'></span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 font-serif max-w-4xl mx-auto">
             Connected to <span className="italic text-accent">The World.</span>
           </h1>
           <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
             Balochistan sits at the crossroads of global economic movement. Connecting the massive markets of South Asia with the Middle East and Central Asia.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-48">
          <div className="bg-card/50 backdrop-blur-md border border-foreground/10 p-8 text-center">
            <h3 className="text-3xl font-serif text-accent mb-4">Central Asia</h3>
            <p className="text-sm text-foreground/60">Providing landlocked Central Asian republics the shortest possible maritime access via the Gwadar-Kashgar corridor.</p>
          </div>
          <div className="bg-card/50 backdrop-blur-md border border-foreground/10 p-8 text-center md:-translate-y-12">
            <h3 className="text-3xl font-serif text-accent mb-4">Middle East</h3>
            <p className="text-sm text-foreground/60">Proximity to the Gulf allows rapid export of agricultural goods, livestock, and minerals across the Arabian Sea.</p>
          </div>
          <div className="bg-card/50 backdrop-blur-md border border-foreground/10 p-8 text-center">
            <h3 className="text-3xl font-serif text-accent mb-4">South Asia</h3>
            <p className="text-sm text-foreground/60">Serving as the Western gateway to the broader South Asian market, bridging trade routes through established national highway networks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
