import Link from "./Link"
import local from "../assets/local.svg"
import iguana from "../assets/iguana.png"

function Hero() {
    return (
        <section className="text-center mt-15">
            <div className='text-white p-4 bg-d-green'>
                <div>
                    <h1 className='font-bold text-[24px]'>Atendimento de <br />
                        <span className="bg-l-green text-d-green rounded-full pl-4 pr-1"> animais silvestres</span> e <br />
                        <span className="bg-l-green text-d-green rounded-full pl-4 pr-1">pets não convencionais</span> à <br /> domicílio </h1>
                    <div className="border border-l-green rounded-full text-[14px] font-bold m-4 relative flex items-center p-3 py-4">
                        <img src={local} alt="Icone Local" className="ml-2"></img>
                        <p className="absolute left-1/2 -translate-x-1/2 text-center text-[15px] w-[261px]">Em curitiba e Região <br /> Metropolitana</p>
                    </div>
                </div>
                <div className="relative p-0">
                    <img src={iguana} alt="Iguana" className="-ml-20 -mb-7"></img>
                </div>
            </div>
            <div className="flex flex-col items-center font-bold text-black mt-5 p-4">
                <p className="mb-4 text-[16px]">Entre em contato !</p>
                <Link href="https://wa.me/5541996462347">
                    Whatsapp <br />
                    (41) 99646-2347
                </Link>
            </div>
        </section>
    )
}

export default Hero