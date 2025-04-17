import { Linkedin } from 'lucide-react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
})

export default function Footer() {
  return (
    <footer className={`${poppins.variable} bg-white border-t border-rosaClaro py-6 px-4 mt-20`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
        
        <div className="text-center md:text-left">
          <p className="font-bold text-marrom">Ge Cakes</p>
          <p className="text-xs mt-1">Feito com carinho por Lu Vieira</p>
        </div>

        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 text-marrom" />
          <a
            href="https://www.linkedin.com/in/luhenrivieira/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-marrom transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
