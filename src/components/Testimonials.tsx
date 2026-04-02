import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Em todos os atendimentos percebe-se a total atenção e dedicação do profissional ao paciente. Sua abordagem humanística/ética/profissional permite total compreensão do paciente referentes aos diagnósticos realizados durante as consultas. Profissional que potencializa e permite um crescimento pessoal.",
    name: "André Luiz",
  },
  {
    text: "Dr. Bruno é muito empático, atencioso e muito humano, te deixa bastante tranquilo durante a consulta. Um profissional muito comprometido e sério em te ajudar a solucionar seus problemas emocionais!",
    name: "Victor R.",
  },
  {
    text: "Faço terapia individual e de casal com o Dr. Bruno, já tem mais de 1 ano de tratamento com ele. Depois do tratamento, tive bruscas reduções dos meus remédios para ansiedade, com a perspectiva de não precisar mais tomar remédios todo dia.",
    name: "Bruna C.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Veja o que dizem nossos pacientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border relative">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {t.text}
              </p>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
