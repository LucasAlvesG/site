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
    name: 'Consultas',
    review: 'Serviços de diagnóstico com equipamentos modernos.',
    img: '/images/consulta.jpg',
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
      <header className="bg-gradient-to-b from-[#82d3f9] to-gray-100 p-2 shadow-lg fixed w-full z-50">
  <div className="container mx-auto flex items-center justify-between">
    {/* Logo Button */}
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
    
    {/* Clinic Name with margin-left: auto to move it to the right */}
    <h1 className="text-4xl md:text-3xl font-playfair font-bold text-blue-800 mr-auto">
  Clínica Médica Diagnóstico
</h1>

    
    {/* WhatsApp Link */}
    <Link
      href="https://api.whatsapp.com/send?phone=+5562993546233&text=Olá! Vim pelo site e gostaria de agendar um exame ou consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-10 py-2 rounded-full font-medium text-sm md:text-base hover:bg-yellow-700 transition ml-4"
    >
      WhatsApp
      <FaWhatsapp className="ml-2 text-xl" />
    </Link>
  </div>
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
              <Link
                href="#servicos"
                className="text-white inline-flex items-center justify-center font-medium py-3 px-6 md:px-8 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                MARQUE UM EXAME
              </Link>
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

        {/* Contagem Regressiva */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "28+", label: "Anos de Experiência" },
              { number: "20+", label: "Especialidades Médicas" },
              { number: "2000+", label: "Atendimetos Mensais" },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-4xl font-bold mb-2">{item.number}</h3>
                <p className="text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
                <section className="bg-gray-50 py-16">
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

        {/* slider de servicos realizado pela cmd contendo setas para direita e esquerda */}
       <section id="servicos" className="py-16 bg-blue-900 text-gray-900">
  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-gray-100">
    Serviços Realizados
  </h2>
  <div className="w-3/4 m-auto">
    <div className="mt-20">
      <Slider {...settings2}>
        {services.map((d, index) => (
          <div
            key={index}
            className="bg-[#ebf8fa] h-[450px] text-black rounded-xl shadow-lg overflow-hidden border border-gray-400 hover:border-gray-600 transition-colors duration-300"
          >
            {/* Imagem menor com bordas arredondadas no topo */}
            <div className="h-48 mx-4 mt-4 rounded-t-xl overflow-hidden">
              <img src={d.img} alt={d.name} className="object-cover w-full h-full rounded-xl" />
            </div>
            
            {/* Conteúdo do Card com divisão para texto e botões */}
            <div className="flex flex-col justify-between h-[250px] p-6 text-center">
              {/* Seção de Texto */}
              <div>
                <p className="text-xl font-semibold text-blue-800">{d.name}</p>
                
                {/* Text with limited lines for mobile */}
                <p className="text-gray-700 overflow-hidden text-ellipsis max-h-16 sm:max-h-full line-clamp-2 sm:line-clamp-none">
                  {d.review}
                </p>
              </div>
              
              {/* Seção dos Botões */}
              <div className="flex flex-col items-center gap-4 mt-4">
                 {/* Link para WhatsApp com número específico */}
                 <a href={`https://wa.me/${d.whatsapp}?text=Olá! Gostaria de mais informações sobre ${d.name}`} target="_blank" rel="noopener noreferrer" className="w-3/5">
                  <button className="w-full text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-green-400 to-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    Mensagem
                    <FaWhatsapp className="ml-2 text-xl" />
                  </button>
                </a>
                {/* Botão de Ligação com link para o número de telefone */}
                <a href="tel:+556232417374" className="w-3/5">
                  <button className="w-full text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    Ligação
                    <FaPhoneAlt className="ml-2 text-xl" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
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
      
      
      
      <a
  href="https://api.whatsapp.com/send?phone=+5562993546233&text=Olá! Gostaria de agendar um exame."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-16 py-3 rounded-full font-medium text-base md:text-lg hover:bg-yellow-700 transition mt-6"
>
  MARQUE VIA WHATSAPP
  <FaWhatsapp className="ml-2 text-2xl" />
</a>


    </div>

    {/* Right Image Content */}
    <div className="md:w-1/2 relative flex justify-center">
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 md:w-40 md:h-40">
        {/* Placeholder for Icon or Image */}
        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
            <img src="/images/medic.png" alt="Doctor Icon" className="w-full h-full rounded-full object-cover" />
        </div>
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
              <Link href="https://www.facebook.com/Clínica-Cmd" aria-label="Facebook">
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


