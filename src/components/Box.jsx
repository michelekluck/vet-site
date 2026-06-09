function Box({ icon, title, items, variant = "dark" }) {
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
        <div className={`${currentStyle.bg} p-5 rounded-[20px]`}>
            <div className={`flex items-center gap-2 ${currentStyle.title}`}>
                <span className={currentStyle.icon}> {icon} </span>
                <p className="font-[15px] font-bold ml-2"> {title} </p>
            </div>
            <ul className={`${currentStyle.text} mt-2 text-[13px] list-disc pl-5 mt-4`}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Box;