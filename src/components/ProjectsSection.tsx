import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Construction Project Scheduling System",
    problem: "Complex construction projects often suffer from schedule overruns due to poor dependency tracking and resource allocation.",
    approach: "Developed a comprehensive scheduling framework using critical path method analysis and resource leveling techniques.",
    tools: ["MS Project", "Excel", "Gantt Charts", "CPM Analysis"],
    outcome: "Reduced scheduling conflicts by identifying critical dependencies and optimizing resource allocation across project phases.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Agile Process Improvement Framework",
    problem: "Traditional waterfall approaches led to delayed feedback loops and scope creep in mid-sized project teams.",
    approach: "Designed and implemented an Agile transformation framework incorporating Scrum ceremonies and Kanban workflows.",
    tools: ["Jira", "Confluence", "Scrum", "Kanban"],
    outcome: "Improved team velocity by streamlining sprint planning and establishing clear Definition of Done criteria.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Stakeholder Communication Dashboard",
    problem: "Project stakeholders lacked real-time visibility into project health, milestones, and risk indicators.",
    approach: "Created an interactive dashboard consolidating project metrics, milestone tracking, and risk heat maps.",
    tools: ["Power BI", "Excel", "Data Visualization"],
    outcome: "Enhanced stakeholder satisfaction by providing transparent, real-time project status updates and early risk detection.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Case Studies</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Problem</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Approach</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Outcome</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
