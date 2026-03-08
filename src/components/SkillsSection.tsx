import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  IterationCcw,
  CalendarCheck,
  Users,
  Clock,
  Settings,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const skills = [
  { name: "Project Management", icon: Target },
  { name: "Agile & Scrum", icon: IterationCcw },
  { name: "MS Project", icon: CalendarCheck },
  { name: "Stakeholder Management", icon: Users },
  { name: "Scheduling & Planning", icon: Clock },
  { name: "Process Improvement", icon: Settings },
  { name: "Product Strategy", icon: Lightbulb },
  { name: "Data Analysis", icon: BarChart3 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">What I Bring</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 text-center hover-lift group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon size={24} />
              </div>
              <p className="text-sm font-medium text-foreground">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
