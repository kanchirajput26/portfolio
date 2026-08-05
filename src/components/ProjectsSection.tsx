import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Career Path Navigator",
    context: "Personal Project | Jun 2026 – Jul 2026",
    story: "During my own job search, I kept seeing the same thing happen to friends and fellow PMs: they had solid backgrounds but genuinely couldn't tell which roles they were a fit for. Generic advice like \"leverage your skills”, “network more\" wasn't helping anyone. So I built Career Path Navigator - paste a resume, upload a file, or link LinkedIn, and get AI-matched career paths with real skill gaps identified. The LinkedIn input was the hard part; the first version pulled shallow, inaccurate results. The fix wasn't a better prompt, it was better input: instead of just reading the profile summary, I had it browse the actual page, what the person had liked, their About section, their listed projects, to build a real picture of someone's interests and experience, not just job titles. That one change took the output from generic to genuinely useful.",
    bullets: [
      "Built a web application that analyzes resumes and helps users discover suitable career paths while identifying skill gaps.",
      "Implemented end-to-end resume parsing for PDF, DOCX, and image files using PDF parsing, Mammoth, and Tesseract.js (OCR).",
      "Generated downloadable career analysis reports in PDF and DOCX formats using jsPDF, html2canvas, and the docx library.",
      "Developed the application using Next.js 14 (App Router), TypeScript, and Tailwind CSS, and deployed it on Vercel.",
      "Followed a spec-driven development approach to plan, implement, and iterate on features efficiently.",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Claude Code", "Node.js"],
    color: "from-indigo-500/20 to-violet-500/20",
    liveUrl: "https://career-path-navigator-lime.vercel.app/",
  },
  {
    title: "Model Comparison Lab",
    context: "Personal Project | Jul 2026 – Jul 2026",
    story: "I'd never really thought about comparing prompts across different LLMs; how differently they'd respond, or how accurate each one actually was, until it hit me that this was a real gap: no easy way to test the same prompt side by side and see which model actually performed better. That could save a lot of time people were spending manually copy-pasting into different tools. So I built Model Comparison Lab: one prompt, sent in parallel to Gemini and Hugging Face's Inference API, scored against a rubric and shown side by side. The part I couldn't just assume worked was the scoring itself - a rubric that looks reasonable on paper can still be inconsistent in practice. So I stress-tested it with 30-40 prompts run back-to-back to check whether the scoring held up consistently across a real volume of inputs. It passed, which gave me confidence the tool wasn't just comparing outputs; it was comparing them reliably.",
    bullets: [
      "Led end-to-end product development of an AI evaluation tool comparing 3 LLMs side-by-side against a single prompt; spec to production on Vercel.",
      "Designed a rubric-based scoring system for structured model evaluation, replacing ad-hoc comparison with a repeatable framework.",
      "Benchmarked the tool across 20+ prompts, with the rubric surfacing a clear quality winner between models in 80% of cases.",
      "Owned the full product lifecycle solo (spec → build → ship) - MVP shipped in 2 weeks across 3 core modules (Compare, Charts, History).",
      "Built reusable templates and saved system-prompt configs, cutting repetitive manual setup across model comparisons.",
    ],
    tools: ["Next.js", "TypeScript", "React.js", "REST APIs", "Vercel", "Prompt Engineering"],
    color: "from-rose-500/20 to-red-500/20",
    liveUrl: "https://model-comparison-lab.vercel.app/",
  },
  {
    title: "Flowchart Monitoring System & Automated Checklists",
    context: "MIS Intern | Robot Component Private Limited, India | Jun 2025 – Jul 2025",
    story: "Purchase orders and dispatches at Robot Components had no single owner, follow-ups were manual, so things slipped through or got duplicated, and nobody had visibility into where a task stood until it was already late. I built a Flowchart Management System to fix that: mapped every process step, what needs to happen, who owns it, when it's due, how it gets done, then turned that map into a live tracking system in Google Sheets. Every request starts as a form submission, gets an auto-calculated planned date, and gets flagged the moment the actual date slips past plan, triggering an alert to the owner and their manager via App Script. But the real find came from the data itself: once delays were being tracked systematically, the pattern showed the purchase manager wasn't just slow; he was stretched thin, juggling routine purchases alongside new vendor development and sourcing. That insight led to a concrete recommendation: create a dedicated Purchase Executive role to own regular purchases, freeing the manager to focus on vendor sourcing. Turnaround times dropped significantly once that role was in place.",
    bullets: [
      "Mapped and analyzed internal workflows to track responsibilities, turnaround times, and process bottlenecks.",
      "Designed and implemented automated workflow tracking systems using Google Apps Script, reducing manual status updates by ~30% and improving real-time visibility into task progress and team coordination.",
      "Implemented structured task checklists and deadline reminders to streamline dispatch and purchasing operations.",
      "Reviewed weekly, monthly, and quarterly KPIs to identify performance trends and improve accountability.",
    ],
    tools: ["Google Sheets", "JavaScript", "Google App Script", "KPI Tracking"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Tiny Treasure Mobile App – Product & UI/UX Collaboration",
    context: "UI/UX Intern | Neuronimbus Software Services Private Limited, India | Jan 2024 – Jul 2024",
    story: "Parents outgrow their kids' clothes faster than their wallets keep up, but most resale marketplaces feel cluttered and hard to trust. I led research, design, and prototyping for Tiny Treasure to fix that. One parent told me she'd found a nearly-new winter jacket for her son at a fraction of retail price; what made it work wasn't the discount, it was that the seller gave detailed descriptions and the transaction felt trustworthy. The hard part was turning \"trust\" from a feeling into something designable - there's no single button for that. Working with a developer and PM, I translated it into concrete choices: detailed listings, verified sellers, and clear category filters, grounded in what I heard across parent interviews.",
    bullets: [
      "Conducted user research through 6 parent interviews; synthesized findings into personas, empathy maps, and journey maps.",
      "Collaborated with a developer and PM to ensure features and design met the real needs of parents, from trust and safety in resale transactions to easy category navigation.",
      "Designed wireframes and high-fidelity prototypes in Figma, translating empathy-map insights (sizing uncertainty, weekend-only shopping windows, storage limitations) directly into feature decisions like detailed item descriptions and category filters.",
      "Supported project planning by prioritizing tasks, tracking milestones, and aligning design with development timelines.",
    ],
    tools: ["Figma", "User Research", "Wireframing", "Prototyping"],
    color: "from-blue-500/20 to-cyan-500/20",
    behanceUrl: "https://www.behance.net/gallery/194363873/Tiny-Treasure-Case-Study",
  },
  {
    title: "USC Housing Mobile Application – Project Planning & Organizational Change Management",
    context: "University of Southern California | ISE 515 – Engineering Project Management | Oct 2025 – Dec 2025",
    story: "For a group project in USC's Engineering Project Management course, I planned execution for a student housing app end-to-end, building a WBS-based roadmap across 8 phases and converting vague roles into real industry titles (PM, UX/UI, Full-Stack, DevOps, QA). I caught a real gap: the schedule looked complete but had no actual critical path - too much slack, too few dependencies, so I wired in logical dependencies and key milestones (Charter Approval, MVP, Beta) to make risk visible before it hit. Since a good schedule doesn't guarantee adoption, I also built a stakeholder rollout strategy using ADKAR, planning how students and the Housing Office would actually get on board.",
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
    story: "My manager gave me this project specifically to test something harder than designing from scratch: redesigning a site that already existed and already worked, well enough that any change had to actually be better, not just different. Kaapi Machines sells premium coffee equipment to cafés, hotels, and offices, and their existing site worked, but felt dated and buried its own strengths. I started with competitive analysis across a wide set of coffee-equipment and B2B product sites, noting down features their competitors had that Kaapi's site didn't, that list became the actual brief, not just my opinion of what looked outdated. From there I redesigned three core page types - homepage, product listing, and product detail, end to end in Figma, building the hero banners from scratch in Photoshop rather than reusing existing assets. One concrete fix that came directly out of the competitive audit: the existing site buried products behind too many clicks, so I restructured the navigation to get from browse to any product page in 2 clicks instead of 4.",
    bullets: [
      "Benchmarked against 6 competitor sites to identify usability gaps and inform design strategy.",
      "Redesigned 3 core page types (homepage, product listing, product detail) end-to-end in Figma, establishing a consistent design system across the site.",
      "Reduced navigation from 4 clicks to 2 clicks to reach any product page, streamlining the path from browse to purchase.",
      "Created high-fidelity interactive prototypes and visual assets in Photoshop & Illustrator to support stakeholder reviews and developer handoff.",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "UX Design", "Branding"],
    color: "from-purple-500/20 to-pink-500/20",
    behanceUrl: "https://www.behance.net/gallery/202148643/Homepage-KaapiMachines",
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass-card rounded-2xl overflow-hidden hover-lift group"
    >
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-8">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            {project.title}
          </h3>
          {(project.behanceUrl || project.liveUrl) && (
            <a
              href={project.behanceUrl ?? project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors shrink-0 mt-1 whitespace-nowrap"
            >
              {project.behanceUrl ? "Case Study" : "Live"}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-xs text-muted-foreground">{project.context}</p>
          {project.story && (
            <>
              <span className="text-xs text-muted-foreground">|</span>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="text-xs text-muted-foreground border border-muted-foreground/50 rounded-full px-2.5 py-0.5 hover:text-foreground hover:border-foreground/70 transition-colors"
                  >
                    Read more
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-display pr-8">{project.title}</DialogTitle>
                    <DialogDescription className="text-xs">{project.context}</DialogDescription>
                  </DialogHeader>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{project.story}</p>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>

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
  );
};

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
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Personal, Professional & Academic Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
