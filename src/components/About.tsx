import { MessageCircle } from "lucide-react";
import brunoPortrait from "@/assets/bruno-portrait.jpg";

const credentials = [
  "Especialização em Prática Baseada em Evidências – TCC e Neurociência – Inpbe – 2026",
  "Especialista em Terapia Cognitiva Comportamental – PUC RS – 2022",
  "Especialista em Logoterapia e Análise Existencial – SOBRAL – 2019",
  "Especialização em Gestão de Empresas – UNICAMP – 2015",
  "Graduação em Psicologia – UNIP – 2010",
];

const About = () => {
  return (
    <section className="section-padding" id="sobre">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-border">
            <img
              src={brunoPortrait}
              alt="Bruno Rhein"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">
            Sobre
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Bruno Rhein
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Atuando como psicólogo clínico há 14 anos
          </p>
          <ul className="space-y-3">
            {credentials.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Vivência de mais de 10 anos junto ao ambiente corporativo de empresas nacionais e multinacionais, com capacidade de desenvolver orientação profissional.
          </p>
          <a
            href="https://wa.me/5519971655412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gradient-green text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            AGENDAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
