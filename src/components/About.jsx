import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import pharma7 from '../assets/about/pharma7.jpg'
import pharma3 from '../assets/about/pharma3.jpg'
import pharma15 from '../assets/about/pharma15.jpg'
import pharma16 from '../assets/about/pharma16.jpg'
import ceo from '../assets/about/ceo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const About = () => {
return (
    <div className="h-screen w-screen overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
        <header className="h-[5rem] w-full flex
            items-center justify-center z-10 p-4 relative">
            <Link to="/" className="absolute left-4 h-8 w-8 md:h-14 md:w-14">
                <img src={logo} alt="TrustCare MS logo" className="cursor-pointer" />
            </Link>
            <h1 className="w-full max-w-[600px] mx-auto text-sm md:text-2xl text-[#4CA771]
             font-bold tracking-wide text-center">
                TRUSTCARE MEDICAL SUPPLY
            </h1>
        </header>
        
       <section className="mt-[5rem] flex flex-col items-center">
            <p className="w-4/5 text-lg text-justify text-gray-700">
                <b>TrustCare Medical Supply</b> is a trusted leader in the wholesale and retail of hospital equipment and 
                pharmaceuticals. Serving hospitals, clinics, pharmacies, and healthcare providers, we deliver high-quality
                medical devices and essential drugs with unwavering reliability and exceptional service. Whether fulfilling
                large-scale institutional orders or meeting individual clinical needs, we guarantee timely delivery, expert guidance, 
                and complete compliance with industry standards. Our dedicated team works closely with clients to understand their
                unique requirements, ensuring tailored solutions that optimize healthcare outcomes
            </p>
            
                <img src={pharma7} alt="Pharmaceuticals" className="max-w-4/5 h-auto my-10 rounded-lg shadow-lg"/>
            
            <h2 className="text-2xl text-[#4CA771] mt-10 font-semibold">Our Vison</h2>
            
            <p className="w-4/5 text-lg text-justify text-gray-700 my-4">
                To be the most trusted and reliable provider of medical supplies, enhancing healthcare delivery and patient outcomes
                across every community we serve.
                We strive to set the benchmark for excellence in medical supply distribution, fostering trust and long-term partnerships
                with healthcare providers through reliability, innovation, and a commitment to improving lives.
                We envision a future where healthcare providers have seamless access to the best medical supplies, empowering them to 
                deliver outstanding care. By prioritizing reliability, innovation, and ethical practices, we aim to build lasting
                relationships and make a positive impact on the health and well-being of every community we serve.
            </p>
            <img src={pharma3} alt="Medical Equipment" className="max-w-4/5 h-auto my-10 rounded-lg shadow-lg"/>

            <h2 className="text-2xl text-[#4CA771] mt-10 font-semibold">Our Mission</h2>
            <p className="w-4/5 text-lg text-justify text-gray-700 my-4">
                    To provide healthcare professionals and institutions with superior medical products and expert support, ensuring safe,
                    efficient, and compassionate patient care.
                    We are dedicated to sourcing and delivering high-quality pharmaceuticals and medical equipment, backed by exceptional
                    customer service and a commitment to ethical business practices. Our mission is to be a trusted partner in healthcare,
                    contributing to improved patient outcomes and the overall advancement of medical care.
                    Through continuous innovation and a focus on reliability, we aim to exceed the expectations of our clients and make a
                    meaningful difference in the healthcare industry.
            </p>

            <img src={pharma15} alt="Medical Supplies" className="max-w-4/5 h-auto my-10 rounded-lg shadow-lg"/>

            <h2 className="text-2xl text-[#4CA771] mt-10 font-semibold">Core Values</h2>
            
            <ul className="w-4/5 text-lg text-gray-700 list-disc pl-6 my-4">
                <li>Integrity and transparency in every transaction</li>
                <li>Commitment to quality and safety</li>
                <li>Customer-centric service</li>
                <li>Continuous improvement and innovation</li>
                <li>Respect for people and communities</li>
            </ul>
            <h2 className="text-2xl text-[#4CA771] mt-10 font-semibold">What we offer</h2>
            
            <ul className="w-4/5 text-lg text-gray-700 list-disc pl-6 my-4">
                <li>Pharmaceutical Products: A comprehensive selection of prescription and over-the-counter medications that meet 
                    regulatory standards.</li>
                <li>Hospital Equipment: From diagnostic tools to surgical instruments, we supply durable and efficient medical equipment for 
                    clinical use.</li>
                <li>Customer-Centric Services: Our knowledgeable team ensures accurate, timely, and secure delivery of products, with personalized
                    support tailored to your needs.</li>
                <li>Quality Assurance: Every product we sell is sourced from certified suppliers and undergoes strict quality control measures.</li>
            </ul>
            <img src={pharma16} alt="Medical Products" className="max-w-4/5 h-auto my-10 rounded-lg shadow-lg"/>
            
        </section>

        <section className="mt-[5rem] flex flex-col items-center">
            <h2 className="text-2xl text-[#4CA771] mt-10 font-semibold">Our Location</h2>
            <p>Okyerekrom, Ejisu, Ghana</p>
            
            <div className="w-4/5 my-10 rounded-lg shadow-lg">
                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Okyerekrom,%20Ejisu,%20Ghana+(TrustCare%20Medical%20Supply)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">mesurer la population sur une carte</a></iframe>
            </div>

        </section>

        <section className="mt-[5rem] flex flex-col items-center justify-center">
            <h2 className="text-2xl text-[#4CA771] my-10 font-semibold">Founder</h2>
            
            <div className="md:flex flex-wrap items-center justify-center w-4/5 mb-10">
                <div className="w-full md:w-1/2 flex flex-col items-center h-auto md:pr-10">
                    <h3 className="text-xl font-semibold">Nana Osei Tutu Prince</h3>
                    <p className="w-4/5 text-lg text-justify text-gray-700 my-4">
                        Nana Osei is a seasoned medical professional with over a decade of experience in healthcare.
                        Holding an MD from the University of Ghana, he has worked in various clinical settings, gaining extensive
                        knowledge in patient care and medical management. His passion for improving healthcare delivery led him to
                        establish TrustCare Medical Supply, aiming to provide high-quality medical products and services to healthcare
                        providers.Nana Osei is committed to ethical practices, innovation, and excellence in the medical supply industry,
                        ensuring that TrustCare Medical Supply meets the evolving needs of the healthcare community.
                    </p>
                </div>
                <div className="w-full h-1/4 md:w-1/2
                ">
                    <img src={ceo} alt="ceo" className="max-w-full h-full rounded-xl shadow-lg" />
                </div>
            </div>

        </section>

        <section className="my-[5rem] flex flex-col items-center">
            <h2 className="text-2xl text-[#4CA771] my-5 font-semibold">Contact Information</h2>
            
            <div className="icons w-full flex flex-wrap justify-evenly items-center mt-4">
                <span className="flex flex-wrap items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                    <p>+233 545 022 250</p>
                </span>
                <span className="flex flex-wrap items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-2" />
                    <p>trustcaremsup21@gmail.com</p>
                </span>
            </div>
        </section>
    </div>
)
}

export default About
