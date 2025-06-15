import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import MagicLogo from "./MagicLogo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-md shadow-magic-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <MagicLogo size={40} />
          <div>
            <h1 className="text-xl md:text-2xl font-bold magical-text">Iuri</h1>
            <p className="text-sm text-white/80">o mágico</p>
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:magical-text transition-all">
            Início
          </Link>
          <Link
            to="/sobre"
            className="text-white hover:magical-text transition-all"
          >
            Sobre
          </Link>
          <Link
            to="/espetaculos"
            className="text-white hover:magical-text transition-all"
          >
            Espetáculos
          </Link>
          <a
            href="#services"
            className="text-white hover:magical-text transition-all"
          >
            Serviços
          </a>
          <Link
            to="/contato"
            className="text-white hover:magical-text transition-all"
          >
            Contato
          </Link>
          <a
            href="https://wa.me/555184232748"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all magical-glow"
          >
            Reservar Agora
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-white hover:magical-text py-2 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="text-white hover:magical-text py-2 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/espetaculos"
              className="text-white hover:magical-text py-2 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Espetáculos
            </Link>
            <a
              href="#services"
              className="text-white hover:magical-text py-2 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <Link
              to="/contato"
              className="text-white hover:magical-text py-2 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <a
              href="https://wa.me/555184232748"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-center rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all magical-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
