import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectCard, { type ProjectData } from "@/components/ProjectCard";
import nbnImage from "@/assets/project-nbn-mandurah.jpg";
import navisImage from "@/assets/project-navis.jpg";
import quadrupedImage from "@/assets/project-quadruped.jpg";

const projects: ProjectData[] = [
  {
    title: "NBN FTTP Mandurah",
    result: "15% Profit Increase",
    heroImage: nbnImage,
    techSpecs: ["MS Project", "AS/NZS Standards", "FTTP Design", "Stakeholder Mgmt"],
    videoPlaceholder: true,
    deepDiveUrl: "/projects/nbn-fttp-mandurah",
  },
  {
    title: "NAVIS Autonomous System",
    result: "Full Autonomy Achieved",
    heroImage: navisImage,
    techSpecs: ["SolidWorks", "MATLAB", "ROS", "CFD Analysis"],
    videoPlaceholder: true,
    // videoUrl: "/videos/navis-technical-clip.mp4",
    deepDiveUrl: "/projects/navis-autonomous",
  },
  {
    title: "12-DOF Quadruped Robot",
    result: "Published Research Output",
    heroImage: quadrupedImage,
    techSpecs: ["SolidWorks", "Arduino", "Gait Analysis", "3D Printing"],
    videoPlaceholder: true,
    // videoUrl: "/videos/quadruped-gait-clip.mp4",
    deepDiveUrl: "/projects/quadruped-robot",
  },
];

const Projects = () => {
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
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-12"
          >
            Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
