import { motion } from "motion/react";
import engineersImg from '../../assets/images/engineers_innovators_1787263377990.jpg';
import entrepreneursImg from '../../assets/images/entrepreneurs_1787263402031.jpg';
import workforceImg from '../../assets/images/skilled_workforce_1787263421816.jpg';

export function People() {
  return (
    <section className="bg-background py-32 border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-6 uppercase">
          People Power Possibility.
        </h2>
        <p className="text-foreground/60 text-xl max-w-3xl mx-auto text-balance mb-24 font-serif italic">
          Economic development is ultimately about people. Balochistan's greatest asset is its resilient, youthful, and driven population.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] bg-background/5 rounded-3xl p-8 flex flex-col justify-end text-left relative overflow-hidden group">
            <img src={engineersImg} alt="Engineers and Innovators" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10" />
            <div className="relative z-20 text-white group-hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-md">Engineers & Innovators</h3>
              <p className="text-white/90 text-sm drop-shadow">Driving the new industrial zones.</p>
            </div>
          </div>

          <div className="aspect-[4/5] bg-background/5 rounded-3xl p-8 flex flex-col justify-end text-left relative overflow-hidden group md:-translate-y-12">
            <img src={entrepreneursImg} alt="Entrepreneurs" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-accent/30 mix-blend-multiply z-10" />
            <div className="relative z-20 text-white group-hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-md">Entrepreneurs</h3>
              <p className="text-white/90 text-sm drop-shadow">Building local commerce and trade networks.</p>
            </div>
          </div>

          <div className="aspect-[4/5] bg-background/5 rounded-3xl p-8 flex flex-col justify-end text-left relative overflow-hidden group">
            <img src={workforceImg} alt="Skilled Workforce" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-support/30 mix-blend-multiply z-10" />
            <div className="relative z-20 text-white group-hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-md">Skilled Workforce</h3>
              <p className="text-white/90 text-sm drop-shadow">The backbone of agriculture, mining, and fisheries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
