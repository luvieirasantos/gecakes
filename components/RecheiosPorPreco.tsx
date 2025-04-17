import { Candy, Layers, Sparkles, CheckCircle } from 'lucide-react'
import { JSX } from 'react'

type CategoriaRecheio = {
  preco: string
  tipo: string
  recheios: string[]
  icon: JSX.Element
}

const categorias: CategoriaRecheio[] = [
  {
    preco: 'R$65 / kg',
    tipo: 'Recheios Simples',
    icon: <Candy className="w-5 h-5 text-marrom" />,
    recheios: [
      'Brigadeiro',
      'Beijinho',
      'Abacaxi com Creme',
      'Doce de Leite',
      'Prestígio',
      'Chocolate',
      'Mousse de Maracujá',
      'Mousse de Morango',
      'Mousse de Chocolate',
    ],
  },
  {
    preco: 'R$70 / kg',
    tipo: 'Recheios Mistos',
    icon: <Layers className="w-5 h-5 text-marrom" />,
    recheios: [
      'Ninho com Chocolate',
      'Ninho com Morango',
      'Brigadeiro com Morango',
      'Doce de Leite com Abacaxi',
      'Abacaxi com Coco',
      'Brigadeiro com Mousse',
      'Chocolate com Beijinho',
      'Beijinho com Doce de Leite',
      'Brigadeiro com Mousse e Suflê',
    ],
  },
  {
    preco: 'R$80 / kg',
    tipo: 'Recheios Especiais',
    icon: <Sparkles className="w-5 h-5 text-marrom" />,
    recheios: [
      'Ninho com Nutella',
      'Red Velvet',
      'Doce de Leite com Ameixa',
      'Nutella Pura',
    ],
  },
]

export default function RecheiosPorPreco() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-script text-center mb-2">Sabores e Recheios</h2>

      {categorias.map((cat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 border-l-4 border-rosaMedio space-y-3"
        >
          <div className="flex items-center gap-2">
            {cat.icon}
            <h3 className="text-lg font-bold text-marrom">{cat.tipo}</h3>
          </div>
          <p className="text-sm text-marromEscuro italic">{cat.preco}</p>
          <ul className="space-y-1 text-sm">
            {cat.recheios.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-marrom">
                <CheckCircle className="w-4 h-4 mt-0.5 text-marrom" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
