import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pablo Calvente | Portfolio",
  description:
    "Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas.",
  openGraph: {
    type: "website",
    url: "https://pablocalvente.es",
    title: "Pablo Calvente | Portfolio",
    description:
      "Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas.",
    siteName: "Pablo Calvente | Portfolio",
    images: [
      {
        url: "https://pablocalvente.es/images/profilephoto.png", // ¡Asegúrate de que esta URL sea válida!
        width: 1200,
        height: 630,
        alt: "Pablo Calvente | Data Analyst & BI Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Calvente | Portfolio",
    description:
      "Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas.",
    images: ["https://pablocalvente.es/images/profilephoto.png"], // Misma imagen para Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pablocalvente.es" />
        <meta property="og:title" content="Pablo Calvente | Portfolio" />
        <meta
          property="og:description"
          content="Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas."
        />
        <meta
          property="og:image"
          content="https://pablocalvente.es/images/profilephoto.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Pablo Calvente | Portfolio" />
        <meta
          property="twitter:description"
          content="Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas."
        />
        <meta
          property="twitter:image"
          content="https://pablocalvente.es/images/profilephoto.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
