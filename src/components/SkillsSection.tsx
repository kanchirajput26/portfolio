import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  CalendarCheck,
  IterationCcw,
  BarChart3,
  Target,
  Users,
  LineChart,
  Cloud,
  Palette,
} from "lucide-react";

const skills = [
  {
    name: "Programming & Scripting",
    description: "SQL, JavaScript, Google App Script, Python, C++, MATLAB",
    icon: Code,
  },
  {
    name: "Project Planning & Scheduling",
    description: "Work breakdown structures (WBS), Gantt charts, dependency mapping, milestone planning",
    icon: CalendarCheck,
  },
  {
    name: "Agile, Scrum & Waterfall",
    description: "Sprint planning, backlog management, stand-ups, and iterative delivery",
    icon: IterationCcw,
  },
  {
    name: "Business Case & NPV Analysis",
    description: "Business case development, cost–benefit analysis, and Net Present Value (NPV) analysis",
    icon: BarChart3,
  },
  {
    name: "Project Management Tools",
    description: "Jira, Trello, Notion, MS Project for task tracking, sprint planning, and resource allocation",
    icon: Target,
  },
  {
    name: "Productivity & Collaboration",
    description: "Google Sheets, Excel, Microsoft Suite, Outlook, Slack, Quip, and Zendesk",
    icon: Users,
  },
  {
    name: "Data Visualisation & Reporting",
    description: "Power BI and Tableau for dashboard creation, reporting, and visualisation of project data",
    icon: LineChart,
  },
  {
    name: "Cloud & Analytics",
    description: "Foundational exposure to Microsoft Azure, AWS, and Google Cloud Platform (GCP)",
    icon: Cloud,
  },
  {
    name: "Design & Visual Tools",
    description: "Figma, Adobe Photoshop, Illustrator, Canva, Lucidchart, Miro, Visio",
    icon: Palette,
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
