import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone, Instagram, Copy, Sparkles, User, Play } from "lucide-react";
import { useState } from "react";
import tiktokLogo from "/tiktok-logo_orig.png";

const Up = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("https://www.iuriomagico.art/up");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <main className="min-h-screen magical-bg">
      <Helmet>
        <title>Contrate Iuri o Mágico | Shows de Mágica Profissional</title>
        <meta
          name="description"
          content="Contrate Iuri o Mágico para seu evento. Mais de 20 anos de experiência em mágica pelo mundo. Shows únicos e inesquecíveis."
        />
        <meta property="og:title" content="Contrate Iuri o Mágico | Shows de Mágica Profissional" />
        <meta
          property="og:description"
          content="Contrate Iuri o Mágico para seu evento. Mais de 20 anos de experiência em mágica pelo mundo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iuriomagico.com.br/up" />
        <meta property="og:image" content="/fotos/0003.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-8 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-2xl">★</span>
              <span className="text-yellow-400 text-2xl">★</span>
              <span className="text-yellow-400 text-2xl">★</span>
              <span className="text-yellow-400 text-2xl">★</span>
              <span className="text-yellow-400 text-2xl">★</span>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <img
                src="/logo-iuriomagico.jpg"
                alt="Logo Iuri o Mágico"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-magic-primary shadow-lg bg-black/40"
              />
            </div>
            
            <div className="bg-black/50 rounded-lg border-magic-primary/20 flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 magical-text">
                Iuri o Mágico
              </h1>
              <p className="text-white/80 text-lg mb-6">
                Mais de 20 anos de mágicas pelo mundo
              </p>
              
              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/555184232748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all font-semibold shadow-md"
                >
                  <Phone size={20} />
                  Contrate Agora
                </a>
                
                <a
                  href="https://www.instagram.com/iuriomagico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/50 border border-magic-primary/20 text-white hover:magical-border transition-all font-semibold"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
                
                <a
                  href="https://www.tiktok.com/@iuriomagico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/50 border border-magic-primary/20 text-white hover:magical-border transition-all font-semibold"
                >
                  <img src={tiktokLogo} alt="TikTok" className="w-5 h-5 object-contain filter grayscale hover:filter-none transition" />
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botões de Navegação */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore <span className="magical-text">Mais</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Copiar Link */}
              <button
                onClick={copyToClipboard}
                className="bg-black/50 rounded-full p-8 border border-magic-primary/20 hover:magical-border transition-all text-center group"
              >
                <div className="bg-magic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-magic-primary/20 transition-colors">
                  <Copy className="text-magic-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">CyberChapéu</h3>
                <p className="text-white/80 text-sm">
                  {copied ? "Link copiado!" : "Copiar link do QR Code"}
                </p>
              </button>

              {/* Espetáculos */}
              <Link
                to="/espetaculos"
                className="bg-black/50 rounded-full p-8 border border-magic-primary/20 hover:magical-border transition-all text-center group"
              >
                <div className="bg-magic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-magic-primary/20 transition-colors">
                  <Play className="text-magic-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Espetáculos</h3>
                <p className="text-white/80 text-sm">
                  Conheça nossos shows
                </p>
              </Link>

              {/* Sobre */}
              <Link
                to="/sobre"
                className="bg-black/50 rounded-full p-8 border border-magic-primary/20 hover:magical-border transition-all text-center group"
              >
                <div className="bg-magic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-magic-primary/20 transition-colors">
                  <User className="text-magic-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Sobre</h3>
                <p className="text-white/80 text-sm">
                  Conheça minha história
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Up;
