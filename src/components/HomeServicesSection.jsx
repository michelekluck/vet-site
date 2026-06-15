
import Box from "./Box"
import Consultation from "../assets/consultationIcon.svg?react"
import Care from "../assets/careIcon.svg?react"
import Guidelines from "../assets/guidelinesIcon.svg?react"
import Button from "./Button"

function HomeServicesSection() {
    return (
        <section>
            <div className="p-4 text-d-green">
                <div className="flex items-start">
                    <div className="bg-l-green h-[50px] w-[11px] mt-4"></div>
                    <h2 className="text-[16px] p-4 pl-2 leading-6 mb-4 mt-3">
                        <span className="font-extrabold">Atendimento domiciliar</span>
                    </h2>
                </div>
                <p className="text-[16px] mb-6"><span className="font-bold">Serviços realizados no conforto do lar</span>, reduzindo o estresse do animal e proporcionando maior comodidade ao tutor.</p>
                <Box
                    variant="light"
                    icon={<Consultation />}
                    title="Consultas:"
                    items={[
                        "Avaliações clínicas",
                        "Atestados"
                    ]}
                    titleClassName="mb-7"
                />
                <Box
                    variant="light"
                    icon={<Care />}
                    title="Cuidados:"
                    items={[
                        "Administração de medicamentos",
                        "Corte de unhas"
                    ]}
                    titleClassName="mb-7"
                />
                <Box
                    variant="light"
                    icon={<Guidelines />}
                    title="Orientações:"
                    items={[
                        "Manejo ambiental",
                        "Nutricional"
                    ]}
                    titleClassName="mb-7"
                />
                <p className="text-[16px] mb-4 mt-7"><span className="font-bold">Entre em contato</span> para agendar o atendimento domiciliar!</p>
                <div className="flex flex-col items-center">
                    <Button>
                        Agendar atendimento domiciliar
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default HomeServicesSection;