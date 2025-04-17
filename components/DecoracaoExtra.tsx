export default function DecoracaoExtra() {
  const adicionais = [
    { nome: 'Brigadeiro', valor: 'R$ 1,25 cada' },
    { nome: 'Morangos', valor: 'R$ 15,00' },
    { nome: 'Pérolas comestíveis', valor: 'R$ 5,00' },
    { nome: 'Flor de papel', valor: 'R$ 10,00' },
    { nome: 'Acetato com laço', valor: 'R$ 10,00' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-script text-center mb-6">Decorações Especiais ✨</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {adicionais.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow border border-rosaClaro text-center"
          >
            <p className="font-bold text-marrom">{item.nome}</p>
            <p className="text-sm text-marromEscuro">{item.valor}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
