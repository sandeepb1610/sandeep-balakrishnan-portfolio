import { Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm font-bold tracking-tight mb-2">
              SB<span className="opacity-40">.</span>
            </p>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Mechanical Project Engineer specializing in lifecycle management and operational efficiency.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/sandeep-b16/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-primary-foreground/20 w-fit"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
            <a
              href="mailto:sandeepbalan16@gmail.com"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-primary-foreground/20 w-fit"
            >
              <Mail className="w-4 h-4" />
              Send an Inquiry
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <span className="font-mono text-xs uppercase tracking-widest">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <p className="font-mono text-[11px] opacity-40 tracking-wider">
            © {new Date().getFullYear()} Sandeep Balakrishnan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
