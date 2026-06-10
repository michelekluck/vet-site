import Button from "./Button";
import Box from "./Box";
import Consultation from "../assets/consultationIcon.svg"
import Exam from "../assets/exameIcon.svg"
import Procedures from "../assets/proceduresIcon.svg"
import Surgery from "../assets/surgeryIcon.svg"
import FollowUp from "../assets/followUpIcon.svg"
import local from "../assets/local.svg"

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
                    titleClassName="mb-7"
                />
                <Box
                    variant="dark"
                    icon={<img src={Procedures} alt="Procedimentos Icone" />}
                    title="Procedimentos ambulatórios:"
                    items={[
                        "Corte de unhas",
                        "Desgaste dentário",
                        "Desgaste de bico"
                    ]}
                />
                <Box
                    variant="dark"
                    icon={<img src={Surgery} alt="Cirurgias Icone" />}
                    title="Cirurgias:"
                    items={[
                        "Castrações",
                        "Cirurgias ortotopédicas",
                        "Cirurgias oncológicas",
                        "Outro procedimentos cirurgicos"
                    ]}
                />
                <Box
                    variant="dark"
                    icon={<img src={FollowUp} alt="Acompanhamento Icone" />}
                    title="Internamento:"
                    items={[
                        "Acompanhamento hospitalar"
                    ]}
                    titleClassName="mb-8"
                />
            </div>

            <div className="mt-4 bg-d-green text-white mb-7">
                <div className="relative flex items-center  justify-center  gap-2 pt-7">
                    <div className="bg-l-green h-[1px] w-[80px] flex-1"></div>
                    <img src={local} alt="Local Icone"></img>
                    <p className="text-[16px] font-bold ">Como chegar:</p>
                    <div className="bg-l-green h-[1px] w-[80px] flex-1"></div>
                </div>

                <a href="https://maps.app.goo.gl/FcaVvarg3yYmWyJg9" target="_blank" rel="noopener noreferrer" className="text-[14px] p-4 flex justify-center">R. Padre Ladislau Kula, 395 <br /> - Santo Inácio, Curitiba - PR, 82010-210</a>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3950488344713!2d-49.3212167!3d-25.425052899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce17ef41e8dfb%3A0x3c55dcefc8395c6c!2sR.%20Padre%20Ladislau%20Kula%2C%20395%20-%20Santo%20In%C3%A1cio%2C%20Curitiba%20-%20PR%2C%2082010-210!5e0!3m2!1spt-BR!2sbr!4v1781110440179!5m2!1spt-BR!2sbr"
                    className="w-full h-[158px] pb-8"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    )
}

export default ServicesSection