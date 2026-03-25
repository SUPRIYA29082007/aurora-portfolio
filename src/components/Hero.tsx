import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { openExternalInNewTab } from "@/lib/openExternalInNewTab";

const useTypingEffect = (texts: string[], speed = 80, pause = 2000) => {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplay(current.substring(0, display.length + 1));
          if (display.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplay(current.substring(0, display.length - 1));
          if (display.length === 0) {
            setIsDeleting(false);
            setIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [display, index, isDeleting, texts, speed, pause]);

  return display;
};

const Hero = () => {
  const typedText = useTypingEffect([
    "Computer Science Student",
    "Full-Stack Developer",
    "Future Software Engineer",
  ]);

  const linkedInUrl = "https://www.linkedin.com/in/supriya-pesaraganti/";
  const githubUrl = "https://github.com/SUPRIYA29082007";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      {/* Subtle background glow */}
      <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile image */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full gradient-accent p-[3px]" style={{ animation: 'pulse-glow 3s infinite' }}>
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="text-4xl font-display font-bold gradient-text">SP</span>
          </div>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 gradient-text">
          Pesaraganti Supriya
        </h1>

        <div className="h-8 mb-6">
          <span className="text-primary text-lg md:text-xl font-medium">
            {typedText}
          </span>
          <span className="typing-cursor" />
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I design intelligent systems and build impactful digital experiences
          using Java and modern web technologies.
        </p>

        {/* Action dock */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#contact" className="pill-btn-primary flex items-center gap-2">
            <Mail size={16} /> Contact Me
          </a>
          <a href="#projects" className="pill-btn flex items-center gap-2">
            <FileText size={16} /> Projects
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openExternalInNewTab(linkedInUrl)}
            className="pill-btn flex items-center gap-2"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openExternalInNewTab(githubUrl)}
            className="pill-btn flex items-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
