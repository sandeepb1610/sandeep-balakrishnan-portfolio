import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink, Users, Download, Calendar, Globe, Wrench, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Section 1: IPMA */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="heading-l2 mb-4"
            >
              Professional Leadership
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-16"
            >
              Leadership & Recognition
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              >
                <div
                  className="rounded-[12px] bg-card flex items-center justify-center aspect-video"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center">
                    <Globe className="w-14 h-14 text-foreground" strokeWidth={1.2} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-md mb-5">
                  <Award className="w-4 h-4 text-foreground" />
                  <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">Board Member</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                  IPMA Young Crew Australia
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Serving as a Board Member for the International Project Management Association
                  (IPMA) Young Crew Australia, contributing to the advancement of project
                  management practices across the Asia-Pacific region.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Responsibilities include strategic planning for young professional development
                  programs, organizing industry workshops, and representing Australian engineering
                  talent on the global IPMA stage.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Strategic Planning", "Mentorship", "Industry Events", "Global Representation"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Research & Global Recognition */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-md mb-5">
                  <BookOpen className="w-4 h-4 text-foreground" />
                  <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">Published Research</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                  Research & Global Recognition
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Published research indexed by the <span className="font-semibold text-foreground">Harvard-Smithsonian
                  Center for Astrophysics</span> through the NASA Astrophysics Data System (ADS) — 
                  a recognition that places the work alongside contributions from leading
                  research institutions worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This indexing validates the technical rigor and scientific methodology
                  applied to engineering research, bridging the gap between academic
                  investigation and real-world mechanical systems design.
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                  style={{ boxShadow: "var(--shadow-btn)" }}
                >
                  View Publication
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              >
                <div
                  className="rounded-[12px] bg-background flex items-center justify-center aspect-video"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center">
                    <Atom className="w-14 h-14 text-foreground" strokeWidth={1.2} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Advocating for Engineering in WA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              >
                <div
                  className="rounded-[12px] bg-card flex items-center justify-center aspect-video"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center">
                    <Wrench className="w-14 h-14 text-foreground" strokeWidth={1.2} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-md mb-5">
                  <Users className="w-4 h-4 text-foreground" />
                  <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">Community</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                  Advocating for the Engineering Profession in WA
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Actively championing the growth and recognition of the engineering profession
                  in Western Australia through mentorship, industry engagement, and professional
                  body participation. Committed to elevating standards and creating pathways
                  for emerging engineers in the WA resources and infrastructure sectors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through IPMA and local engineering networks, I work to bridge the gap between
                  academic preparation and industry expectations — ensuring the next generation
                  of WA engineers are project-ready, safety-conscious, and commercially aware
                  from day one.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["WA Engineering Community", "Professional Development", "Graduate Mentoring", "Industry Standards"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-4"
            >
              Let's Connect
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight max-w-3xl mx-auto mb-8"
            >
              Ready to discuss how my technical design and project governance skills
              can optimize your next project?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-medium text-sm px-6 py-3 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ boxShadow: "var(--shadow-btn)" }}
              >
                <Calendar className="w-4 h-4" />
                Schedule a Briefing
              </a>
              <a
                href="https://docs.google.com/document/d/1uBB0LrGoDXWpIn3YFUs4kOCQHCIy6s8q/edit?usp=sharing&ouid=102771873244239280120&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-medium text-sm px-6 py-3 rounded-md transition-all duration-200 hover:bg-primary-foreground/20"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
