import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Instagram, Youtube } from "lucide-react";

const Contato = () => {
  return (
    <main className="min-h-screen magical-bg">
      <Helmet>
        <title>Contato | Iuri o Mágico</title>
        <meta
          name="description"
          content="Entre em contato com Iuri o Mágico para levar experiências mágicas ao seu evento. WhatsApp e e-mail para orçamentos e dúvidas."
        />
        <meta property="og:title" content="Contato | Iuri o Mágico" />
        <meta
          property="og:description"
          content="Entre em contato com Iuri o Mágico para levar experiências mágicas ao seu evento. WhatsApp e e-mail para orçamentos e dúvidas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iuriomagico.com.br/contato" />
        <meta property="og:image" content="/fotos/IMG_0430.png" />
      </Helmet>
      <Header />

      {/* Título e mensagem */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <span className="text-white/80 uppercase tracking-widest text-sm">
              Fale comigo
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 magical-text">
            Contatos
          </h1>
          <h3 className="text-xl md:text-2xl text-white/90 text-center max-w-2xl mx-auto font-semibold">
            Ficou com alguma dúvida ou quer levar magia para seu evento? Entre
            em contato comigo!
          </h3>
        </div>
      </section>

      {/* Seção de contato com imagem */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Imagem redonda */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <img
                src="/fotos/IMG_0430.png"
                alt="Iuri o Mágico sorrindo"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-magic-primary shadow-lg bg-black/40"
              />
            </div>
            {/* Contatos */}
            <div className="bg-black/50 rounded-lg p-8 border border-magic-primary/20 flex-1 flex flex-col gap-8 items-center md:items-start w-full">
              <a
                href="https://wa.me/555184232748"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/90 hover:text-magic-primary transition-colors text-lg"
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
                className="flex items-center gap-4 text-white/90 hover:text-magic-primary transition-colors text-lg"
              >
                <span className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-magic-primary" size={24} />
                </span>
                iuriomagico@gmail.com
              </a>
              {/* Redes sociais */}
              <div className="flex gap-6 justify-center mt-6">
                <a
                  href="https://www.instagram.com/iuriomagico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7 text-white hover:text-magic-primary transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/@iuriomagico"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-7 h-7 text-white hover:text-magic-primary transition-colors" />
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
                    className="w-7 h-7 object-contain filter grayscale hover:filter-none transition"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contato;
