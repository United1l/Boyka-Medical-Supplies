import hero from '../assets/hero.jpg'

const Hero = () => {
    return (
        <section className="h-4/5 w-full mr-auto ml-auto mt-16 flex items-center justify-center
         text-green relative before:absolute before:top-0 before:left-0 before:w-full before:h-full
         before:bg-[#4CA771] before:opacity-30 before:z-0"
            style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
            <div className="hero-text-container w-4/5 md:w-2/3 h-2/5 flex flex-col items-center justify-center">
                <h1 className="hero-text text-4xl md:text-5xl 
                font-bold text-center ml-auto mr-auto">
                    Attain quality Medical Supplies with TrustCare MS
                </h1>
                <p className="hero-paragraph text-sm font-normal mt-4 text-center md:text-lg italic">
                    Committed to providing you with the best medical supplies and equipment.
                </p>
            </div>
        </section>
    )
}

export default Hero