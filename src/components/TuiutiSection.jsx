import Link from "./Link"
import Calendar from "../assets/calendarIcon.svg?react"
import ServicesSection from "./ServicesSection";

function TuiutiSection() {
    return (
        <section id="tuiuti" className="md:px-[140px]">
            <div className="text-white p-4">

                {/* Titulo */}
                <div className="flex items-start">
                    <div className="bg-l-green h-[60px] w-[11px] mt-4"></div>
                    <h2 className="mb-6 mt-10 md:mt-3 md:pl-2 md:leading-8"><span className="font-extrabold">Atendimento</span> na <br /> Universidade Tuiuti do Paraná</h2>
                </div>
                {/* Titulo */}

                {/* Texto */}
                <p className="text-[16px] leading-7 mb-6 md:text-[20px]">Também realizo <span className="font-bold">atendimentos na Universidade Tuiuti do Paraná</span> como aprimorando da área de Clínica e Cirurgia de Pets Não Convencionais e Animais Silvestres.</p>
                {/* Texto */}

                <ServicesSection />

                {/* Aviso */}
                <div className="md:bg-el-green md:p-4 md:border-l-green md:border-2 md:rounded-xl md:flex md:items-center md:gap-3">
                    <Calendar className="md:h-[30px] md:w-[40px]" />
                    <p>
                        As consultas são realizadas de segunda a sexta-feira, mediante agendamento prévio.
                    </p>
                </div>
                {/* Aviso */}

                <div className="flex flex-col items-center">
                    <Link variant="phone" className="mb-4" href="https://wa.me/55333117955">
                        Agendar consulta <br />
                        (41) 3331-17955
                    </Link>
                    <p className="text-[12px] mb-12">*Esse contato é apenas para agendar consultas na Univerdade Tuitui do Paraná</p>
                </div>
            </div>
        </section>
    )
}

export default TuiutiSection;