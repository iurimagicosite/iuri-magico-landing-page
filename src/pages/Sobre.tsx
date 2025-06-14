import { Sparkles, Award, Star, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <main className="min-h-screen magical-bg">
      <Header />

      {/* Banner Image */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden flex items-center justify-center">
        <img
          src="/fotos/0003.jpg"
          alt="Iuri o Mágico no palco com fumaça azul"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.85)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-bold magical-text text-center drop-shadow-lg">
          Sobre o Mágico
        </h1>
      </section>

      {/* Hero Section */}
      <section className="pt-12 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Sparkles
              className="text-magic-primary mr-2 animate-sparkle"
              size={24}
            />
            <span className="text-white/80 uppercase tracking-widest text-sm">
              Conheça o Mágico
            </span>
            <Sparkles
              className="text-magic-primary ml-2 animate-sparkle"
              size={24}
            />
          </div>
          <p className="text-white/80 text-center max-w-2xl mx-auto text-lg">
            Transformando momentos comuns em experiências extraordinárias
            através da arte da mágica
          </p>
        </div>
      </section>

      {/* História Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Imagem redonda */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <img
                src="/fotos/IMG_0228.png"
                alt="Iuri o Mágico segurando placa Sorriso"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-magic-primary shadow-lg bg-black/40"
              />
            </div>
            <div className="bg-black/50 rounded-lg p-8 border border-magic-primary/20 flex-1">
              <h2 className="text-3xl font-bold mb-6">Minha História</h2>
              <p className="text-white/80 mb-6">
                Desde criança, fui fascinado pela arte da mágica. O que começou
                como um hobby se transformou em uma paixão que mudou minha vida.
                Hoje, com mais de 10 anos de experiência, dedico minha vida a
                criar momentos mágicos e inesquecíveis para pessoas de todas as
                idades.
              </p>
              <p className="text-white/80">
                Minha jornada na mágica me levou a estudar com grandes mestres
                da arte, participar de competições internacionais e desenvolver
                um estilo único que combina técnica, carisma e interação com o
                público.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20 text-center">
              <div className="bg-magic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-magic-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Formação</h3>
              <p className="text-white/80">
                Treinamento com mestres internacionais e certificações em mágica
                profissional
              </p>
            </div>

            <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20 text-center">
              <div className="bg-magic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-magic-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiência</h3>
              <p className="text-white/80">
                Mais de 200 eventos realizados com sucesso e milhares de
                sorrisos encantados
              </p>
            </div>

            <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20 text-center">
              <div className="bg-magic-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-magic-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicação</h3>
              <p className="text-white/80">
                Compromisso com a excelência e a criação de momentos
                verdadeiramente mágicos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meus <span className="magical-text">Valores</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20">
                <h3 className="text-xl font-bold mb-3">Excelência</h3>
                <p className="text-white/80">
                  Compromisso com a qualidade em cada apresentação, buscando
                  sempre superar as expectativas do público.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20">
                <h3 className="text-xl font-bold mb-3">Inovação</h3>
                <p className="text-white/80">
                  Desenvolvimento constante de novas técnicas e apresentações
                  para manter a mágica sempre surpreendente.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20">
                <h3 className="text-xl font-bold mb-3">Profissionalismo</h3>
                <p className="text-white/80">
                  Pontualidade, organização e respeito aos clientes e ao público
                  em geral.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-magic-primary/20">
                <h3 className="text-xl font-bold mb-3">Paixão</h3>
                <p className="text-white/80">
                  Amor pela arte da mágica e dedicação em compartilhar momentos
                  especiais com as pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sobre;
