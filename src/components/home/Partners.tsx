export function Partners() {
  const partners = [
    "Government of Pakistan",
    "Government of Balochistan",
    "Balochistan Revenue Authority",
    "Federal Board of Revenue",
    "SECP",
    "Gwadar Port Authority"
  ];

  return (
    <section className="bg-background py-24 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-center text-sm tracking-[0.2em] font-bold text-foreground/40 uppercase mb-16">
          Ecosystem Partners & Official Institutions
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
          {partners.map((partner, i) => (
            <div key={i} className="text-lg md:text-xl font-bold tracking-tight text-foreground/80 hover:text-foreground transition-colors">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
