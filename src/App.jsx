import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-background min-h-screen font-line flex flex-col'>
      {/* Navbar */}
      <header className="bg-white rounded-b-xl">
        <nav className='flex items-center justify-between p-4'>
          <div>Logo</div>

          {/* Desktop */}
          <div className="hidden sm:flex gap-2">
            <span>Animais atendidos</span>
            <span>Serviços</span>
            <span>Sobre</span>
          </div>

          {/* Mobile */}
          <button className="text-xl cursor-pointer sm:hidden"
            onClick={() => setOpen(!open)}>☰</button>

        </nav>

        {open && (
          <div className="flex flex-col items-center gap-2 p-4 sm:hidden bg-white rounded-b-3xl">
            <span>Animais atendidos</span>
            <span>Serviços</span>
            <span>Sobre</span>
          </div>
        )}

      </header>

      <section className="text-center">
        <div className='bg-d-green text-white'>
          <h1 className='font-bold'>Atendimento de animais silvestres e pets não convencionais à domicílio</h1>
          <div className="border border-l-green rounded-3xl p-4">Em curitiba e Reigão Metropolitana</div>
          <div>imagem</div>
        </div>
        <div className="font-bold text-black">
          <p>Entre em contato!</p>
          <button className="rounded-3xl px-5 py-1 bg-l-green">
            <p>Whatsapp</p>
            <p>(41) 99646-2347</p>
          </button>
        </div>
      </section>

      <section className="bg-d-green">
        <div className="text-white">
          <h2 className="font-bold">Principais animais atendidos</h2>
          <ul className="flex gap-4">
            <li>Furão;</li>
            <li>Chinchila;</li>
            <li>Porquinho da india;</li>
            <li>Iguana-verde</li>
          </ul>
        </div>

      </section>

      <main className="flex-1">
        {/* Conteudo da pagina*/}
      </main>

      <footer className="bg-white">
        <div className="flex items-center justify-between p-4">
          <div>Logo</div>
          <div>
            <span className='font-bold' >CRMV: 00000</span>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default App
