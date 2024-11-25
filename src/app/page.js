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


const Services = dynamic(() => import("../app/components/Services"), { ssr: false });
const AboutClinic = dynamic(() => import("../app/components/AboutClinic"), { ssr: false });
const EmpresasCMD = dynamic(() => import("../app/components/EmpresasCMD"), { ssr: false });
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
     ola
    </div>
  );
} 