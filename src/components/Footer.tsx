import MagicLogo from "./MagicLogo";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-magic-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <MagicLogo size={30} />
            <div>
              <h3 className="text-lg font-bold magical-text">Iuri</h3>
              <p className="text-xs text-white/80">o mágico</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-6 md:mb-0">
            <a
              href="/"
              className="text-white/80 hover:text-magic-primary transition-colors"
            >
              Início
            </a>
            <a
              href="/sobre"
              className="text-white/80 hover:text-magic-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="/espetaculos"
              className="text-white/80 hover:text-magic-primary transition-colors"
            >
              Espetáculos
            </a>
            <a
              href="/produtos"
              className="text-white/80 hover:text-magic-primary transition-colors"
            >
              Produtos
            </a>
            <a
              href="/contato"
              className="text-white/80 hover:text-magic-primary transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="flex gap-4 mb-6 md:mb-0">
            <a
              href="https://www.instagram.com/iuriomagico/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white hover:text-magic-primary transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/@iuriomagico"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-white hover:text-magic-primary transition-colors" />
            </a>
            <a
              href="https://www.tiktok.com/@iuriomagico"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
            >
              <img
                src="/tiktok-logo_orig.png"
                alt="TikTok"
                className="w-6 h-6 object-contain filter grayscale hover:filter-none transition"
              />
            </a>
          </div>

          <div className="text-white/60 text-sm">
            &copy; {currentYear} Iuri o Mágico. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
