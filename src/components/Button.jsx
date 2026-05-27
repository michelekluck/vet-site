function Button({ children, className = "", ...props }) {
    return (
        <button className={`rounded-3xl px-5 py-1 bg-l-green text-black font-bold ${className}`}{...props}>
            {children}
        </button>
    )
}

export default Button