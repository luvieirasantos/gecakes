export default function EncomendaIntro() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-script text-marrom">Faça sua Encomenda 💌</h1>
      <p className="text-lg font-light">
        Para fazer seu pedido, clique no botão abaixo e fale diretamente comigo no WhatsApp!
      </p>
      <ul className="text-sm text-marromEscuro list-disc list-inside space-y-1">
        <li>Informe o tipo de produto (bolo decorado, caseiro ou docinhos)</li>
        <li>Inclua os sabores, tamanho e adicionais desejados</li>
        <li>Lembre-se de pedir com pelo menos <strong>3 dias de antecedência</strong></li>
      </ul>
      <p className="italic text-marrom mt-4">
        “Será um prazer adoçar a sua comemoração com muito amor e cuidado.” — Geane 💖
      </p>
    </div>
  )
}
