import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 px-6 md:px-12 py-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-start md:items-center bg-card gap-8">
      <div className="flex flex-wrap gap-8 md:space-x-12 text-foreground">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Chief Minister</span>
          <span className="text-[11px] font-medium">Official Leadership</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Vice Chairman</span>
          <span className="text-[11px] font-medium">Bilal Khan Kakar</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Global Connectivity</span>
          <span className="text-[11px] font-medium italic">CPEC Strategic Anchor</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-6 text-foreground">
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest opacity-40">Official Agency of</p>
          <p className="text-[11px] font-bold">Government of Balochistan</p>
        </div>
        <div className="w-[1px] h-10 bg-foreground/10"></div>
        <p className="text-[10px] opacity-40 uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>
          EST. 2009
        </p>
      </div>
    </footer>
  );
}
