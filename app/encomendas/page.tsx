import EncomendaIntro from '@/components/EncomendaIntro'
import WhatsappButtonBlock from '@/components/WhatsappButtonBlock'

export default function EncomendasPage() {
  return (
    <main className="px-4 py-20 bg-fundo text-marrom">
      <section className="max-w-xl mx-auto text-center space-y-10">
        <EncomendaIntro />
        <WhatsappButtonBlock />
      </section>
    </main>
  )
}
