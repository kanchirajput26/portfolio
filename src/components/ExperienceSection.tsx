import { motion, useInView } from "framer-motion";
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
    title: "TechOps",
    company: "USC Annenberg School of Journalism, Los Angeles, CA",
    period: "Aug 2025 – Dec 2025",
    role: "TechOps",
    description: [
      "Assisted in mapping classroom operations, maintaining schedules, and collaborating with peers to ensure smooth day-to-day activities",
      "Manage backend updates, secure access and serve as technical bridge between students, faculty and digital infrastructure",
    ],
    tags: ["Operations", "Coordination", "Tech Support", "Scheduling"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative md:pl-16"
              >
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
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
                        <span className="text-primary mt-1.5 shrink-0">•</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
