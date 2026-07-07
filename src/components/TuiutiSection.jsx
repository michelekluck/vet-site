import Link from "./Link"
import Calendar from "../assets/calendarIcon.svg?react"
import ServicesSection from "./ServicesSection";
import local from "../assets/local.svg"

function TuiutiSection() {
    return (
        <section id="tuiuti" className="md:px-[140px]">
            <div className="text-white p-4">

                {/* Título */}
                <div className="flex items-stretch">
                    <div className="w-[11px] bg-l-green"></div>

                    <h2 className="pl-2 md:mt-3 md:mb-6 md:leading-8">
                        <span className="font-extrabold">Atendimento</span> na <br />
                        Universidade Tuiuti do Paraná
                    </h2>
                </div>
                {/* Título */}

                {/* Texto */}
                <p className="text-[16px] leading-7 mb-6 md:text-[20px] mt-4">Também realizo <span className="font-bold">atendimentos na Universidade Tuiuti do Paraná</span> como aprimorando da área de Clínica e Cirurgia de Pets Não Convencionais e Animais Silvestres.</p>
                {/* Texto */}

                <ServicesSection />

                {/* Aviso */}
                <div className="bg-el-green p-2 md:p-4 border-l-green border-2 rounded-xl flex items-center gap-3 mb-6 mt-6">
                    <Calendar className="h-[30px] w-[40px] shrink-0" />
                    <p className="text-[14px] ">
                        As consultas são realizadas de segunda a sexta-feira, mediante agendamento prévio.
                    </p>
                </div>
                {/* Aviso */}

                {/* Contato */}
                <div className="flex flex-col items-center">
                    <Link variant="phone" className="mb-4" href="https://wa.me/55333117955">
                        Agendar consulta <br />
                        (41) 3331-17955
                    </Link>
                    <p className="text-[12px] mb-12">*Esse contato é apenas para agendar consultas na Univerdade Tuitui do Paraná</p>
                </div>
                {/* Contato */}

                {/* Endereço */}
                <div className="mt-4 text-white mb-7">

                    <div className="md:-mx-[140px]">
                        <div className="flex items-center gap-3 pt-7">
                            <div className="h-[1px] flex-1 bg-l-green"></div>

                            <img
                                src={local}
                                alt="Local Ícone"
                                className="shrink-0"
                            />

                            <p className="text-[20px] font-bold whitespace-nowrap">
                                Como chegar:
                            </p>

                            <div className="h-[1px] flex-1 bg-l-green"></div>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/FcaVvarg3yYmWyJg9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[16px] py-4 text-left"
                    >
                        R. Padre Ladislau Kula, 395 <br />
                        Santo Inácio, Curitiba - PR, 82010-210
                    </a>

                    <div className="md:-mx-[140px] mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3950488344713!2d-49.3212167!3d-25.425052899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce17ef41e8dfb%3A0x3c55dcefc8395c6c!2sR.%20Padre%20Ladislau%20Kula%2C%20395%20-%20Santo%20In%C3%A1cio%2C%20Curitiba%20-%20PR%2C%2082010-210!5e0!3m2!1spt-BR!2sbr!4v1781110440179!5m2!1spt-BR!2sbr"
                            className="w-full h-[300px]"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                {/* Endereço */}

            </div>
        </section>
    )
}

export default TuiutiSection;