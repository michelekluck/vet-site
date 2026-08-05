import Linkedin from "../assets/linkedin.svg?react";
import Instagram from "../assets/instagram.svg?react";

function Footer() {
    return (
        <footer>
            <div className="bg-white text-black mt-4 p-6 2xl:px-30">

                <div className="md:flex md:justify-between md:items-start">

                    {/* Contatos */}
                    <div>
                        <p className="font-bold text-[18px] mb-4">
                            Entre em contato:
                        </p>

                        <div className="text-[16px] leading-8">
                            <p className="font-bold">
                                Agendamento na Universidade Tuiuti
                            </p>

                            <a
                                className="inline-block mb-2"
                                href="tel:+5541333117955"
                            >
                                (41) 3331-17955
                            </a>

                            <p className="font-bold">
                                Agendamento à domicílio
                            </p>

                            <a href="https://wa.me/5541996462347">
                                (41) 99646-2347
                            </a>
                        </div>
                    </div>

                    {/* Redes sociais */}
                    <div className="mt-8 md:mt-0 md:text-right">
                        <p className="font-bold text-[18px] mb-4">
                            Me siga nas redes sociais:
                        </p>

                        <div className="flex gap-6 md:justify-end">
                            <Instagram className="cursor-pointer" />
                            <Linkedin className="cursor-pointer" />
                        </div>
                    </div>

                </div>

                <div className="bg-black h-[1px] w-full my-6"></div>

                <div className="text-[16px]">
                    <p>© 2026</p>
                    <p>Todos os direitos reservados</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;