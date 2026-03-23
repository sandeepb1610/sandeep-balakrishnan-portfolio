import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Technical Toolkit", href: "/technical-toolkit" },
  { label: "Leadership", href: "/leadership" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-mono text-sm font-bold tracking-tight text-foreground">
          SB<span className="text-muted-foreground">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`heading-l2 transition-colors duration-200 hover:text-foreground ${
                location.pathname === link.href ? "text-foreground" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://docs.google.com/document/d/1uBB0LrGoDXWpIn3YFUs4kOCQHCIy6s8q/edit?usp=sharing&ouid=102771873244239280120&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{ boxShadow: "var(--shadow-btn)" }}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md bg-secondary text-foreground transition-colors hover:bg-secondary/80"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            className="md:hidden fixed inset-0 top-16 z-40 bg-white border-t border-border shadow-lg"
          >
            <nav className="flex flex-col px-6 pt-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.2, 0, 0, 1] }}
                >
                  <Link
                    to={link.href}
                    className={`block py-3 px-4 rounded-md text-lg font-semibold tracking-tight transition-colors duration-200 ${
                      location.pathname === link.href
                        ? "bg-black/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
