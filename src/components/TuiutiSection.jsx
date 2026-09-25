import Link from "./Link"
import Calendar from "../assets/calendarIcon.svg?react"
import ServicesSection from "./ServicesSection";
import local from "../assets/local.svg"

function TuiutiSection() {
    return (
        <section id="tuiuti" className="pt-10 ">
            <div className="text-white 2xl:px-30 bg-d-green pt-10 p-4">

                {/* Título */}
                <div className="flex items-stretch pb-4 ">
                    <div className="w-[11px] bg-l-green"></div>

                    <h2 className="pl-2 md:leading-8">
                        <span className="font-extrabold">Atendimento</span> na <br />
                        Universidade Tuiuti do Paraná
                    </h2>
                </div>
                {/* Título */}

                {/* Texto */}
                <p className="normal-text leading-7  mt-4">Também realizo <span className="font-bold">atendimentos na Universidade Tuiuti do Paraná</span> como aprimorando da área de Clínica e Cirurgia de Pets Não Convencionais e Animais Silvestres.</p>
                {/* Texto */}

                <ServicesSection />

                {/* Aviso */}
                <div className="normal-text bg-d-green p-2 md:p-4 border-l-green border-2 rounded-xl flex items-center gap-3 mb-10 mt-10">
                    <Calendar className="h-[30px] w-[40px] shrink-0" />
                    <p className="text-white">
                        As consultas são realizadas de <br className="md:hidden" />
                        <span className="bg-l-green ml-1 text-d-green font-bold px-2">segunda a sexta-feira</span>,
                        mediante
                        <span className="bg-l-green ml-1 text-d-green font-bold px-2">agendamento prévio</span>.
                    </p>
                </div>
                {/* Aviso */}

                <div>
                    <p className="normal-text mb-4"><span className="font-bold">Entre em contato</span> no link abaixo para agendar atendimento na Clínica da Universidade Tuiuti:</p>
                </div>

                {/* Contato */}
                <div className="flex flex-col items-center text-center mb-5">
                    <Link variant="phone" className="mb-4" href="https://wa.me/55333117955">
                        Agendar consulta <br />
                        (41) 3331-17955
                    </Link>
                    <p className="info-text">*Esse contato é apenas para agendar consultas na Universidade Tuiuti do Paraná</p>
                </div>
                {/* Contato */}

            </div>

            {/* Endereço */}
            <div className="mt-4 text-white mb-7">

                {/* Como chegar */}
                <div className="2xl:px-30">
                    <div className="flex items-center gap-3 pt-7">
                        <div className="h-[1px] flex-1 bg-d-green 2xl:-mr-[120px] 2xl:mr-0"></div>

                        <h2 className="font-bold whitespace-nowrap text-d-green">
                            Como chegar:
                        </h2>

                        <div className="h-[1px] flex-1 bg-d-green 2xl:-mr-[120px] 2xl:mr-0"></div>
                    </div>
                    {/* Como chegar */}


                    <a
                        href="https://maps.app.goo.gl/FcaVvarg3yYmWyJg9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block normal-text py-4 text-center text-d-green p-4"
                    >
                        R. Padre Ladislau Kula, 395
                        Santo Inácio, Curitiba - PR, 82010-210
                    </a>

                    {/* Mapa */}
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3950488344713!2d-49.3212167!3d-25.425052899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce17ef41e8dfb%3A0x3c55dcefc8395c6c!2sR.%20Padre%20Ladislau%20Kula%2C%20395%20-%20Santo%20In%C3%A1cio%2C%20Curitiba%20-%20PR%2C%2082010-210!5e0!3m2!1spt-BR!2sbr!4v1781110440179!5m2!1spt-BR!2sbr"
                            className="w-full h-[300px]"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    {/* Mapa */}

                </div>
            </div>
            {/* Endereço */}


        </section>
    )
}

export default TuiutiSection;