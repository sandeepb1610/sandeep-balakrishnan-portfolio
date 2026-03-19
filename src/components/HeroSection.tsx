import { motion } from "framer-motion";
import KpiCard from "./KpiCard";
import heroActionImg from "@/assets/hero-action-ppe.jpg";

const kpis = [
  { label: "Layout Optimization", value: "23%", description: "Efficiency Gain — NBN FTTP Layout Optimization" },
  { label: "Propulsion Redesign", value: "367%", description: "Range Increase — NAVIS Autonomous Propulsion Redesign" },
  { label: "Professional Leadership", value: "Board Member", description: "IPMA Young Crew Australia" },
];

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — Narrative */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
              className="heading-l2 mb-4"
            >
              Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="heading-l1 max-w-2xl"
            >
              Sandeep Balakrishnan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
              className="font-mono text-sm text-muted-foreground mt-2 tracking-wider"
            >
              Mechanical Project Engineer &nbsp;·&nbsp; B.Tech &nbsp;·&nbsp; MPM &nbsp;·&nbsp; MBA
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
            >
              Specializing in the Design-Build-Test cycle for high-reliability
              industrial hardware. Bridging the gap between R&D Innovation and
              Tier-1 Field Execution in Western Australia.
            </motion.p>

            {/* Action Shot */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="mt-8 rounded-[12px] overflow-hidden max-w-md"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={heroActionImg}
                alt="Sandeep Balakrishnan in high-vis PPE working on mechanical assembly"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </motion.div>
          </div>

          {/* Right — KPI Stack */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {kpis.map((kpi, i) => (
              <KpiCard key={kpi.label} {...kpi} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
