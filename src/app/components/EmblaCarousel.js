import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EmblaCarousel = () => {
  const images = [
    '/carousel1.png',
    '/carousel7.png',
    '/carousel9.png',
  ];

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
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-48 md:h-[500px]">
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            layout="fill"
            quality={90}
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </Slider>
  );
};

export default EmblaCarousel;
