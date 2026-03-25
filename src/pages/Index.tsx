import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Starfield from "@/components/Starfield";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Timeline from "@/components/Timeline";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-background" style={{ cursor: 'none' }}>
      <div className="mesh-gradient" />
      <Starfield />
      <CustomCursor />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Timeline />
        <Quote />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
