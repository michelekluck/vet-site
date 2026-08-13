
import Box from "./Box"
import Consultation from "../assets/consultationIcon.svg?react"
import Care from "../assets/careIcon.svg?react"
import Guidelines from "../assets/guidelinesIcon.svg?react"
import Link from "./Link"
import Reveal from "./Reveal"

function HomeServicesSection() {
    return (
        <section id="home">
            <div className="2xl:px-30 p-4 text-d-green ">
                <div className="flex items-start">
                    <div className="bg-l-green h-[50px] w-[11px] mt-4"></div>
                    {/* Titulo */}
                    <h2 className="text-[16px] p-4 pl-2 leading-6 mb-4 mt-3">
                        <span className="font-extrabold">Atendimento domiciliar</span>
                    </h2>
                    {/* Titulo */}
                </div>

                {/* Texto */}
                <p className="text-[16px] mb-6 md:text-[20px]"><span className="font-bold">Serviços realizados no conforto do lar</span>, reduzindo o estresse do animal e proporcionando maior comodidade ao tutor.</p>
                {/* Texto */}

                {/* cards */}
                <div className="
                            grid 
                            grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-3 
                            sm:gap-4 
                            md:justify-items-center 
                            lg:gap-1 
                            ">
                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="dark"
                            icon={<Consultation />}
                            title="Consultas:"
                            items={[
                                "Avaliações clínicas",
                                "Atestados"
                            ]}
                            titleClassName="mb-7"
                        />
                    </Reveal>

                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="dark"
                            icon={<Care />}
                            title="Cuidados:"
                            items={[
                                "Administração de medicamentos",
                                "Corte de unhas"
                            ]}
                            titleClassName="mb-7"
                        />
                    </Reveal>

                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="dark"
                            icon={<Guidelines />}
                            title="Orientações:"
                            items={[
                                "Manejo ambiental",
                                "Nutricional"
                            ]}
                            titleClassName="mb-7"
                        />
                    </Reveal>
                </div>
                {/* cards */}

                <div>
                    <p className="md:text-[20px] text-[16px] mb-4 mt-7"><span className="font-bold">Entre em contato</span> para agendar o atendimento domiciliar:</p>
                </div>

                {/* Contato */}
                <div className="flex flex-col items-center">
                    <Link href="https://wa.me/5541996462347" className="mb-4">
                        Agendar atendimento domiciliar
                    </Link>
                    <p className="text-[12px] md:text-[16px]">*Esse contato é apenas para agendar consulta domiciliar</p>
                </div>
                {/* Contato */}

            </div>
        </section>
    )
}

export default HomeServicesSection;