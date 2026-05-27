import Button from "./Button"

function AboutSection() {
    return (
        <section className="bg-d-green">
            <div className="text-white">
                <h2 className="font-bold text-center">Quem sou eu? </h2>
                <p>**Imagem**</p>
                <p>Nam sed velit nec urna fermentum convallis. Proin turpis dolor, ullamcorper non ante ut, tincidunt ultrices neque. Vivamus congue cursus tortor, vel consectetur odio blandit et. Vivamus ac imperdiet sem. Donec tempus tortor et justo ultrices, id elementum ante placerat. Pellentesque id lectus feugiat, euismod quam quis, vestibulum neque. Duis vel</p>
            </div>
            <Button>
                <p>Whatsapp</p>
            </Button>
        </section>
    )
}

export default AboutSection