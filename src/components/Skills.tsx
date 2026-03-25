import { Code, Globe, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Java", "Python"],
  },
  {
    title: "Web",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["GitHub", "VS Code", "Jupyter Notebook"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bento-card section-reveal">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg gradient-accent">
                  <cat.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
