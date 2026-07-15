function Box({ icon, title, items, variant = "dark", className = "", titleClassName = "" }) {
    const styles = {
        dark: {
            icon: "text-l-green",
            title: "text-l-green",
            bg: "bg-d-green",
            text: "text-white",
        },
        light: {
            icon: "text-d-green",
            title: "text-d-green",
            bg: "bg-el-green",
            text: "text-black"
        },
    };

    const currentStyle = styles[variant]

    return (
        <div className={`${currentStyle.bg} p-5 rounded-[20px] mb-2 h-[250px] md:w-[350px] ${className}`}>
            <div className={`flex items-center gap-2 ${currentStyle.title} ${titleClassName}`}>
                <span className={currentStyle.iconClass}> {icon} </span>
                <p className="text-[16px] font-bold ml-2 md:text-[20px]"> {title} </p>
            </div>
            <ul className={`${currentStyle.text} mt-2 text-[16px] list-disc pl-5`}>
                {items.map((item, index) => (
                    <li className="mt-2" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Box;