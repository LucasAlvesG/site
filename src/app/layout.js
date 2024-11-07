import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: 'Clínica CMD',
  description: 'Quais são nossos serviços? Exames como Ultra-sonografia, Raio-x, Tomografia, Consulta, Cardiologia, Mamografia, Outros procedimentos, Todas as especialidades!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
        <link rel="icon" href="/logo.png" />
        
      </head>
      <body>
        {children}
      </body>
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





