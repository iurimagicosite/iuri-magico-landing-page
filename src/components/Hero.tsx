import { Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/fotos/0003.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay escuro e gradiente para legibilidade */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#120d20]/60 to-black/80" />
      {/* Decorative sparkles */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-magic-primary rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-magic-primary rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-magic-primary rounded-full animate-pulse opacity-70"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles
            className="text-magic-primary mr-2 animate-sparkle"
            size={24}
          />
          <span className="text-white/80 uppercase tracking-widest text-sm">
            Shows de Mágica Profissional
          </span>
          <Sparkles
            className="text-magic-primary ml-2 animate-sparkle"
            size={24}
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-6 leading-tight">
          <span className="magical-text">Experiências Mágicas</span>
          <br /> para Eventos{" "}
          <span className="magical-text">Inesquecíveis</span>
        </h1>

        <p className="text-white/80 text-center max-w-2xl mb-10 text-lg">
          Transforme seu evento em uma experiência extraordinária com
          apresentações de mágica envolventes que irão surpreender e encantar
          todos os seus convidados.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/555184232748"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-magic-primary text-white hover:bg-magic-secondary transition-all magical-glow text-center"
          >
            Reservar Agora
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-full bg-transparent text-white border border-magic-primary hover:bg-magic-primary/10 transition-all text-center"
          >
            Descobrir Serviços
          </a>
        </div>

        <div className="mt-12 md:mt-20 flex items-center justify-center gap-6">
          <div className="flex items-center">
            <Star fill="#9b87f5" stroke="none" className="w-5 h-5" />
            <Star fill="#9b87f5" stroke="none" className="w-5 h-5" />
            <Star fill="#9b87f5" stroke="none" className="w-5 h-5" />
            <Star fill="#9b87f5" stroke="none" className="w-5 h-5" />
            <Star fill="#9b87f5" stroke="none" className="w-5 h-5" />
          </div>
          <p className="text-white/80">Mais de 200 eventos realizados</p>
        </div>
      </div>
      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
