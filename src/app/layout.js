import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: 'Clínica CMD',
  description: 'Quais são nossos serviços? Exames como Ultra-sonografia, Raio-x, Tomografia, Consulta, Cardiologia, Mamografia, Outros procedimentos, Todas as especialidades!',
  icons: {
    icon: '/favicon.ico', // Caminho para o favicon
    apple: '/apple-icon.png', // Caminho para o apple icon
    shortcut: '/favicon.ico', // Atalho (opcional)
  },
};

import favicon from '../app/favicon.ico';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>{children}</body>
    </html>
  );
}


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});





