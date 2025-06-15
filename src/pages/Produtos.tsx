import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const produtos = [
  {
    slug: "hotel-resorts",
    titulo: "Hotelaria e Resorts",
    descricao:
      "Shows de palco, close-up e intervenções mágicas para hóspedes de grandes hotéis e resorts.",
    imagem: "/fotos/0001.jpg",
  },
  {
    slug: "eventos-corporativos",
    titulo: "Eventos Corporativos",
    descricao:
      "Mágica para empresas: shows, intervenções, palestras e promoção de quiosques em eventos corporativos.",
    imagem: "/fotos/0001.jpg",
  },
  {
    slug: "escolas-projetos-educativos",
    titulo: "Escolas e Projetos Educativos",
    descricao:
      "Shows, oficinas e mágicas pedagógicas para escolas e projetos educativos.",
    imagem: "/fotos/0001.jpg",
  },
  {
    slug: "festas-aniversarios-casamento",
    titulo: "Festas, Aniversários e Casamentos",
    descricao:
      "Mágica personalizada para festas, aniversários infantis, adultos e casamentos.",
    imagem: "/fotos/0001.jpg",
  },
  {
    slug: "mentorias-conferencias",
    titulo: "Mentorias e Conferências",
    descricao:
      "Mentorias, palestras e conferências com mágica e storytelling para inspirar e engajar.",
    imagem: "/fotos/0001.jpg",
  },
];

const Produtos = () => (
  <main className="min-h-screen magical-bg">
    <Helmet>
      <title>Produtos | Iuri o Mágico</title>
      <meta
        name="description"
        content="Conheça todos os produtos e serviços de Iuri o Mágico para eventos, empresas, escolas e festas."
      />
    </Helmet>
    <Header />
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 magical-text">
          Produtos & Serviços
        </h1>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {produtos.map((produto) => (
            <Link
              key={produto.slug}
              to={`/produto/${produto.slug}`}
              className="flex flex-col md:flex-row items-center bg-black/50 rounded-lg p-6 border border-magic-primary/20 hover:magical-border transition-all gap-6"
            >
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-full md:w-56 h-40 object-cover rounded-lg border border-magic-primary/20 mb-4 md:mb-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 magical-text">
                  {produto.titulo}
                </h2>
                <p className="text-white/80 mb-2">{produto.descricao}</p>
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

export default Produtos;
