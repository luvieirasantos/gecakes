type CategoriaRecheio = {
  preco: string
  tipo: string
  recheios: string[]
}

const categorias: CategoriaRecheio[] = [
  {
    preco: 'R$65 / kg',
    tipo: 'Recheios Simples',
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
      <h2 className="text-2xl font-script text-center">Sabores e Recheios 🍫🍓</h2>
      {categorias.map((cat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-rosaMedio">
          <h3 className="text-xl font-bold text-marrom">{cat.tipo}</h3>
          <p className="text-sm text-marromEscuro mb-3 italic">{cat.preco}</p>
          <ul className="list-disc pl-5 space-y-1 text-marrom text-sm">
            {cat.recheios.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
