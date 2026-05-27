import Button from "./Button"

function Hero() {
    return (
        <section className="text-center">
            <div className='bg-d-green text-white'>
                <h1 className='font-bold'>Atendimento de animais silvestres e pets não convencionais à domicílio</h1>
                <div className="border border-l-green rounded-3xl p-4">Em curitiba e Reigão Metropolitana</div>
                <div>imagem</div>
            </div>
            <div className="font-bold text-black">
                <p>Entre em contato!</p>
                <Button>
                    <p>Whatsapp</p>
                    <p>(41) 99646-2347</p>
                </Button>
            </div>
        </section>
    )
}

export default Hero