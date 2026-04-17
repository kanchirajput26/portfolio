import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Flowchart Monitoring System & Automated Checklists",
    context: "MIS Intern | Robot Component Private Limited, India | Jun 2025 – Jul 2025",
    bullets: [
      "Mapped and analyzed internal workflows to track responsibilities, turnaround times, and process bottlenecks.",
      "Built automated tracking dashboards using JavaScript in Google Sheets with real-time alerts for delays and deviations.",
      "Implemented structured task checklists and deadline reminders to streamline dispatch and purchasing operations.",
      "Reviewed weekly, monthly, and quarterly KPIs to identify performance trends and improve accountability.",
    ],
    tools: ["Google Sheets", "JavaScript", "Google App Script", "KPI Tracking"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Tiny Treasure Mobile App – Product & UI/UX Collaboration",
    context: "UI/UX Intern | Neuronimbus Software Services Private Limited, India | Jan 2024 – Jul 2024",
    bullets: [
      "Conducted user research through surveys and interviews; created personas, empathy maps, and journey maps.",
      "Designed wireframes and high-fidelity prototypes in Figma and ran feedback sessions for iterative improvements.",
      "Supported project planning by prioritizing tasks, tracking milestones, and aligning design with development timelines.",
    ],
    tools: ["Figma", "User Research", "Wireframing", "Prototyping"],
    color: "from-blue-500/20 to-cyan-500/20",
    behanceUrl: "https://www.behance.net/gallery/194363873/Tiny-Treasure-Case-Study",
  },
  {
    title: "USC Housing Mobile Application – Project Planning & Organizational Change Management",
    context: "University of Southern California | ISE 515 – Engineering Project Management | Oct 2025 – Dec 2025",
    bullets: [
      "Converted WBS into a dependency-driven project roadmap spanning 22–24 months.",
      "Designed a 7-phase lifecycle covering initiation, planning, development, testing, deployment, and adoption.",
      "Built resource allocation models and established critical path logic to improve schedule visibility and risk control.",
      "Developed an Organizational Change Management strategy using the ADKAR framework to drive stakeholder adoption.",
      "Defined and tracked key project milestones including charter approval, MVP completion, beta launch, and system go-live.",
    ],
    tools: ["MS Project", "WBS", "Critical Path", "ADKAR", "Change Management"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Kaapi Machines Website Redesign – UI/UX & Web Design",
    context: "Client: Kaapi Machines | Mar 2024 – May 2024",
    bullets: [
      "Conducted competitive benchmarking to identify usability gaps and inform design strategy.",
      "Designed end-to-end website architecture (homepage, product listing page, product detail page) in Figma using consistent design systems and branding.",
      "Created high-fidelity interactive prototypes and visual assets in Photoshop & Illustrator to support stakeholder reviews and developer handoff.",
      "Improved navigation structure, visual hierarchy, and product discoverability through structured UX and layout decisions.",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "UX Design", "Branding"],
    color: "from-purple-500/20 to-pink-500/20",
    behanceUrl: "https://www.behance.net/gallery/202148643/Homepage-KaapiMachines",
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
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Professional & Academic Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.behanceUrl && (
                    <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight
                        size={20}
                        className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                      />
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-6">{project.context}</p>

                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

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
