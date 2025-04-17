import { ChefHat, MinusCircle, Flame, Layers } from 'lucide-react'
import { JSX } from 'react'

type TipoBolo = {
  categoria: string
  preco: string
  sabores: string[]
  icon: JSX.Element
}

const tipos: TipoBolo[] = [
  {
    categoria: 'Simples',
    preco: 'R$ 23,00',
    sabores: ['Chocolate', 'Cenoura', 'Laranja', 'Milho', 'Banana'],
    icon: <ChefHat className="w-6 h-6 text-marrom flex-shrink-0" />,
  },
  {
    categoria: 'Sem cobertura',
    preco: 'R$ 18,00',
    sabores: ['Chocolate', 'Cenoura'],
    icon: <MinusCircle className="w-6 h-6 text-marrom flex-shrink-0" />,
  },
  {
    categoria: 'Vulcão',
    preco: 'R$ 35,00',
    sabores: ['Chocolate', 'Cenoura'],
    icon: <Flame className="w-6 h-6 text-marrom flex-shrink-0" />,
  },
  {
    categoria: 'Recheado',
    preco: 'R$ 45,00',
    sabores: ['Chocolate', 'Massa Branca'],
    icon: <Layers className="w-6 h-6 text-marrom flex-shrink-0" />,
  },
]

export default function BolosCaseirosTipos() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-script text-center mb-4">Sabores & Categorias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tipos.map((bolo, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow border border-rosaClaro space-y-2"
          >
            <div className="flex items-center gap-2 mb-2">
              {bolo.icon}
              <h3 className="text-lg font-bold text-marrom">{bolo.categoria}</h3>
            </div>
            <p className="text-sm text-marromEscuro italic">{bolo.preco}</p>
            <div className="text-sm text-marrom mt-2">
              <strong>Sabores:</strong>{' '}
              {bolo.sabores.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
