/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // 🔹 Desactiva la optimización de imágenes en todo el proyecto
  },
};

module.exports = nextConfig;
