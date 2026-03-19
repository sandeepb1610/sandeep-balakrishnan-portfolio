import { motion } from "framer-motion";

interface KpiCardProps {
  label: string;
  value: string;
  description: string;
  index: number;
}

const KpiCard = ({ label, value, description, index }: KpiCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.05,
        ease: [0.2, 0, 0, 1],
      }}
      className="bg-card p-8 rounded-[12px] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <span className="heading-l2 block mb-4">{label}</span>
      <div className="bg-secondary rounded-[4px] p-4">
        <p className="kpi-value">{value}</p>
        <p className="text-sm text-muted-foreground mt-1 font-sans">{description}</p>
      </div>
    </motion.div>
  );
};

export default KpiCard;
