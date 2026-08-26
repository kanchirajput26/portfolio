import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Teaching Assistant - ISE 515: Engineering Project Management",
    company: "University of Southern California, Los Angeles, CA",
    period: "Jan 2026 – Present",
    description: [
      "Assist with grading assignments and exams for a cohort of 28 students",
      "Reinforce practical application of scheduling, planning, and execution methodologies",
    ],
    tags: ["MS Project", "Scheduling", "Resource Leveling", "Mentoring"],
  },
  {
    title: "MIS Intern",
    company: "Robot Components Private Limited, Faridabad, India",
    period: "Jun 2025 – Jul 2025",
    description: [
      "Automated workflow tracking with Google Apps Script, cutting manual status updates by ~30% and improving real-time visibility into task progress",
      "Generated and analyzed MIS reports to track KPIs for 15+ employees, enabling data-driven decision-making for management",
    ],
    tags: ["Google Apps Script", "Process Automation", "MIS Reporting", "KPI Tracking"],
  },
];

const ExperienceItem = ({ exp, index }: { exp: (typeof experiences)[number]; index: number }) => {
  const dotRef = useRef(null);
  const dotActive = useInView(dotRef, { margin: "5000px 0px -50% 0px" });

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative md:pl-16"
    >
      <div
        ref={dotRef}
        className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 bg-background hidden md:flex items-center justify-center transition-colors duration-500 ${
          dotActive ? "border-primary" : "border-muted-foreground/30"
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full transition-colors duration-500 ${
            dotActive ? "bg-primary" : "bg-muted-foreground/30"
          }`}
        />
      </div>

      <div className="glass-card rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">{exp.title}</h3>
            <p className="text-muted-foreground text-sm">{exp.company}</p>
          </div>
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {exp.period}
          </span>
        </div>
        <ul className="space-y-2 mb-4">
          {exp.description.map((item, idx) => (
            <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Professional Experience</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Where I've Worked</h2>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-6 top-0 bottom-0 w-px bg-muted-foreground/20 hidden md:block" />
          <motion.div
            className="absolute left-6 top-0 w-px bg-primary hidden md:block origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
