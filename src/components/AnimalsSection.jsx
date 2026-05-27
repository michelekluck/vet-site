import Button from "./Button"

function AnimalsSection() {
    return (
        <section className="bg-d-green">
            <div className="text-white p-4">
                <h2 className="font-bold text-[16px] mb-2">Principais animais atendidos</h2>
                <ul className="flex list-disc pl-6 flex-col text-[15px]">
                    <li>Furão;</li>
                    <li>Chinchila;</li>
                    <li>Porquinho da india;</li>
                    <li>Iguana-verde;</li>
                    <li>Jabuti-piranga;</li>
                    <li>Calopisita;</li>
                    <li>Tarântula;</li>
                    <li>Coelho mini lop;</li>
                    <li>Tartaruga tigre-d'agua;</li>
                    <li>Corn snake;</li>
                    <li>Dragão-barbudo;</li>
                    <li>Ouriço-chacheiro africano;</li>
                    <li>Capivara;</li>
                    <li>Gambá-de-orelha-branca;</li>
                    <li>Jiboia arco-iris;</li>
                    <li>Gecko-leopardo;</li>
                    <li>Sagui;</li>
                    <li>Açucari (sugar glider);</li>
                    <li>Arara-canindé;</li>
                    <li>Tucano-toco.</li>
                </ul>
                <p className="font-bold mt-5 text-l-green text-[16px]">Não encontrou o seu bichinho?</p>
                <p className="text-[15px] mb-5">Entre em contato para consultar a possibilidade de atendimento!</p>
                <Button>
                    <p className="w-[205px]">Consultar possibilidade de atendimento</p>
                </Button>
            </div>
        </section>
    )
}

export default AnimalsSection