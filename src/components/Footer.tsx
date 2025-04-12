
import MagicLogo from "./MagicLogo";

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
            <a href="#home" className="text-white/80 hover:text-magic-primary transition-colors">Início</a>
            <a href="#services" className="text-white/80 hover:text-magic-primary transition-colors">Serviços</a>
            <a href="#contact" className="text-white/80 hover:text-magic-primary transition-colors">Contato</a>
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
