import ProductCard from "./ProductCard"
import intravInjection from '../assets/store/intravenous-injection.jpg'
import infusionCuff from '../assets/store/Infusion-Cuff.jpg'
import centrifuge from '../assets/store/Centrifuge.jpg'
import flask from '../assets/store/flask.jpg'
import bandage from '../assets/store/bandage.jpg'
import testTube from '../assets/store/test-tube.jpg'

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

export default NonDrugs
