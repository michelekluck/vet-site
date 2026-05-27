import instagram from "../assets/instagram.svg"

function IgSection() {
    return (
        <section>
            <div className="p-4 text-center">
                <h2 className="font-bold">Quer saber mais sobre mim e meu trabalho?</h2>
                <p>Me siga no instagram!</p>
            </div>
            <div className="bg-l-green text-center items-center">
                <p>**Instagram imagem**</p>
                <div className="relative flex">
                    <img src={instagram} alt="Icone Instagram" className="mr-2"></img>
                    <p className="font-bold text-[14px]">@veterinario_samuel_</p>
                </div>
            </div>

        </section>
    )
}

export default IgSection