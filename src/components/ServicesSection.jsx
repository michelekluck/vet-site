import Button from "./Button"

function ServicesSection() {
    return (
        <section>
            <h2 className="font-bold">Serviços fornecidos</h2>
            <div className='bg-white'>Consulta clínica especializada</div>
            <div>Check-up preventivo</div>
            <div className='bg-white'>Exames laboratoriais</div>
            <div>Radiografia e ultrassom</div>
            <p className="font-bold">Não encontrou o que estava procurando?</p>
            <p>Entre em contato para consultar a possibilidade de atendimento!</p>
            <Button>
                <p>Consultar disponibilidade de procedimentos</p>
            </Button>
            <div>
            </div>
        </section>
    )
}

export default ServicesSection