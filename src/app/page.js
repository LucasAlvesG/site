"use client";
import { Suspense } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import Header from "../app/components/header"; // Mantém a importação normal
import Footer from '../app/components/Footer'; // Mantém a importação normal
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import dynamic from 'next/dynamic';


// const Services = dynamic(() => import("../app/components/Services"), { ssr: false });
// const AboutClinic = dynamic(() => import("../app/components/AboutClinic"), { ssr: false });
// const EmpresasCMD = dynamic(() => import("../app/components/EmpresasCMD"), { ssr: false });
// import { EmblaCarousel } from '../app/components/EmblaCarousel';



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
      {/* <Header /> */}
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
            ola meu casca de bala
            </div>  
          </div>
        </section>
        {/* Serviços - Desktop */}
        
        
      </main>

      {/* Footer */}
      <div  className="bg-[#f4f4f4]">
      {/* Outros componentes aqui */}
      <Footer />
    </div>
    </div>
  );
} 