import { motion } from "framer-motion";
import { Cog, ShieldCheck, MapPin } from "lucide-react";

const specializations = [
  {
    icon: Cog,
    title: "Mechanical Innovation",
    description: "Advanced design, prototyping, and manufacturing process optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Project Governance",
    description: "Risk management, compliance frameworks, and stakeholder reporting.",
  },
  {
    icon: MapPin,
    title: "WA Site Readiness",
    description: "Mobilization planning, FIFO logistics, and commissioning in remote WA sites.",
  },
];

const CoreSpecializations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="heading-l2 mb-10 text-center"
        >
          Core Specializations
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specializations.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              className="bg-card p-8 rounded-[12px] text-center transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-secondary mb-5">
                <spec.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{spec.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSpecializations;
