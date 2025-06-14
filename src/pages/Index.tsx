import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <main className="min-h-screen magical-bg">
      <Helmet>
        <title>Iuri o Mágico | Shows de Mágica Profissional</title>
        <meta
          name="description"
          content="Transforme seu evento em uma experiência extraordinária com apresentações de mágica envolventes de Iuri o Mágico. Shows para festas, empresas, escolas e casamentos."
        />
        <meta
          property="og:title"
          content="Iuri o Mágico | Shows de Mágica Profissional"
        />
        <meta
          property="og:description"
          content="Transforme seu evento em uma experiência extraordinária com apresentações de mágica envolventes de Iuri o Mágico."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iuriomagico.com.br/" />
        <meta property="og:image" content="/fotos/0003.jpg" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
