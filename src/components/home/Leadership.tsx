import { motion } from "motion/react";
import cmImg from "../../assets/images/Sarfaraz-Bugti.jpeg";
import vcImg from "../../assets/images/Bilal-Khan-Kakar.jpg";
import ceoImg from "../../assets/images/Qaim-Lashari.jpeg";

const LEADERS = [
  {
    role: "Chief Minister of Balochistan",
    name: "Mir Sarfraz Bugti",
    description: "Guiding the province's strategic vision for inclusive economic growth and international partnerships.",
    imgPlaceholder: "CM Portrait Placeholder (800x1000)",
    image: cmImg
  },
  {
    role: "Vice Chairman, BBoIT",
    name: "Bilal Khan Kakar",
    description: "Driving the implementation of investor-friendly policies and facilitating seamless trade operations.",
    imgPlaceholder: "Vice Chairman Portrait Placeholder (800x1000)",
    image: vcImg
  },
  {
    role: "Chief Executive Officer, BBoIT",
    name: "Qaim Lashari",
    description: "Executing the Board's mandate to transform Balochistan into a premier investment destination.",
    imgPlaceholder: "CEO Portrait Placeholder (800x1000)",
    image: ceoImg
  }
];

export function Leadership() {
  return (
    <section className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-sm tracking-[0.2em] font-bold text-accent uppercase mb-4">Leadership</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
            THE INSTITUTION BEHIND THE OPPORTUNITY.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {LEADERS.map((leader, i) => (
            <div key={i} className="flex flex-col">
              <div className="aspect-[3/4] bg-background/5 rounded-2xl mb-8 flex items-center justify-center border border-foreground/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 to-transparent" />
                
                {leader.image ? (
                   <img 
                     src={leader.image} 
                     alt={leader.name} 
                     className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                   />
                ) : (
                   <span className="text-foreground/40 text-sm font-mono text-center px-4">
                     [{leader.imgPlaceholder}]
                   </span>
                )}
                
                <div className="absolute inset-0 border border-foreground/10 scale-95 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">
                {leader.role}
              </h4>
              <h5 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                {leader.name}
              </h5>
              <p className="text-foreground/60 leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
