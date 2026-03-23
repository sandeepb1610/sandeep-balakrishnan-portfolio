import { motion } from "framer-motion";
import { ArrowLeft, Globe, TrendingUp, Wrench, DollarSign, Battery, Anchor, Package } from "lucide-react";
import bomImg from "@/assets/navis-bom.png";
import wireHarnessImg from "@/assets/navis-wire-harness.png";
import kaizenImg from "@/assets/navis-kaizen.png";
import rcaImg from "@/assets/navis-rca.png";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSpecsSidebar from "@/components/TechSpecsSidebar";
import TechDocGrid from "@/components/TechDocGrid";
import propulsionImg from "@/assets/navis-propulsion-cross-section.png";
import cfdImg from "@/assets/navis-cfd-simulation.jpg";
import explodedViewImg from "@/assets/navis-exploded-view.png";
import augerImg from "@/assets/navis-dispensing-cross-section.png";

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
      "Eruvaka Technologies required a fully autonomous aquaculture feeding vessel, the NAVIS, to be designed from the ground up for large-scale commercial pond operations. The existing product line included only a static feeder with a dispensing range limited to 3 meters, insufficient for commercial viability. The company needed a complete vessel design encompassing hull, feed storage, delivery mechanisms, and propulsion, along with an upgraded dispensing system that could dramatically extend range while reducing per-unit cost.",
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
      "Designed the complete NAVIS vessel from first principles: engineered the ship hull for stability and hydrodynamic efficiency in pond environments; designed the hopper with optimised feed-flow geometry; developed a variable-pitch auger system that meters feed from the hopper with precision — eliminating the need for a separate dosing system entirely, thereby reducing mechanical complexity and overall cost. Engineered a single-motor outboard propulsion system for autonomous navigation. For the propulsion subsystem, upgraded the existing static feeder's mechanism by conducting first-principles calculations. A single motor propulsion system with an attached rudder system for direction change was used by conducting first-principles calculations for gearbox ratios to optimise torque delivery at higher rotational velocities. Replaced the original polymer feeder disk with a steel-reinforced polyurethane (PU) composite — increasing operational life by 120% while reducing unit cost. Validated the full system through iterative CFD analysis of feed-dispensing fluid dynamics and field trials across multiple pond geometries.",
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
              Case Study: Deep Dive
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

            {/* Product Specs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="bg-card rounded-[12px] p-6 mb-16"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="heading-l2 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Package, label: "Feed Payload", value: "100 kg" },
                  { icon: Anchor, label: "Charging", value: "Autonomous recharging from dock" },
                  { icon: Battery, label: "Battery Capacity", value: "36,000 mAh (36 Ah) Lead-Acid" },
                ].map((spec) => (
                  <div key={spec.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <spec.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</p>
                      <p className="text-sm font-semibold text-foreground">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                      <img src={propulsionImg} alt="Cross-sectional view of the NAVIS propulsion system in SolidWorks" className="w-full h-auto object-contain" loading="lazy" />
                    </div>
                     <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                      Cross-Sectional View: Propulsion System
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                  >
                    <div className="rounded-[12px] overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                      <img src={augerImg} alt="Cross-sectional view of the NAVIS dispensing system with variable pitch auger in SolidWorks" className="w-full h-auto object-cover aspect-video" loading="lazy" />
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                      Cross-Sectional View: Dispensing System with Variable Pitch Auger
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Technical Specs Sidebar */}
              <div className="lg:col-span-4">
                <TechSpecsSidebar specs={navisSpecs} cadImage={explodedViewImg} cadImageAlt="NAVIS product exploded view showing all major assemblies" cadCaption="NAVIS Product Exploded View" />
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
                className="relative aspect-video bg-secondary rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <video
                  src="/videos/navis-product-testing.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                Full System Demo
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
                  className="rounded-[12px] overflow-hidden bg-secondary aspect-video"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <video
                    src="/videos/navis-dispensing-test.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  NAVIS Prototype 1: Dispensing Test
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              >
                <div
                  className="rounded-[12px] overflow-hidden bg-secondary aspect-video"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <video
                    src="/videos/navis-propulsion-test.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  NAVIS Prototype 1: Propulsion and Path Planning Test
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
              {/* Tile 1: Root Cause Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={rcaImg} alt="Root Cause Analysis: Dispenser Breakage RPSO Report" className="w-full h-full object-cover" loading="lazy" />
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

              {/* Tile 2: Strategic Sourcing & BOM */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={kaizenImg} alt="Kaizen Sheet: Particle Range and Motor Characteristic Calculator" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Kaizen: Continuous Improvement
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Developed a Particle Range Calculator to eliminate trial-and-error in dispenser disk design and motor selection.
                  </p>
                </div>
              </motion.div>

              {/* Tile 3: Validation Testing */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={wireHarnessImg} alt="Wire harness design — IP67/IP68 rated connector technical drawing" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Wire Harness Design
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Custom IP67/IP68-rated wire harness with marine-grade connectors for reliable subsystem integration.
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
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={bomImg} alt="BOM and Material Selection — NAVIS part list with material types and dimensions" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    BOM & Material Selection
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive bill of materials with marine-grade material specifications and vendor tracking across 50+ components.
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
