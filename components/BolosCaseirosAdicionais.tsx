import { Apple, Coins, Droplets } from 'lucide-react'

export default function BolosCaseirosAdicionais() {
  const adicionais = [
    {
      nome: 'Morango',
      valor: 'R$ 5,00',
      icon: <Apple className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Brigadeiros',
      valor: 'R$ 1,25 cada',
      icon: <Coins className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Caldas (150g)',
      valor: 'R$ 5,00',
      icon: <Droplets className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-script text-center">Adicionais</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {adicionais.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow border border-rosaClaro flex items-center gap-4 hover:bg-rosaClaro/30 transition"
          >
            {item.icon}
            <div className="flex flex-col">
              <span className="text-marrom font-medium">{item.nome}</span>
              <span className="text-sm text-marromEscuro">{item.valor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
