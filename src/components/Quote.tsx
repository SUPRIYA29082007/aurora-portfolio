import quoteBg from "@/assets/quote-bg.jpg";

const Quote = () => (
  <section className="relative py-20 px-4">
    <div className="max-w-3xl mx-auto section-reveal text-center">
      <span className="text-5xl md:text-6xl gradient-text font-display">"</span>
      <blockquote
        className="text-xl md:text-2xl font-display font-medium italic leading-relaxed mt-2"
        style={{
          background: 'linear-gradient(135deg, hsl(217, 91%, 60%), hsl(0, 0%, 100%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Consistency beats talent when talent doesn't work hard.
      </blockquote>
      <p className="text-muted-foreground mt-4 text-sm">— Pesaraganti Supriya</p>

      <div className="mt-10 mx-auto max-w-2xl rounded-2xl overflow-hidden group"
        style={{ boxShadow: '0 0 40px hsla(270, 76%, 55%, 0.25)' }}
      >
        <img
          src={quoteBg}
          alt="Coding workspace"
          loading="lazy"
          width={1024}
          height={576}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  </section>
);

export default Quote;
