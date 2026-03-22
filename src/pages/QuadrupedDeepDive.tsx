import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, ExternalLink, Lock, Clock, DollarSign, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import nasaImg from "@/assets/quadruped-nasa-ads.jpg";

const scopeItems = [
  "Conducted Kinematic and Dynamic analysis to optimize performance in GPS-denied environments.",
  "Executed Multi-body simulations using ADAMS and FEM analysis in SolidWorks.",
  "Managed the design-build-test cycle within 90% of the allocated budget and 15% ahead of schedule.",
];

const results = [
  { icon: Lock, value: "12-DOF", label: "Degrees of Freedom" },
  { icon: Clock, value: "15%", label: "Ahead of Schedule" },
  { icon: DollarSign, value: "<90%", label: "Under Budget" },
  { icon: BookOpen, value: "NASA ADS", label: "Indexed Publication" },
  { icon: DollarSign, value: "100 kg", label: "Payload Capacity" },
  { icon: Clock, value: "3", label: "Gaits: Walk · Trot · Crawl" },
];

const QuadrupedDeepDive = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest">Back to Projects</span>
            </Link>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="heading-l2 mb-4"
            >
              Case Study — Restricted Access
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4"
            >
              Confidential: High-Mobility 12-DOF Autonomous Quadruped
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
              className="font-mono text-sm font-semibold text-accent mb-12"
            >
              Government of India &nbsp;·&nbsp; Defence Research & Development Organisation (DRDO-CAIR)
            </motion.p>

            {/* NDA Advisory Banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="bg-primary text-primary-foreground rounded-[12px] p-6 md:p-8 mb-12 flex gap-4 items-start"
            >
              <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest font-semibold mb-3">
                  Project Advisory
                </p>
                <p className="text-sm leading-relaxed opacity-90">
                  This project was conducted under a strict non-disclosure agreement with the Government of India. In accordance with security protocols, specific calculations, proprietary algorithms, and internal sensor architectures cannot be shared publicly.
                </p>
              </div>
            </motion.div>

            {/* Result KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.2, 0, 0, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {results.map((r) => (
                <div
                  key={r.label}
                  className="bg-card p-6 rounded-[12px] flex items-center gap-4"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                    <r.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-2xl font-bold tabular-nums text-foreground">{r.value}</p>
                    <p className="text-sm text-muted-foreground">{r.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Technical Scope — What CAN Be Shared */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="mb-16"
            >
              <p className="heading-l2 mb-4">Technical Scope</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
                What I Can Share
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-8 max-w-3xl">
                Developed a military-grade autonomous mule robot for rugged terrain navigation. Focused on kinematic modeling and multi-body dynamic stability.
              </p>

              <div className="space-y-4">
                {scopeItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 0, 0, 1] }}
                    className="flex items-start gap-4 bg-card p-5 rounded-[12px]"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-xs font-bold text-foreground">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Research Authority / Publication */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="mb-16"
            >
              <p className="heading-l2 mb-4">Research Authority</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
                Publicly Verifiable Proof
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div
                  className="bg-card p-8 rounded-[12px] flex flex-col justify-between"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div>
                    <p className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      IOP Conference Series · Adopted by NASA ADS
                    </p>
                    <p className="text-foreground font-semibold text-lg leading-snug mb-2">
                      "Design and development of an autonomous quadruped robot"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      B. Sandeep, 2020 — Published in IOP Conference Series: Materials Science and Engineering, subsequently indexed and adopted by the NASA Astrophysics Data System (ADS) via the Harvard-Smithsonian Center for Astrophysics.
                    </p>
                  </div>
                  <a
                    href="https://ui.adsabs.harvard.edu/abs/2021MS%26E.1012a2016S/abstract"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md mt-6 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] w-fit"
                    style={{ boxShadow: "var(--shadow-btn)" }}
                  >
                    View on NASA ADS
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div
                  className="rounded-[12px] overflow-hidden"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <img
                    src={nasaImg}
                    alt="NASA ADS publication indexing page for quadruped robot research"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuadrupedDeepDive;
