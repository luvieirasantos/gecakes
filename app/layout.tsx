import "../styles/globals.css"
import { Quicksand, Dancing_Script } from "next/font/google"
import type { Metadata } from "next"

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" })
const script = Dancing_Script({ subsets: ["latin"], weight: "700", variable: "--font-script" })

export const metadata: Metadata = {
  title: "Ge Cakes | Cardápio Online",
  description: "Delícias feitas com carinho pela Geane!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${quicksand.variable} ${script.variable}`}>
      <body className="bg-fundo text-marrom font-sans">{children}</body>
    </html>
  )
}
