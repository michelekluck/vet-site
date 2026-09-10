import Button from "./Link";
import image from "../assets/samuel-kluck.jpeg";

function AboutSection() {
    return (
        <section id="about" className="bg-d-green mt-10 2xl:px-30 p-4">

            {/* Texto + Imagem */}
            <div className="lg:flex lg:items-center lg:justify-center lg:gap-16 lg:max-w-6xl lg:mx-auto">

                {/* Texto + Título */}
                <div className="text-white lg:max-w-[550px]">

                    {/* Título */}
                    <div className="flex items-stretch pb-6 pt-4">
                        <div className="w-[11px] bg-l-green"></div>

                        <h2 className="pl-2 md:leading-8">
                            Quem sou eu?
                        </h2>
                    </div>

                    {/* Texto */}
                    <div className="normal-text leading-7 text-justify mb-4">
                        <p>
                            Sou Samuel Kluck, Médico Veterinário, com atuação
                            voltada ao atendimento domiciliar de animais
                            silvestres e pets não convencionais em Curitiba e
                            região metropolitana.

                            Possuo experiência prática no Centro de Apoio à
                            Fauna Silvestre de Curitiba (CAFS), com atuação em
                            clínica, manejo e acompanhamento de diferentes
                            espécies. Atualmente, sou aprimorando em Clínica e
                            Cirurgia de Pets Não Convencionais da Universidade
                            Tuiuti do Paraná e médico veterinário do Vida
                            Livre, o que me permite oferecer um atendimento
                            técnico, atualizado e focado no bem-estar animal.
                        </p>
                    </div>

                </div>

                {/* Imagem */}
                <div className="mt-8 lg:mt-0 lg:shrink-0">
                    <img
                        src={image}
                        alt="Imagem Samuel Kluck"
                        className="mx-auto w-[300px] lg:w-[350px] rounded-3xl mb-10 mt-8"
                    />
                </div>

            </div>

        </section>
    );
}

export default AboutSection;