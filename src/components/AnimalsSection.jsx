import Button from "./Button"

function AnimalsSection() {
    return (
        <section className="bg-d-green">
            <div className="text-white">
                <h2 className="font-bold">Principais animais atendidos</h2>
                <ul className="flex list-disc pl-6 flex-col">
                    <li>Furão;</li>
                    <li>Chinchila;</li>
                    <li>Porquinho da india;</li>
                    <li>Iguana-verde</li>
                </ul>
                <p className="font-bold">Não encontrou o seu bichinho?</p>
                <p>Entre em contato para consultar a possibilidade de atendimento!</p>
                <Button>
                    <p>Consultar possibilidade de atendimento</p>
                </Button>
            </div>
        </section>
    )
}

export default AnimalsSection