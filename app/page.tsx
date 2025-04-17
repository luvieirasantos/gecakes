'use client'
import Link from 'next/link'
import {
  CakeSlice,
  UtensilsCrossed,
  Candy,
  Phone,
} from 'lucide-react'

export default function Home() {
  const links = [
    {
      href: '/bolos-decorados',
      label: 'Bolos Decorados',
      icon: <CakeSlice className="w-5 h-5" />,
    },
    {
      href: '/bolos-caseiros',
      label: 'Bolos Caseiros',
      icon: <UtensilsCrossed className="w-5 h-5" />,
    },
    {
      href: '/docinhos',
      label: 'Docinhos',
      icon: <Candy className="w-5 h-5" />,
    },
    {
      href: '/encomendas',
      label: 'Fazer Encomenda',
      icon: <Phone className="w-5 h-5" />,
    },
  ]

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-fundo text-marrom space-y-10">
      <div>
        <h1 className="text-5xl font-script mb-3">Ge Cakes</h1>
        <p className="text-lg font-light text-marromEscuro">
          Bem-vinda ao nosso cardápio digital! Aqui você encontra doçuras feitas com carinho 💖
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="bg-white rounded-xl border border-rosaClaro shadow px-6 py-4 flex items-center justify-center gap-2 text-marrom font-semibold hover:bg-rosaClaro hover:text-marromEscuro transition"
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  )
}
