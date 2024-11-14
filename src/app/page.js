"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, Facebook, Instagram, Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function NextArrow(props) {
  const { onClick, style } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -right-8 text-gray-100 hover:text-gray-200 cursor-pointer z-10"
      onClick={onClick}
      style={{ ...style }}
    >
      <FiChevronRight className="h-8 w-8" />
    </div>
  );
}

// Seta "Anterior" com FiChevronLeft posicionada fora do contêiner
function PrevArrow(props) {
  const { onClick, style } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -left-8 text-gray-100 hover:text-gray-200 cursor-pointer z-10"
      onClick={onClick}
      style={{ ...style }}
    >
      <FiChevronLeft className="h-8 w-8" />
    </div>
  );
}


const images = [
  '/carousel1.jpeg',
  '/carousel3.jpeg',
  '/carousel4.jpeg',
  '/carousel5.jpeg',
];

const services = [
  {
    name: 'Exames de imagem',
    review: 'Tratamento e cuidado especializado para pacientes oncológicos.',
    img: '/images/exame.jpg',
    whatsapp: '+5562993546233', // Número de WhatsApp específico para este serviço
  },
  {
    name: 'Exames laboratoriais',
    review: 'Cuidado completo para o coração com os melhores especialistas.',
    img: '/images/exameslaboratoriais.jpg',
    whatsapp: '+5562992456916', // Número de WhatsApp específico para este serviço
  },
  {
    name: 'Consultas Medicas',
    review: 'Serviços de diagnóstico com equipamentos modernos.',
    img: '/images/consulta10.jpg',
    whatsapp: '+5562993546233', // Número de WhatsApp específico para este serviço
  },
  {
    name: 'Partos e Cirurgias',
    review: 'Cuidado especial para a saúde das crianças.',
    img: '/images/cirurgia.jpg',
    whatsapp: '+5562994611598', // Número de WhatsApp específico para este serviço
  },
];


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
    fade: true,
    adaptiveHeight: true,
  };

  const settings2 = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Header fixo */}
{/* Header para Desktop */}
<header className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 p-2 shadow-lg fixed w-full z-50 hidden md:block metallic-header">
  <div className="container mx-auto flex items-center justify-between">
    {/* Botão do Logo */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="transition-transform hover:scale-110"
    >
      <Image
        src="/logo.png"
        height={40}
        width={80}
        alt="CMD"
      />
    </button>

    {/* Nome da Clínica centralizado e alinhado à direita */}
    <h1 className="text-4xl md:text-3xl font-playfair font-bold text-blue-800 mr-auto">
      Clínica Médica Diagnóstico
    </h1>
  </div>

  {/* Estilos adicionais para efeito metálico */}
  <style jsx>{`
    .metallic-header-mobile {
      background: linear-gradient(60deg, #808080, #a0a0a0, #808080);
      box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.3), inset 0 0 8px rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  `}</style>
</header>

{/* Versão do Header para Celular */}
<header className="bg-[#6b6b6b] text-white p-2 shadow-lg fixed w-full z-50 block md:hidden metallic-header-mobile">
  <div className="container mx-auto flex items-center justify-center">
    {/* Botão do Logo */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="transition-transform hover:scale-110"
    >
      <Image
        src="/logo.png"
        height={40}
        width={95}
        alt="CMD"
      />
    </button>
  </div>

  {/* Estilos adicionais para efeito metálico no celular */}
  <style jsx>{`
    .metallic-header-mobile {
      background: linear-gradient(60deg, #808080, #a0a0a0, #808080);
      box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.3), inset 0 0 8px rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  `}</style>
</header>



      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="p-8 md:p-12 bg-gradient-to-br from-white to-gray-300 flex flex-col md:flex-row items-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-blue-900">O Melhor</h1>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-blue-900">para sua saúde</h1>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">Clínica Médica Diagnóstico</h2>
              <p className="mb-10 text-base md:text-lg leading-relaxed tracking-wide text-justify">
                Com mais de <span className="font-semibold text-yellow-600">28 anos de mercado</span>, a Clínica CMD possui um
                centro médico completo para atender e cuidar de você e sua família.
              </p>
            
            </div>

            {/* Carousel */}
            <div className="md:w-1/2 w-full">
              <Slider {...settings}>
                {images.map((src, index) => (
                  <div key={index} className="relative w-full h-48 md:h-[500px]">
                    <Image
                      src={src}
                      alt={`Carousel image ${index + 1}`}
                      layout="fill"
                      quality={90}
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

{/* slider de servicos realizado pela cmd contendo setas para direita e esquerda */}
        {/* Section para desktops e tablets */}
        <section id="servicos" className="py-16 bg-blue-900 text-gray-900 hidden md:block">
  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-gray-100">
    Exames Realizados
  </h2>
  <div className="w-3/4 m-auto">
    <div className="mt-20">
      <Slider {...settings2}>
        {services.map((d, index) => (
          <div
            key={index}
            className="bg-[#ebf8fa] h-[450px] text-black rounded-xl shadow-lg overflow-hidden border border-gray-400 hover:border-gray-600 transition-colors duration-300"
          >
            <div className="h-48 mx-4 mt-4 rounded-t-xl overflow-hidden">
              <img src={d.img} alt={d.name} className="object-cover w-full h-full rounded-xl" />
            </div>

            <div className="flex flex-col justify-between h-[250px] p-6 text-center">
              <div>
                <p className="text-xl font-semibold text-blue-800">{d.name}</p>
                <p className="text-gray-700 overflow-hidden text-ellipsis max-h-16 sm:max-h-full line-clamp-2 sm:line-clamp-none">
                  {d.review}
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 mt-4">
                <a href={`https://wa.me/${d.whatsapp}?text=Olá! Gostaria de mais informações sobre ${d.name}`} target="_blank" rel="noopener noreferrer" className="w-3/5">
                  <button className="w-full text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-green-400 to-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    Mensagem
                    <FaWhatsapp className="ml-2 text-xl" />
                  </button>
                </a>

                {/* Botão para abrir o modal */}
                <label htmlFor="modal-toggle" className="w-3/5 cursor-pointer text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  Ligação
                  <FaPhoneAlt className="ml-2 text-xl" />
                </label>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>

  {/* Checkbox para controlar o modal */}
  {/* Checkbox para controlar o modal */}
<input type="checkbox" id="modal-toggle" className="hidden" />

{/* Modal CSS */}
<label htmlFor="modal-toggle" className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 pointer-events-none transition-opacity duration-300">
  <div className="bg-white p-8 rounded-lg shadow-lg text-center w-3/4 md:w-1/4" onClick={(e) => e.stopPropagation()}>
    <p className="text-lg font-semibold text-blue-800">Número para Contato</p>
    <p className="text-2xl font-bold mt-4">+55 62 3241-7374</p>
    
    {/* Botão para fechar o modal */}
    <label htmlFor="modal-toggle" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition cursor-pointer">
      Fechar
    </label>
  </div>
</label>

</section>

{/* Section para dispositivos móveis */}
<section id="servicos" className="py-16 bg-blue-900 text-gray-900 block md:hidden">
  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-gray-100">
    Serviços Realizados
  </h2>
  <div className="w-full lg:w-11/12 xl:w-3/4 mx-auto bg-[#ebf8fa] rounded-xl overflow-hidden">
    <div className="grid grid-cols-2 grid-rows-2 gap-0">
      {services.map((d, index) => (
        <div
          key={index}
          className="h-[450px] text-black flex flex-col justify-between p-4"
        >
          {/* Imagem no topo */}
          <div className="h-48 w-full overflow-hidden flex justify-center items-center" loading="lazy">
    <img
      src={d.img}
      alt={d.name}
      className="object-cover w-full h-full rounded-lg"
      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
    />
  </div>

          
          {/* Conteúdo do Card com texto e botões */}
          <div className="text-center">
          <p className="text-xl font-semibold text-blue-800 text-center">{d.name}</p>
<p className="text-gray-700 h-24 flex items-center justify-center text-center overflow-y-auto">
  {d.review}
</p>

            
            {/* Botões */}
            <div className="flex flex-col items-center gap-2 mt-4">
               <a href={`https://wa.me/${d.whatsapp}?text=Olá! Gostaria de mais informações sobre ${d.name}`} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-green-400 to-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  Mensagem
                  <FaWhatsapp className="ml-2 text-xl" />
                </button>
              </a>
              <a href="tel:+556232417374" className="w-full">
                <button className="w-full text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  Ligação
                  <FaPhoneAlt className="ml-2 text-xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        

        

        





<section className="py-16 bg-[#fff6f1] relative overflow-hidden">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 px-4">
    {/* Left Text Content */}
    <div className="md:w-1/2 mb-8 md:mb-0">
  <h2 className="text-3xl md:text-6xl font-light text-gray-800 leading-tight">
    Somos a <span className="font-semibold">maior referência</span> em <span className="font-semibold">ultrassom obstétrico</span>, atendendo mais de <span className="text-blue-800 font-semibold">2000 gestantes</span> todos os meses.
  </h2>

  <p className="text-gray-700 mt-4 text-xl md:text-2xl leading-relaxed">
    Contamos com mais de 1000 m², um centro radiológico completo com ressonância magnética, tomografia, raio X e muito mais. Além disso, temos um laboratório para análises clínicas e mais de 20 especialidades médicas em consultório.
  </p>

  <p className="text-gray-700 mt-4 text-xl md:text-2xl leading-relaxed">
    Cuidamos do seu bebê desde as primeiras semanas de gestação até o momento do parto, oferecendo acompanhamento completo e especializado.
  </p>
      
      
      
      


    </div>

    {/* Right Image Content */}
    <div className="md:w-1/2 relative flex justify-center">
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 md:w-40 md:h-40">
        {/* Placeholder for Icon or Image */}
        
      </div>
      <img
        src="/images/ultrason2.jpg"
        alt="ultrason"
        className="w-full md:w-3/4 rounded-lg "
      />
    </div>
  </div>
</section>

<section className="py-16 bg-[#fff6f1] relative overflow-hidden z-0">
  {/* Background Image with Reduced Opacity, Centering, and Slight Right Shift */}
  <div 
    className="absolute inset-0 z-0 bg-[url('/images/fundo.png')] bg-no-repeat bg-blend-overlay opacity-10 pointer-events-none" 
    style={{ backgroundSize: 'contain', backgroundPosition: '82% center' }}
  ></div>

  {/* Foreground Content */}
  <div className="container relative z-10 mx-auto px-4 text-center md:text-left md:flex md:items-center md:flex-row-reverse">
    {/* Right Text Content */}
    <div className="md:w-1/2">
      <h3 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        Somos o local que você buscava para <span className="text-red-600">cuidar da sua saúde</span> sempre que precisar!
      </h3>
    </div>

    {/* Left Image Placeholder with Fixed Size and Margin */}
    <div className="md:w-1/2 flex justify-center md:justify-start mt-6 md:mt-0 md:mr-12 flex-shrink-0">
      <img 
        src="/carousel2.jpeg" 
        alt="Your Image" 
        className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-3xl shadow-lg object-cover" 
      />
    </div>
  </div>
</section>
{/* Versão para Desktop e Tablet */}
<section className="bg-blue-900 text-white py-12 hidden md:block">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {[
      { number: "28+", label: "Anos de Experiência" },
      { number: "20+", label: "Especialidades Médicas" },
      { number: "2000+", label: "Atendimentos Mensais" },
    ].map((item, index) => (
      <div key={index} className="p-8">
        <h3 className="text-4xl font-bold mb-2">{item.number}</h3>
        <p className="text-lg">{item.label}</p>
      </div>
    ))}
  </div>
</section>

{/* Versão para Celulares */}
<section className="bg-blue-900 text-white py-6 block md:hidden">
  <div className="container mx-auto px-4 grid grid-cols-1 gap-6 text-center">
    {[
      { number: "28+", label: "Anos de Experiência" },
      { number: "20+", label: "Especialidades Médicas" },
      { number: "2000+", label: "Atendimentos Mensais" },
    ].map((item, index) => (
      <div key={index} className="p-4">
        <h3 className="text-2xl font-bold mb-1">{item.number}</h3>
        <p className="text-base">{item.label}</p>
      </div>
    ))}
  </div>
</section>


{/* Depoimentos */}
<section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-12 text-blue-800">Depoimentos de Clientes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Romischinay", feedback: "Fomos bem atendido! Profissionais muito educados carismáticos, gostei muito do atendimento, pôr isso eu dou 5 estrelas, parabéns há equipe do CMD vcs estão de parabéns 👏 vcs são nota 1000" },
                { name: "Azenate", feedback: "Sou cliente desde 2011, sempre fui bem atendida , gosto muito de realizar meus exames sempre na CMD." },
                { name: "Joice", feedback: "Preço justo e ótimo atendimento. Minha clínica preferida em Goiânia." },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current w-8 h-8" />
                    ))}
                  </div>
                  <p className="italic">&quot;{testimonial.feedback}&quot;</p>
                  <p className="mt-4 font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        


        
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.png" height={50} width={150} alt="CMD Goiânia" className="mb-2 mx-auto md:mx-0" />
            <p className="text-sm">CMD - Há 28 anos cuidando com dedicação e excelência da saúde do povo goiano.</p>
            <p className="text-sm">
                R. 84, 414 - St. Sul, Goiânia - GO, 74080-400
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Link href="tel:+556299999999" className="mb-2 inline-flex items-center text-lg">
              <Phone className="w-5 h-5 mr-2 text-gray-300 hover:text-white transition-all" />
              (62) 3241-7374
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+556293546233&text=Olá! Vim pelo site e gostaria de agendar um exame ou consulta."
              className="mb-2 inline-flex items-center text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-gray-300 hover:text-white transition-all" />
              (62) 99354-6233 
            </Link>
            <div className="flex space-x-4">
              <Link href="https://web.facebook.com/clinicamedicadiagnostico/" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-gray-300 hover:text-blue-500 transition-all" />
              </Link>
              <Link href="https://www.instagram.com/cmdgoiania/" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-gray-300 hover:text-pink-500 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


