import instagram from "../assets/instagram.svg"
import Carousel from "./Carousel"

function IgSection() {
    return (
        <section className="mb-10">
            <div className="p-4 text-center 2xl:px-30 mt-10 mb-5">
                <h2 className="text-d-green"> Veja um pouco do  meu dia a dia! 🐾 📷 </h2>
                <p className="pt-4 normal-text">Para acompanhar meu trabalho, me siga no instagram: </p>
                <a href="https://www.instagram.com/veterinario_samuel_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" className="normal-text">@veterinario_samuel_
                </a>
            </div>

            <Carousel />

        </section>
    )
}

export default IgSection