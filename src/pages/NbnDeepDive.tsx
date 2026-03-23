import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Clock, DollarSign } from "lucide-react";
import otdrTestImg from "@/assets/nbn-otdr-test.jpg";
import trafficPermitImg from "@/assets/nbn-traffic-permit.jpg";
import safetySiteImg from "@/assets/nbn-safety-site.jpg";
import siteComplianceImg from "@/assets/nbn-site-compliance.jpg";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSpecsSidebar from "@/components/TechSpecsSidebar";
import TechDocGrid from "@/components/TechDocGrid";
import siteMapImg from "@/assets/nbn-site-map.jpg";
import fieldTeamImg from "@/assets/nbn-field-team.jpg";
import nbnFieldCadImg from "@/assets/nbn-field-cad.jpg";

const nbnSpecs = [
  {
    label: "Site Safety & Compliance",
    items: ["DBYD (Dial Before You Dig)", "Stay Safe", "Site Safe", "Traffic Management Plans"],
  },
  {
    label: "Standards",
    items: ["AS/NZS 4576 (Conduit Standards)", "NBN Co Design Rules", "WA White Card"],
  },
  {
    label: "Project Tools",
    items: ["MS Project (Scheduling)", "GIS Mapping", "Pre Start Authoring", "Stakeholder Reporting"],
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
      "Coordinate multi-crew field deployment across concurrent work fronts while optimising spatial layouts to minimise civil disruption. Responsible for end-to-end delivery including site surveys, layout design, Pre Start authoring, and quality assurance sign-off.",
  },
  {
    letter: "A",
    title: "Action",
    content:
      "Redesigned the FTTP conduit layout on-site to mitigate constructability constraints identified during field validation, engineering an alternative ceiling-space routing where the original pathway was obstructed. Reconfigured the external SDS network by developing a revised fibre alignment due to capacity limitations at the existing breakout joint (zero available ports). Optimised network continuity and serviceability while maintaining compliance with NBN Co standards and adhering to strict delivery timelines.",
  },
  {
    letter: "R",
    title: "Result",
    content:
      "Delivered a 23% reduction in average job duration through optimised routing and crew sequencing. The layout efficiencies translated directly into a 15% increase in project profit margin, validating the on-site redesign approach as a replicable methodology for future NBN rollouts.",
  },
];

const results = [
  { icon: Clock, value: "23%", label: "Job Duration Reduction" },
  { icon: DollarSign, value: "15%", label: "Profit Increase" },
  { icon: TrendingUp, value: "FTTP", label: "Layout Optimisation" },
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
              Case Study: Deep Dive
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4"
            >
              NBN FTTP - TimeZone Mandurah
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
                    <div className="rounded-[12px] overflow-hidden aspect-[4/3]" style={{ boxShadow: "var(--shadow-card)" }}>
                      <img src={siteMapImg} alt="Optimised FTTP routing layout map" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                      BNTD Installation and Integration in Fibre Rack
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                  >
                    <div className="rounded-[12px] overflow-hidden aspect-[4/3]" style={{ boxShadow: "var(--shadow-card)" }}>
                      <img src={fieldTeamImg} alt="Field team coordinating on site" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                      Field Team Coordination, Mandurah
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Technical Specs Sidebar */}
              <div className="lg:col-span-4">
                <TechSpecsSidebar specs={nbnSpecs} cadImage={nbnFieldCadImg} cadImageAlt="Field Engineering: NBN FTTP Mandurah" cadCaption="Field Engineering: NBN FTTP Mandurah" />
              </div>
            </div>
          </div>
        </section>

        {/* Field Engineering & Site Governance */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="flex items-start justify-between mb-10">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="heading-l2 mb-4"
                >
                  Field Evidence
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                  className="text-2xl md:text-3xl font-bold text-foreground tracking-tight"
                >
                  Field Engineering & Site Governance
                </motion.h2>
              </div>

              {/* WA White Card Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
                className="bg-primary text-primary-foreground rounded-[10px] px-4 py-3 flex items-center gap-2.5 shrink-0"
                style={{ boxShadow: "var(--shadow-btn)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest leading-none">WA White Card</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider opacity-80 mt-0.5">Certified</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tile 1: Traffic Management & Permitting */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={trafficPermitImg} alt="Penetration Permit: Traffic Management" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Traffic Management & Permitting (TGS)
                  </p>
                  <p className="text-foreground font-semibold text-sm mb-3">
                    Coordinated Traffic
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Coordinated Traffic Guidance Schemes (TGS) in compliance with WA Main Roads standards. Managed permits for urban work zones.
                  </p>
                </div>
              </motion.div>

              {/* Tile 2: Safety Systems & SWMS */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={safetySiteImg} alt="Safety signage and site setup, NBN FTTP" className="w-full h-full object-cover object-[center_75%]" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Safety Systems & Pre Start Authoring
                  </p>
                  <p className="text-foreground font-semibold text-sm mb-3">
                    High-Risk Safety Governance
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Authored Pre Starts and audited Safe Work Method Statements (SWMS) for fiber deployment and civil excavation. Maintained a zero-incident record across all project phases.
                  </p>
                </div>
              </motion.div>

              {/* Tile 3 — Quality & Network Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={siteComplianceImg} alt="Site compliance setup — NBN FTTP Mandurah" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Quality & Network Compliance
                  </p>
                  <p className="text-foreground font-semibold text-sm mb-3">
                    AS/CA Technical Standards
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ensured 100% adherence to AS/CA S008-S009 and NBN technical guidelines. Conducted site audits and managed daily Pre-Start/Toolbox Talks for multi-disciplinary field crews.
                  </p>
                </div>
              </motion.div>

              {/* Tile 4 — Splicing, Testing & NBN Integration */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden flex flex-col md:col-span-3"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <p className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Splicing, Testing & NBN Integration
                    </p>
                    <p className="text-foreground font-semibold text-sm mb-3">
                      Fiber Network Commissioning
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Performed fiber optic splicing, end-to-end network testing, and NBN integration across multi-dwelling and greenfield FTTP deployments. Demonstrated high proficiency in OTDR (Optical Time-Domain Reflectometer) trace analysis for fault detection and splice loss verification, and PON (Passive Optical Network) power-level testing to ensure signal integrity from OLT to ONT across the distribution network.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["OTDR Testing", "PON Analysis", "Fiber Splicing", "NBN Integration", "Splice Loss Verification", "Signal Integrity"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary text-secondary-foreground font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-64 rounded-[8px] overflow-hidden shrink-0">
                    <img src={otdrTestImg} alt="OTDR trace analysis on fiber distribution frame" className="w-full h-auto object-cover object-[center_25%] aspect-[4/3]" loading="lazy" />
                    <p className="font-mono text-[10px] text-muted-foreground mt-2 tracking-wider text-center uppercase">
                      OTDR Trace — Fiber Distribution Frame
                    </p>
                  </div>
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

export default NbnDeepDive;
