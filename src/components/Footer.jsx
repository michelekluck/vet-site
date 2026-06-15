import Linkedin from "../assets/linkedin.svg?react"
import Instagram from "../assets/instagram.svg?react"

function Footer() {
    return (
        <footer>
            <div className="bg-green text-white mt-4 p-6">
                <div>
                    <p className="font-bold text-[18px] mb-4">Entre em contato:</p>
                    <div className="text-[16px] leading-8">
                        <p className="font-bold">Agendamento na Universidade Tuiuti</p>
                        <a className="inline-block mb-2" href="tel:+5541333117955">(41) 3331-17955</a>
                        <p className="font-bold">Agendamento à domicílio</p>
                        <a href="tel:+5541333117955">(41) 99646-2347</a>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-[24px] mb-[24px]">
                    <p className="font-bold text-[16px]">Me siga nas redes sociais</p>
                    <div className="ml-auto flex gap-6">
                        <Instagram className="text-white" />
                        <Linkedin />
                    </div>

                </div>
                <div className="bg-white h-[1px] w-auto mb-[24px]"></div>
                <div className="text-[16px] ">
                    <p>© 2026</p>
                    <p>Todos os direitos reservados</p>
                </div>
                <div>
                </div>

            </div>
        </footer >
    )
}

export default Footer