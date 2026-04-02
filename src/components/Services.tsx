import { Brain, Heart, Flame, CloudRain, Milestone, ShieldAlert } from "lucide-react";

const services = [
  { icon: Brain, title: "Autoconhecimento", desc: "Processo para entender e lidar melhor com as próprias emoções, padrões de comportamento e desejos, promovendo clareza para tomadas de decisão." },
  { icon: CloudRain, title: "Ansiedade", desc: "Tratamento focado em identificar os gatilhos e desenvolver estratégias para lidar com a preocupação excessiva e sintomas físicos da ansiedade." },
  { icon: Heart, title: "Depressão", desc: "Apoio especializado para enfrentar o desânimo profundo, perda de interesse e sentimentos de desesperança, buscando recuperar o bem-estar." },
  { icon: Flame, title: "Stress e Burnout", desc: "Auxílio para lidar com o esgotamento profissional e pessoal, estabelecendo limites saudáveis e recuperando a qualidade de vida." },
  { icon: Milestone, title: "Perdas e Luto", desc: "Acompanhamento empático para atravessar o processo doloroso da perda, auxiliando na ressignificação e adaptação à nova realidade." },
  { icon: ShieldAlert, title: "Traumas", desc: "Abordagem focada na cura de feridas emocionais passadas que continuam impactando seu presente e suas relações." },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Apenas atendimento particular
          </p>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Áreas de atuação
        </h2>
        <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-16">
          Oferecemos atendimentos especializados para diversas demandas emocionais, sempre de acordo com a sua necessidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
