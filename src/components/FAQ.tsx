import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como são feitas as sessões online?",
    a: "As sessões acontecem através do Google Meet, tem duração de 50 minutos. Você terá um link único para acessar a todas as sessões, podendo ser acessada através de um computador, celular ou tablet.",
  },
  {
    q: "Quanto tempo dura a psicoterapia?",
    a: "Não há uma duração pré-definida. No início, as sessões são semanais e à medida que avançamos, espaçamos para quinzenal e mensal até a alta.",
  },
  {
    q: "Como fazer psicoterapia online com outras pessoas em casa?",
    a: "Utilize fones de ouvido e evite interrupções durante o atendimento. O ideal é você escolher um local que tenha privacidade para fazer a sessão.",
  },
  {
    q: "Como posso me preparar para a sessão?",
    a: "Escolha um ambiente tranquilo e privado, teste sua conexão com a internet, utilize fones de ouvido, elimine distrações e faça anotações ao longo da semana sobre os temas que deseja discutir.",
  },
  {
    q: "Qual o valor da sessão?",
    a: "Para saber mais informações da consulta, incluindo valores, entre em contato pelo WhatsApp (19) 97165-5412.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="font-body font-medium text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
