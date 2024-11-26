/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportar como site estático
  output: 'export',

  // Configuração para imagens no modo estático
  images: {
    unoptimized: false, 
  },

  // Trailing slash para adicionar "/" ao final das URLs estáticas
  trailingSlash: true, // Garante que todas as rotas terminem com "/"
};

export default nextConfig;
