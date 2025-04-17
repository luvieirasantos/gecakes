import '../styles/globals.css'
import { Quicksand, Pacifico } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Ge Cakes | Cardápio Online',
  description: 'Delícias feitas com carinho pela Geane!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${quicksand.variable} ${pacifico.variable}`}>
      <body className="bg-fundo text-neutral-800 font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
