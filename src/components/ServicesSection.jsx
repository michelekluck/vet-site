import Button from "./Button";
import Box from "./Box";
import Consultation from "../assets/consultationIcon.svg"
import Exam from "../assets/exameIcon.svg"

function ServicesSection() {
    return (
        <section>
            <div className="p-4">
                <div className="flex items-start">
                    <div className="bg-l-green h-[50px] w-[11px] mt-4"></div>
                    <h2 className="text-[16px] p-4 pl-2 leading-6 text-d-green mb-4"><span className="font-extrabold">Serviços realizados</span> <br /><span className="text-[15px]">na clínica da Universidade Tuiuti</span></h2>
                </div>
                <Box
                    variant="dark"
                    icon={<img src={Consultation} alt="Consulta Icone" />}
                    title="Consultas e acompanhamento:"
                    items={[
                        "Consultas clínicas",
                        "Atestados de saúde",
                        "Orientação nutricional e ambiental"
                    ]}
                />
                <Box
                    variant="dark"
                    icon={<img src={Exam} alt="Exame Icone" />}
                    title="Exames:"
                    items={[
                        "Exames laboritoriais",
                        "Exames de imagem"
                    ]}
                />
            </div>
        </section>
    )
}

export default ServicesSection