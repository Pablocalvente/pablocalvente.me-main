import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Pablo Calvente | Portfolio",
  description: 'Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas.',
  openGraph: {
    url: "https://pablocalvente.es",
    siteName: "Pablo Calvente | Portfolio",
    description: 'Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
