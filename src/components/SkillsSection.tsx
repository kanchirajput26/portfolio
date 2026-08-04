import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GanttChart,
  KanbanSquare,
  BarChart3,
  Cloud,
  Palette,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "Agile & Project Planning",
    description: "Sprint planning, backlog management, Agile, Scrum, Waterfall, WBS, Gantt charts, dependency mapping, milestone planning",
    icon: GanttChart,
  },
  {
    name: "PM & Collaboration Tools",
    description: "Jira, Trello, Notion, MS Project, Google Workspace, Microsoft Suite, Slack, Outlook",
    icon: KanbanSquare,
  },
  {
    name: "Business Case & Data Analysis",
    description: "Business case development, cost-benefit analysis, NPV analysis, Power BI, Tableau, dashboarding, reporting",
    icon: BarChart3,
  },
  {
    name: "Technical & Cloud Skills",
    description: "SQL, Python, JavaScript, Google App Script, C++, MATLAB, Azure, AWS, Google Cloud Platform",
    icon: Cloud,
  },
  {
    name: "Design & Visual Tools",
    description: "Figma, Adobe Photoshop, Illustrator, Canva, Miro, Lucidchart, Visio",
    icon: Palette,
  },
  {
    name: "AI Skills",
    description: "Vercel V0, Claude Code, vibe coding, Claude Cowork, prompt engineering, context engineering",
    icon: Sparkles,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                <skill.icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{skill.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
