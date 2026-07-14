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
            <div className="md:p-0">

                {/* Titulo */}
                <div className="flex items-start">
                    <h2 className="text-[16px] p-4 pl-2 leading-6 text-d-green mb-4"><span className="font-extrabold">Serviços realizados</span></h2>
                </div>
                {/* Titulo */}

                {/* cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 :gap-10">
                    <Reveal className="transition-all duration-700 delay-100">
                        <Box
                            variant="dark"
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
                            variant="dark"
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
                            variant="dark"
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
                            variant="dark"
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
                            variant="dark"
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
        </section>
    )
}

export default ServicesSection