import BolosCaseirosIntro from '@/components/BolosCaseirosIntro'
import BolosCaseirosTipos from '@/components/BolosCaseirosTipos'
import BolosCaseirosAdicionais from '@/components/BolosCaseirosAdicionais'

export default function BolosCaseirosPage() {
  return (
    <main className="px-4 py-10 bg-fundo text-marrom">
      <section className="max-w-4xl mx-auto space-y-14">
        <BolosCaseirosIntro />
        <BolosCaseirosTipos />
        <BolosCaseirosAdicionais />
      </section>
    </main>
  )
}
