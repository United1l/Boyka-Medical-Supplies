import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import pharma7 from '../assets/about/pharma7.jpg'
import pharma3 from '../assets/about/pharma3.jpg'
import pharma4 from '../assets/about/pharma4.jpg'
import pharma8 from '../assets/about/pharma8.webp'

const About = () => {
return (
    <div className="h-screen w-screen overflow-x-hidden">
        <header className="h-[5rem] w-full flex
            items-center justify-center z-10 p-4 relative">
            <Link to="/" className="absolute left-6">
                <img src={logo} width={55} height={55} alt="TrustCare MS logo" className="cursor-pointer" />
            </Link>
            <h1 className="text-sm md:text-2xl text-[#4CA771] font-bold tracking-wide text-center">
                ABOUT TRUSTCARE MEDICAL SUPPLY
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
            <h2 className="text-2xl mt-10 font-semibold">Our Vison</h2>
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

            <h2 className="text-2xl mt-10 font-semibold">Our Mission</h2>
            <p className="w-4/5 text-lg text-justify text-gray-700 my-4">
                    To provide healthcare professionals and institutions with superior medical products and expert support, ensuring safe,
                    efficient, and compassionate patient care.
                    We are dedicated to sourcing and delivering high-quality pharmaceuticals and medical equipment, backed by exceptional
                    customer service and a commitment to ethical business practices. Our mission is to be a trusted partner in healthcare,
                    contributing to improved patient outcomes and the overall advancement of medical care.
                    Through continuous innovation and a focus on reliability, we aim to exceed the expectations of our clients and make a
                    meaningful difference in the healthcare industry.
            </p>
            <img src={pharma8} alt="Medical Supplies" className="max-w-4/5 h-auto my-10 rounded-lg shadow-lg"/>

            <h2 className="text-2xl mt-10 font-semibold">Core Values</h2>
            <ul className="w-4/5 text-lg text-gray-700 list-disc pl-6 my-4">
                <li>Integrity and transparency in every transaction</li>
                <li>Commitment to quality and safety</li>
                <li>Customer-centric service</li>
                <li>Continuous improvement and innovation</li>
                <li>Respect for people and communities</li>
            </ul>
            <h2 className="text-2xl mt-10 font-semibold">What we offer</h2>
            <ul className="w-4/5 text-lg text-gray-700 list-disc pl-6 my-4">
                <li>Pharmaceutical Products: A comprehensive selection of prescription and over-the-counter medications that meet 
                    regulatory standards.</li>
                <li>Hospital Equipment: From diagnostic tools to surgical instruments, we supply durable and efficient medical equipment for 
                    clinical use.</li>
                <li>Customer-Centric Services: Our knowledgeable team ensures accurate, timely, and secure delivery of products, with personalized
                    support tailored to your needs.</li>
                <li>Quality Assurance: Every product we sell is sourced from certified suppliers and undergoes strict quality control measures.</li>
            </ul>
            <img src={pharma4} alt="Medical Products" className="max-w-4/5 h-auto my-10 rounded-lg shadow-lg"/>
        </section>
        <section className="mt-[5rem] flex flex-col items-center">
            <h2 className="text-2xl mt-10 font-semibold">Location</h2>
            <p>Okyerekrom, Ejisu, Ghana</p>
            <div className="w-4/5 my-10 rounded-lg shadow-lg">
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Okyerekrom,%20Ejisu,%20Ghana+(TrustCare%20Medical%20Supply)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">mesurer la population sur une carte</a></iframe>
            </div>
        </section>
        <section className="mt-[5rem] flex flex-col items-center">
            <h2 className="text-2xl my-5 font-semibold">Contact Information</h2>
            <p>Email: trustcaremsup21@gmail.com</p>
            <p>Phone: +233 545 022 250</p>
        </section>
    </div>
)
}

export default About
