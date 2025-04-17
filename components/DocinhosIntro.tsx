import { Candy } from 'lucide-react'

export default function DocinhosIntro() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-script text-marrom flex items-center justify-center gap-2">
        <Candy className="w-6 h-6" />
        Docinhos
      </h1>
      <p className="text-lg font-light">
        Perfeitos para festas, lembrancinhas ou pra matar a vontade de um doce!  
        Feitos com muito carinho e ingredientes de qualidade.
      </p>
      <p className="text-base font-light text-marromEscuro">
        Os docinhos são vendidos por cento (100 unidades).
      </p>
      <p className="text-xl font-bold text-marrom mt-4">R$ 120,00 o cento</p>
    </div>
  )
}
