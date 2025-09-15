import ProductCard from "./ProductCard"
import bloodPress from  '../assets/store/Blood-Pressure-Recorder.jpg'
import ECG from '../assets/store/ECG.jpg'
import microscope from '../assets/store/microscope.webp'
import scanner from '../assets/store/Scanner.png'
import stethoscope from '../assets/store/Stethoscope.jpg'
import binoculars from '../assets/store/Binoculars.png'
import medicalTray from '../assets/store/medical-tray.jpg'
import otoscope from '../assets/store/otoscope.jpg'
import oxygenTank from '../assets/store/oxygen-tank.jpg'
import surgicalTools from '../assets/store/surgical-tools.jpg'

const Equipment = () => {
  // This component displays equipment products in the store

  const products = [
    {
      src: bloodPress,
      alt: "Blood Pressure Recorder",
      prodname: "Blood Pressure Recorder",
      rating: 4.5
    },
    {
      src: ECG,
      alt: "ECG Machine",
      prodname: "ECG Machine",
      rating: 4.5
    },
    {
      src: microscope,
      alt: "Microscope",
      prodname: "Microscope",
      rating: 4.7
    },
    {
      src: scanner,
      alt: "Scanner",
      prodname: "Scanner",
      rating: 4.6
    },
    {
      src: stethoscope,
      alt: "Stethoscope",
      prodname: "Stethoscope",
      rating: 4.8
    },
    {
      src: binoculars,
      alt: "Binoculars",
      prodname: "Binoculars",
      rating: 4.4
    },
    {
      src: medicalTray,
      alt: "Medical Tray",
      prodname: "Medical Tray",
      rating: 4.3
    },
    {
      src: otoscope,
      alt: "Otoscope",
      prodname: "Otoscope",
      rating: 4.5
    },
    {
      src: oxygenTank,
      alt: "Oxygen Tank",
      prodname: "Oxygen Tank",
      rating: 4.6
    },
    {
      src: surgicalTools,
      alt: "Surgical Tools",
      prodname: "Surgical Tools",
      rating: 4.7
    }
  ]  

  return (
    <div className="w-full h-auto flex justify-evenly p-10 flex-wrap">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          src={product.src}
          alt={product.alt}
          prodname={product.prodname}
          rating={product.rating}
        />
      ))}
    </div>
  )
}

export default Equipment
