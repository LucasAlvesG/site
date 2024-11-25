import Link from "next/link";
import { Phone, MessageCircle, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b4f72] text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Primeiro Container de Logo e Texto */}
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start space-y-2">
          <div className="flex justify-center space-x-4">
          <img
  src="/logo.webp"
  height="50"
  width="150"
  alt="CMD Goiânia"
  className="mb-2"
/>

<img
  src="/logo001.webp"
  height="50"
  width="120"
  alt="Logo Alternativa"
  className="mb-2 object-contain"
/>

          </div>
          <p className="text-sm">
            CMD - Há 28 anos cuidando com dedicação e excelência da saúde do povo goiano.
          </p>
          <p className="text-sm">
            R. 84, 414 - St. Sul, Goiânia - GO, 74080-400
          </p>
        </div>

        {/* Contatos e Redes Sociais */}
        <div className="flex flex-col items-center md:items-end space-y-4 mt-4">
          <Link
            href="tel:+556232417374"
            className="mb-2 inline-flex items-center text-lg"
          >
            <Phone className="w-5 h-5 mr-2 text-white hover:text-[#82D3F9] transition-all" />{" "}
            (62) 3241-7374
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=+556293546233&text=Olá! Vim pelo site e gostaria de agendar um exame ou consulta."
            className="mb-2 inline-flex items-center text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2 text-white hover:text-[#82D3F9] transition-all" />{" "}
            (62) 99354-6233
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://web.facebook.com/clinicamedicadiagnostico/"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white hover:text-[#82D3F9] transition-all" />
            </Link>
            <Link
              href="https://www.instagram.com/clinicacmdoficial/"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white hover:text-[#ff4d4d] transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
