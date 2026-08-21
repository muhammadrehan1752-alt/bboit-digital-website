import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

const NAV_LINKS = [
  { name: "INVEST", path: "/invest" },
  { name: "DISCOVER", path: "/discover" },
  { name: "SECTORS", path: "/sectors" },
  { name: "GWADAR", path: "/gwadar" },
  { name: "TRADE", path: "/trade" },
  { name: "ABOUT", path: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || mobileMenuOpen
            ? "glass-dark py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="w-8 h-8 border-[1.5px] border-foreground flex items-center justify-center font-bold text-foreground text-sm tracking-tighter group-hover:bg-foreground group-hover:text-background transition-all">B</div>
            <span className="text-xl font-bold tracking-tighter text-foreground hidden sm:block">BBoIT</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-accent transition-colors text-foreground"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l border-foreground/20 pl-6 ml-2">
              <button onClick={() => setTheme('light')} className={cn("p-1.5 rounded-full transition-colors", theme === 'light' ? "bg-foreground/10 text-foreground" : "text-foreground/50 hover:text-foreground")} title="Light Mode">
                <Sun className="w-[14px] h-[14px]" />
              </button>
              <button onClick={() => setTheme('default')} className={cn("p-1.5 rounded-full transition-colors", theme === 'default' ? "bg-foreground/10 text-foreground" : "text-foreground/50 hover:text-foreground")} title="Green-Gold Mode">
                <Sparkles className="w-[14px] h-[14px]" />
              </button>
              <button onClick={() => setTheme('midnight')} className={cn("p-1.5 rounded-full transition-colors", theme === 'midnight' ? "bg-foreground/10 text-foreground" : "text-foreground/50 hover:text-foreground")} title="Midnight Mode">
                <Moon className="w-[14px] h-[14px]" />
              </button>
            </div>

            <Link
              to="/investor-desk"
              className="ml-4 px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-colors"
            >
              INVESTOR DESK
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4 text-foreground">
            <div className="flex items-center space-x-2 border-r border-foreground/20 pr-4 mr-1">
              <button onClick={() => setTheme('light')} className={cn("p-1.5 rounded-full transition-colors", theme === 'light' ? "bg-foreground/10 text-foreground" : "text-foreground/50 hover:text-foreground")}>
                <Sun className="w-4 h-4" />
              </button>
              <button onClick={() => setTheme('default')} className={cn("p-1.5 rounded-full transition-colors", theme === 'default' ? "bg-foreground/10 text-foreground" : "text-foreground/50 hover:text-foreground")}>
                <Sparkles className="w-4 h-4" />
              </button>
              <button onClick={() => setTheme('midnight')} className={cn("p-1.5 rounded-full transition-colors", theme === 'midnight' ? "bg-foreground/10 text-foreground" : "text-foreground/50 hover:text-foreground")}>
                <Moon className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-light text-foreground tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/investor-desk"
                className="mt-8 bg-accent text-primary px-6 py-4 text-center rounded-xl text-lg font-medium"
              >
                INVESTOR DESK
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
