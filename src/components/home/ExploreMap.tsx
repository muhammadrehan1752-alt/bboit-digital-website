import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Database, Zap, Tractor, Anchor, Factory, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const MAP_LAYERS = [
  { id: "minerals", label: "MINERALS", icon: Database, color: "text-accent", dotColor: "bg-[#AAB362]", stats: "Metallic & Non-Metallic Deposits" },
  { id: "energy", label: "ENERGY", icon: Zap, color: "text-yellow-500", dotColor: "bg-yellow-500", stats: "Solar, Wind & Gas Potential" },
  { id: "agriculture", label: "AGRICULTURE", icon: Tractor, color: "text-green-500", dotColor: "bg-green-500", stats: "Fruits, Crops & Arable Land" },
  { id: "fisheries", label: "FISHERIES", icon: Anchor, color: "text-blue-400", dotColor: "bg-blue-400", stats: "750km Coastline" },
  { id: "industry", label: "INDUSTRY", icon: Factory, color: "text-slate-400", dotColor: "bg-slate-400", stats: "Special Economic Zones" },
];

const SECTOR_NODES: Record<string, { id: string, name: string, top: string, left: string, info: string }[]> = {
  minerals: [
    { id: 'm1', name: 'Chagai Copper-Gold Belt', top: '30%', left: '25%', info: 'World-class deposits of copper and gold in the Tethyan belt. Requires modern extraction facilities.' },
    { id: 'm2', name: 'Reko Diq', top: '25%', left: '20%', info: 'One of the largest undeveloped copper and gold resources globally. Massive FDI potential.' },
    { id: 'm3', name: 'Saindak', top: '35%', left: '15%', info: 'Active copper-gold mining project with established export infrastructure.' },
    { id: 'm4', name: 'Khuzdar Barite', top: '60%', left: '55%', info: 'Major barite and lead-zinc deposits ready for value-added processing.' },
  ],
  energy: [
    { id: 'e1', name: 'Hub Wind Corridor', top: '80%', left: '60%', info: 'High wind speed corridor ideal for large-scale wind energy farms.' },
    { id: 'e2', name: 'Quetta Solar Park Area', top: '45%', left: '55%', info: 'High solar irradiance zone earmarked for mega solar projects.' },
    { id: 'e3', name: 'Gwadar Power Project', top: '85%', left: '30%', info: 'Coal and renewable energy mix supporting the growing port city ecosystem.' },
  ],
  agriculture: [
    { id: 'a1', name: 'Nasirabad Canal Command', top: '50%', left: '70%', info: 'Major agricultural hub connected to the Indus River system. Ideal for corporate farming.' },
    { id: 'a2', name: 'Ziarat Apple Orchards', top: '40%', left: '60%', info: 'High-altitude fruit farming, famous for premium apples and cherries.' },
    { id: 'a3', name: 'Panjgur Date Farms', top: '65%', left: '35%', info: 'Premium quality date cultivation and processing potential for European export.' },
  ],
  fisheries: [
    { id: 'f1', name: 'Gwadar Port', top: '85%', left: '30%', info: 'Deep sea port and major fishing hub requiring modern cold storage.' },
    { id: 'f2', name: 'Pasni Fish Harbour', top: '82%', left: '40%', info: 'Key landing site for commercial fisheries ripe for value-added seafood processing.' },
    { id: 'f3', name: 'Ormara', top: '80%', left: '50%', info: 'Coastal town with significant seafood processing and export potential.' },
  ],
  industry: [
    { id: 'i1', name: 'Hub Industrial Estate', top: '82%', left: '62%', info: 'One of the largest industrial estates in Balochistan with direct access to Karachi.' },
    { id: 'i2', name: 'Gwadar Free Zone', top: '85%', left: '30%', info: 'Tax-exempt industrial zone directly connected to the deep sea port for global export.' },
    { id: 'i3', name: 'Bostan SEZ', top: '40%', left: '55%', info: 'Special Economic Zone near Quetta providing ready infrastructure for diverse manufacturing.' },
  ]
};

export function ExploreMap() {
  const [activeLayer, setActiveLayer] = useState(MAP_LAYERS[0].id);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleLayerChange = (layerId: string) => {
    setActiveLayer(layerId);
    setActiveNode(null);
  };

  const activeLayerData = MAP_LAYERS.find(l => l.id === activeLayer);
  const nodes = SECTOR_NODES[activeLayer] || [];
  const selectedNodeData = nodes.find(n => n.id === activeNode);

  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden border-t border-foreground/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4 uppercase font-serif">
            Explore Balochistan
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl text-balance">
            An interactive economic layer revealing the vast potential across the province. Select a sector and click on the hotspots to discover regional strengths.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:h-[600px]">
          {/* Layer Controls */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-4">
            {MAP_LAYERS.map((layer) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              
              return (
                <button
                  key={layer.id}
                  onClick={() => handleLayerChange(layer.id)}
                  className={cn(
                    "flex items-center justify-between p-6 rounded-2xl transition-all duration-300 text-left border",
                    isActive 
                      ? "bg-foreground/10 border-foreground/20 shadow-[0_8px_30px_rgb(255,255,255,0.04)] scale-[1.02] backdrop-blur-md" 
                      : "bg-transparent border-transparent hover:bg-foreground/5"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-3 rounded-full transition-colors", isActive ? "bg-card/20" : "bg-transparent")}>
                      <Icon className={cn("w-6 h-6", isActive ? layer.color : "text-foreground/40")} />
                    </div>
                    <div>
                      <h3 className={cn("font-bold tracking-wide transition-colors uppercase text-sm", isActive ? "text-foreground" : "text-foreground/60")}>
                        {layer.label}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-foreground/50 mt-1"
                          >
                            {layer.stats}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <ChevronRight className={cn("w-5 h-5 transition-transform", isActive ? "text-accent translate-x-1" : "text-foreground/20")} />
                </button>
              );
            })}
          </div>

          {/* Map Visualization Area */}
          <div className="w-full lg:w-2/3 h-[500px] lg:h-auto relative rounded-3xl overflow-hidden bg-card/40 border border-foreground/5">
            {/* Base Map Abstract Shape */}
            <div className="absolute inset-0 opacity-20 flex items-center justify-center p-12 pointer-events-none">
               <svg viewBox="0 0 400 400" className="w-full h-full text-foreground fill-current" preserveAspectRatio="xMidYMid meet">
                 <path d="M120,50 Q180,80 250,60 T350,150 Q380,250 320,320 T150,380 Q80,350 50,250 T120,50 Z" />
               </svg>
            </div>

            {/* Dynamic Layers based on selection */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 z-10"
              >
                {/* Hotspot Nodes */}
                <div className="w-full h-full relative">
                  {nodes.map((node, i) => (
                    <motion.button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: activeNode === node.id ? 1.5 : 1, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className={cn(
                        "absolute w-4 h-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all transform -translate-x-1/2 -translate-y-1/2 group",
                        activeLayerData?.dotColor,
                        activeNode === node.id ? "ring-4 ring-white/30 z-20" : "hover:scale-125 z-10 hover:ring-2 hover:ring-white/50"
                      )}
                      style={{ top: node.top, left: node.left }}
                    >
                       <span className="absolute left-1/2 -top-8 -translate-x-1/2 bg-card/80 backdrop-blur-md text-foreground text-[10px] uppercase tracking-widest px-3 py-1 rounded border border-foreground/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                         {node.name}
                       </span>
                    </motion.button>
                  ))}
                  
                  {/* Connection Lines (Abstract representing infrastructure) */}
                  <svg className="absolute inset-0 w-full h-full z-[-1] opacity-20 pointer-events-none">
                     <motion.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 1.5, ease: "easeInOut" }}
                       d="M150,150 L250,200 L200,300" 
                       fill="none" 
                       stroke="rgba(255,255,255,1)" 
                       strokeWidth="1" 
                       strokeDasharray="4 4"
                     />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-card/80 backdrop-blur-xl border border-foreground/10 z-30 flex items-start gap-4 transition-all min-h-[120px]">
               {selectedNodeData ? (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   key={selectedNodeData.id}
                   className="w-full"
                 >
                   <div className="flex items-center gap-2 mb-2">
                     <MapPin className={cn("w-4 h-4", activeLayerData?.color)} />
                     <h4 className="text-foreground font-bold font-serif text-lg">{selectedNodeData.name}</h4>
                   </div>
                   <p className="text-foreground/70 text-sm leading-relaxed">{selectedNodeData.info}</p>
                 </motion.div>
               ) : (
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   key="default-info"
                   className="w-full flex items-center justify-center h-full opacity-50"
                 >
                   <p className="text-sm uppercase tracking-widest text-center">
                     Select a hotspot on the map to view investment details
                   </p>
                 </motion.div>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
