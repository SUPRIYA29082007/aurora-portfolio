import { Award } from "lucide-react";

const certs = [
  { title: "Oracle Generative AI", org: "Oracle" },
  { title: "Cisco Cybersecurity", org: "Cisco" },
  { title: "Python Essentials", org: "Cisco" },
  { title: "Microsoft Azure (AZ-900)", org: "Microsoft" },
];

const Certifications = () => (
  <section id="certifications" className="relative py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert) => (
          <div key={cert.title} className="glass-card-hover rounded-2xl p-6 text-center section-reveal">
            <div className="mx-auto w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
              <Award size={28} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{cert.title}</h3>
            <p className="text-muted-foreground text-sm">{cert.org}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
