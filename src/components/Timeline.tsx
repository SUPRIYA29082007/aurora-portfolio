const milestones = [
  { year: "1st Year", label: "Foundations", desc: "Learned C, HTML basics, and intro to programming." },
  { year: "2nd Year", label: "Building", desc: "Java mastery + real-world projects (Movie Booking, Library System)." },
  { year: "3rd Year", label: "Goal", desc: "Full Stack development + internships + cloud certifications." },
];

const Timeline = () => (
  <section className="relative py-24 px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
        Learning Journey
      </h2>
      <div className="relative">
        {/* Line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {milestones.map((m, i) => (
          <div key={m.year} className={`relative flex items-start mb-12 last:mb-0 section-reveal ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="timeline-dot shrink-0 mt-1 z-10 md:absolute md:left-1/2 md:-translate-x-1/2" />
            <div className={`ml-6 md:ml-0 md:w-[calc(50%-30px)] ${i % 2 === 0 ? 'md:pr-4 md:text-right' : 'md:pl-4 md:ml-auto'}`}>
              <span className="text-primary text-sm font-semibold">{m.year}</span>
              <h3 className="font-display text-lg font-semibold text-foreground">{m.label}</h3>
              <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
