import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import kanchiPhoto from "@/assets/kanchi-photo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">Who Am I</h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-stretch">
            <img
              src={kanchiPhoto}
              alt="Kanchi Rajput"
              className="w-full h-full rounded-2xl object-cover border-2 border-primary/20"
            />

            <div className="flex flex-col justify-center space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>
                I am an aspiring <span className="text-foreground font-medium">Project and Product Manager</span>, pursuing a Master's in Engineering Management at USC with a background in Electronics and Communication Engineering, passionate about building impactful products and executing projects with clarity and structure. My experience spans product planning, user research, project scheduling, budgeting, NPV analysis, and workflow automation through JavaScript-based systems and MIS reporting to improve operational visibility and data-driven decision making. I focus on translating ideas into structured execution while aligning technology and business goals to deliver scalable solutions.
              </p>
              <p>
                Currently, I serve as a Teaching Assistant for Engineering Project Management at USC, where I guide students in applying project planning frameworks, scheduling strategies, and systems thinking to real-world engineering challenges. I am currently exploring new grad full-time opportunities and internships in product and project management.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
