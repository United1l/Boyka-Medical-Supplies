import hero from '../assets/hero.jpg'

const Hero = () => {
    return (
        <section className="h-full w-full mr-auto ml-auto mt-18 flex flex-col items-center justify-evenly">
            <div className="hero-text-container w-4/5 md:w-2/3 h-2/5 flex flex-col items-center justify-center">
                <h1 className="hero-text text-[#4CA771] text-4xl md:text-5xl 
                font-bold text-center ml-auto mr-auto">
                    Attain quality Medical Supplies with TrustCare MS
                </h1>
                <p className="hero-paragraph text-sm font-normal mt-4 text-center md:text-lg text-[#4CA771] italic">
                    Committed to providing you with the best medical supplies and equipment.
                </p>
            </div>
            <img src={hero} alt="Hero-image" className="h-[90%] w-[80%] md:h-[80%] rounded-lg border-2 border-[#4CA771]" />
        </section>
    )
}

export default Hero