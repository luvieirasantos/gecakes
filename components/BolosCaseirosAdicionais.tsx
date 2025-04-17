export default function BolosCaseirosAdicionais() {
  const adicionais = [
    { nome: 'Morango', valor: 'R$ 5,00' },
    { nome: 'Brigadeiros', valor: 'R$ 1,25 cada' },
    { nome: 'Caldas (150g)', valor: 'R$ 5,00' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-script text-center mb-6">Adicionais 🍓</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {adicionais.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow text-center border border-rosaClaro"
          >
            <p className="font-bold text-marrom">{item.nome}</p>
            <p className="text-sm text-marromEscuro">{item.valor}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
