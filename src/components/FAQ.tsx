import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O conteúdo das palestras para crianças é adequado para todas as idades?",
    a: "Sim, totalmente. Todo o conteúdo, a linguagem e as dinâmicas são rigorosamente adaptados para o nível de desenvolvimento cognitivo e emocional de cada faixa etária. Com crianças menores, por exemplo, não usamos termos complexos, mas sim conceitos lúdicos sobre o que é o corpo, os limites físicos, as emoções (alegria, medo, tristeza) e o \"semáforo do toque\", sempre com foco no autocuidado.",
  },
  {
    q: "Os temas abordados entram em conflito com os valores da nossa família, escola ou religião?",
    a: "De forma alguma. O objetivo do meu trabalho não é ditar valores morais, mas sim fornecer ferramentas baseadas na psicologia para a proteção, saúde e segurança das crianças e adolescentes. O foco central é o fortalecimento do vínculo de confiança entre pais e filhos, o desenvolvimento emocional saudável e a prevenção contra violências. A abordagem é sempre feita com extremo respeito à cultura de cada instituição.",
  },
  {
    q: "Qual é a duração e o formato dos encontros?",
    a: "Os formatos são flexíveis. Geralmente, as palestras duram entre 1h e 1h30, focando em conscientização e direcionamento. Já os workshops podem durar de 2 a 4 horas, com dinâmicas práticas, estudos de caso (para professores, por exemplo) e espaços mais amplos para perguntas e debates. Tudo pode ser ajustado à disponibilidade da sua agenda.",
  },
  {
    q: "Você realiza atendimentos ou palestras no formato online?",
    a: "Sim. Além dos encontros presenciais, ofereço palestras, rodas de conversa e capacitações no formato online (ao vivo), o que permite atender instituições, empresas e grupos de pais em qualquer lugar do país com a mesma qualidade de interação e entrega.",
  },
  {
    q: "Como sei qual é o tema ideal para a minha instituição?",
    a: "Não se preocupe com isso agora! O primeiro passo é entrarmos em contato. Faremos uma breve reunião (ou conversa por WhatsApp) para que eu entenda o momento do seu grupo, a idade das crianças envolvidas ou o desafio que os pais e professores estão enfrentando. A partir daí, eu mesmo estruturo a proposta ideal para a sua necessidade.",
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
