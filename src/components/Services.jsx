import TiltedImageContainer from "./TiltedImageContainer"
import delivery from "../assets/services/delivery.jpg";
import customerCare from "../assets/services/customer-care.jpg";
import products from "../assets/services/products.jpg"; 

const services = [
    { img: delivery, alt: "Delivery", title: "Fast Delivery",
     paragraph: "We ensure your orders are delivered swiftly and safely." },
    { img: customerCare, alt: "Customer Care", title: "24/7 Customer Care",
     paragraph: "Our dedicated team is here to assist you around the clock." },
    { img: products, alt: "Products", title: "Quality Products", 
     paragraph: "We offer a wide range of high-quality products to meet your needs." },
]; 

const renderedServices = services.map((service, index) => {
    if (index % 2 !== 0) { 
      return ( 
         <div key={index} className="w-full h-[35%] flex flex-wrap justify-between items-center mt-[10rem]">
            <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center">
                <p className="mt-4 tracking-wide text-[#343a40] text-2xl font-bold text-center italic">
                    {service.title}
                </p>
                <p className="my-2 tracking-tight text-[#343a40] text-lg text-center">
                    {service.paragraph}
                </p>
            </div>
            <TiltedImageContainer sourceImage={service.img} altText={service.alt} />
        </div>
        );
    } else {
        return ( 
            <div key={index} className="w-full h-[35%] flex flex-wrap justify-between items-center mt-[10rem]">
                <TiltedImageContainer sourceImage={service.img} />
                <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center">
                    <p className="mt-4 tracking-wide text-[#343a40] text-2xl font-bold text-center italic">
                        {service.title}
                    </p>
                    <p className="my-2 tracking-tight text-[#343a40] text-lg text-center">
                        {service.paragraph}
                    </p>
                </div>
            </div>
        );
    }
});


const Services = () => {
    return (
        <div className="h-full w-full px-12 md:p-28 mt-84 md:mt-16 flex flex-col items-center justify-evenly">
            {renderedServices}
        </div>
    )
}

export default Services;