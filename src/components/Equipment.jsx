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
import adultCuff from '../assets/store/adult-cuff.jpeg'
import ambulatoryBloodPressureMonitor from '../assets/store/ambulatory-blood-pressure-monitor.jpeg'
import bubbleShape from '../assets/store/bubble-shape.jpeg'
import compressorNebulizer from '../assets/store/compressor-nebulizer.jpeg'
import electronicSphygmomanometer from '../assets/store/electronic-sphygmomanometer.jpeg'
import fetalDoppler from '../assets/store/fetal-doppler.jpeg'
import fingerPulseOximeter from '../assets/store/finger-pulse-oximeter.jpeg'
import  handheldOximeter from '../assets/store/handheld-oximeter.jpeg'
import hospitalBed from '../assets/store/hospital-bed.jpeg'
import infraredThermometer from '../assets/store/infrared-thermometer.jpeg'
import meshNebulizer from '../assets/store/mesh-nebulizer.jpeg'
import nasalOxygenCannula from '../assets/store/nasal-oxygen-cannula.jpeg'
import oxygenRegulator from '../assets/store/oxygen-regulator.jpeg'
import quantumMagneticResonanceAnalyzer from '../assets/store/quantum-resonance-magnetic-analyzer.jpeg'
import sinocareBundle from '../assets/store/sinocare-bundle.jpeg'
import upperArmElectronicBloodPressureMonitor from '../assets/store/upper-arm-electronic-blood-pressure-monitor.jpeg'


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
    },
    {
      src: adultCuff,
      alt: "Adult Cuff",
      prodname: "Adult Cuff",
      rating: 4.2
    },
    {
      src: ambulatoryBloodPressureMonitor,
      alt: "Ambulatory Blood Pressure Monitor",
      prodname: "Ambulatory Blood Pressure Monitor",
      rating: 4.4
    },
    {
      src: bubbleShape,
      alt: "Bubble Shape Nebulizer",
      prodname: "Bubble Shape Nebulizer",
      rating: 4.1
    },
    {
      src: compressorNebulizer,
      alt: "Compressor Nebulizer",
      prodname: "Compressor Nebulizer",
      rating: 4.3
    },
    {
      src: electronicSphygmomanometer,
      alt: "Electronic Sphygmomanometer",
      prodname: "Electronic Sphygmomanometer",
      rating: 4.5
    },
    {
      src: fetalDoppler,
      alt: "Fetal Doppler",
      prodname: "Fetal Doppler",
      rating: 4.6
    },
    {
      src: fingerPulseOximeter,
      alt: "Finger Pulse Oximeter",
      prodname: "Finger Pulse Oximeter",
      rating: 4.7
    },
    {
      src: handheldOximeter,
      alt: "Handheld Oximeter",
      prodname: "Handheld Oximeter",
      rating: 4.4
    },
    {
      src: hospitalBed,
      alt: "Hospital Bed",
      prodname: "Hospital Bed",
      rating: 4.8
    },
    {
      src: infraredThermometer,
      alt: "Infrared Thermometer",
      prodname: "Infrared Thermometer",
      rating: 4.5
    },
    {
      src: meshNebulizer,
      alt: "Mesh Nebulizer",
      prodname: "Mesh Nebulizer",
      rating: 4.3
    },
    {
      src: nasalOxygenCannula,
      alt: "Nasal Oxygen Cannula",
      prodname: "Nasal Oxygen Cannula",
      rating: 4.2
    },
    {
      src: oxygenRegulator,
      alt: "Oxygen Regulator",
      prodname: "Oxygen Regulator",
      rating: 4.4
    },
    {
      src: quantumMagneticResonanceAnalyzer,
      alt: "Quantum Magnetic Resonance Analyzer",
      prodname: "Magnetic Resonance Analyzer",
      rating: 4.6
    },
    {
      src: sinocareBundle,
      alt: "Sinocare Bundle",
      prodname: "Sinocare Bundle",
      rating: 4.5
    },
    {
      src: upperArmElectronicBloodPressureMonitor,
      alt: "Upper Arm Electronic Blood Pressure Monitor",
      prodname: "Upper Arm Electronic Blood Pressure Monitor",
      rating: 4.7
    }
  ]  

  return (
    <div className="w-full h-auto flex justify-center space-x-24 p-10 flex-wrap">
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
