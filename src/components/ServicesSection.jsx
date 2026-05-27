import Button from "./Button"

function ServicesSection() {
    return (
        <section>
            <div className="">
                <h2 className="font-bold text-[16px] p-4">Serviços fornecidos</h2>
                <div className='bg-white text-center py-2'>Consulta clínica especializada</div>
                <div className="py-2 text-center">Check-up preventivo</div>
                <div className='bg-white py-2 text-center'>Exames laboratoriais</div>
                <div className="py-2 text-center">Radiografia e ultrassom</div>
                <div className='bg-white py-2 text-center'>Exames laboratoriais</div>
                <div className="py-2 text-center">Radiografia e ultrassom</div>
                <div className='bg-white py-2 text-center'>Exames laboratoriais</div>
                <div className="py-2 text-center">Radiografia e ultrassom</div>
                <div className='bg-white py-2 text-center'>Exames laboratoriais</div>
                <div className="py-2 text-center">Radiografia e ultrassom</div>
                <div className="p-4">
                    <p className="font-bold py-2 text-center text-green text-[16px]">Não encontrou o que estava procurando?</p>
                    <p className="mb-4">Entre em contato para consultar a possibilidade de atendimento!</p>
                    <Button>
                        <p className="w-[215px]">Consultar disponibilidade de procedimentos</p>
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default ServicesSection