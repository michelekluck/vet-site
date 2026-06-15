import whatsapp from "../assets/whatsapp.svg"
import phone from "../assets/phoneIcon.svg"

function Link({ variant = "zap", children, className = "", href = "", ...props }) {
    const icon = variant === "zap" ? whatsapp : phone
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className={`rounded-full bg-l-green text-d-green font-bold relative flex items-center w-[340px] h-[52px] py-8 ${className}`}{...props}>
            <img src={icon} alt={variant === "zap" ? "Ícone WhatsApp" : "Ícone Telefone"} className="ml-8"></img>
            <p className="absolute left-1/2 -translate-x-1/2 text-center text-[16px] w-[200px]">{children}</p>
        </a>
    )
}

export default Link