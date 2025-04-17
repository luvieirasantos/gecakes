import { MessageCircle } from 'lucide-react'

export default function WhatsappButtonBlock() {
  return (
    <a
      href="https://wa.me/5511959675223"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition text-lg font-semibold"
    >
      <MessageCircle className="w-5 h-5" />
      Falar com a Geane no WhatsApp
    </a>
  )
}
