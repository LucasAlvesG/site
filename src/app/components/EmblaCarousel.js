import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  '/carousel1.png',
  '/carousel7.png',
  '/carousel9.png',
];

export function EmblaCarousel() {
  const autoplayOptions = { delay: 3000 }; // Tempo de espera em milissegundos (3 segundos)
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center', // Centraliza o slide atual
      skipSnaps: true, // Garante que o snap só aconteça nas posições corretas
      draggable: false,
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div key={index} className="embla__slide relative w-full h-48 md:h-[500px]">
            <img
              src={src}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full rounded-lg shadow-lg object-cover"
              loading="lazy" // Lazy loading para melhor desempenho
            />
          </div>
        ))}
      </div>
    </div>
  );
}
