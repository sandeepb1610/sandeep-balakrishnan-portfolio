import { motion } from "framer-motion";

interface SpecGroup {
  label: string;
  items: string[];
}

interface TechSpecsSidebarProps {
  specs: SpecGroup[];
  cadImage?: string;
  cadImageAlt?: string;
  cadCaption?: string;
}

const TechSpecsSidebar = ({ specs, cadImage, cadImageAlt, cadCaption }: TechSpecsSidebarProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      className="bg-card rounded-[12px] p-6 lg:sticky lg:top-24"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <p className="heading-l2 mb-6">Technical Specs</p>

      <div className="space-y-6">
        {specs.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider mb-2">
              {group.label}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CAD Exploded View Placeholder */}
      {cadImage ? (
        <div className="mt-8">
          <div
            className="rounded-[8px] overflow-hidden"
          >
            <img
              src={cadImage}
              alt={cadImageAlt || "CAD Exploded View"}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {cadCaption && (
            <p className="font-mono text-[10px] text-muted-foreground mt-2 tracking-wider text-center uppercase">
              {cadCaption}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-8 aspect-square bg-secondary rounded-[8px] flex items-center justify-center">
          <div className="text-center px-4">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              CAD Exploded View
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/60 mt-1">
              Placeholder
            </p>
          </div>
        </div>
      )}
    </motion.aside>
  );
};

export default TechSpecsSidebar;
