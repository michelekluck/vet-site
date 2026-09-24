import Linkedin from "../assets/linkedin.svg?react";
import Instagram from "../assets/instagram.svg?react";

function Footer() {
    return (
        <footer>
            <div className="bg-white text-black mt-4 p-6 2xl:px-30">

                <div className="md:flex md:justify-between md:items-start">

                    {/* Contatos */}
                    <div>
                        <p className="font-bold mb-4">
                            Entre em contato:
                        </p>

                        <div className="footer-text leading-8">
                            <p className="font-bold">
                                Agendamento na Clínica da Universidade Tuiuti
                            </p>

                            <a
                                className="inline-block mb-2"
                                target="_blank"
                                href="https://wa.me/5541333117955"
                            >
                                (41) 3331-17955
                            </a>

                            <p className="font-bold">
                                Agendamento à domicílio
                            </p>

                            <a href="https://wa.me/5541996462347"
                                target="_blank">
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
                            <a href="https://www.instagram.com/veterinario_samuel_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank">
                                <Instagram className="cursor-pointer" />
                            </a>
                            <a href="https://www.linkedin.com/in/samuel-kluck-83b945159/" target="_blank">
                                <Linkedin className="cursor-pointer" />
                            </a>
                        </div>
                    </div>
                    {/* Redes sociais */}

                </div>

                <div className="bg-black h-[1px] w-full my-6"></div>

                {/* sub-footer */}
                <div className="footer-text flex justify-between">
                    <div>
                        <p>© 2026</p>
                        <p>Todos os direitos reservados</p>
                    </div>

                    <div className="text-right">
                        <p>Samuel Kluck</p>
                        <p>CRMV: 0000</p>
                    </div>
                </div>
                {/* sub-footer */}

            </div>
        </footer>
    );
}

export default Footer;