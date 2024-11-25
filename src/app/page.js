"use client";
import { Suspense } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import Header from "../app/components/header"; // Mantém a importação normal
import Footer from '../app/components/Footer'; // Mantém a importação normal
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import dynamic from 'next/dynamic';


const Services = dynamic(() => import("../app/components/Services"));
const AboutClinic = dynamic(() => import("../app/components/AboutClinic"));
const EmpresasCMD = dynamic(() => import("../app/components/EmpresasCMD"));
import { EmblaCarousel } from '../app/components/EmblaCarousel';



function NextArrow(props) {
  const { onClick, style } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -right-8 text-[#333333] hover:text-[#1b4f72] cursor-pointer z-10"
      onClick={onClick}
      style={{ ...style }}
    >
      <FiChevronRight className="h-8 w-8" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, style } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -left-8 text-[#333333] hover:text-[#1b4f72] cursor-pointer z-10"
      onClick={onClick}
      style={{ ...style }}
    >
      <FiChevronLeft className="h-8 w-8" />
    </div>
  );
}



const services = [
  {
    name: 'Exames de Imagem',
    review: 'Tratamento e cuidado especializado para pacientes oncológicos.',
    img: '/images/exame.webp',
    whatsapp: '+5562993546233',
  },
  {
    name: 'Exames Laboratoriais',
    review: 'Cuidado completo para o coração com os melhores especialistas.',
    img: '/images/exameslaboratoriais.webp',
    whatsapp: '+5562992456916',
  },
  {
    name: 'Consultas Médicas',
    review: 'Serviços de diagnóstico com equipamentos modernos.',
    img: '/images/consulta10.webp',
    whatsapp: '+5562993546233',
  },
  {
    name: 'Partos e Cirurgias Gerais',
    review: 'Cuidado especial para a saúde das crianças.',
    img: '/images/cirurgia.webp',
    whatsapp: '+5562994611598',
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
    lazyLoad: 'ondemand',
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
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-[#f4f4f4] to-white text-[#333333]">
     


      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="mt-20 flex-grow pt-3">
        {/* Hero Section */}
        <section className="bg-[#f4f4f4] p-6 md:p-8 flex flex-col md:flex-row items-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-4">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-[#1b4f72]">
                O Melhor
              </h1>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-[#1b4f72]">
                para sua saúde
              </h1>
              <h2 className="text-lg md:text-2xl font-semibold text-[#333333] mb-2">
                Clínica Médica Diagnóstico
              </h2>
              <p className="mb-6 text-base md:text-lg leading-relaxed tracking-wide text-justify">
                Com mais de{" "}
                <span className="font-semibold text-[#ff4d4d]">
                  28 anos de mercado
                </span>
                , a Clínica CMD possui um centro médico completo para atender e
                cuidar de você e sua família.
              </p>
            </div>
            {/* Carousel */}
            <div className="md:w-1/2 w-full">
              <div>
                <EmblaCarousel />
              </div>
            </div>  
          </div>
        </section>
        {/* Serviços - Desktop */}
                
        {/* Lazy loading com Suspense */}
        <Suspense fallback={<div>Loading Services...</div>}>
          <Services services={services} settings={settings} />
        </Suspense>
      

    

        <Suspense fallback={<div>Loading About Clinic...</div>}>
          <AboutClinic />
        </Suspense>
      
        
        {/* Outra Seção */}
        <section className="py-16 bg-[#f4f4f4] relative overflow-hidden z-0">
          {/* Imagem de Fundo */}
          <div
            className="absolute inset-0 z-0 bg-[url('/images/fundo.webp')] bg-no-repeat bg-blend-overlay opacity-10 pointer-events-none"
            style={{ backgroundSize: "contain", backgroundPosition: "82% center" }}
          ></div>
          {/* Conteúdo */}
          <div className="container relative z-10 mx-auto px-4 text-center md:text-left md:flex md:items-center md:flex-row-reverse">
            {/* Texto */}
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold text-[#1b4f72] leading-tight">
                Somos o local que você buscava para{" "}
                <span className="text-[#ff4d4d]">cuidar da sua saúde</span>{" "}
                sempre que precisar!
              </h3>
            </div>
            {/* Imagem */}
            <div className="md:w-1/2 flex justify-center md:justify-start mt-6 md:mt-0 md:mr-12 flex-shrink-0">
            <Image
  src="/carousel2.webp"
  alt="Clínica CMD"
  width={600}
  height={600}
  className="rounded-3xl shadow-lg object-cover"
/>

            </div>
          </div>  
        </section>
        {/* Estatísticas */}
        <section className="bg-gradient-to-r from-[#1b4f72] to-[#82D3F9] text-white py-12 hidden md:block">
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
        {/* Estatísticas - Mobile */}
        <section className="bg-gradient-to-r from-[#1b4f72] to-[#82D3F9] text-white py-6 block md:hidden">
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
        <section className="bg-[#f4f4f4] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-12 text-[#1b4f72]">
              Depoimentos de Clientes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Romischinay",
                  feedback:
                    "Fomos bem atendido! Profissionais muito educados carismáticos, gostei muito do atendimento, pôr isso eu dou 5 estrelas, parabéns há equipe do CMD vcs estão de parabéns 👏 vcs são nota 1000",
                },
                {
                  name: "Azenate",
                  feedback:
                    "Sou cliente desde 2011, sempre fui bem atendida , gosto muito de realizar meus exames sempre na CMD.",
                },
                {
                  name: "Joice",
                  feedback:
                    "Preço justo e ótimo atendimento. Minha clínica preferida em Goiânia.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#ff4d4d] fill-current w-8 h-8" />
                    ))}
                  </div>
                  <p className="italic text-[#333333]">
                    &quot;{testimonial.feedback}&quot;
                  </p>
                  <p className="mt-4 font-semibold text-[#1b4f72]">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
       
       
        {/* Outro conteúdo */}
        <div>
          <EmpresasCMD />
        </div>

        
      </main>

      {/* Footer */}
      <div  className="bg-[#f4f4f4]">
      {/* Outros componentes aqui */}
      <Footer />
    </div>
    </div>
  );
} 