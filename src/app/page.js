"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, Facebook, Instagram, Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/carousel1.jpeg',
  '/carousel2.jpeg',
  '/carousel3.jpeg',
  '/carousel4.jpeg',
  '/carousel5.jpeg',
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

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Header fixo */}
      <header className="bg-white p-4 shadow-lg fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Image src="/logo.png" height={40} width={140} alt="CMD" className="transition-transform hover:scale-110" />
          <Link
            href="https://api.whatsapp.com/send?phone=+556292693610&text=Olá! Vim pelo site e gostaria de agendar um exame ou consulta."
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full font-medium text-sm md:text-base hover:bg-yellow-700 transition"
          >
            WhatsApp
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="p-8 md:p-12 bg-gradient-to-br from-white to-gray-100 flex flex-col md:flex-row items-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-blue-900">O Melhor</h1>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-blue-900">para sua saúde</h1>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">Clínica Médica Diagnóstico</h2>
              <p className="mb-10 text-base md:text-lg leading-relaxed tracking-wide text-justify">
                Com mais de <span className="font-semibold text-yellow-600">28 anos de mercado</span>, a Clínica CMD possui um
                centro médico completo para atender e cuidar de você e sua família...
              </p>
              <Link
                href="#marcar"
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
              { number: "2000+", label: "Gestantes Atendidas Mensalmente" },
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
                  <Star className="text-yellow-500 w-8 h-8 mb-3 mx-auto" />
                  <p className="italic">"{testimonial.feedback}"</p>
                  <p className="mt-4 font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Serviços */}
        <section id="marcar" className="py-16 bg-gray-100 text-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-blue-800">Exames Realizados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="w-1/3 h-full">
                  <Image src="/carousel2.jpeg" height={300} width={400} alt="Ginecologia" className="w-full h-full object-cover rounded-l-lg" />
                </div>
                <div className="w-2/3 p-6 bg-gray-100 flex flex-col justify-center">
                  <h3 className="font-bold text-lg md:text-xl mb-4 text-blue-800">Ginecologia</h3>
                  <ul className="list-disc ml-5 space-y-2">
                    {['Consulta', 'Prevenção', 'Pré-Natal', 'Menopausa', 'Ultrassom'].map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`https://api.whatsapp.com/send?phone=556292693610&text=Olá! Quero agendar ${item}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="w-1/3 h-full">
                  <Image src="/carousel7.jpeg" height={300} width={400} alt="Cardiologia" className="w-full h-full object-cover rounded-l-lg" />
                </div>
                <div className="w-2/3 p-6 bg-gray-100 flex flex-col justify-center">
                  <h3 className="font-bold text-lg md:text-xl mb-4 text-blue-800">Cardiologia</h3>
                  <ul className="list-disc ml-5 space-y-2">
                    {['Tratamento', 'Risco Cirúrgico', 'Eletrocardiograma', 'MAPA', 'Teste Ergométrico'].map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`https://api.whatsapp.com/send?phone=556292693610&text=Olá! Quero agendar ${item}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.png" height={50} width={150} alt="CMD Goiânia" className="mb-2 mx-auto md:mx-0" />
            <p className="text-sm">CMD - Inovação em Atendimento Médico</p>
            <p className="text-sm">
              Rua 9-A, 228, St. Aeroporto, Goiânia-GO, CEP: 74075-250
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Link href="tel:+556239338700" className="mb-2 inline-flex items-center text-lg">
              <Phone className="w-5 h-5 mr-2 text-gray-300 hover:text-white transition-all" />
              (62) 3933-8700
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+556292693610&text=Olá! Vim pelo site e gostaria de agendar um exame ou consulta."
              className="mb-2 inline-flex items-center text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-gray-300 hover:text-white transition-all" />
              (62) 3241-7374
            </Link>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/CMD" aria-label="Facebook">
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
