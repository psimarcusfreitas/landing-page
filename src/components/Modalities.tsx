import { School, Users, Heart, Building2 } from "lucide-react";

const audiences = [
  {
    icon: School,
    title: "Escolas (Educadores)",
    approach: "Identificação de sinais de risco; Como agir diante de revelações; A escola como rede de apoio.",
    benefit: "Capacitação do corpo docente para cumprir seu papel protetivo com segurança e embasamento legal/psicológico.",
  },
  {
    icon: Users,
    title: "Pais, Igrejas e Comunidade",
    approach: "Como conversar com os filhos sobre corpo, limites e segurança; Navegação segura na internet.",
    benefit: "Quebrar o gelo e oferecer ferramentas práticas para que os pais sejam o porto seguro de seus filhos.",
  },
  {
    icon: Heart,
    title: "Crianças e Adolescentes",
    approach: "\"O semáforo do toque\"; Conhecendo minhas emoções; O que é consentimento e respeito (adaptado por idade).",
    benefit: "Linguagem lúdica e sem jargões, focada no autocuidado, fortalecimento da autoestima e limites do próprio corpo.",
  },
  {
    icon: Building2,
    title: "Empresas",
    approach: "Parentalidade no ambiente corporativo: como equilibrar a carreira com a criação de filhos emocionalmente saudáveis.",
    benefit: "Valorização do bem-estar familiar do colaborador, impactando positivamente a cultura da empresa.",
  },
];

const Modalities = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Público-Alvo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 border border-border space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-green flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Abordagem e Temas Sugeridos</p>
                <p className="text-muted-foreground font-body text-sm">{item.approach}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Benefício Principal</p>
                <p className="text-muted-foreground font-body text-sm">{item.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modalities;
