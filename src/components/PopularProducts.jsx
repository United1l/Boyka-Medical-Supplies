import bandage from '../assets/popular-products/bandage.png'
import glass from '../assets/popular-products/glass.png'
import syringe from '../assets/popular-products/syringe.png'

const PopularProducts = () => {
    const images = [
        {img: bandage, alt: "Bandage", title: "Bandage"},
        {img: glass, alt: "Glass", title: "Glass"},
        {img: syringe, alt: "Syringe", title: "Syringe"},
    ];
    
    const renderedImages = images.map((image, index) => (
        <div key={index} className="h-auto flex flex-col justify-between items-center">
            <div className="w-[150px] h-[150px] flex justify-center items-center
            bg-[#4CA771] mr-4 mt-4 rounded-[50%]">
                <img src={image.img} alt={image.alt} className="w-3/4 h-3/4" />
            </div>
            <p className="text-[#343a40] text-lg text-center tracking-wide mt-2 italic">
                {image.title}
            </p>
        </div>
     ));
    
    // The renderedImages array contains the JSX elements for each image
    // Each element is a div with an image and a title below it
    // The images are styled to be circular and centered within their containers

    return (
        <div className="popular-products h-auto w-full mt-24 flex flex-col items-center
            justify-evenly">
            <h2 className="text-4xl text-center text-[#4CA771] font-bold p-8">
                Popular Products
            </h2>
            <div className="h-full w-full md:px-28 flex flex-wrap justify-evenly 
            items-center">
                {renderedImages}             
            </div>
        </div>
    );
}

export default PopularProducts;