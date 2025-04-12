
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 magical-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Entre em <span className="magical-text">Contato</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg border border-magic-primary/20">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/555184232748" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 hover:text-magic-primary transition-colors"
                >
                  <div className="bg-magic-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <Phone className="text-magic-primary" size={20} />
                  </div>
                  <span>+55 51 8423-2748</span>
                </a>
                
                <a 
                  href="mailto:iuriomagico@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 hover:text-magic-primary transition-colors"
                >
                  <div className="bg-magic-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <Mail className="text-magic-primary" size={20} />
                  </div>
                  <span>iuriomagico@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-magic-primary/20">
              <img 
                src="/lovable-uploads/e1af0cdb-b956-4139-a452-3fe6a02a6265.png" 
                alt="Iuri o Mágico em ação" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
