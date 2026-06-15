import Button from "./Button"
import image from "../assets/about.png"

function AboutSection() {
    return (
        <section className="bg-d-green mt-4">
            <div className="text-white p-4">
                <h2 className="font-bold mt-4 mb-4">Quem sou eu? </h2>
                <img src={image} alt="Imagem Samuel Kluck" className="mx-auto mb-4 mr-4"></img>
                <div className="text-[14px] mb-10">
                    <p>Sou Samuel Kluck, Médico Veterinário, com atuação voltada ao atendimento domiciliar de animais silvestres e pets não convencionais em Curitiba e região metropolitana.
                        Possuo experiência prática no Centro de Apoio à Fauna Silvestre de Curitiba (CAFS), com atuação em clínica, manejo e acompanhamento de diferentes espécies. Atualmente, sou aprimorando em Clínica e Cirurgia de Pets Não Convencionais da Universidade Tuiuti do Paraná e médico veterinário do Vida Livre, o que me permite oferecer um atendimento técnico, atualizado e focado no bem-estar animal.</p>
                </div>
            </div>
        </section >
    )
}

export default AboutSection