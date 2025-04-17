import DocinhosIntro from '@/components/DocinhosIntro'
import DocinhosLista from '@/components/DocinhosLista'

export default function DocinhosPage() {
  return (
    <main className="px-4 py-10 bg-fundo text-marrom">
      <section className="max-w-4xl mx-auto space-y-14">
        <DocinhosIntro />
        <DocinhosLista />
      </section>
    </main>
  )
}
