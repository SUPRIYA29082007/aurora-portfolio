import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { openExternalInNewTab } from "@/lib/openExternalInNewTab";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const linkedInUrl = "https://www.linkedin.com/in/supriya-pesaraganti/";
  const githubUrl = "https://github.com/SUPRIYA29082007";

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="section-reveal">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just
              having a conversation about tech. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href="mailto:pesaragantisupriya@gmail.com" className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-primary">
                <Mail size={20} /> pesaragantisupriya@gmail.com
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openExternalInNewTab(linkedInUrl)}
                className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <Linkedin size={20} /> LinkedIn Profile
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openExternalInNewTab(githubUrl)}
                className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <Github size={20} /> GitHub Profile
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4 section-reveal">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
            />
            <button type="submit" className="pill-btn-primary flex items-center gap-2 w-full justify-center">
              <Send size={16} /> {sent ? "Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
