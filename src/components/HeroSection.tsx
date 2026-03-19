import { motion } from "framer-motion";
import KpiCard from "./KpiCard";

const kpis = [
  { label: "Operational Impact", value: "23%", description: "Efficiency Increase" },
  { label: "Industry Tenure", value: "6+", description: "Years Experience" },
  { label: "Professional Leadership", value: "IPMA", description: "Board Member" },
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
              Mechanical Project Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="heading-l1 max-w-2xl"
            >
              Engineering Systems for Industrial Scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
            >
              Mechanical Project Engineer specializing in lifecycle management
              and operational efficiency. Currently overseeing multi-million
              dollar capital projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="font-mono text-sm text-muted-foreground mt-8"
            >
              Sandeep Balakrishnan
            </motion.p>
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
