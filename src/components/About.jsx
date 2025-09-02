import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const About = () => {
  return (
    <div className="h-screen w-screen">
      <header className="h-[5rem] w-full flex 
        items-center justify-between z-10 p-4">
        <Link to="/">
            <img src={logo} width={55} height={55} alt="TrustCare MS logo" className="ml-2 cursor-pointer" />
        </Link>
        <h1 className="text-2xl text-[#4CA771] absolute left-[30%] font-bold tracking-wide">
            ABOUT TRUSTCARE MEDICAL SUPPLY
        </h1>
      </header>
      <section className="mt-[8rem] flex flex-col items-center">
        <p className="w-4/5 text-lg text-justify text-gray-700">
            <b>TrustCare Medical Supply</b> is a trusted leader in the wholesale and retail of hospital equipment and 
            pharmaceuticals. Serving hospitals, clinics, pharmacies, and healthcare providers, we deliver high-quality
            medical devices and essential drugs with unwavering reliability and exceptional service. Whether fulfilling
            large-scale institutional orders or meeting individual clinical needs, we guarantee timely delivery, expert guidance, 
            and complete compliance with industry standards.
        </p>
      </section>
    </div>
  )
}

export default About
