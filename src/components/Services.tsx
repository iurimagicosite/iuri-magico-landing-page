import {
  Sparkles,
  Hotel,
  Briefcase,
  GraduationCap,
  PartyPopper,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const produtos = [
  {
    slug: "hotel-resorts",
    titulo: "Hotelaria e Resorts",
    descricao:
      "Shows de palco, close-up e intervenções mágicas para hóspedes de grandes hotéis e resorts.",
    icon: <Hotel className="text-magic-primary" />,
  },
  {
    slug: "eventos-corporativos",
    titulo: "Eventos Corporativos",
    descricao:
      "Mágica para empresas: shows, intervenções, palestras e promoção de quiosques em eventos corporativos.",
    icon: <Briefcase className="text-magic-primary" />,
  },
  {
    slug: "escolas-projetos-educativos",
    titulo: "Escolas e Projetos Educativos",
    descricao:
      "Shows, oficinas e mágicas pedagógicas para escolas e projetos educativos.",
    icon: <GraduationCap className="text-magic-primary" />,
  },
  {
    slug: "festas-aniversarios-casamento",
    titulo: "Festas, Aniversários e Casamentos",
    descricao:
      "Mágica personalizada para festas, aniversários infantis, adultos e casamentos.",
    icon: <PartyPopper className="text-magic-primary" />,
  },
  {
    slug: "mentorias-conferencias",
    titulo: "Mentorias e Conferências",
    descricao:
      "Mentorias, palestras e conferências com mágica e storytelling para inspirar e engajar.",
    icon: <Users className="text-magic-primary" />,
  },
];

const ServiceCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-black p-6 rounded-lg border border-magic-primary/20 hover:magical-border transition-all duration-300 flex flex-col">
      <div className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block px-4 py-2 rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all font-semibold text-sm text-center w-max self-center mt-auto"
      >
        Saiba mais
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 magical-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-magic-primary mr-2" size={20} />
          <span className="text-white/80 uppercase tracking-widest text-sm">
            Produtos e Serviços
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Soluções Mágicas para{" "}
          <span className="magical-text">Todos os Momentos</span>
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
          Descubra as experiências mágicas que Iuri o Mágico oferece para
          eventos, empresas, escolas, festas e muito mais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((prod) => (
            <ServiceCard
              key={prod.slug}
              icon={prod.icon}
              title={prod.titulo}
              description={prod.descricao}
              link={`/produto/${prod.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
