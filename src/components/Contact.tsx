
import { Phone, Mail, Send } from "lucide-react";

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
              
              <div className="mt-8">
                <h4 className="font-medium mb-2">Siga nas redes sociais</h4>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-magic-primary/10 flex items-center justify-center hover:bg-magic-primary/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-magic-primary/10 flex items-center justify-center hover:bg-magic-primary/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-magic-primary/10 flex items-center justify-center hover:bg-magic-primary/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-magic-primary/20">
              <h3 className="text-xl font-bold mb-4">Envie uma Mensagem</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Nome</label>
                  <input 
                    type="text"
                    id="name"
                    className="w-full bg-black/80 border border-magic-primary/30 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-magic-primary"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                  <input 
                    type="email"
                    id="email"
                    className="w-full bg-black/80 border border-magic-primary/30 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-magic-primary"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/80 border border-magic-primary/30 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-magic-primary"
                    placeholder="Como posso ajudar no seu evento?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-magic-primary text-white rounded-md hover:bg-magic-secondary transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
