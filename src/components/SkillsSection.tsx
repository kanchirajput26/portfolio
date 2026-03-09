import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Programming & Scripting",
    items: ["SQL", "JavaScript", "Google App Script", "Python", "C++", "MATLAB"],
  },
  {
    name: "Project Planning & Scheduling",
    items: ["WBS", "Gantt Charts", "Dependency Mapping", "Milestone Planning"],
  },
  {
    name: "Agile, Scrum & Waterfall",
    items: ["Sprint Planning", "Backlog Management", "Stand-ups", "Iterative Delivery"],
  },
  {
    name: "Business Case & NPV Analysis",
    items: ["Business Case Development", "Cost–Benefit Analysis", "NPV Analysis"],
  },
  {
    name: "Project Management Tools",
    items: ["Jira", "Trello", "Notion", "MS Project"],
  },
  {
    name: "Productivity & Collaboration",
    items: ["Google Sheets", "Excel", "Microsoft Suite", "Slack", "Quip", "Zendesk"],
  },
  {
    name: "Data Visualisation & Reporting",
    items: ["Power BI", "Tableau"],
  },
  {
    name: "Cloud & Analytics",
    items: ["Microsoft Azure", "AWS", "Google Cloud Platform"],
  },
  {
    name: "Design & Visual Tools",
    items: ["Figma", "Adobe Photoshop", "Illustrator", "Canva", "Lucidchart", "Miro", "Visio"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">What I Bring</h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
