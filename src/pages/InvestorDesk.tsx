import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function InvestorDesk() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Header & Contact Info */}
          <div>
             <div className='mb-6 flex items-center space-x-4'>
               <span className='h-[1px] w-12 bg-accent'></span>
               <span className='text-[10px] uppercase tracking-[0.4em] text-accent font-bold'>Connect</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 font-serif leading-[0.9]">
               Investor<br/><span className="italic text-accent">Desk.</span>
             </h1>
             <p className="text-lg text-foreground/60 font-light leading-relaxed mb-16">
               The BBoIT Investor Desk is your single-window facility. Connect with our facilitation team to discuss projects, request detailed pre-feasibility studies, or navigate regulatory requirements.
             </p>

             <div className="space-y-8 border-l border-foreground/10 pl-6">
               <div className="flex items-start gap-4">
                 <MapPin className="w-5 h-5 text-accent mt-1" />
                 <div>
                   <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Headquarters</h4>
                   <p className="text-foreground/60 text-sm">Civil Secretariat, Quetta<br/>Balochistan, Pakistan</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <Phone className="w-5 h-5 text-accent mt-1" />
                 <div>
                   <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Phone</h4>
                   <p className="text-foreground/60 text-sm">+92 (81) 920 1234</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <Mail className="w-5 h-5 text-accent mt-1" />
                 <div>
                   <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Email</h4>
                   <p className="text-foreground/60 text-sm">invest@bboit.gob.pk</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-foreground/5 border border-foreground/10 p-8 md:p-12">
            <h3 className="text-2xl font-serif mb-8">Submit an Enquiry</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-foreground/50">Full Name</label>
                  <input type="text" className="w-full bg-card/50 border border-foreground/10 p-4 text-sm focus:outline-none focus:border-accent text-foreground transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-foreground/50">Organization</label>
                  <input type="text" className="w-full bg-card/50 border border-foreground/10 p-4 text-sm focus:outline-none focus:border-accent text-foreground transition-colors" placeholder="Company Ltd" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-foreground/50">Email Address</label>
                  <input type="email" className="w-full bg-card/50 border border-foreground/10 p-4 text-sm focus:outline-none focus:border-accent text-foreground transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-foreground/50">Sector of Interest</label>
                  <select className="w-full bg-card/50 border border-foreground/10 p-4 text-sm focus:outline-none focus:border-accent text-foreground/60 transition-colors appearance-none">
                    <option>Select Sector...</option>
                    <option>Mines & Minerals</option>
                    <option>Energy & Power</option>
                    <option>Gwadar / Logistics</option>
                    <option>Agriculture</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-foreground/50">Message / Inquiry Details</label>
                <textarea rows={4} className="w-full bg-card/50 border border-foreground/10 p-4 text-sm focus:outline-none focus:border-accent text-foreground transition-colors" placeholder="How can we assist your investment journey?"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent text-primary font-bold text-xs uppercase tracking-widest py-5 flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors">
                SEND MESSAGE <Send className="w-4 h-4" />
              </button>
              
              <p className="text-[10px] text-foreground/30 text-center uppercase tracking-widest mt-4">
                Frontend structural representation only. Requires backend API integration.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
