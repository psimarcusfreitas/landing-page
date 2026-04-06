
import marcusHero from "@/assets/marcus-hero.jpg";

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl tracking-widest uppercase text-foreground/80">
              Psicólogo
            </span>
            <span className="text-sm font-body font-medium tracking-wider uppercase text-primary">
              em Campinas
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Marcus Freitas
          </h1>
          <p className="text-lg text-muted-foreground max-w-md font-body leading-relaxed">
            Especialista Terapia Cognitivo Comportamental com formação em Educação Sexual, Educação Emocional e Prevenção ao Abuso Sexual.
          </p>
          <a
            href="https://wa.me/5519971655412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gradient-green text-primary-foreground font-body font-semibold px-8 py-4 md:px-10 md:py-5 rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 text-lg md:text-xl shadow-lg shadow-primary/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 md:w-8 md:h-8"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            LEVE ESTE PROJETO PARA A SUA INSTITUIÇÃO
          </a>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border-2 border-border shadow-2xl shadow-primary/10">
              <img
                src={marcusHero}
                alt="Marcus Freitas - Psicólogo"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
