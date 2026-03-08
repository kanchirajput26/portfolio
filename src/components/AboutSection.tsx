import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">Who I Am</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Master's student at the <span className="text-foreground font-medium">University of Southern California</span> with a strong foundation in project management, construction management, and academic coordination.
              </p>
              <p>
                My experience spans helping students master <span className="text-foreground font-medium">MS Project scheduling</span>, project planning, and resource management — bridging the gap between theory and practical application.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm deeply interested in <span className="text-foreground font-medium">Agile methodologies</span>, product thinking, and stakeholder collaboration. I believe great products emerge from structured processes, cross-functional teamwork, and continuous iteration.
              </p>
              <p>
                Currently seeking internships in <span className="text-foreground font-medium">Project Management, Product Management, and Agile/Scrum</span> roles across the United States.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
