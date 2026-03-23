import { motion } from "framer-motion";
import { ArrowLeft, Target, Wrench, Zap, CheckCircle, ImageIcon, Play, Info } from "lucide-react";
import waterproofAssembly1 from "@/assets/waterproof-assembly-1.png";
import waterproofAssembly2 from "@/assets/waterproof-assembly-2.png";
import waterproofExploded from "@/assets/waterproof-exploded-view.png";
import lteGatewayExploded from "@/assets/lte-gateway-exploded.png";
import lteGatewayPcb from "@/assets/lte-gateway-pcb.png";
import lteGatewayShell from "@/assets/lte-gateway-shell.png";
import feaBaseFrame from "@/assets/fea-base-frame.png";
import feaFloatBase from "@/assets/fea-float-base.png";
import feaSupportStructure from "@/assets/fea-support-structure.png";
import feaTopFrame from "@/assets/fea-top-frame.png";
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
  note?: string;
  media?: { type: "image" | "video"; src: string; caption: string }[];
}

const projects: StarProject[] = [
  {
    title: "Waterproof LTE Gateway with Integrated Display",
    category: "Product Design & RF Engineering",
    situation:
      "Field-deployed IoT and telemetry systems required reliable LTE connectivity in remote or exposed environments. Conventional gateway enclosures relied on external antenna mounts to achieve adequate signal range, introducing additional failure points, increasing installation complexity, and compromising the IP rating of the enclosure at cable penetration interfaces.",
    task:
      "Design a self-contained, IP-rated LTE gateway enclosure with an integrated display that eliminates the need for external antennas while maintaining or exceeding the signal range of legacy antenna-based configurations. The solution must be manufacturable via injection moulding, field-serviceable, and accommodate a Raspberry Pi compute module with LTE modem and circular PCB antenna arrays.",
    action:
      "Performed RF propagation analysis to determine that a curved, dome-profile enclosure geometry could function as a passive signal reflector, concentrating radiated energy in the desired coverage pattern without external antenna elements. Designed the two-part clamshell enclosure in SolidWorks with integrated PCB mounting bosses, display window cutout, and cable gland provisions. Specified RF-transparent ASA plastic for the upper shell to minimise signal attenuation. Validated mechanical integrity under IEC 60529 ingress protection testing and conducted comparative field range testing against the legacy external-antenna configuration.",
    result:
      "Achieved equivalent LTE signal range to the previous external-antenna design while eliminating all external antenna hardware. Reduced bill-of-materials cost by 30% and installation time by 45%. The sealed dome profile achieved IP66 compliance with zero ingress across accelerated weathering and spray tests. Design approved for volume production across the full gateway product line.",
    techStack: ["SolidWorks", "RF Analysis", "Injection Moulding", "IP66 Design", "ASA Plastic", "Raspberry Pi"],
    media: [
      { type: "image", src: lteGatewayExploded, caption: "LTE Gateway: Exploded Assembly View" },
      { type: "image", src: lteGatewayPcb, caption: "LTE Gateway: PCB & Internal Component Layout" },
      { type: "image", src: lteGatewayShell, caption: "LTE Gateway: Enclosure Shell Profile" },
    ],
  },
  {
    title: "Waterproof Enclosure for Subsea Motor Assembly",
    category: "Marine & Product Engineering",
    situation:
      "An underwater motor assembly required a robust waterproofing solution to prevent ingress at depths of up to 5 metres. The existing sealing approach relied on adhesive bonding and generic gasket materials, which degraded under prolonged submersion and thermal cycling, leading to recurring motor failures and costly field replacements.",
    task:
      "Design and validate a screw-thread-based injection-moulded polypropylene (PP) enclosure capable of achieving IP68-rated waterproofing, incorporating a silicone O-ring compression seal and PG cable gland for wiring harness ingress protection — while maintaining ease of field assembly, manufacturability, and compatibility with the existing motor form factor.",
    action:
      "Conducted a first-principles analysis of thread engagement length, pitch geometry, and sealing interface pressure to define the enclosure's critical dimensions. Designed the two-part threaded assembly in SolidWorks with a controlled 0.5 mm thread clearance to ensure consistent engagement torque and repeatable sealing compression. Specified polypropylene (PP) for injection moulding due to its superior chemical resistance to marine environments, low moisture absorption, and cost-effective mouldability. Integrated a precision-machined silicone O-ring groove at the thread–body interface to provide a reliable radial compression seal under hydrostatic loading. Routed the motor wiring harness through a PG-rated cable gland, ensuring IP68-compliant ingress protection at the cable penetration point without compromising the enclosure's structural integrity. Performed FEA on thread root stress under hydrostatic loading and validated the design through iterative prototyping and submersion testing at 1.5× rated depth.",
    result:
      "Achieved IP68 compliance with zero ingress across 72-hour continuous submersion tests. The silicone O-ring and 0.5 mm thread clearance combination delivered consistent sealing performance across 200+ assembly–disassembly cycles. PG gland integration eliminated all wiring-related ingress failures. Reduced field failure rate by over 85% compared to the legacy bonded design. The PP injection-moulded enclosure reduced per-unit sealing cost by 40% and assembly time by 60%, enabling scalable deployment across the full motor product line.",
    techStack: ["SolidWorks", "FEA", "Injection Moulding (PP)", "IP68 Design", "Silicone O-Ring", "PG Cable Gland"],
    media: [
      { type: "image", src: waterproofAssembly1, caption: "Waterproofing Assembly: Overview" },
      { type: "image", src: waterproofAssembly2, caption: "Waterproofing Assembly: Cross-Sectional View" },
      { type: "image", src: waterproofExploded, caption: "Waterproofing Assembly: Exploded View" },
    ],
  },
  {
    title: "Structural Integrity Analysis: Shrimp Health Monitoring System",
    category: "FEA & Structural Validation",
    situation:
      "An automated shrimp health monitoring system required a stainless steel support structure to submerge and retract a check tray for biological sample collection. The frame is subject to constant dynamic loading from water resistance and sample weight, making structural durability critical to prevent mechanical failure during underwater deployment.",
    task:
      "Validate the structural integrity of the base frame, connecting frame, support rod, and top metalstrip assemblies under simulated operational loads. Confirm that peak von Mises stress remained well below the AISI 304 yield strength (2.068 × 10⁸ N/m²) and that total displacement stayed within tolerances to prevent sensor misalignment or mechanical interference.",
    action:
      "Modelled all frame assemblies in SolidWorks, assigning AISI 304 Stainless Steel properties for corrosion resistance and structural stiffness. Applied distributed mass loads and gravity (9.81 m/s²) to simulate tray weight and internal components, with fixed geometry constraints at mounting points. Conducted Static Linear Analysis across four sub-assemblies (base frame, connecting frame, support rod, and top metalstrip), evaluating von Mises stress distribution, equivalent strain (ESTRN), and resultant displacement (URES). Used exaggerated deformation scales (up to 520×) as a visualisation tool to identify potential failure modes and buckling-prone regions.",
    note:
      "Interpreting FEA Visualisation: The Deformation Scale in these analyses is set to approximately 520×. This is a standard visualisation technique used to exaggerate the shape and direction of displacement to identify potential failure modes. While the visuals suggest significant bending, the actual physical displacement is less than 1 mm — confirming the assembly remains rigid and structurally sound for its intended application.",
    result:
      "Peak von Mises stress (1.472 × 10⁷ N/m² on the base frame) confirmed a safety factor exceeding 14× against yield. Maximum displacement remained under 1 mm across all assemblies (0.16 mm base frame, 0.87 mm connecting frame), verifying zero impact on sensor accuracy. Analysis validated the design for prototyping, significantly reducing the risk of structural failure in the field.",
    techStack: ["SolidWorks Simulation", "Static FEA", "AISI 304 Stainless Steel", "Von Mises Analysis", "URES Displacement", "Strain Mapping"],
    media: [
      { type: "image", src: feaBaseFrame, caption: "FEA: Base Frame Static Deformation" },
      { type: "image", src: feaFloatBase, caption: "FEA: Connecting Frame Analysis" },
      { type: "image", src: feaTopFrame, caption: "FEA: Top Metalstrip Displacement" },
    ],
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
              A selection of independent and personal engineering projects undertaken outside of primary professional engagements, each driven by technical curiosity and a commitment to continuous development.
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

                  {/* Technical Note */}
                  {project.note && (
                    <div className="px-6 md:px-8 py-5 border-t border-border bg-accent/30">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center shrink-0 mt-0.5">
                          <Info className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground block mb-1">
                            Technical Note
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Media Gallery */}
                  <div className="p-6 md:p-8 border-t border-border">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                      Project Media
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.media ? (
                        project.media.map((item, slot) => (
                          <div key={slot} className="flex flex-col gap-2">
                            <div className="aspect-video bg-secondary rounded-md overflow-hidden border border-border">
                              <img
                                src={item.src}
                                alt={item.caption}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-center">
                              {item.caption}
                            </span>
                          </div>
                        ))
                      ) : (
                        [0, 1, 2].map((slot) => (
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
                        ))
                      )}
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
