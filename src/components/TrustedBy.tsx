import { motion } from "framer-motion";

const logos = [
  { name: "Sigma Tech Services" },
  { name: "Eruvaka Technologies" },
  { name: "DRDO, Government of India" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <p className="heading-l2 text-center mb-10">Trusted By</p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
            >
              <span className="font-mono text-sm md:text-base tracking-wider uppercase text-muted-foreground/60 select-none">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
