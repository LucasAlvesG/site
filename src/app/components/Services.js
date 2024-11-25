// components/Services.js
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Services = ({ services }) => {
  return (
    <section
          id="servicos"
          className="py-16 bg-[#f4f4f4] text-[#333333] "
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[#ff4d4d]">
            Serviços Realizados
          </h2>
          <div className="w-full lg:w-11/12 xl:w-3/4 mx-auto bg-[#f4f4f4]  rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-0">
              {services.map((d, index) => (
                <div
                  key={index}
                  className="h-[450px] text-black flex flex-col justify-between p-4"
                >
                  {/* Imagem no topo */}
                  <div
                    className="h-48 w-full overflow-hidden flex justify-center items-center"
                    loading="lazy"
                  >
                    <img
                      src={d.img}
                      alt={d.name}
                      className="object-cover w-full h-full rounded-lg"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  {/* Conteúdo do Card */}
                  <div className="text-center">
                    <p className="text-xl font-semibold text-[#1b4f72] text-center">
                      {d.name}
                    </p>
                    <p className="text-[#333333] h-24 flex items-center justify-center text-center overflow-y-auto">
                      {d.review}
                    </p>
                    {/* Botões */}
                    <div className="flex flex-col items-center gap-2 mt-4">
                      <a
                        href={`https://wa.me/${d.whatsapp}?text=Olá! Gostaria de mais informações sobre ${d.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <button className="w-full text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-[#82D3F9] to-[#1b4f72] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                          Mensagem <FaWhatsapp className="ml-2 text-xl" />
                        </button>
                      </a>
                      <a href="tel:+556232417374" className="w-full">
                        <button className="w-full text-white inline-flex items-center justify-center font-medium py-3 rounded-full shadow-lg bg-gradient-to-r from-[#ff4d4d] to-[#ff4d4d] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                          Ligação <FaPhoneAlt className="ml-2 text-xl" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

  );
};

export default Services;
