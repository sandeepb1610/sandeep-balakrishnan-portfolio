import { motion } from "framer-motion";
import { ArrowLeft, Globe, TrendingUp, Wrench, DollarSign } from "lucide-react";
import kaizenImg from "@/assets/navis-kaizen.png";
import rcaImg from "@/assets/navis-rca.png";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSpecsSidebar from "@/components/TechSpecsSidebar";
import TechDocGrid from "@/components/TechDocGrid";
import propulsionImg from "@/assets/navis-propulsion.jpg";
import cfdImg from "@/assets/navis-cfd-simulation.jpg";

const navisSpecs = [
  {
    label: "Material Selection",
    items: ["316 Stainless Steel (marine-grade)", "HDPE (hull & hopper)", "Steel-reinforced Polyurethane (feeder disk)"],
  },
  {
    label: "Compliance",
    items: ["AS 4024 (Machine Safety)", "IP67 Enclosure Rating", "Marine Equipment Directive"],
  },
  {
    label: "Simulation Tools",
    items: ["ANSYS (FEA / CFD)", "SolidWorks (Parametric CAD)", "ADAMS (Multibody Dynamics)"],
  },
];

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
      "Designed the complete NAVIS vessel from first principles: engineered the ship hull for stability and hydrodynamic efficiency in pond environments; designed the hopper with optimized feed-flow geometry; developed a variable-pitch auger system that meters feed from the hopper with precision — eliminating the need for a separate dosing system entirely, thereby reducing mechanical complexity and overall cost. Engineered a single-motor outboard propulsion system for autonomous navigation. For the dispensing subsystem, upgraded the existing static feeder's mechanism by conducting first-principles calculations for gearbox ratios and drive belt tensioning to optimize torque delivery at higher rotational velocities. Replaced the original polymer feeder disk with a steel-reinforced polyurethane (PU) composite — increasing operational life by 120% while reducing unit cost. Validated the full system through iterative CFD analysis of feed-dispensing fluid dynamics and field trials across multiple pond geometries.",
  },
  {
    letter: "R",
    title: "Result",
    content:
      "Achieved a 367% increase in dispensing range (3m → 14m), transforming the product's viability for large commercial operations. The variable-pitch auger innovation removed the need for a dedicated dosing system, reducing BOM cost and field maintenance complexity. NAVIS was critically acclaimed at Aqua Expo 2022 in Ecuador as an industry-leading innovation in aquaculture. The system is now successfully deployed in 12+ countries, contributing to USD 45M in annual revenue for Eruvaka Technologies. The steel-reinforced PU disk reduced field replacement frequency by more than half, significantly lowering total cost of ownership for end customers.",
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
              NAVIS (Novel Autonomous Vessel for Intelligent Shrimp Feeding)
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

            {/* Content + Sidebar Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* S.T.A.R. Sections */}
                <div className="space-y-12 mb-20">
                  {starSections.map((section, i) => (
                    <motion.div
                      key={section.letter}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-3xl font-bold text-foreground">{section.letter}</span>
                        <span className="heading-l2">{section.title}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
                  >
                    <div className="rounded-[12px] overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                      <img src={propulsionImg} alt="NAVIS propulsion system — motor, gearbox, steering mechanism and propeller" className="w-full h-auto object-cover aspect-video" loading="lazy" />
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                      Propulsion System
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                  >
                    <div className="rounded-[12px] overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                      <img src={cfdImg} alt="CFD simulation of feed-dispensing fluid dynamics" className="w-full h-auto object-cover aspect-video" loading="lazy" />
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                      Placeholder — CFD: Feed Dispensing Fluid Dynamics
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Technical Specs Sidebar */}
              <div className="lg:col-span-4">
                <TechSpecsSidebar specs={navisSpecs} cadCaption="Placeholder — CAD Exploded View" />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Gallery */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="heading-l2 mb-4"
            >
              Technical Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10"
            >
              System Validation & Media
            </motion.h2>

            {/* Full-Width Video Slot */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="mb-10"
            >
              <div
                className="relative aspect-video bg-secondary rounded-[12px] overflow-hidden flex items-center justify-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Replace with <video> when asset is available */}
                <div className="text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                    Full-System Demo Video
                  </p>
                  <p className="font-mono text-[11px] text-muted-foreground/60 mt-1">
                    Placeholder
                  </p>
                </div>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center">
                Validation Testing: Achieving 14m dispensing range in high-salinity environments.
              </p>
            </motion.div>

            {/* Side-by-Side: CAD Exploded View + Real-World Testing Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    src={propulsionImg}
                    alt="NAVIS propulsion system — motor, gearbox, steering mechanism and propeller"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Propulsion System
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
                    alt="Real-world testing of NAVIS in aquaculture pond environment"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Placeholder — Real-World Testing Photo
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engineering Evidence 2×2 Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="heading-l2 mb-4"
            >
              Deep Dive
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10"
            >
              Engineering Evidence
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tile 1 — Root Cause Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={rcaImg} alt="Root Cause Analysis — Dispenser Breakage RPSO Report" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Root Cause Analysis (RCA)
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Systematic RCA led to a 120% increase in component lifespan.
                  </p>
                </div>
              </motion.div>

              {/* Tile 2 — Strategic Sourcing & BOM */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={kaizenImg} alt="Kaizen Sheet — Particle Range and Motor Characteristic Calculator" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Kaizen — Continuous Improvement
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Developed a Particle Range Calculator to eliminate trial-and-error in dispenser disk design and motor selection.
                  </p>
                </div>
              </motion.div>

              {/* Tile 3 — Validation Testing */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
                  <div className="text-center px-4">
                    <svg className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <p className="font-mono text-[11px] text-muted-foreground/50 uppercase tracking-wider">
                      Test Report Graph / Load-Test Video
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Validation Testing
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Achieved 14m dispensing range, validated through 50+ field trial cycles.
                  </p>
                </div>
              </motion.div>

              {/* Tile 4 — Compliance & Standards */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
                  <div className="text-center px-4">
                    <svg className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className="font-mono text-[11px] text-muted-foreground/50 uppercase tracking-wider">
                      Certified Badge
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Compliance & Standards
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Adherence to AS 4024 (Machine Safety) and ISO 9001 Standards.
                  </p>
                </div>
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
