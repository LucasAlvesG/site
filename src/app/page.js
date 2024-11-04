"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, Facebook, Instagram } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Defina as imagens do carrossel com o caminho relativo a partir da raiz
const images = [
  '/carousel1.jpeg',
  '/carousel2.jpeg',
  '/carousel3.jpeg',
  '/carousel4.jpeg',
  '/carousel5.jpeg',
  '/carousel6.jpeg',
  '/carousel7.jpeg',
  '/carousel8.jpeg',
  '/carousel9.jpeg'
];

export default function Home() {
  // Configuração do Slick Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    fade: true,
    waitForAnimate: false,
    adaptiveHeight: true,
  };

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
            <div className="flex flex-col md:flex-row items-center md:space-x-16">
              {/* Text Content */}
              <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-7xl font-bold " style={{ color: '#2d87bb' }}>O Melhor</h1>
              <h1 className="text-7xl font-bold mb-4" style={{ color: '#2d87bb' }}>para sua saúde</h1>
              <h1 className="text-2xl font-bold mb-4" style={{ color: '#2d87bb' }}>Clínica Médica Diagnóstico</h1>
              <p
  className="mb-10 text-gray-700 text-lg leading-relaxed tracking-wide"
  style={{
    textAlign: "justify",
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400, // define o peso base como regular (não negrito)
  }}
>
  Com mais de <span style={{ fontWeight: 700 }}>28 anos de mercado</span>, a Clínica CMD possui um
  centro médico completo para atender e cuidar de você e sua família. Contamos com
  mais de <span style={{ fontWeight: 700 }}>1000 m²</span>, centro radiológico completo com
  ressonância magnética, tomografia, raio-X e outros exames, além de um laboratório
  de análises clínicas e mais de <span style={{ fontWeight: 700 }}>20 especialidades médicas</span> em
  consultório. Somos a maior referência em <span style={{ fontWeight: 700 }}>ultrassonografia obstétrica</span>,
  atendendo mais de <span style={{ fontWeight: 700 }}>2000 gestantes</span> todos os meses e cuidando do seu bebê
  desde as primeiras semanas de gestação até o momento do parto. Somos pioneiros em
  <span style={{ fontWeight: 700 }}> ultrassonografia morfológica</span> em Goiânia, com profissionais atuando na CMD
  há 20 anos. Somos o local que você procurava para cuidar da sua saúde sempre que
  precisar!
</p>



                <Link
                href="#agendar"
                className="text-white inline-flex items-center justify-center hover:shadow-lg"
                style={{
                  backgroundColor: '#2d87bb',
                  padding: '1rem 2rem', // aumenta o padding para garantir o tamanho desejado
                  fontSize: '1.25rem',  // aumenta o tamanho do texto
                  borderRadius: '0.5rem', // opcional: arredonda as bordas do botão
                  minWidth: '200px',      // opcional: define uma largura mínima
                  minHeight: '60px',      // opcional: define uma altura mínima
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                MARQUE UM EXAME
              </Link>

              </div>

              {/* Carousel using Slick Slider */}
              <div className="md:w-1/2 md:space-x-16">
                <Slider {...settings}>
                  {images.map((src, index) => (
                    <div key={index} className="relative w-full h-64 md:w-[1000px] md:h-[600px] clip-container">
                      <Image
                        src={src}
                        alt={`Carousel image ${index + 1}`}
                        width={1000} 
                        height={600} 
                        quality={100}
                        style={{ objectFit: 'cover' }}
                        className="w-full h-full object-cover custom-shape"
                      />
                    </div>
                  ))}
                </Slider>
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
