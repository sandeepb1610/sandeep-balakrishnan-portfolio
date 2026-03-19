import { motion } from "framer-motion";
import { FileText, FlaskConical, ShieldCheck, Layers } from "lucide-react";

const docs = [
  {
    label: "Root Cause Analysis",
    icon: FileText,
    color: "bg-primary/8",
  },
  {
    label: "Material Selection (BOM)",
    icon: Layers,
    color: "bg-accent/8",
  },
  {
    label: "Validation Testing",
    icon: FlaskConical,
    color: "bg-primary/8",
  },
  {
    label: "Compliance (AS/NZS)",
    icon: ShieldCheck,
    color: "bg-accent/8",
  },
];

const TechDocGrid = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="heading-l2 mb-4"
        >
          Reference Material
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
          className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10"
        >
          Technical Documentation
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {docs.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
                className="bg-card rounded-[12px] overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Image preview area */}
                <div className={`aspect-[4/3] ${doc.color} flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-muted-foreground/40" strokeWidth={1.5} />
                </div>

                {/* Label + Button */}
                <div className="p-4 flex flex-col gap-3">
                  <p className="font-mono text-[12px] font-semibold text-foreground uppercase tracking-wider leading-snug">
                    {doc.label}
                  </p>
                  <button
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-medium text-xs px-4 py-2 rounded-md w-full transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                  >
                    View Methodology
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechDocGrid;
