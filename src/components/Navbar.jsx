import { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-[9999] shadow-md">
            <nav className="flex items-center justify-between px-4">
                <a href="#">
                    <img src={logo} alt="Logo" className="w-[200px]"></img>
                </a>

                {/* Desktop */}
                <div className="hidden sm:flex gap-10">
                    <a href="#tuiuti">Atendimento na Universidade Tuiuti</a>
                    <a href="#home">Atendimento à domicílio</a>
                    <a href="#about">Sobre</a>
                </div>

                {/* Mobile */}
                <button
                    className="cursor-pointer sm:hidden text-3xl"
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
                    <div className="absolute left-0 top-full w-full z-50 flex flex-col items-center gap-2 p-4 bg-white rounded-b-3xl sm:hidden leading-12">
                        <a href="#tuiuti" onClick={() => setOpen(false)}>Atendimento na Universidade Tuiuti</a>
                        <a href="#home" onClick={() => setOpen(false)}>Atendimento à domicílio</a>
                        <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
                    </div>
                </>
            )}
        </header>
    )
}

export default Navbar