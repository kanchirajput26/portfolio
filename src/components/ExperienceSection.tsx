import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Teaching Assistant",
    company: "University of Southern California",
    period: "Current",
    description:
      "Helping students understand project scheduling, dependencies, and resource leveling using MS Project. Supporting course delivery and grading for project management coursework.",
    tags: ["MS Project", "Scheduling", "Resource Leveling", "Mentoring"],
  },
  {
    title: "Project Management Intern",
    company: "Coming Soon",
    period: "Seeking Opportunities",
    description:
      "Actively pursuing internship opportunities in project management, product management, and Agile/Scrum roles across the United States.",
    tags: ["Agile", "Scrum", "Product Management", "Stakeholder Management"],
    placeholder: true,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
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
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className={`glass-card rounded-xl p-6 ${exp.placeholder ? "border-dashed" : ""}`}>
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
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
