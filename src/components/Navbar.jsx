import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [activeSection, setActiveSection] = useState(null)

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150

            let currentSection = null

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionBottom = sectionTop + section.offsetHeight

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    currentSection = section.id
                }
            })

            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className="normal-text fixed top-0 left-0 w-full bg-white z-[9999] shadow-md 2xl:px-30">
            <nav className="relative flex items-center px-4 justify-between">
                <a href="#" onClick={() => setActiveSection(null)}>
                    <img src={logo} alt="Logo" className="w-[200px]" />
                </a>

                {/* Desktop */}
                <div className="hidden lg:flex gap-10">

                    <a
                        href="#home"
                        className={activeSection == 'home' ? 'font-bold' : ''}
                        onClick={() => {
                            setActiveSection('home')
                            setOpen(false)
                        }}
                    >
                        Atendimento à domicílio
                    </a>


                    <a
                        href="#tuiuti"
                        className={activeSection == 'tuiuti' ? 'font-bold' : ''}
                        onClick={() => {
                            setActiveSection('tuiuti')
                            setOpen(false)
                        }}
                    >
                        Atendimento na Universidade Tuiuti
                    </a>


                    <a
                        href="#about"
                        className={activeSection == 'about' ? 'font-bold' : ''}
                        onClick={() => {
                            setActiveSection('about')
                            setOpen(false)
                        }}
                    >
                        Sobre
                    </a>
                </div>

                {/* Mobile */}
                <button
                    className="cursor-pointer lg:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </nav>

            {open && (
                <>
                    {/* overlay */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setOpen(false)}
                    />

                    {/* menu */}
                    <div className="absolute left-0 top-full w-full z-50 flex flex-col items-center gap-2 p-4 bg-white rounded-b-3xl leading-12">

                        <a
                            href="#home"
                            className="hover:font-bold"
                            onClick={() => setOpen(false)}
                        >
                            Atendimento à domicílio
                        </a>

                        <a
                            href="#tuiuti"
                            className="hover:font-bold"
                            onClick={() => setOpen(false)}
                        >
                            Atendimento na Universidade Tuiuti
                        </a>


                        <a
                            href="#about"
                            className="hover:font-bold"
                            onClick={() => setOpen(false)}
                        >
                            Sobre
                        </a>
                    </div>
                </>
            )}
        </header>
    )
}

export default Navbar