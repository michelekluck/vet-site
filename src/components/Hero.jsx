import Link from "./Link"
import iguana from "../assets/iguana.png"

function Hero() {
    return (
        <section className="text-center mt-10 lg:mt-4">

            {/* Titulo + imagem */}
            <div className="bg-d-green text-white p-4 pt-10 md:pt-5 flex flex-col md:flex-row md:flex-row-reverse md:justify-between">

                <div className="md:mr-[15vw] 2xl:mr-[20vw]" >

                    {/* Titulo principal */}
                    <div className="lg:pt-[5vw] lg:mb-10">
                        <h1 className='font-bold text-[24px] lg:text-[38px] '>
                            Atendimento de <br />
                            <span className="bg-l-green text-d-green rounded-full pl-4 pr-1">
                                animais silvestres
                            </span> e <br />
                            <span className="bg-l-green text-d-green rounded-full pl-4 pr-1">
                                pets não convencionais
                            </span> à <br />
                            domicílio
                        </h1>
                    </div>
                    {/* Titulo principal */}


                    {/* Região */}
                    <div className="w-[340px] h-[52px] border border-l-green rounded-full text-[14px] font-bold my-4 relative flex items-center p-3 py-8 lg:py-10 lg:w-[490px] lg:mt-4 block mx-auto">
                        <p className="absolute left-1/2 -translate-x-1/2 text-center text-[16px] w-[200px] lg:text-[20px] lg:w-[360px]">
                            Em Curitiba e Região <br />
                            Metropolitana
                        </p>
                    </div>
                    {/* Região */}


                    {/* Contato */}
                    <Link
                        className="block mx-auto"
                        href="https://wa.me/5541996462347?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20domiciliar%20para%20o%20meu%20pet."
                        target="_blank"
                    >
                        Agendar consulta à<br />
                        domicílio
                    </Link>
                    {/* Contato */}

                </div>


                {/* Imagem */}
                <div className="relative z-10 max-w-none -mx-4 md:-ml-20 md:mr-0">

                    <img
                        src={iguana}
                        alt="Iguana"
                        className="
                        w-[400px] 
                        md:w-[500px] 
                        lg:w-[700px] 
                        2xl:w-[800px] 
                        translate-y-7 
                        -translate-x-[60px]
                        md:translate-y-11
                        md:-translate-x-[30px] 
                        lg:translate-y-[200px] 
                        xl:translate-y-[80px] 
                        2xl:translate-y-[70px] 
                        "
                    />

                </div>
                {/* Imagem */}

            </div>
            {/* Titulo + imagem */}

        </section>
    )
}

export default Hero