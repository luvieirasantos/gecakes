import { Candy, Apple, Sparkles, Flower, Ribbon } from 'lucide-react'

export default function DecoracaoExtra() {
  const adicionais = [
    {
      nome: 'Brigadeiro',
      valor: 'R$ 1,25 cada',
      icon: <Candy className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Morangos',
      valor: 'R$ 15,00',
      icon: <Apple className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Pérolas comestíveis',
      valor: 'R$ 5,00',
      icon: <Sparkles className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Flor de papel',
      valor: 'R$ 10,00',
      icon: <Flower className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
    {
      nome: 'Acetato com laço',
      valor: 'R$ 10,00',
      icon: <Ribbon className="w-6 h-6 text-marrom flex-shrink-0" />,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-script text-center">Decorações Especiais</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {adicionais.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow border border-rosaClaro flex items-center gap-4 hover:bg-rosaClaro/30 transition"
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
