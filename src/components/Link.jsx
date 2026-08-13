import whatsapp from "../assets/whatsapp.svg?react"
import phone from "../assets/phoneIcon.svg?react"

function Link({ variant = "zap", children, className = "", href = "", ...props }) {
    const Icon = variant === "zap" ? whatsapp : phone
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className={`rounded-full bg-l-green text-d-green font-bold relative flex items-center w-[340px] h-[52px] py-8 lg:py-10 lg:w-[490px] lg:mt-4 transition-transform duration-200 hover:scale-95 ${className}`}{...props}>
            <Icon alt={variant === "zap" ? "Ícone WhatsApp" : "Ícone Telefone"} className="ml-8 lg:w-[30px] lg:h-[30px]"></Icon>
            <p className="absolute left-1/2 -translate-x-1/2 text-center text-[16px] w-[200px] lg:w-[360px] lg:text-[20px] lg:ml-4">{children}</p>
        </a>
    )
}

export default Link