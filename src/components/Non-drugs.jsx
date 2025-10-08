import ProductCard from "./ProductCard"
import intravInjection from '../assets/store/intravenous-injection.jpg'
import infusionCuff from '../assets/store/Infusion-Cuff.jpg'
import centrifuge from '../assets/store/Centrifuge.jpg'
import flask from '../assets/store/flask.jpg'
import bandage from '../assets/store/bandage.jpg'
import testTube from '../assets/store/test-tube.jpg'
import electrode from '../assets/store/electrode.jpeg'
import ultrasoundGel from '../assets/store/ultrasound-gel.jpeg'
import surgicalGloves from '../assets/store/gloves.jpeg'
import syringes from '../assets/store/syringe.jpeg'
import gauzeRoll from '../assets/store/gauze-roll.jpeg'
import skinPlaster from '../assets/store/skin-plaster.jpeg'

const NonDrugs = () => {
  // This component displays non-drug products in the store
  
  const products = [
    {
      src: intravInjection,
      alt: "Intravenous Injection", 
      prodname: "Intravenous Injection", 
      rating: 4.5
    },
    {
      src: infusionCuff,
      alt: "Infusion Cuff", 
      prodname: "Infusion Cuff", 
      rating: 4.0
    },
    {
      src: centrifuge,
      alt: "Centrifuge", 
      prodname: "Centrifuge", 
      rating: 4.8
    },
    {
      src: flask,
      alt: "Flask", 
      prodname: "Flask", 
      rating: 4.2
    },
    {
      src: bandage,
      alt: "Bandage", 
      prodname: "Bandage",
      rating: 4.3
    },
    {
      src: testTube,
      alt: "Test Tube", 
      prodname: "Test Tube", 
      rating: 4.6
    },
    {
      src: electrode,
      alt: "Electrode", 
      prodname: "Electrode", 
      rating: 4.4
    },
    {
      src: ultrasoundGel,
      alt: "Ultrasound Gel", 
      prodname: "Ultrasound Gel", 
      rating: 4.7
    },
    {
      src: surgicalGloves,
      alt: "Surgical Gloves", 
      prodname: "Surgical Gloves", 
      rating: 4.9
    },
    {
      src: syringes,
      alt: "Syringes", 
      prodname: "Syringes", 
      rating: 4.5
    },
    {
      src: gauzeRoll,
      alt: "Gauze Roll", 
      prodname: "Gauze Roll", 
      rating: 4.3
    },
    {
      src: skinPlaster,
      alt: "Skin Plaster", 
      prodname: "Skin Plaster", 
      rating: 4.6
    },
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

export default NonDrugs
