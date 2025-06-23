import MoveImages from './MoveImages'
import military from '../assets/customers/37military.jpg'
import cityhospital from '../assets/customers/city-hospital.jpg'
import westernpharma from '../assets/customers/western-pharmacy.jpg'
import sandybay from '../assets/customers/sandybay-pharmacy.jpg'
import korlebu from '../assets/customers/korlebu.webp'
import kath from '../assets/customers/kath-logo.webp'
import ernestchemist from '../assets/customers/ernest-chemist.png'


const Customers = () => {
  const images = [
    { src: military, alt: 'Military Hospital' },
    { src: cityhospital, alt: 'City Hospital' },
    { src: westernpharma, alt: 'Western Pharmacy' },
    { src: sandybay, alt: 'Sandy Bay Pharmacy' },
    { src: korlebu, alt: 'Korle Bu Teaching Hospital' },
    { src: kath, alt: 'Kumasi Teaching Hospital' },
    { src: ernestchemist, alt: 'Ernest Chemist' }
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center mt-16">
      <h2 className="text-4xl text-center text-[#4CA771] font-bold p-8">
        Clients love us, and we love them back!
      </h2>
      <p className="text-[#343a40] text-lg text-center tracking-wide px-4 md:px-16">
        Hospitals and Pharmacies that use our services
      </p>
      <MoveImages images={images} />
    </div>
  )
}

export default Customers
