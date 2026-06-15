import whatsapp from "../assets/whatsapp.svg"

function Button({ children, className = "", ...props }) {
    return (
        <button className={`rounded-full bg-l-green text-d-green font-bold relative flex items-center w-[340px] h-[52px] py-8 ${className}`}{...props}>
            <img src={whatsapp} alt="Icone Whatsapp" className="ml-8"></img>
            <p className="absolute left-1/2 -translate-x-1/2 text-center text-[16px] w-[200px]">{children}</p>
        </button>
    )
}

export default Button