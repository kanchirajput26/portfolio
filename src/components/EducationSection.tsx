import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const coursework = [
  "Project Management",
  "Operations Management",
  "Agile Methodologies",
  "Construction Planning",
  "Risk Management",
  "Stakeholder Analysis",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Education</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Academic Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                University of Southern California
              </h3>
              <p className="text-muted-foreground">Master's Program</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-primary font-medium mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="text-sm px-4 py-2 rounded-lg bg-secondary text-secondary-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
