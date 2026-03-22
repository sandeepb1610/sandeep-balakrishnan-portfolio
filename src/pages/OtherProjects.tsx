import { motion } from "framer-motion";
import { ArrowLeft, Target, Wrench, Zap, CheckCircle, ImageIcon, Play } from "lucide-react";
import waterproofAssembly1 from "@/assets/waterproof-assembly-1.png";
import waterproofAssembly2 from "@/assets/waterproof-assembly-2.png";
import waterproofExploded from "@/assets/waterproof-exploded-view.png";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface StarProject {
  title: string;
  category: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  techStack: string[];
}

const projects: StarProject[] = [
  {
    title: "Automated Quality Inspection System",
    category: "Industrial Automation",
    situation:
      "A manufacturing facility experienced a 12% defect rate on its production line due to inconsistent manual inspection processes, leading to significant material waste and rework costs.",
    task:
      "Design and implement an automated inspection system capable of detecting surface-level defects in real time, reducing the defect pass-through rate to below 2%.",
    action:
      "Developed a vision-based inspection station using industrial cameras and custom image-processing algorithms. Integrated the system into the existing conveyor infrastructure with minimal downtime. Conducted iterative calibration and validation testing across 5,000+ sample units.",
    result:
      "Reduced defect pass-through rate to 1.4%, saving an estimated $180K annually in rework and scrap costs. System processed 120 units/hour with 98.6% accuracy.",
    techStack: ["Machine Vision", "PLC Integration", "Python", "OpenCV"],
  },
  {
    title: "Renewable Energy Monitoring Dashboard",
    category: "Energy & Sustainability",
    situation:
      "A solar farm operator lacked centralised visibility into the performance of 2,400+ panels across three sites, making it difficult to identify underperforming units and schedule maintenance efficiently.",
    task:
      "Build a real-time monitoring platform that aggregates panel-level data, flags anomalies, and provides actionable maintenance insights to the operations team.",
    action:
      "Architected a cloud-based data pipeline ingesting telemetry from IoT sensors at 5-second intervals. Designed a dashboard with heatmaps, trend analysis, and automated alert thresholds. Collaborated with the field team to define SLA-driven maintenance workflows.",
    result:
      "Increased overall energy yield by 8% through early fault detection. Reduced average maintenance response time from 72 hours to 6 hours. Dashboard adopted across all three sites within 3 months.",
    techStack: ["IoT Sensors", "Cloud Architecture", "Data Visualisation", "React"],
  },
  {
    title: "Structural Load Analysis for Modular Housing",
    category: "Civil & Structural Engineering",
    situation:
      "A modular housing developer needed to validate that their prefabricated steel-frame modules could withstand regional wind and seismic loading conditions before commencing production.",
    task:
      "Perform comprehensive structural analysis on the modular frame design and provide engineering sign-off documentation compliant with AS/NZS 1170 loading standards.",
    action:
      "Created detailed FEA models of the modular frame system, simulating wind, dead, live, and seismic load combinations. Identified two critical connection points requiring reinforcement and proposed redesigned brackets. Prepared a formal engineering assessment report for regulatory submission.",
    result:
      "All modules passed structural compliance review on first submission. Reinforced connections reduced peak stress by 34%. Design approved for production of 150+ units.",
    techStack: ["FEA / FEM", "SolidWorks Simulation", "AS/NZS 1170", "Steel Design"],
  },
  {
    title: "Supply Chain Optimisation Tool",
    category: "Operations & Logistics",
    situation:
      "A mid-size distributor faced frequent stockouts and overstock situations due to fragmented demand forecasting across 8 regional warehouses, resulting in $2.1M in annual carrying costs.",
    task:
      "Develop an inventory optimisation model that balances service levels against holding costs and integrates with the existing ERP system.",
    action:
      "Built a demand forecasting model using historical sales data and seasonal decomposition. Implemented a safety-stock calculator with configurable service-level targets. Delivered a prototype dashboard for warehouse managers to visualise stock health and reorder recommendations.",
    result:
      "Reduced carrying costs by 22% ($462K annually) while maintaining a 97.5% service level. Stockout incidents decreased by 60% in the first quarter after deployment.",
    techStack: ["Python", "Forecasting Models", "ERP Integration", "Data Analysis"],
  },
];

const starIcons = {
  situation: Target,
  task: Wrench,
  action: Zap,
  result: CheckCircle,
};

const starLabels = {
  situation: "Situation",
  task: "Task",
  action: "Action",
  result: "Result",
};

const OtherProjects = () => {
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
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4"
            >
              Other Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
              className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-16"
            >
              A selection of independent and personal engineering projects undertaken outside of primary professional engagements — each driven by technical curiosity and a commitment to continuous development.
            </motion.p>

            <div className="space-y-12">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
                  className="bg-card rounded-[12px] overflow-hidden"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-border">
                    <span className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mt-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-secondary text-secondary-foreground font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* STAR Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {(["situation", "task", "action", "result"] as const).map((key, idx) => {
                      const Icon = starIcons[key];
                      return (
                        <div
                          key={key}
                          className={`p-6 md:p-8 ${
                            idx < 2 ? "border-b border-border" : ""
                          } ${idx % 2 === 0 ? "md:border-r border-border" : ""}`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-foreground" />
                            </div>
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              {starLabels[key]}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project[key]}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Media Gallery — up to 3 placeholders */}
                  <div className="p-6 md:p-8 border-t border-border">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                      Project Media
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[0, 1, 2].map((slot) => (
                        <div
                          key={slot}
                          className="aspect-video bg-secondary rounded-md flex flex-col items-center justify-center gap-2 border border-dashed border-border"
                        >
                          {slot === 0 ? (
                            <>
                              <Play className="w-6 h-6 text-muted-foreground" />
                              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                Video Coming Soon
                              </span>
                            </>
                          ) : (
                            <>
                              <ImageIcon className="w-6 h-6 text-muted-foreground" />
                              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                Image Coming Soon
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OtherProjects;
