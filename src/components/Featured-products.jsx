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
        <div key={index} className="featured-container w-[30%] h-3/5 flex justify-center items-center
            bg-[#4CA771] mr-4 mt-4 rounded-tr-3xl">
            <img src={image.img} alt={image.alt} className="w-3/4 h-3/4 object-cover" />
        </div>
     ));

    return (
        <div className="featured-products h-2/5 w-full mt-24 flex flex-col items-center
            justify-evenly">
            <h2 className="text-3xl text-center text-[#4CA771] font-normal p-8">
                Featured Products
            </h2>
            <div className="featured-products-images-container h-3/5 w-[95%] flex flex-wrap justify-center 
            items-center">
                {renderedImages}             
            </div>
        </div>
    );
}

export default FeauturedProducts;