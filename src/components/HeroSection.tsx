import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            Project Management & Product
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            Kanchi Rajput
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
            Project{" "}
            <span className="text-primary">•</span> Product{" "}
            <span className="text-primary">•</span> Agile
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
            Engineering Management graduate student at USC focused on project planning, workflow optimization, and cross-functional execution. Seeking Summer 2026 internships in Project Management, Product, and Agile roles across the U.S.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="KanchiRajput_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
          >
            <FileDown size={16} />
            Download Resume
          </a>
          <a
            href="mailto:kanchira@usc.edu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
          >
            <Mail size={16} />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
