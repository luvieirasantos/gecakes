export default function TamanhosCard() {
  const tamanhos = [
    {
      nome: 'Tamanho P',
      detalhes: 'Rende até 15 a 18 fatias',
      info: '1,5kg • 1 recheio',
    },
    {
      nome: 'Tamanho M',
      detalhes: 'Rende até 20 a 25 fatias',
      info: '2kg • até 2 recheios',
    },
    {
      nome: 'Tamanho G',
      detalhes: 'Rende até 30 a 33 fatias',
      info: '3kg • até 2 recheios',
    },
    {
      nome: 'Retangular',
      detalhes: 'Acima de 3kg',
      info: 'Ideal para festas grandes',
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-script text-center mb-6">Tamanhos Disponíveis 🎂</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tamanhos.map((tamanho, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center border border-rosaClaro"
          >
            <h3 className="text-xl font-bold mb-2">{tamanho.nome}</h3>
            <p className="text-marrom text-sm">{tamanho.detalhes}</p>
            <p className="text-marromEscuro text-sm mt-1 italic">{tamanho.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
