type TipoBolo = {
  categoria: string
  preco: string
  sabores: string[]
}

const tipos: TipoBolo[] = [
  {
    categoria: 'Simples',
    preco: 'R$ 23,00',
    sabores: ['Chocolate', 'Cenoura', 'Laranja', 'Milho', 'Banana'],
  },
  {
    categoria: 'Sem cobertura',
    preco: 'R$ 18,00',
    sabores: ['Chocolate', 'Cenoura'],
  },
  {
    categoria: 'Vulcão',
    preco: 'R$ 35,00',
    sabores: ['Chocolate', 'Cenoura'],
  },
  {
    categoria: 'Recheado',
    preco: 'R$ 45,00',
    sabores: ['Chocolate', 'Massa Branca'],
  },
]

export default function BolosCaseirosTipos() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-script text-center">Sabores & Categorias 🧁</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tipos.map((bolo, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow border border-rosaClaro"
          >
            <h3 className="text-xl font-bold text-marrom mb-2">{bolo.categoria}</h3>
            <p className="text-marromEscuro italic text-sm mb-3">{bolo.preco}</p>
            <ul className="list-disc pl-5 text-marrom text-sm space-y-1">
              {bolo.sabores.map((sabor, i) => (
                <li key={i}>{sabor}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
