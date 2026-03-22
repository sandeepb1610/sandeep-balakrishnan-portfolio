import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard, { type ProjectData } from "@/components/ProjectCard";
import nbnImage from "@/assets/project-nbn-mandurah.jpg";
import navisImage from "@/assets/project-navis.jpg";
import quadrupedImage from "@/assets/project-quadruped.jpg";

const projects: ProjectData[] = [
  {
    title: "NBN FTTP - TimeZone Mandurah",
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
    title: "Confidential: High-Mobility 12-DOF Autonomous Quadruped",
    result: "DRDO-CAIR · Government of India",
    heroImage: quadrupedImage,
    techSpecs: ["ADAMS", "SolidWorks FEM", "Kinematics", "NDA Restricted"],
    videoPlaceholder: true,
    // videoUrl: "/videos/quadruped-gait-clip.mp4",
    deepDiveUrl: "/projects/quadruped-robot",
    restricted: true,
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

          {/* Other Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="mt-16 text-center"
          >
            <Link
              to="/projects/other"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-6 py-3 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ boxShadow: "var(--shadow-btn)" }}
            >
              View Other Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
