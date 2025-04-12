
import { Sparkles, Users, PartyPopper, Heart } from "lucide-react";

const ServiceCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-black p-6 rounded-lg border border-magic-primary/20 hover:magical-border transition-all duration-300 flex flex-col">
      <div className="bg-magic-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 magical-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-magic-primary mr-2" size={20} />
          <span className="text-white/80 uppercase tracking-widest text-sm">Serviços</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Shows de Mágica para <span className="magical-text">Qualquer Ocasião</span>
        </h2>
        
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
          Ofereço experiências mágicas personalizadas para diversos tipos de eventos, 
          garantindo momentos surpreendentes e memoráveis para todos os presentes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<PartyPopper className="text-magic-primary" />}
            title="Festas e Aniversários"
            description="Surpreenda seus convidados com truques de mágica impressionantes que vão tornar sua comemoração verdadeiramente especial."
          />
          
          <ServiceCard 
            icon={<Users className="text-magic-primary" />}
            title="Eventos Corporativos"
            description="Adicione um toque de magia ao seu evento empresarial com performances que vão impressionar clientes e colaboradores."
          />
          
          <ServiceCard 
            icon={<Heart className="text-magic-primary" />}
            title="Casamentos"
            description="Torne seu dia ainda mais mágico com apresentações elegantes que complementam a atmosfera romântica do seu casamento."
          />
        </div>
        
        <div className="mt-12 bg-black/50 rounded-lg p-6 md:p-8 border border-magic-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">Shows Personalizados para Seu Evento</h3>
              <p className="text-white/80 mb-4">
                Cada apresentação é cuidadosamente adaptada para atender às necessidades específicas 
                do seu evento, considerando o público, local e ocasião.
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
                <li>Close-up magic para interações pessoais</li>
                <li>Shows de palco para grandes audiências</li>
                <li>Mágica interativa que envolve os convidados</li>
                <li>Truques customizados com a temática do seu evento</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-magic-primary to-magic-secondary flex items-center justify-center magical-glow">
                <Sparkles className="text-white" size={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
