import bandage from '../assets/featured-products/bandage.png'
import glass from '../assets/featured-products/glass.png'
import syringe from '../assets/featured-products/syringe.png'

const FeauturedProducts = () => {
    const images = [
        {img: bandage, alt: "Bandage"},
        {img: glass, alt: "Glass"},
        {img: syringe, alt: "Syringe"},
    ];
    
    const renderedImages = images.map((image, index) => (
        <img key={index} src={image.img} alt={image.alt} className="h-full w-1/3 object-cover" />
    ));

    return (
        <div className="featured-products h-2/5 w-full mt-24 flex flex-col items-center
            justify-space-evenly">
            <h2 className="text-3xl text-center text-[#4CA771] font-normal p-8">
                Featured Products
            </h2>
            <div className="featured-products-images-container h-3/5 w-[95%] bg-cyan-400 flex flex-wrap">
                {renderedImages}             
            </div>
        </div>
    );
}

export default FeauturedProducts;