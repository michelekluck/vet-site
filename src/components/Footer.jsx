import Button from "./Button"

function Footer() {
    return (
        <footer>
            <div className="bg-green">
                <p className="text-white">Entre em contato!</p>
                <Button>
                    <p>(41) 99646-2347</p>
                </Button>
                <p className="text-white">Atendimento em Curitiba e Região Metropolitana</p>
            </div>
            <div className="bg-white">
                <div className="flex items-center justify-between p-4">
                    <div>Logo</div>
                    <div>
                        <span className='font-bold' >CRMV: 00000</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer