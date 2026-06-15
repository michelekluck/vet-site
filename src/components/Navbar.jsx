import { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-[9999] shadow-md">
            <nav className="flex items-center justify-between px-4">
                <div>
                    <img src={logo} alt="Logo" className="w-[200px]"></img>
                </div>

                {/* Desktop */}
                <div className="hidden sm:flex gap-2">
                    <span>Universidade Tuiuti</span>
                    <span>Atendimento à domicílio</span>
                    <span>Sobre</span>
                </div>

                {/* Mobile */}
                <button
                    className="cursor-pointer sm:hidden text-[40px]"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </nav>

            {open && (
                <div className="absolute left-0 top-full w-full z-50 flex flex-col items-center gap-2 p-4 sm:hidden bg-white rounded-b-3xl">
                    <span>Universidade Tuiuti</span>
                    <span>Atendimento à domicílio</span>
                    <span>Sobre</span>
                </div>
            )}
        </header>
    )
}

export default Navbar