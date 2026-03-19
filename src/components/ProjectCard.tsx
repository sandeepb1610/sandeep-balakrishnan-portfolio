import { motion } from "framer-motion";
import { ArrowRight, Play, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export interface ProjectData {
  title: string;
  result: string;
  heroImage: string;
  techSpecs: string[];
  videoPlaceholder?: boolean;
  videoUrl?: string;
  deepDiveUrl?: string;
  restricted?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.2, 0, 0, 1] }}
      className="bg-card rounded-[12px] overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Top — Hero Media */}
      <div
        className="relative aspect-video overflow-hidden bg-secondary"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Video overlay on hover */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            playsInline
            loop
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}

        {/* Play icon overlay (shown when no video or as hint) */}
        {project.videoPlaceholder && !project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
            </div>
          </div>
        )}

        {/* Play indicator for video-enabled cards */}
        {project.videoUrl && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase bg-card/90 backdrop-blur-sm text-muted-foreground px-2.5 py-1 rounded-md transition-opacity duration-300"
            style={{ opacity: isHovered ? 0 : 1 }}
          >
            <Play className="w-3 h-3" />
            Hover to Preview
          </div>
        )}

        {/* Technical Video badge */}
        {(project.videoUrl || project.videoPlaceholder) && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-md">
            <Video className="w-3 h-3" />
            Technical Video
          </div>
        )}

        <span className="absolute top-3 right-3 font-mono text-[10px] tracking-widest uppercase bg-card/90 backdrop-blur-sm text-muted-foreground px-2.5 py-1 rounded-md">
          {project.videoUrl ? "Video Preview" : "Video Coming Soon"}
        </span>
      </div>

      {/* Middle — Title & Result */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground leading-snug mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-sm font-semibold text-accent mb-5">
          {project.result}
        </p>

        {/* Bottom — Tech Specs */}
        <div className="mt-auto">
          <p className="heading-l2 mb-3">Technical Specs</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techSpecs.map((spec) => (
              <span
                key={spec}
                className="bg-secondary text-secondary-foreground font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md"
              >
                {spec}
              </span>
            ))}
          </div>

          {project.deepDiveUrl ? (
            <Link to={project.deepDiveUrl} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md w-full justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ boxShadow: "var(--shadow-btn)" }}
            >
              View Deep Dive
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md w-full justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ boxShadow: "var(--shadow-btn)" }}
            >
              View Deep Dive
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
