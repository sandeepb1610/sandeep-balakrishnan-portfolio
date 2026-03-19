import { motion } from "framer-motion";
import { Cpu, ClipboardList, ShieldCheck, HardHat, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import solidworksImg from "@/assets/toolkit-solidworks.jpg";
import ganttImg from "@/assets/toolkit-gantt.jpg";
import swmsImg from "@/assets/toolkit-swms.jpg";

const ToolkitSection = ({
  index,
  label,
  title,
  description,
  image,
  imageAlt,
  skills,
  children,
}: {
  index: number;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  skills: string[];
  children?: React.ReactNode;
}) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index > 0 ? "mt-24" : ""}`}>
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className={isReversed ? "lg:order-2" : ""}
      >
        <p className="heading-l2 mb-3">{label}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-secondary-foreground font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {children}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        className={isReversed ? "lg:order-1" : ""}
      >
        <div
          className="rounded-[12px] overflow-hidden"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto object-cover aspect-video"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

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

          {/* Section 1: Engineering Design */}
          <ToolkitSection
            index={0}
            label="Section 01"
            title="Engineering Design"
            description="End-to-end mechanical design capability spanning concept development through production-ready drawings. Proficient in parametric modeling, simulation-driven design, and rapid prototyping workflows that compress development cycles."
            image={solidworksImg}
            imageAlt="SolidWorks CAD software dashboard with feature tree and 3D assembly"
            skills={["SolidWorks", "FEA / FEM", "Mechatronics", "Rapid Prototyping"]}
          />

          {/* Section 2: Project Governance */}
          <ToolkitSection
            index={1}
            label="Section 02"
            title="Project Governance"
            description="Structured project delivery using industry-standard scheduling, cost control, and stakeholder reporting frameworks. Experienced in managing multi-disciplinary teams and maintaining governance across concurrent capital projects."
            image={ganttImg}
            imageAlt="MS Project Gantt chart showing project schedule and milestones"
            skills={["MS Project", "Stakeholder Engagement", "Budgeting", "Risk Mitigation"]}
          />

          {/* Section 3: WA Compliance */}
          <ToolkitSection
            index={2}
            label="Section 03"
            title="WA Compliance & Site Safety"
            description="Comprehensive understanding of Western Australian workplace health and safety legislation. Experienced in authoring Safe Work Method Statements and conducting site-specific risk assessments for remote and FIFO operations."
            image={swmsImg}
            imageAlt="Professional Safe Work Method Statement document"
            skills={["AS/NZS Standards", "JSA / JHA Authoring", "Site Inductions", "PPE Compliance"]}
          >
            {/* Certification Badges */}
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2.5 rounded-[12px]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <HardHat className="w-5 h-5 text-foreground" />
                <div>
                  <p className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">WA White Card</p>
                  <p className="text-[11px] text-muted-foreground">Construction Induction</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2.5 rounded-[12px]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <FileText className="w-5 h-5 text-foreground" />
                <div>
                  <p className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">SWMS Authoring</p>
                  <p className="text-[11px] text-muted-foreground">Certified Competency</p>
                </div>
              </div>
            </div>
          </ToolkitSection>
        </div>
      </section>
    </div>
  );
};

export default TechnicalToolkit;
