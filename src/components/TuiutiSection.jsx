import Link from "./Link"

function TuiutiSection() {
    return (
        <section className="bg-d-green mt-9">
            <div className="text-white p-4">
                <h2 className="mb-6 mt-10"><span className="font-extrabold">Atendimento</span> na <br /> Universidade Tuiuti do Paraná</h2>
                <p className="text-[16px] leading-7 mb-6">Também realizo <span className="font-bold">atendimentos na Universidade Tuiuti do Paraná</span> como aprimorando da área de Clínica e Cirurgia de Pets Não Convencionais e Animais Silvestres. <br />
                    <span className="font-bold">As consultas são realizadas de segunda a sexta-feira, mediante agendamento prévio.</span></p>
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