import { Monitor, MapPin, MessageCircle } from "lucide-react";

const modalities = [
  { icon: MapPin, title: "Presencial", desc: "Você vem até o meu consultório e fazemos a sua consulta pessoalmente" },
  { icon: Monitor, title: "Online", desc: "Marcamos uma conversa por computador/celular a qualquer hora" },
];

const Modalities = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {modalities.map((m) => (
          <div key={m.title} className="bg-card rounded-2xl p-8 border border-border text-center space-y-4">
            <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center mx-auto">
              <m.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground">{m.title}</h3>
            <p className="text-muted-foreground font-body text-sm">{m.desc}</p>
            <a
              href="https://wa.me/5519971655412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-green text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              AGENDAR AGORA
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modalities;
