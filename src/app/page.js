"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, Facebook, Instagram } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// Defina as imagens do carrossel
const images = [
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel3.jpg',
  '/carousel4.jpg'
];

export default function Home() {
  // Configuração do Keen Slider
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    autoplay: {
      delay: 4000,
      pauseOnHover: true,
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white p-4">
        <div className="container mx-auto">
          <Image src="/logo.png" height={35} width={120} alt="CMD" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4 text-red-600">O Melhor para sua saúde</h1>
                <p className="mb-6 text-gray-600">
                  Com mais de 28 anos de mercado, a Clínica CMD possui um centro médico
                  completo para atender e cuidar de você e sua família. Contamos com mais
                  de 1000 m², centro radiológico completo com ressonância magnética,
                  tomografia, raio-X e outros exames, além de um laboratório de análises
                  clínicas e mais de 20 especialidades médicas em consultório. Somos a
                  maior referência em ultrassonografia obstétrica, atendendo mais de
                  2000 gestantes todos os meses e cuidando do seu bebê desde as primeiras
                  semanas de gestação até o momento do parto. Somos pioneiros em
                  ultrassonografia morfológica em Goiânia, com profissionais atuando na CMD
                  há 20 anos. Somos o local que você procurava para cuidar da sua saúde
                  sempre que precisar!
                </p>
                <Link
                  href="#agendar"
                  className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AGENDE AGORA!
                </Link>
              </div>

              {/* Carousel using Keen Slider */}
              <div ref={sliderRef} className="keen-slider md:w-1/2 h-64 md:h-full">
                {images.map((src, index) => (
                  <div key={index} className="keen-slider__slide relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Carousel image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="agendar" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Qual{' '}
              <span className="text-red-600">
                <strong>exame ou consulta</strong>
              </span>{' '}
              você quer agendar?
            </h2>
            <p className="text-center mb-12">
              Escolha uma opção e agende <strong>rápido</strong> pelo{' '}
              <strong>WhatsApp ou pelo telefone:</strong> (62) 9 9269-3610
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Exames de Imagem',
                  price: 'R$ 50,00',
                  image: '/images/exames-imagem.jpg',
                },
                {
                  title: 'Exames Laboratoriais',
                  price: 'R$ 5,00',
                  image: '/images/exames-laboratoriais.jpg',
                },
                {
                  title: 'Exames Cardiológicos',
                  price: 'R$ 40,00',
                  image: '/images/exames-cardiologicos.jpg',
                },
                {
                  title: 'Consultas Médicas',
                  price: 'R$ 90,00',
                  image: '/images/consultas-medicas.jpg',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={item.image} height={200} width={400} alt={item.title} className="w-full" />
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">
                      A partir de{' '}
                      <span className="text-red-600 font-bold">{item.price}</span>
                    </p>
                    <Link
                      href={`https://api.whatsapp.com/send?phone=556292693610&text=Olá! Quero agendar ${item.title}.`}
                      className="bg-green-500 text-white px-4 py-2 rounded-full inline-flex items-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Content */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Nossa tecnologia encontra os{' '}
                  <strong>melhores médicos, clínicas e laboratórios</strong>{' '}
                  próximos a você com{' '}
                  <span className="text-red-600">
                    <strong>valores mais acessíveis</strong>
                  </span>
                </h2>
                <p className="mb-6">
                  Procurar os melhores profissionais de saúde, clínicas e laboratórios
                  pode ser uma tarefa complicada e demorada. É por isso que criamos
                  uma tecnologia inovadora para facilitar essa busca e encontrar o
                  profissional, clínica ou laboratório perfeito para os cuidados com a
                  sua saúde, sem precisar se preocupar com o preço.
                </p>
                <Link
                  href="https://api.whatsapp.com/send?phone=556292693610&text=Olá! Vim pelo site e gostaria de agendar um exame ou consulta."
                  className="bg-green-500 text-white px-6 py-3 rounded-full inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  AGENDE PELO WHATSAPP
                </Link>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src="/images/technology-illustration.jpg"
                  height={400}
                  width={400}
                  alt="Technology illustration"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Left */}
            <div className="mb-4 md:mb-0">
              <Image src="/logo.png" height={50} width={120} alt="CMD Goiânia" className="mb-2" />
              <p className="text-sm">CMD - Inovação em Atendimento Médico</p>
              <p className="text-sm">
                Rua 9-A, 228, St. Aeroporto, Goiânia-GO, CEP: 74075-250
              </p>
            </div>

            {/* Footer Right */}
            <div className="flex flex-col items-center md:items-end">
              <Link href="tel:+556239338700" className="mb-2 inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                (62) 3933-8700
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=+556292693610&text=Olá! Vim pelo site e gostaria de agendar um exame ou consulta."
                className="mb-4 inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                (62) 9 9269-3610
              </Link>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/CMD" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://www.instagram.com/cmdgoiania/" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
