import { UtensilsCrossed } from 'lucide-react'

export default function BolosCaseirosIntro() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-script text-marrom flex items-center justify-center gap-2">
        <UtensilsCrossed className="w-6 h-6" />
        Bolos Caseiros
      </h1>
      <p className="text-lg font-light max-w-xl mx-auto">
        Sabe aquele bolinho com gostinho de casa de vó? Aqui tem!  
        Perfeitos para o café da tarde, para presentear ou simplesmente adoçar seu dia.
      </p>
      <p className="text-base font-light text-marromEscuro max-w-xl mx-auto">
        Temos opções simples, vulcão e recheados — todos com sabores deliciosos pra você escolher!
      </p>
    </div>
  )
}
