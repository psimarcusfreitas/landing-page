import { MessageCircle } from "lucide-react";
import brunoPortrait from "@/assets/bruno-portrait.jpg";

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl tracking-widest uppercase text-foreground/80">
              Psicólogo
            </span>
            <span className="text-sm font-body font-medium tracking-wider uppercase text-primary">
              em Americana e Nova Odessa SP
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Bruno Rhein
          </h1>
          <p className="text-lg text-muted-foreground max-w-md font-body leading-relaxed">
            Especialista em Ansiedade e Traumas, oferecendo um espaço seguro para sua transformação emocional.
          </p>
          <a
            href="https://wa.me/5519971655412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gradient-green text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            AGENDAR AGORA
          </a>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border-2 border-border shadow-2xl shadow-primary/10">
              <img
                src={brunoPortrait}
                alt="Bruno Rhein - Psicólogo"
                width={800}
                height={1000}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
