import React, { useEffect, useState } from 'react';
import { Building2, Users2, Hammer, Phone, ChevronRight, Facebook, Instagram, Linkedin as LinkedIn, Mail, Send } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Construindo o Futuro da África",
    subtitle: "Excelência em Construção e Engenharia"
  },
  {
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Inovação em Cada Projeto",
    subtitle: "Transformando Visões em Realidade"
  },
  {
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Compromisso com a Qualidade",
    subtitle: "Construindo com Excelência"
  }
];

const projects = [
  {
    title: "Complexo Empresarial Moderno",
    location: "Lagos, Nigéria",
    description: "Um impressionante complexo empresarial de 25 andares que redefine o horizonte de Lagos. Este projeto incorpora tecnologias sustentáveis e design inovador.",
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Desenvolvimento Residencial",
    location: "Nairóbi, Quênia",
    description: "Conjunto residencial de luxo com 200 unidades, integrando áreas verdes e tecnologia inteligente para criar um ambiente moderno e sustentável.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Projeto de Infraestrutura",
    location: "Acra, Gana",
    description: "Projeto de infraestrutura urbana que inclui pontes, estradas e sistemas de drenagem, melhorando a conectividade e qualidade de vida da cidade.",
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

function App() {
  const [currentProject, setCurrentProject] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">ENGEP•WER</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Início</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Serviços</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Projetos</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero Section with Swiper */}
      <section className="pt-16">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000 }}
          loop={true}
          className="h-[80vh]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50">
                  <div className="container mx-auto px-6 h-full flex items-center">
                    <div className="text-white max-w-2xl" data-aos="fade-right">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-xl mb-8">{slide.subtitle}</p>
                      <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center space-x-2">
                        <span>Comece Agora</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Nossos Projetos</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img 
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="rounded-lg shadow-2xl transition-all duration-500"
              />
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h3>
              <p className="text-orange-500 font-semibold mb-4">{projects[currentProject].location}</p>
              <p className="text-gray-600 mb-8">{projects[currentProject].description}</p>
              <div className="flex space-x-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentProject === index ? 'bg-orange-500 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-12 h-12 text-orange-500" />,
                title: "Construção",
                description: "Soluções modernas de construção com excelência africana"
              },
              {
                icon: <Users2 className="w-12 h-12 text-orange-500" />,
                title: "Consultoria",
                description: "Consultoria especializada para seus projetos"
              },
              {
                icon: <Hammer className="w-12 h-12 text-orange-500" />,
                title: "Engenharia",
                description: "Soluções inovadoras de engenharia para a África"
              }
            ].map((service, index) => (
              <div 
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-xl shadow-lg card-3d group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div data-aos="fade-right">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
              <div data-aos="fade-left" className="flex flex-col justify-center">
                <div className="bg-orange-500 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
                  <div className="space-y-4">
                    <p className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span>+123 456 7890</span>
                    </p>
                    <p className="flex items-center space-x-3">
                      <Mail className="w-5 h-5" />
                      <span>contato@engepwer.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Media */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Building2 className="w-8 h-8" />
                <span className="text-2xl font-bold">ENGEP•WER</span>
              </div>
              <p className="text-gray-400">Excelência em Construção e Engenharia</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Início</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Serviços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Projetos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <LinkedIn className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 ENGEP•WER. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;