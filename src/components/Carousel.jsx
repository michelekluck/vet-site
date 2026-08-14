import { useState, useEffect, useRef } from 'react'
import imagens from '../data/images.json'

function Carousel() {
    const quantidade = imagens.length

    const imagensCarrossel = [
        ...imagens,
        ...imagens,
        ...imagens,
    ]

    const [current, setCurrent] = useState(quantidade)
    const [transition, setTransition] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [containerWidth, setContainerWidth] = useState(0)

    const containerRef = useRef(null)

    // Detecta tamanho real do carrossel
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth)
            }

            setIsMobile(window.innerWidth < 768)
        }

        updateSize()

        window.addEventListener('resize', updateSize)

        return () => {
            window.removeEventListener('resize', updateSize)
        }
    }, [])

    // Define o tamanho de cada movimento
    const slideWidth = isMobile
        ? containerWidth
        : 516

    const nextImage = () => {
        setTransition(true)
        setCurrent((current) => current + 1)
    }

    const previousImage = () => {
        setTransition(true)
        setCurrent((current) => current - 1)
    }

    // Passagem automática
    useEffect(() => {
        const interval = setTimeout(() => {
            nextImage()
        }, 3000)

        return () => clearTimeout(interval)
    }, [current])

    // Mantém o carrossel no meio das cópias
    useEffect(() => {
        if (current >= quantidade * 2) {
            const timeout = setTimeout(() => {
                setTransition(false)
                setCurrent(current - quantidade)
            }, 700)

            return () => clearTimeout(timeout)
        }

        if (current < quantidade) {
            const timeout = setTimeout(() => {
                setTransition(false)
                setCurrent(current + quantidade)
            }, 700)

            return () => clearTimeout(timeout)
        }
    }, [current, quantidade])

    return (
        <div
            ref={containerRef}
            className="relative w-auto max-w-5xl mx-4 lg:mx-auto overflow-hidden"
        >

            {/* Imagens */}
            <div
                className={`flex ${isMobile ? '' : 'gap-4'
                    } ${transition
                        ? 'transition-transform duration-700 ease-in-out'
                        : ''
                    }`}
                style={{
                    transform: `translateX(-${current * slideWidth}px)`,
                }}
            >
                {imagensCarrossel.map((imagem, index) => (
                    <img
                        key={`${imagem.id}-${index}`}
                        src={imagem.imagem}
                        alt={imagem.alt}
                        className={
                            isMobile
                                ? 'w-full h-[400px] shrink-0 object-cover rounded-3xl'
                                : 'w-[500px] h-[500px] shrink-0 object-cover rounded-3xl'
                        }
                    />
                ))}
            </div>

            {/* Botão anterior */}
            <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition"
            >
                ←
            </button>

            {/* Botão próximo */}
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition"
            >
                →
            </button>

        </div>
    )
}

export default Carousel