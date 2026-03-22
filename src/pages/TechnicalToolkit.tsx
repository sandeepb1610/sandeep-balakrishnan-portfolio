import { motion } from "framer-motion";
import { Cpu, ClipboardList, HardHat } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import feaImg from "@/assets/toolkit-fea-stress.jpg";
import ganttImg from "@/assets/toolkit-gantt.jpg";
import whitecardImg from "@/assets/toolkit-whitecard.jpg";

interface Skill {
  name: string;
  level?: string;
}

interface Pillar {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  skills: Skill[];
}

const pillars: Pillar[] = [
  {
    icon: Cpu,
    number: "01",
    title: "Engineering Design & Simulation",
    description:
      "Full-spectrum mechanical design from concept through validated simulation. Expert-level parametric modeling paired with advanced structural and fluid analysis.",
    image: feaImg,
    imageAlt: "FEA stress-test simulation with heatmap distribution",
    skills: [
      { name: "SolidWorks", level: "Expert" },
      { name: "FEA / CFD", level: "Ansys" },
      { name: "Multibody Dynamics", level: "ADAMS" },
      { name: "DFM / DFA" },
    ],
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Project Governance",
    description:
      "Structured delivery methodology grounded in MPM and MBA disciplines. Proficient across predictive and adaptive scheduling frameworks for capital project execution.",
    image: ganttImg,
    imageAlt: "Gantt chart project schedule with milestones",
    skills: [
      { name: "MS Project" },
      { name: "Primavera P6" },
      { name: "Agile / Scrum" },
      { name: "Stakeholder & Vendor Mgmt" },
    ],
  },
  {
    icon: HardHat,
    number: "03",
    title: "WA Site Readiness",
    description:
      "Comprehensive Western Australian compliance capability. Qualified to author safety documentation and ensure regulatory conformance across remote and FIFO operations.",
    image: whitecardImg,
    imageAlt: "WA White Card construction induction certification",
    skills: [
      { name: "WA White Card" },
      { name: "AS 4024", level: "Machine Safety" },
      { name: "Pre Start Authoring" },
      { name: "ISO 45001 Compliance" },
    ],
  },
];

const TechnicalToolkit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="heading-l2 mb-4"
          >
            Proficiency Matrix
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-16"
          >
            Technical Toolkit
          </motion.h1>

          {/* 3-Column Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.2, 0, 0, 1],
                }}
                className="bg-card rounded-[12px] overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-secondary">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                      <pillar.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground leading-snug mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Skills List */}
                  <div className="mt-auto space-y-2">
                    {pillar.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between bg-secondary rounded-md px-3 py-2"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wider text-foreground font-medium">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TechnicalToolkit;
