import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding bg-card border-t border-border">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="font-heading text-3xl font-bold text-foreground">
          Comece sua jornada de transformação
        </h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto">
          Agende sua primeira sessão e dê o primeiro passo rumo ao seu bem-estar emocional.
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
        <p className="text-muted-foreground/50 font-body text-xs pt-8">
          © {new Date().getFullYear()} Bruno Rhein – Psicólogo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
