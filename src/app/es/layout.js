import './../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pablo Calvente Gómez',
  description: 'Portfolio of Pablo Calvente Gómez. Web Development, Artificial Intelligence, and Malware Analysis. Explore my projects and skills.',
  openGraph: {
    url: "https://arturoaguilera.es",
    siteName: "Pablo Calvente Gómez",
    description: 'Portfolio of Pablo Calvente Gómez. Web Development, Artificial Intelligence, and Malware Analysis. Explore my projects and skills.',
    images: [{ url: "https://www.arturoaguilera.es/images/projects/portfolio.png" }]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a192f] text-white`}>{children}</body>
    </html>
  )
}
