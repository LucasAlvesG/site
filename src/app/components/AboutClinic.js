import Image from "next/image";

export default function AboutClinic() {
  return (
    <section className="py-16 bg-[#f4f4f4] relative overflow-hidden">
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/fundo.webp')] bg-no-repeat bg-cover opacity-10 pointer-events-none block md:hidden"
        style={{
          backgroundPosition: "center 120px",
          backgroundSize: "130%",
        }}
      ></div>
      {/* Conteúdo */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center md:space-x-8 px-4">
        {/* Texto */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-6xl font-light text-[#1b4f72] leading-tight">
            Somos a <span className="font-semibold">maior referência</span>{" "}
            em <span className="font-semibold">ultrassom obstétrico</span>,
            atendendo mais de{" "}
            <span className="text-[#ff4d4d] font-semibold">
              2000 gestantes
            </span>{" "}  
            todos os meses.
          </h2>
          <p className="text-[#333333] mt-4 text-xl md:text-2xl leading-relaxed">
            Contamos com mais de 1000 m², um centro radiológico completo com
            ressonância magnética, tomografia, raio X e muito mais. Além disso,
            temos um laboratório para análises clínicas e mais de 20 especialidades médicas em consultório.
          </p>
          <p className="text-[#333333] mt-4 text-xl md:text-2xl leading-relaxed">
            Cuidamos do seu bebê desde as primeiras semanas de gestação até o
            momento do parto, oferecendo acompanhamento completo e especializado.
          </p>
        </div>
        {/* Imagem */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 md:w-40 md:h-40"></div>
          <Image
            src="/images/ultrason1.webp"
            alt="Ultrassom"
            width={600} // Defina uma largura adequada
            height={400} // Defina uma altura adequada
            className="w-full md:w-3/4"
          />
        </div>
      </div>
    </section>
  );
}
