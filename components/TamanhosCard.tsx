import {
  Square,
  SquareDashedBottom,
  Expand,
  LayoutGrid,
} from 'lucide-react'

export default function TamanhosCard() {
  const tamanhos = [
    {
      nome: 'Tamanho P',
      detalhes: 'Rende até 15 a 18 fatias',
      info: '1,5kg • 1 recheio',
      icon: <Square className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Tamanho M',
      detalhes: 'Rende até 20 a 25 fatias',
      info: '2kg • até 2 recheios',
      icon: <SquareDashedBottom className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Tamanho G',
      detalhes: 'Rende até 30 a 33 fatias',
      info: '3kg • até 2 recheios',
      icon: <Expand className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Retangular',
      detalhes: 'Acima de 3kg',
      info: 'Ideal para festas grandes',
      icon: <LayoutGrid className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-script text-center">Tamanhos Disponíveis</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tamanhos.map((tamanho, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow border border-rosaClaro flex items-start gap-4 hover:bg-rosaClaro/20 transition"
          >
            {tamanho.icon}
            <div>
              <h3 className="text-lg font-bold text-marrom">{tamanho.nome}</h3>
              <p className="text-sm text-marrom">{tamanho.detalhes}</p>
              <p className="text-sm text-marromEscuro italic">{tamanho.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
