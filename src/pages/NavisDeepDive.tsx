import { motion } from "framer-motion";
import { ArrowLeft, Globe, TrendingUp, Wrench, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import explodedImg from "@/assets/navis-exploded-view.jpg";
import cfdImg from "@/assets/navis-cfd-simulation.jpg";

const starSections = [
  {
    letter: "S",
    title: "Situation",
    content:
      "Eruvaka Technologies required a fully autonomous aquaculture feeding vessel — the NAVIS — to be designed from the ground up for large-scale commercial pond operations. The existing product line included only a static feeder with a dispensing range limited to 3 meters, insufficient for commercial viability. The company needed a complete vessel design encompassing hull, feed storage, delivery mechanisms, and propulsion, along with an upgraded dispensing system that could dramatically extend range while reducing per-unit cost.",
  },
  {
    letter: "T",
    title: "Task",
    content:
      "Lead the full mechanical design of the NAVIS autonomous feeder — including the ship hull, hopper, auger feed-delivery system, propulsion system, and dispensing mechanism. Additionally, upgrade the dispensing system from the existing static feeder platform to achieve a dramatically increased range while reducing manufacturing and maintenance costs.",
  },
  {
    letter: "A",
    title: "Action",
    content:
      "Conducted first-principles calculations for gearbox ratios and drive belt tensioning to optimize torque delivery to the feeder disk at higher rotational velocities. Replaced the original polymer feeder disk with a steel-reinforced polyurethane (PU) composite — increasing operational life by 120% while maintaining the required surface friction characteristics for consistent feed dispersal. Validated the redesign through iterative CFD analysis of feed-dispensing fluid dynamics and field trials across multiple pond geometries.",
  },
  {
    letter: "R",
    title: "Result",
    content:
      "Achieved a 367% increase in dispensing range (3m → 14m), transforming the product's viability for large commercial operations. The redesigned feeder system is now successfully deployed in 12+ countries, contributing to USD 45M in annual revenue for Eruvaka Technologies. The steel-reinforced PU disk reduced field replacement frequency by more than half, significantly lowering total cost of ownership for end customers.",
  },
];

const results = [
  { icon: TrendingUp, value: "367%", label: "Range Increase (3m → 14m)" },
  { icon: Wrench, value: "120%", label: "Component Life Increase" },
  { icon: Globe, value: "12+", label: "Countries Deployed" },
  { icon: DollarSign, value: "$45M", label: "Annual Revenue Impact" },
];

const NavisDeepDive = () => {
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
              Case Study — Deep Dive
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4"
            >
              NAVIS Autonomous Feeder
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
              className="font-mono text-sm font-semibold text-accent mb-12"
            >
              Eruvaka Technologies &nbsp;·&nbsp; Global Deployment
            </motion.p>

            {/* Result KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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

            {/* S.T.A.R. Sections */}
            <div className="space-y-12 mb-20">
              {starSections.map((section, i) => (
                <motion.div
                  key={section.letter}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                >
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl font-bold text-foreground">{section.letter}</span>
                      <span className="heading-l2">{section.title}</span>
                    </div>
                  </div>
                  <div className="md:col-span-10">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              >
                <div
                  className="rounded-[12px] overflow-hidden"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <img
                    src={explodedImg}
                    alt="Exploded view CAD render of NAVIS drive-train assembly"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Placeholder — Exploded View: Internal Drive-Train
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              >
                <div
                  className="rounded-[12px] overflow-hidden"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <img
                    src={cfdImg}
                    alt="CFD simulation of feed-dispensing fluid dynamics"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Placeholder — CFD: Feed Dispensing Fluid Dynamics
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NavisDeepDive;
