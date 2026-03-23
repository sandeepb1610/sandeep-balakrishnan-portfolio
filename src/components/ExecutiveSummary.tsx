import { motion } from "framer-motion";
import heroImage from "@/assets/onsite-leadership.jpg";

const ExecutiveSummary = () => {
  return (
    <section className="py-14 md:py-20 bg-card">
      <div className="container mx-auto px-5 md:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="heading-l2 mb-10"
        >
          Executive Summary
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Design · Build · Test
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              A uniquely dual-qualified engineer combining deep technical expertise with
              executive-level commercial acumen. With a foundation built on the complete
              Design-Build-Test lifecycle, I deliver disciplined engineering methodology
              across every project phase, from feasibility studies and concept design
              through fabrication oversight, commissioning, and operational handover.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              My approach integrates rigorous risk assessment with lean project delivery,
              ensuring capital projects consistently meet technical specifications,
              safety mandates, and commercial KPIs. I specialise in translating complex
              stakeholder requirements into executable engineering scopes that drive
              measurable outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              Holding a <span className="font-semibold text-foreground">Master of Project Management</span> from{" "}
              <span className="font-semibold text-foreground">Curtin University</span> and an{" "}
              <span className="font-semibold text-foreground">Executive MBA</span> from the{" "}
              <span className="font-semibold text-foreground">Swiss School of Business and Management</span>,
              I bring a rare convergence of mechanical engineering depth, governance
              expertise, and strategic business thinking, enabling me to bridge the gap
              between workshop floor execution and boardroom decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              This combination of technical, project management, and business leadership
              competencies ensures I don't just deliver projects; I deliver them on time,
              within budget, and aligned to broader organisational strategy.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                B.Tech · MPM (Curtin) · EMBA (SSBM Geneva)
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div
              className="rounded-[12px] overflow-hidden h-full"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={heroImage}
                alt="Sandeep Balakrishnan on-site conducting maintenance work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md">
              <span className="font-mono text-xs tracking-wider uppercase">On-Site Leadership</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
