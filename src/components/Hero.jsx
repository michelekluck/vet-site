import Link from "./Link"
import local from "../assets/local.svg"
import iguana from "../assets/iguana.png"

function Hero() {
    return (
        <section className="text-center mt-14 lg:mt-4">

            {/* Titulo + imagem */}
            <div className="bg-d-green text-white p-4 flex flex-col md:flex-row md:flex-row-reverse md:justify-between">
                <div className="md:mr-[15vw]">
                    {/* Titulo principal */}
                    <div className="lg:pt-[5vw] lg:mb-10">
                        <h1 className='font-bold text-[24px] lg:text-[40px] '>Atendimento de <br />
                            <span className="bg-l-green text-d-green rounded-full pl-4 pr-1"> animais silvestres</span> e <br />
                            <span className="bg-l-green text-d-green rounded-full pl-4 pr-1">pets não convencionais</span> à <br /> domicílio </h1>
                    </div>
                    {/* Titulo principal */}

                    {/* Região */}
                    <div className="md:w-[340px] md:mx-auto border border-l-green rounded-full text-[14px] font-bold m-4 relative flex items-center p-3 py-4 lg:py-6">
                        <img src={local} alt="Icone Local" className="ml-2 lg:w-[26px] lg:ml-9"></img>
                        <p className="absolute left-1/2 -translate-x-1/2 text-center text-[15px]  lg:text-[24px] lg:w-[326px]">Em curitiba e Região <br /> Metropolitana</p>
                    </div>
                    {/* Região */}

                    {/* Contato */}
                    <Link className="block mx-auto" href="https://wa.me/5541996462347">
                        Agendar consulta à<br />
                        domícilio
                    </Link>
                    {/* Contato */}
                </div>

                {/* Imagem */}
                <div className="relative z-10 -mx-4 md:-ml-20 md:mr-0 lg:p-0">
                    <img src={iguana} alt="Iguana"
                        className=" w-[320px] md:w-[670px] translate-y-7 -translate-x-[40px] md:translate-y-9">
                    </img>
                </div>
                {/* Imagem */}
            </div>
            {/* Titulo + imagem */}
        </section>
    )
}

export default Hero