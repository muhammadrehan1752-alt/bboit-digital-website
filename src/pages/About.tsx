import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24">
           <div className='mb-6 flex items-center space-x-4'>
             <span className='h-[1px] w-12 bg-accent'></span>
             <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>The Institution</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 font-serif max-w-4xl">
             The Institution Behind <span className="italic text-accent">The Opportunity.</span>
           </h1>
           <p className="text-xl text-foreground/60 max-w-2xl font-light leading-relaxed">
             The Balochistan Board of Investment & Trade (BBoIT) is the principal agency for promoting investment and trade in Balochistan, bridging global capital with the province's vast potential.
           </p>
        </div>

        {/* Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
           <div className="border-t border-foreground/10 pt-8">
             <h3 className="text-3xl font-serif mb-4">Investment Facilitation</h3>
             <p className="text-foreground/60 leading-relaxed text-sm">
               Acting as a single-window facility to assist investors in navigating regulatory frameworks, securing approvals, and ensuring a smooth deployment of capital across all sectors.
             </p>
           </div>
           <div className="border-t border-foreground/10 pt-8">
             <h3 className="text-3xl font-serif mb-4">Strategic Insights</h3>
             <p className="text-foreground/60 leading-relaxed text-sm">
               Providing verified data, sector profiles, and deep economic intelligence to help international and domestic partners make informed, high-yield investment decisions.
             </p>
           </div>
           <div className="border-t border-foreground/10 pt-8">
             <h3 className="text-3xl font-serif mb-4">Policy Advocacy</h3>
             <p className="text-foreground/60 leading-relaxed text-sm">
               Working directly with the Government of Balochistan to formulate and implement investor-friendly policies, Special Economic Zone frameworks, and trade incentives.
             </p>
           </div>
           <div className="border-t border-foreground/10 pt-8">
             <h3 className="text-3xl font-serif mb-4">Partnership Building</h3>
             <p className="text-foreground/60 leading-relaxed text-sm">
               Connecting foreign delegations, institutional investors, and local enterprises to foster sustainable joint ventures and public-private partnerships.
             </p>
           </div>
        </div>

        {/* Story Timeline Animation representation */}
        <div className="bg-foreground/5 border border-foreground/10 p-12 lg:p-24 text-center">
           <h2 className="text-3xl md:text-5xl font-serif mb-16">The Growth Engine</h2>
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {['BBoIT', 'INVESTOR', 'GOVERNMENT', 'PROJECT', 'GROWTH'].map((step, i, arr) => (
                <div key={step} className="flex flex-col md:flex-row items-center gap-4 w-full">
                  <div className={`px-6 py-4 border ${i === 0 || i === arr.length - 1 ? 'border-accent text-accent' : 'border-foreground/20 text-foreground/60'} text-[10px] uppercase tracking-widest font-bold whitespace-nowrap`}>
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-foreground/20 rotate-90 md:rotate-0 my-4 md:my-0 flex-shrink-0" />
                  )}
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
