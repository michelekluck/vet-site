import instagram from "../assets/instagram.svg"
import Carousel from "./Carousel"

function IgSection() {
    return (
        <section className="mb-10 bg-l-[[green">
            <div className="p-4 text-center 2xl:px-30 mt-10 mb-5">
                <h2 className="text-d-green">Veja um pouco do  meu dia a dia 🐾 </h2>
                <p className="text-[16px] md:text-[20px] pt-4">Para acompanhar meu trabalho, me siga no instagram: @veterinario_samuel</p>
            </div>

            <Carousel />

        </section>
    )
}

export default IgSection