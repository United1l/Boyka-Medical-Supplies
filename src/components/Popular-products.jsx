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
        <div className="container w-full h-full flex flex-col justify-center items-center">
            <div key={index} className="popular-container w-30%] h-3/5 flex justify-center items-center
            bg-[#4CA771] mr-4 mt-4 rounded-[50%]">
                <img src={image.img} alt={image.alt} className="w-3/4 h-3/4 object-cover" />
            </div>
            <h3 className="text-[#343a40] text-lg font-normal mt-2 italic">{image.title}</h3>
        </div>
     ));

    console.log(renderedImages);
    
    // The renderedImages array contains the JSX elements for each image
    // Each element is a div with an image and a title below it
    // The images are styled to be circular and centered within their containers

    return (
        <div className="popular-products h-2/5 w-full mt-24 flex flex-col items-center
            justify-evenly">
            <h2 className="text-4xl text-center text-[#4CA771] font-bold p-8">
                Popular Products
            </h2>
            <div className="popular-products-images-container h-3/5 w-[95%] flex flex-wrap justify-evenly 
            items-center">
                {renderedImages}             
            </div>
        </div>
    );
}

export default PopularProducts;