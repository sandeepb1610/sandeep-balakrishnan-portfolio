import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSpecsSidebar from "@/components/TechSpecsSidebar";
import siteMapImg from "@/assets/nbn-site-map.jpg";
import fieldTeamImg from "@/assets/nbn-field-team.jpg";

const nbnSpecs = [
  {
    label: "Site Safety & Compliance",
    items: ["DBYD (Dial Before You Dig)", "Stay Safe", "Sight Safe", "Traffic Management Plans"],
  },
  {
    label: "Standards",
    items: ["AS/NZS 4576 (Conduit Standards)", "NBN Co Design Rules", "WA White Card"],
  },
  {
    label: "Project Tools",
    items: ["MS Project (Scheduling)", "GIS Mapping", "SWMS Authoring", "Stakeholder Reporting"],
  },
];

const starSections = [
  {
    letter: "S",
    title: "Situation",
    content:
      "High-complexity urban fiber-to-the-premises (FTTP) rollout across the Mandurah region of Western Australia. The project faced strict NBN Co deadlines, dense subterranean utility networks, and high-traffic suburban corridors requiring careful coordination with local authorities and residents.",
  },
  {
    letter: "T",
    title: "Task",
    content:
      "Coordinate multi-crew field deployment across concurrent work fronts while optimizing spatial layouts to minimize civil disruption. Responsible for end-to-end delivery including site surveys, layout design, SWMS authoring, and quality assurance sign-off.",
  },
  {
    letter: "A",
    title: "Action",
    content:
      "Redesigned the FTTP conduit layout on-site to bypass previously uncharted subterranean obstacles — including legacy stormwater infrastructure and unregistered gas mains. Authored high-risk Safe Work Method Statements (SWMS) for traffic-heavy zones, enabling crews to maintain productivity in areas that would otherwise require full road closures. Implemented a revised sequencing strategy that parallelized pit-and-pipe installation with hauling operations.",
  },
  {
    letter: "R",
    title: "Result",
    content:
      "Delivered a 23% reduction in average job duration through optimized routing and crew sequencing. The layout efficiencies translated directly into a 15% increase in project profit margin — validating the on-site redesign approach as a replicable methodology for future NBN rollouts.",
  },
];

const results = [
  { icon: Clock, value: "23%", label: "Job Duration Reduction" },
  { icon: DollarSign, value: "15%", label: "Profit Increase" },
  { icon: TrendingUp, value: "FTTP", label: "Layout Optimization" },
];

const NbnDeepDive = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            {/* Back link */}
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest">Back to Projects</span>
            </Link>

            {/* Header */}
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
              NBN FTTP Mandurah
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
              className="font-mono text-sm font-semibold text-accent mb-12"
            >
              Sigma Tech Services &nbsp;·&nbsp; Western Australia
            </motion.p>

            {/* Result KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
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
                    src={siteMapImg}
                    alt="Optimized FTTP routing layout map"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Placeholder — Optimized FTTP Site Layout
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
                    src={fieldTeamImg}
                    alt="Field team coordinating on site"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Placeholder — Field Team Coordination
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

export default NbnDeepDive;
