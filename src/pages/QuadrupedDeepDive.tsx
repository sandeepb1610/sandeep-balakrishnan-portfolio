import { motion } from "framer-motion";
import { ArrowLeft, Award, Clock, DollarSign, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gaitImg from "@/assets/quadruped-gait-sim.jpg";
import nasaImg from "@/assets/quadruped-nasa-ads.jpg";

const starSections = [
  {
    letter: "S",
    title: "Situation",
    content:
      "India's Defence Research and Development Organisation (DRDO) required a military-grade quadruped robot capable of traversing unstructured terrain for reconnaissance and payload transport. The project demanded rigorous multibody dynamics simulation and structural validation to meet defense-grade reliability standards within aggressive timeline and budget constraints.",
  },
  {
    letter: "T",
    title: "Task",
    content:
      "Design and simulate a 12-DOF (Degrees of Freedom) quadruped robot from first principles — encompassing kinematic modeling, gait optimization, structural FEM analysis, and full system integration. Deliver the project ahead of schedule and within budget for DRDO.",
  },
  {
    letter: "A",
    title: "Action",
    content:
      "Developed the complete 12-DOF kinematic chain using ADAMS multibody dynamics simulation to optimize joint trajectories and walking stability across multiple gait patterns — including trot, crawl, and bound gaits. Performed comprehensive FEM (Finite Element Method) structural analysis on critical load-bearing components to validate factor-of-safety requirements under dynamic loading conditions. Implemented an iterative design loop between SolidWorks parametric models and simulation environments to converge on an optimized leg geometry that minimized actuator torque requirements while maximizing ground clearance.",
  },
  {
    letter: "R",
    title: "Result",
    content:
      "Completed the project 15% ahead of schedule and under 90% of the allocated budget — exceeding DRDO's delivery expectations. The resulting research was published and indexed by the Harvard-Smithsonian Center for Astrophysics through the NASA Astrophysics Data System (ADS), establishing global academic recognition for the work's technical rigor and contribution to the field of legged robotics.",
  },
];

const results = [
  { icon: Award, value: "12-DOF", label: "Degrees of Freedom" },
  { icon: Clock, value: "15%", label: "Ahead of Schedule" },
  { icon: DollarSign, value: "<90%", label: "Under Budget" },
  { icon: BookOpen, value: "NASA ADS", label: "Indexed Publication" },
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
              Case Study — Deep Dive
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4"
            >
              12-DOF Military Quadruped Robot
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
              className="font-mono text-sm font-semibold text-accent mb-12"
            >
              DRDO &nbsp;·&nbsp; Defence Research & Development Organisation, India
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

            {/* Publication Link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-[12px] mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div>
                <p className="heading-l2 mb-2">Publication</p>
                <p className="text-foreground font-semibold">
                  Indexed by Harvard-Smithsonian Center for Astrophysics / NASA ADS
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Research contribution to legged robotics for defense applications
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] shrink-0"
                style={{ boxShadow: "var(--shadow-btn)" }}
              >
                View Publication
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

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
                    src={gaitImg}
                    alt="Quadruped robot gait simulation showing walking stability phases"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Placeholder — Gait Simulation: Walking Stability Analysis
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
                    src={nasaImg}
                    alt="NASA ADS publication indexing page"
                    className="w-full h-auto object-cover aspect-video"
                    loading="lazy"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-3 tracking-wider text-center uppercase">
                  Placeholder — NASA ADS Official Indexing
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

export default QuadrupedDeepDive;
