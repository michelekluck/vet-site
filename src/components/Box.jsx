function Box({ icon, title, items, variant = "dark", className = "", titleClassName = "" }) {
    const styles = {
        dark: {
            icon: "text-l-green",
            title: "text-l-green",
            bg: "bg-d-green",
            text: "text-white",
            height: "h-[190px] md:h-[250px]",
            width: "md:w-[300px] xl:w-[400px] 2xl:w-[400px]"
        },
        light: {
            icon: "text-d-green",
            title: "text-d-green",
            bg: "bg-el-green",
            text: "text-black",
            height: "h-[250px] md:h-[350px] 2xl:h-[300px]",
            width: "md:w-[350px] xl:w-[400px] 2xl:w-[400px]"
        },
    };

    const currentStyle = styles[variant]

    return (
        <div className={`${currentStyle.bg} ${currentStyle.height} ${currentStyle.width} pt-6 px-5 rounded-[20px] mb-2 ${className}`}>
            <div className={`flex items-center gap-2 ${currentStyle.title} ${titleClassName}`}>
                <span className={currentStyle.iconClass}> {icon} </span>
                <p className="text-[20px] font-bold ml-2 md:text-[24px]"> {title} </p>
            </div>
            <ul className={`${currentStyle.text} mt-2 text-[16px] md:text-[20px] list-disc pl-5`}>
                {items.map((item, index) => (
                    <li className="mt-4" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Box;