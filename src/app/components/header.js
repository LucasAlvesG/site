"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  // Estado para monitorar se o scroll está acima de 50px
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Função para lidar com o scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Se o scroll for maior que 50px, altera o estado
    };

    // Adiciona o ouvinte de evento para o scroll
    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-gradient-to-r from-[#1b4f72] to-[#82D3F9] h-16 shadow-md"
          : "bg-gradient-to-r from-[#1b4f72] to-[#82D3F9] h-22 shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-center px-4 h-full">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/logo.webp"
            height={isScrolled ? 35 : 45} // A logo fica menor (35px) quando o scroll é maior que 50px
            width={isScrolled ? 75 : 100}  // A logo fica maior (150px) quando no topo
            alt="CMD Logo"
            className="transition-transform duration-300"
          />
        </button>
      </div>
    </header>
  );
}
