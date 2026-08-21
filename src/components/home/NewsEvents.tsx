import { ArrowRight } from "lucide-react";

export function NewsEvents() {
  return (
    <section className="bg-background py-32 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground uppercase mb-4 font-serif">
            What's Happening
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Story */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="aspect-video bg-foreground/5 border border-foreground/10 rounded-xl mb-8 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
               <div className="absolute bottom-8 left-8 right-8 z-20 text-foreground">
                 <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">Investment Summit</span>
                 <h3 className="text-3xl md:text-4xl font-bold leading-tight">International Delegation Inks $500M MoU for Renewable Energy in Hub</h3>
               </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              {[
                { date: "August 15, 2026", category: "Policy", title: "New SEZ Framework Approved to Accelerate Foreign Direct Investment." },
                { date: "July 28, 2026", category: "Gwadar", title: "Phase II of Gwadar Free Zone Completes Essential Infrastructure Operations." },
                { date: "July 10, 2026", category: "Minerals", title: "Global Mining Consortium Begins Pre-Feasibility on Chagai Copper Reserves." }
              ].map((news, i) => (
                <div key={i} className="group cursor-pointer border-b border-foreground/10 pb-8 last:border-0">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-bold tracking-widest text-accent uppercase">{news.category}</span>
                    <span className="text-xs text-foreground/40 font-mono">{news.date}</span>
                  </div>
                  <h4 className="text-xl font-bold leading-tight text-foreground group-hover:text-accent transition-colors">
                    {news.title}
                  </h4>
                </div>
              ))}
            </div>
            
            <button className="mt-8 py-4 border-t border-foreground/20 text-foreground font-medium tracking-wide hover:text-accent transition-colors flex items-center justify-between w-full uppercase text-sm">
              View All News & Events <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
