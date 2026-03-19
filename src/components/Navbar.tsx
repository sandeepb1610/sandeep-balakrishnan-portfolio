import { Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Technical Toolkit", href: "/technical-toolkit" },
  { label: "Leadership", href: "/leadership" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-mono text-sm font-bold tracking-tight text-foreground">
          SB<span className="text-muted-foreground">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className={`heading-l2 transition-colors duration-200 hover:text-foreground ${
                  location.pathname === link.href ? "text-foreground" : ""
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="heading-l2 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          style={{ boxShadow: "var(--shadow-btn)" }}
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download Resume</span>
          <span className="sm:hidden">Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
