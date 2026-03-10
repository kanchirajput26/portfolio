import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, FileDown, Send, Globe } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Let's Connect</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <a
              href="https://www.linkedin.com/in/kanchirajput/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card rounded-xl p-5 hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">LinkedIn</p>
                <p className="text-xs text-muted-foreground">linkedin.com/in/kanchirajput</p>
              </div>
            </a>

            <a
              href="mailto:kanchira@usc.edu"
              className="flex items-center gap-4 glass-card rounded-xl p-5 hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Email</p>
                <p className="text-xs text-muted-foreground">kanchira@usc.edu</p>
              </div>
            </a>

            <a
              href="https://www.behance.net/kanchirajput"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card rounded-xl p-5 hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Behance</p>
                <p className="text-xs text-muted-foreground">behance.net/kanchirajput</p>
              </div>
            </a>

            <a href="/portfolio/KanchiRajput_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-card rounded-xl p-5 hover-lift group w-full text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FileDown size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Resume</p>
                <p className="text-xs text-muted-foreground">Download PDF</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity w-full justify-center"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
