import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { PlayCircle, FileText } from "lucide-react";

const shows = {
  "de-perto": {
    titulo: "De Perto",
    sinopse:
      "A mágica acontece nas mãos do público, criando experiências únicas e inesquecíveis.",
    ficha: "Espetáculo de close-up, ideal para eventos sociais e corporativos.",
    duracao: "30 a 50 minutos",
    fotos: ["/fotos/0001.jpg", "/fotos/0003.jpg"],
    teaser: "https://youtube.com/teaser-de-perto",
    completo: "https://youtube.com/show-completo-de-perto",
    pdf: "/pdfs/de-perto-material.pdf",
  },
  "aventuras-magicas-pelo-mundo": {
    titulo: "Aventuras Mágicas pelo Mundo",
    sinopse:
      "Uma viagem lúdica e interativa por diferentes culturas através da mágica e do humor.",
    ficha:
      "Espetáculo infantil e familiar, com figurinos e trilha sonora temática.",
    duracao: "40 a 60 minutos",
    fotos: ["/fotos/0003.jpg"],
    teaser: "https://youtube.com/teaser-aventuras",
    completo: "https://youtube.com/show-completo-aventuras",
    pdf: "/pdfs/aventuras-material.pdf",
  },
  "iuri-o-magico-show": {
    titulo: "Iuri o Mágico Show",
    sinopse:
      "O espetáculo principal, repleto de grandes ilusões, interação e muita diversão para todas as idades.",
    ficha:
      "Show para teatros, escolas e grandes eventos. Estrutura de som e luz inclusa.",
    duracao: "50 a 70 minutos",
    fotos: ["/fotos/0004.jpg"],
    teaser: "https://youtube.com/teaser-iuri-show",
    completo: "https://youtube.com/show-completo-iuri-show",
    pdf: "/pdfs/iuri-show-material.pdf",
  },
  "festa-de-aniversario": {
    titulo: "Festa de Aniversário",
    sinopse:
      "Um show especial para aniversários, com participação das crianças e muita alegria.",
    ficha:
      "Espetáculo personalizado para aniversários infantis, com mágicas interativas.",
    duracao: "30 a 50 minutos",
    fotos: ["/fotos/0001.jpg"],
    teaser: "https://youtube.com/teaser-aniversario",
    completo: "https://youtube.com/show-completo-aniversario",
    pdf: "/pdfs/aniversario-material.pdf",
  },
};

const EspetaculoDetalhe = () => {
  const { slug } = useParams();
  const show = shows[slug as keyof typeof shows];
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!show) {
    return (
      <main className="min-h-screen magical-bg">
        <Header />
        <section className="pt-32 pb-16 text-center">
          <h1 className="text-3xl text-white">Espetáculo não encontrado.</h1>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen magical-bg">
      <Helmet>
        <title>{show.titulo} | Espetáculos | Iuri o Mágico</title>
        <meta name="description" content={show.sinopse} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 magical-text">
            {show.titulo}
          </h1>
          <p className="text-white/80 text-lg mb-6">{show.sinopse}</p>
          <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20 mb-8">
            <h2 className="text-2xl font-bold mb-2 text-magic-primary">
              Ficha Técnica
            </h2>
            <p className="text-white/80 mb-2">
              <strong>Descrição:</strong> {show.ficha}
            </p>
            <p className="text-white/80">
              <strong>Duração:</strong> {show.duracao}
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <a
                href={show.teaser}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all font-semibold shadow-md"
              >
                <PlayCircle size={20} /> Teaser
              </a>
              <a
                href={show.completo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all font-semibold shadow-md"
              >
                <PlayCircle size={20} /> Show Completo
              </a>
              <a
                href={show.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all font-semibold shadow-md"
              >
                <FileText size={20} /> Material de Vendas
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-magic-primary">
              Fotos
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {show.fotos.map((foto, idx) => (
                <button
                  key={idx}
                  onClick={() => setModalImg(foto)}
                  className="focus:outline-none"
                >
                  <img
                    src={foto}
                    alt={show.titulo + " foto " + (idx + 1)}
                    className="rounded-lg border border-magic-primary/20 hover:magical-border transition-all object-cover w-full h-40"
                  />
                </button>
              ))}
            </div>
            {/* Modal simples */}
            {modalImg && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setModalImg(null)}
              >
                <img
                  src={modalImg}
                  alt="Foto ampliada"
                  className="max-h-[80vh] max-w-[90vw] rounded-lg border-4 border-magic-primary shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default EspetaculoDetalhe;
