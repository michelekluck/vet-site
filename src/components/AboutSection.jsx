import Button from "./Link";
import image from "../assets/about.png";

function AboutSection() {
    return (
        <section id="about" className="bg-d-green mt-4">
            <div className="text-white p-4 md:px-[140px] lg:py-12">
                <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">

                    {/* Texto */}
                    <div className="lg:flex-1">
                        <h2 className="font-bold mt-4 mb-4 lg:mb-[150px] md:mb-[130px]">
                            Quem sou eu?
                        </h2>

                        <div className="text-[16px] md:text-[18px] leading-7 text-justify md:flex-1 md:-mt-[100px]">
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
                    <div className="mt-8 md:mt-0 md:flex-shrink-0">
                        <img
                            src={image}
                            alt="Imagem Samuel Kluck"
                            className="mx-auto lg:mx-0 lg:w-[450px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;