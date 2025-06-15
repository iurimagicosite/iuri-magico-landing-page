import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const produtos = {
  "hotel-resorts": {
    titulo: "Hotelaria e Resorts",
    descricao:
      "Shows de palco, close-up e intervenções mágicas para hóspedes de grandes hotéis e resorts.",
    servicos: [
      "Show de Palco (40min): Espetáculo completo com ilusionismo, humor e interação com o público.",
      "Show de Proximidade (Close-up Magic): Mágicas interativas realizadas de mesa em mesa ou em pequenos grupos.",
      "Intervenções Mágicas: Mágico caminhando pelas áreas do hotel, surpreendendo hóspedes com truques rápidos.",
    ],
    experiencia: [
      "Transamérica Comandatuba (BA)",
      "Hotel Fazenda Figueiras (RS)",
      "Times Hotel (Irlanda)",
      "Trout Lodge (Missouri, EUA)",
    ],
    fotos: ["/fotos/0001.jpg", "/fotos/0003.jpg"],
  },
  "eventos-corporativos": {
    titulo: "Eventos Corporativos",
    descricao:
      "Mágica para empresas: shows, intervenções, palestras e promoção de quiosques em eventos corporativos.",
    servicos: [
      "Show para Empresas: Ideal para festas de fim de ano, premiações, eventos comemorativos internos.",
      "Intervenções Mágicas em Eventos: Mágico circulando pelo evento, interagindo com convidados, gerando encantamento e conexão.",
      "Promoção de Quiosques e Feiras: Abordagem mágica para atrair atenção, gerar engajamento e captar leads qualificados.",
      "Palestras Personalizadas: Conteúdo com mágica e storytelling para temas como Segurança do Trabalho, Sustentabilidade, Inovação e Criatividade.",
    ],
    experiencia: [
      "Vivo",
      "Claro",
      "Peugeot",
      "Volkswagen",
      "Brasil Telecom",
      "L'Oréal Paris",
      "Rede Bourbon",
    ],
    fotos: ["/fotos/corporativo.jpg", "/fotos/corporativo2.jpg"],
  },
  "escolas-projetos-educativos": {
    titulo: "Escolas e Projetos Educativos",
    descricao:
      "Shows, oficinas e mágicas pedagógicas para escolas e projetos educativos.",
    servicos: [
      "Semana da Criança / Festas Escolares: Mágica interativa e participação do público infantil.",
      "Oficinas de Mágica para Crianças: Atividade prática para desenvolver coordenação motora, comunicação e criatividade.",
      "Mágica como Recurso Pedagógico: Apoio a professores com intervenções mágicas para ilustrar conteúdos curriculares.",
    ],
    experiencia: [],
    fotos: ["/fotos/escola.jpg", "/fotos/escola2.jpg"],
  },
  "festas-aniversarios-casamento": {
    titulo: "Festas, Aniversários e Casamentos",
    descricao:
      "Mágica personalizada para festas, aniversários infantis, adultos e casamentos.",
    servicos: [
      "Show de Aniversário Infantil: Espetáculo alegre e interativo, com participação das crianças.",
      "Show para Adultos: Mágica refinada e bem-humorada para surpreender convidados.",
      "Mágico para Casamentos: Apresentações antes ou durante a festa, com truques personalizados.",
      "Mágica de Proximidade (Close-up): Ideal para recepções, coquetéis ou jantares.",
      "Intervenções Temáticas: Mágicas personalizadas de acordo com o tema da festa.",
    ],
    experiencia: [],
    fotos: ["/fotos/festa.jpg", "/fotos/festa2.jpg"],
  },
  "mentorias-conferencias": {
    titulo: "Mentorias e Conferências",
    descricao:
      "Mentorias, palestras e conferências com mágica e storytelling para inspirar e engajar.",
    servicos: [
      "Mentorias para mágicos e artistas.",
      "Palestras motivacionais e conferências temáticas.",
      "Workshops de criatividade e comunicação.",
    ],
    experiencia: [],
    fotos: ["/fotos/mentoria.jpg", "/fotos/mentoria2.jpg"],
  },
};

const ProdutoDetalhe = () => {
  const { slug } = useParams();
  const produto = produtos[slug as keyof typeof produtos];
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!produto) {
    return (
      <main className="min-h-screen magical-bg">
        <Header />
        <section className="pt-32 pb-16 text-center">
          <h1 className="text-3xl text-white">Produto não encontrado.</h1>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen magical-bg">
      <Helmet>
        <title>{produto.titulo} | Produtos | Iuri o Mágico</title>
        <meta name="description" content={produto.descricao} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 magical-text">
                {produto.titulo}
              </h1>
              <p className="text-white/80 text-lg mb-2">{produto.descricao}</p>
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20 mb-8">
            <h2 className="text-2xl font-bold mb-2 text-magic-primary">
              Serviços Oferecidos
            </h2>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
              {produto.servicos.map((serv, idx) => (
                <li key={idx}>{serv}</li>
              ))}
            </ul>
            {produto.experiencia && produto.experiencia.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-2 text-magic-primary">
                  Experiência / Empresas Atendidas
                </h3>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  {produto.experiencia.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {/* Galeria de fotos */}
          {produto.fotos && produto.fotos.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-magic-primary">
                Fotos
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {produto.fotos.map((foto, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalImg(foto)}
                    className="focus:outline-none"
                  >
                    <img
                      src={foto}
                      alt={produto.titulo + " foto " + (idx + 1)}
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
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProdutoDetalhe;
