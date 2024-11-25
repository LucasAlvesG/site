export default function EmpresasCMD() {
    return (
      <section className="min-h-screen bg-[#f4f4f4] text-white flex flex-col items-center justify-center px-4 py-8">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl text-[#1b4f72] font-bold drop-shadow-lg text-center mb-8 break-words">
          Empresas CMD
        </h1>
  
        {/* Container para os Cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 w-full">
          {/* Card Vivamed */}
          <div className="rounded-lg bg-white text-[#1b4f72] shadow-lg hover:scale-105 transition-transform p-6 flex flex-col items-center min-w-[45%] max-w-[45%] sm:max-w-[300px]">
            <img
              src="/images/vivamed3.webp"
              alt="Vivamed"
              className="w-36 h-36 object-contain mb-4"
            />
            {/* Texto ou título */}
            <p className="text-lg text-center mb-4">Vivamed</p>
            {/* Botão */}
            <a
              href="https://vivamed.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1b4f72] to-[#82D3F9] text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
            >
              <span>Saiba Mais</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
  
          {/* Card SAU Benefícios */}
          <div className="rounded-lg bg-white text-[#1b4f72] shadow-lg hover:scale-105 transition-transform p-6 flex flex-col items-center min-w-[45%] max-w-[45%] sm:max-w-[300px]">
            <img
              src="/images/logo03.webp"
              alt="SAU Benefícios"
              className="w-36 h-36 object-contain mb-4"
            />
            {/* Texto ou título */}
            <p className="text-lg text-center mb-4">SAU Benefícios</p>
            {/* Botão */}
            <a
              href="https://saubeneficios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1b4f72] to-[#82D3F9] text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
            >
              <span>Saiba Mais</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }
  