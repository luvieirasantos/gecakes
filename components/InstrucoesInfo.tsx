export default function InstrucoesInfo() {
  const instrucoes = [
    'Encomendas devem ser feitas com no mínimo 3 dias de antecedência.',
    'Trabalhamos com 50% de entrada no ato da encomenda e o restante na entrega.',
    'Aceitamos Pix, dinheiro, cartão de débito e crédito (com acréscimo da maquininha).',
    'Em caso de desistência com menos de 24h antes da entrega, o valor da entrada não será devolvido.',
    'Após a entrega, não nos responsabilizamos por acidentes com o bolo.',
    'O número de fatias pode variar conforme o corte.',
  ]

  return (
    <div className="bg-rosaClaro p-6 rounded-xl shadow text-marrom space-y-4">
      <h2 className="text-2xl font-script text-center">Informações Importantes 📝</h2>
      <ul className="list-disc list-inside text-sm">
        {instrucoes.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
      <p className="mt-4 text-center italic text-marromEscuro">
        “Procuro trabalhar com dedicação e amor. Agradeço a você que deposita sua confiança em mim para tornar sua comemoração mais doce.” — Geane 💗
      </p>
    </div>
  )
}
