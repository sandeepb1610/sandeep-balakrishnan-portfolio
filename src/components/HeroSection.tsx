import { motion } from "framer-motion";
import KpiCard from "./KpiCard";
import heroActionImg from "@/assets/hero-action-ppe.jpg";

const kpis = [
  { label: "Layout Optimisation", value: "23%", description: "Efficiency Gain — NBN FTTP Layout Optimisation" },
  { label: "Propulsion Redesign", value: "367%", description: "Range Increase — NAVIS Autonomous Propulsion Redesign" },
  { label: "Professional Leadership", value: "Board Member", description: "IPMA Young Crew Australia" },
];

// Replace with your actual video URL/path when available
const HERO_VIDEO_URL = "";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — Narrative + KPIs */}
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
              Sandeep Balakrishnan <span className="text-[0.75em]">| Mechanical Project Engineer (B.Tech, MPM, MBA)</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
              className="text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
            >
              Specializing in the Design-Build-Test cycle for high-stakes
              industrial hardware in Western Australia.
            </motion.p>

            {/* KPI Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {kpis.map((kpi, i) => (
                <KpiCard key={kpi.label} {...kpi} index={i} />
              ))}
            </div>
          </div>

          {/* Right — Background Video Loop Slot */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="rounded-[12px] overflow-hidden relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {HERO_VIDEO_URL ? (
                <video
                  src={HERO_VIDEO_URL}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              ) : (
                <>
                  <img
                    src={heroActionImg}
                    alt="Sandeep Balakrishnan — Professional Portrait"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
