const Quote = () => (
  <section className="relative py-20 px-4">
    <div className="max-w-3xl mx-auto text-center section-reveal">
      <div className="glass-card rounded-3xl p-10 md:p-16">
        <span className="text-5xl md:text-6xl gradient-text font-display">"</span>
        <blockquote className="text-xl md:text-2xl font-display font-medium text-foreground leading-relaxed mt-2">
          Consistency beats talent when talent doesn't work hard.
        </blockquote>
        <p className="text-muted-foreground mt-6 text-sm">— Pesaraganti Supriya</p>
      </div>
    </div>
  </section>
);

export default Quote;
