import { Trophy, BookOpen } from "lucide-react";

const Achievements = () => (
  <section id="achievements" className="relative py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bento-card section-reveal flex items-start gap-4">
          <div className="p-3 rounded-xl gradient-accent shrink-0">
            <Trophy size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">Oracle GenAI Certification</h3>
            <p className="text-muted-foreground text-sm">Completed Oracle's Generative AI Professional certification, demonstrating expertise in modern AI technologies and RAG systems.</p>
          </div>
        </div>
        <div className="bento-card section-reveal flex items-start gap-4">
          <div className="p-3 rounded-xl gradient-accent shrink-0">
            <BookOpen size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">Active Learner</h3>
            <p className="text-muted-foreground text-sm">Continuously expanding skills in AI, Python, and Web Development through hands-on projects and certifications.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
