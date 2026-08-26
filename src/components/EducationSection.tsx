import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const pillContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const education = [
  {
    degree: "Master of Science in Engineering Management",
    school: "University of Southern California, Los Angeles, CA",
    period: "Aug 2025 – Dec 2026",
    coursework: [
      "Engineering Project Management (ISE 515)",
      "Engineering Management of Systems Integration (ISE 519)",
      "Leading and Managing Engineering Teams (ISE 544)",
      "Economic Analysis of Engineering Projects (ISE 561)",
    ],
  },
  {
    degree: "Bachelor of Technology in Electronics Engineering",
    school: "Shiv Nadar Institute of Eminence, Noida, India",
    period: "Aug 2020 – May 2024",
    coursework: [
      "VLSI",
      "Embedded System Design",
      "Control Systems",
      "Internet of Things",
      "Operations Research",
      "Total Quality Management",
      "Power Electronics",
      "Digital System Processing",
    ],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Education</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Academic Background</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                </div>
              </div>
              <div className="pl-0 md:pl-[4.5rem]">
                <p className="text-xs uppercase tracking-wider text-primary font-medium mb-3">
                  Relevant Coursework
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={pillContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {edu.coursework.map((course) => (
                    <motion.span
                      key={course}
                      variants={pillVariants}
                      className="text-[11px] font-normal px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {course}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
