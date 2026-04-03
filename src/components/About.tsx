import { UserRound } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding" id="sobre">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <UserRound className="w-12 h-12 text-primary mx-auto" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          Quem sou eu?
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          Sou psicólogo (CRP 06/225405) formado pela Universidade Federal Fluminense, Especialista em Terapia Cognitivo Comportamental e Master ESEPAS (Educação sexual, Educação Emocional e Prevenção ao Abuso Sexual), servidor público atuante na proteção social básica da assistência social. Meu trabalho é traduzir conhecimentos científicos complexos em uma linguagem acessível, lúdica para as crianças e prática para os adultos. Acredito que a informação qualificada é a maior ferramenta de proteção que podemos oferecer às novas gerações.
        </p>
      </div>
    </section>
  );
};

export default About;
