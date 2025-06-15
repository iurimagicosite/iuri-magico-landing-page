import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const shows = [
  {
    slug: "de-perto",
    titulo: "De Perto",
    sinopse:
      "A mágica acontece nas mãos do público, criando experiências únicas e inesquecíveis.",
    imagem: "/fotos/0001.jpg",
  },
  {
    slug: "aventuras-magicas-pelo-mundo",
    titulo: "Aventuras Mágicas pelo Mundo",
    sinopse:
      "Uma viagem lúdica e interativa por diferentes culturas através da mágica e do humor.",
    imagem: "/fotos/0003.jpg",
  },
  {
    slug: "iuri-o-magico-show",
    titulo: "Iuri o Mágico Show",
    sinopse:
      "O espetáculo principal, repleto de grandes ilusões, interação e muita diversão para todas as idades.",
    imagem: "/fotos/0004.jpg",
  },
  {
    slug: "festa-de-aniversario",
    titulo: "Festa de Aniversário",
    sinopse:
      "Um show especial para aniversários, com participação das crianças e muita alegria.",
    imagem: "/fotos/0001.jpg",
  },
];

const Espetaculos = () => (
  <main className="min-h-screen magical-bg">
    <Helmet>
      <title>Espetáculos | Iuri o Mágico</title>
      <meta
        name="description"
        content="Conheça todos os espetáculos de Iuri o Mágico. Shows para todos os tipos de eventos!"
      />
    </Helmet>
    <Header />
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 magical-text">
          Espetáculos
        </h1>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {shows.map((show, idx) => (
            <Link
              key={show.slug}
              to={`/espetaculos/${show.slug}`}
              className="flex flex-col md:flex-row items-center bg-black/50 rounded-lg p-6 border border-magic-primary/20 hover:magical-border transition-all gap-6"
            >
              <img
                src={show.imagem}
                alt={show.titulo}
                className="w-full md:w-56 h-40 object-cover rounded-lg border border-magic-primary/20 mb-4 md:mb-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 magical-text">
                  {show.titulo}
                </h2>
                <p className="text-white/80 mb-2">{show.sinopse}</p>
                <span className="inline-block mt-2 text-magic-primary font-semibold">
                  Ver detalhes
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </main>
);

export default Espetaculos;
