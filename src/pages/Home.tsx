import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Instagram, Youtube } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import tiktokLogo from "/tiktok-logo_orig.png";

const Home = () => {
  return (
    <main className="min-h-screen magical-bg">
      <Helmet>
        <title>Iuri o Mágico | Mágico Profissional em Porto Alegre</title>
        <meta
          name="description"
          content="Iuri o Mágico: Experiências mágicas únicas para seu evento em Porto Alegre. Shows de mágica, close-up e muito mais!"
        />
        <meta
          property="og:title"
          content="Iuri o Mágico | Mágico Profissional em Porto Alegre"
        />
        <meta
          property="og:description"
          content="Iuri o Mágico: Experiências mágicas únicas para seu evento em Porto Alegre. Shows de mágica, close-up e muito mais!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iuriomagico.com.br" />
        <meta property="og:image" content="/fotos/IMG_0430.png" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <span className="text-white/80 uppercase tracking-widest text-sm">
              Bem-vindo
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 magical-text">
            Iuri o Mágico
          </h1>
          <h3 className="text-xl md:text-2xl text-white/90 text-center max-w-2xl mx-auto font-semibold">
            Transformando momentos em experiências mágicas únicas
          </h3>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Show de Mágica */}
              <div className="bg-black/50 rounded-lg p-8 border border-magic-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-magic-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    Show de Mágica
                  </h3>
                </div>
                <p className="text-white/80 mb-6">
                  Apresentações mágicas que encantam e surpreendem, perfeitas
                  para eventos de todos os tamanhos.
                </p>
                <a
                  href="/espetaculos"
                  className="inline-flex items-center text-magic-primary hover:text-magic-primary/80 transition-colors"
                >
                  Ver espetáculos
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Close-up Magic */}
              <div className="bg-black/50 rounded-lg p-8 border border-magic-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-magic-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    Close-up Magic
                  </h3>
                </div>
                <p className="text-white/80 mb-6">
                  Mágica próxima e interativa, criando momentos inesquecíveis
                  com seus convidados.
                </p>
                <a
                  href="/produtos"
                  className="inline-flex items-center text-magic-primary hover:text-magic-primary/80 transition-colors"
                >
                  Ver produtos
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 rounded-lg p-8 border border-magic-primary/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Entre em Contato
              </h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <a
                    href="https://wa.me/555184232748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/90 hover:text-magic-primary transition-colors mb-4"
                  >
                    <span className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone className="text-magic-primary" size={24} />
                    </span>
                    +55 51 8423-2748
                  </a>
                  <a
                    href="mailto:iuriomagico@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/90 hover:text-magic-primary transition-colors"
                  >
                    <span className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="text-magic-primary" size={24} />
                    </span>
                    iuriomagico@gmail.com
                  </a>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Redes Sociais
                  </h4>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/iuriomagico/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-magic-primary/20 transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-white hover:text-magic-primary transition-colors" />
                    </a>
                    <a
                      href="https://www.youtube.com/@iuriomagico"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-magic-primary/20 transition-colors"
                    >
                      <Youtube className="w-6 h-6 text-white hover:text-magic-primary transition-colors" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@iuriomagico"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      title="TikTok"
                      className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-magic-primary/20 transition-colors"
                    >
                      <img
                        src={tiktokLogo}
                        alt="TikTok"
                        className="w-6 h-6 object-contain filter grayscale hover:filter-none transition"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
