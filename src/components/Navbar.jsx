import { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white rounded-b-xl relative">
            <nav className="flex items-center justify-between px-4">
                <div>
                    <img src={logo} alt="Logo" className="w-[170px]"></img>
                </div>

                {/* Desktop */}
                <div className="hidden sm:flex gap-2">
                    <span>Animais atendidos</span>
                    <span>Serviços</span>
                    <span>Sobre</span>
                </div>

                {/* Mobile */}
                <button
                    className="text-xl cursor-pointer sm:hidden"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </nav>

            {open && (
                <div className="absolute left-0 top-full w-full z-50 flex flex-col items-center gap-2 p-4 sm:hidden bg-white rounded-b-3xl">
                    <span>Animais atendidos</span>
                    <span>Serviços</span>
                    <span>Sobre</span>
                </div>
            )}
        </header>
    )
}

export default Navbar