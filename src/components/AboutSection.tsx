import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import kanchiPhoto from "@/assets/kanchi-photo.png";

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

          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="flex flex-col items-center md:items-start gap-5">
              <img
                src={kanchiPhoto}
                alt="Kanchi Rajput"
                className="w-40 h-40 rounded-2xl object-cover border-2 border-primary/20 shrink-0"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am an aspiring <span className="text-foreground font-medium">Project Manager and Product Intern</span> with experience in workflow automation, KPI tracking, Agile collaboration, and organizational change management.
                </p>
                <p>
                  I focus on structured execution, data-driven visibility, and delivering projects on time and with clarity.
                </p>
              </div>

              <div className="glass-card rounded-xl p-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <span className="text-foreground font-medium">Kanchi Rajput</span>
                </div>
                <div className="border-t border-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Email</span>
                  <a href="mailto:kanchira@usc.edu" className="text-primary hover:underline">kanchira@usc.edu</a>
                </div>
                <div className="border-t border-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/kanchirajput/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">kanchirajput</a>
                </div>
                <div className="border-t border-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Behance</span>
                  <a href="https://www.behance.net/kanchirajput" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">kanchirajput</a>
                </div>
                <div className="border-t border-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
