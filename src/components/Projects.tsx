import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Movie Ticket Booking System",
    desc: "A comprehensive desktop application for booking movie tickets with seat selection and payment flow.",
    tech: ["Java", "Swing", "JDBC"],
  },
  {
    title: "Library Management System",
    desc: "Full-featured library management with book tracking, member management, and reporting.",
    tech: ["Java", "OOP", "File I/O"],
  },
  {
    title: "Beauty Parlour Website",
    desc: "A modern, responsive website for a beauty salon featuring service listings and appointment info.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Travel & Tourism Website",
    desc: "Interactive travel website showcasing destinations, packages, and booking information.",
    tech: ["HTML", "CSS", "JavaScript"],
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
      {/* Image placeholder */}
      <div className="h-44 gradient-accent opacity-30 flex items-center justify-center">
        <span className="text-4xl opacity-50">🚀</span>
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
