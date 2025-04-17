import { Candy } from 'lucide-react'

export default function DocinhosLista() {
  const docinhos = [
    'Brigadeiro',
    'Beijinho',
    'Ninho',
    'Casadinho',
    'Churros',
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-script text-center">Sabores Disponíveis</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {docinhos.map((nome, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow border border-rosaClaro flex items-center gap-4 hover:bg-rosaClaro/30 transition"
          >
            <Candy className="w-6 h-6 text-marrom flex-shrink-0" />
            <span className="text-marrom font-medium text-base">{nome}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
