import Button from "./Link";
import Box from "./Box";
import Consultation from "../assets/consultationIcon.svg?react"
import Exam from "../assets/exameIcon.svg?react"
import Procedures from "../assets/proceduresIcon.svg?react"
import Surgery from "../assets/surgeryIcon.svg?react"
import FollowUp from "../assets/followUpIcon.svg?react"

import Reveal from "./Reveal"

function ServicesSection() {
    return (
        <section>

            {/* Titulo */}
            <div className="mb-10">
                <h2 className="text-[16px] leading-6 text-white mt-10">Serviços realizados</h2>
                <p>Na clínica da Universidade Tuiuti:</p>
            </div>
            {/* Titulo */}

            <div className="md:p-0">
                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-4 md:justify-items-center lg:gap-1">
                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="light"
                            icon={<Consultation />}
                            title="Consultas e acompanhamento:"
                            items={[
                                "Consultas clínicas",
                                "Atestados de saúde",
                                "Orientação nutricional e ambiental"
                            ]}
                        />
                    </Reveal>

                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="light"
                            icon={<Exam />}
                            title="Exames:"
                            items={[
                                "Exames laboritoriais",
                                "Exames de imagem"
                            ]}
                            titleClassName="mb-7"
                        />
                    </Reveal>

                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="light"
                            icon={<Procedures />}
                            title="Procedimentos ambulatórios:"
                            items={[
                                "Corte de unhas",
                                "Desgaste dentário",
                                "Desgaste de bico"
                            ]}
                        />
                    </Reveal>

                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="light"
                            icon={<Surgery />}
                            title="Cirurgias:"
                            items={[
                                "Castrações",
                                "Cirurgias ortotopédicas",
                                "Cirurgias oncológicas",
                                "Outro procedimentos cirurgicos"
                            ]}
                        />
                    </Reveal>

                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="light"
                            icon={<FollowUp />}
                            title="Internamento:"
                            items={[
                                "Acompanhamento hospitalar"
                            ]}
                            titleClassName="mb-8"
                        />
                    </Reveal>
                </div>
                {/* cards */}

            </div>
        </section >
    )
}

export default ServicesSection