import { GraduationCap, Target, Zap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Introduction - spans 2 cols */}
          <div className="bento-card md:col-span-2 section-reveal">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl gradient-accent shrink-0">
                <User size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Introduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Supriya, a passionate Computer Science student at Sri Vasavi Engineering College
                  pursuing B.Tech in CSE. I love building real-world applications, exploring new
                  technologies, and solving complex problems through code.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bento-card section-reveal">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl gradient-accent shrink-0">
                <GraduationCap size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">Sri Vasavi Engineering College</p>
                <p className="text-primary text-sm font-medium">B.Tech — Computer Science</p>
              </div>
            </div>
          </div>

          {/* Career Goal */}
          <div className="bento-card section-reveal">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl gradient-accent shrink-0">
                <Target size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Career Goal</h3>
                <p className="text-muted-foreground text-sm">
                  Aspiring to become a Software Engineer at a top-tier tech company, building scalable solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="bento-card md:col-span-2 lg:col-span-1 section-reveal">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl gradient-accent shrink-0">
                <Zap size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem-solving", "Consistency", "Fast Learner", "Team Player"].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
