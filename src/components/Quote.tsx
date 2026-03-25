import quoteBg from "@/assets/quote-bg.jpg";

const Quote = () => (
  <section className="relative py-20 px-4">
    <div className="max-w-5xl mx-auto section-reveal">
      <div className="glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row">
        <div className="relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden group shrink-0">
          <img
            src={quoteBg}
            alt="Coding workspace"
            loading="lazy"
            width={512}
            height={512}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-10 md:p-14 text-center">
          <span className="text-5xl md:text-6xl gradient-text font-display">"</span>
          <blockquote className="text-xl md:text-2xl font-display font-medium italic leading-relaxed mt-2" style={{ background: 'linear-gradient(135deg, hsl(217, 91%, 60%), hsl(0, 0%, 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Consistency beats talent when talent doesn't work hard.
          </blockquote>
          <p className="text-muted-foreground mt-6 text-sm">— Pesaraganti Supriya</p>
        </div>
      </div>
    </div>
  </section>
);

export default Quote;
