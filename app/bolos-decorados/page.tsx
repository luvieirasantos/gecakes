import BoloDecoradoIntro from '@/components/BoloDecoradoIntro'
import TamanhosCard from '@/components/TamanhosCard'
import RecheiosPorPreco from '@/components/RecheiosPorPreco'
import DecoracaoExtra from '@/components/DecoracaoExtra'
import InstrucoesInfo from '@/components/InstrucoesInfo'

export default function BolosDecoradosPage() {
  return (
    <main className="px-4 py-10 bg-fundo text-marrom">
      <section className="max-w-4xl mx-auto space-y-14">
        <BoloDecoradoIntro />
        <TamanhosCard />
        <RecheiosPorPreco />
        <DecoracaoExtra />
        <InstrucoesInfo />
      </section>
    </main>
  )
}
