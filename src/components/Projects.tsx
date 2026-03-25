import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectCybersecurity from "@/assets/project-cybersecurity.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectMedical from "@/assets/project-medical.jpg";

const projects = [
  {
    title: "AI RAG Chatbot with Chat History",
    desc: "Developed an intelligent chatbot that answers questions from PDFs using Retrieval-Augmented Generation (RAG). Implemented server-side chat history with unique user IDs and a WhatsApp-style UI.",
    tech: ["Python", "Flask", "NLP", "Generative AI", "HTML", "CSS", "JavaScript"],
    image: projectChatbot,
  },
  {
    title: "Centralized Vulnerability Detection & Intelligent Query Interface",
    desc: "A machine learning-based cybersecurity platform to detect vulnerabilities and centralize security issues. Provides AI assistance to help users understand and resolve issues efficiently.",
    tech: ["Python", "Machine Learning", "Cybersecurity", "SQL"],
    image: projectCybersecurity,
  },
  {
    title: "Daily Water Intake Predictor",
    desc: "Designed a system to recommend daily water intake using machine learning. Includes a user-friendly interface for input and personalized predictions.",
    tech: ["Python", "Machine Learning"],
    image: projectWater,
  },
  {
    title: "Medical Store Management System",
    desc: "Built a desktop application for managing customer registration, login, and medicine purchases. Integrated discount calculation and wallet rewards with database connectivity.",
    tech: ["Java", "AWT", "MySQL", "JDBC"],
    image: projectMedical,
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / -20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card-hover rounded-2xl overflow-hidden section-reveal tilt-card"
    >
      <div className="relative h-48 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={800}
          height={512}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 rounded-md text-xs font-medium border border-border text-primary">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="pill-btn-primary text-xs flex items-center gap-1 px-4 py-2">
            <ExternalLink size={14} /> Live Demo
          </button>
          <a href="https://github.com/SUPRIYA29082007" target="_blank" rel="noopener noreferrer" className="pill-btn text-xs flex items-center gap-1 px-4 py-2">
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
