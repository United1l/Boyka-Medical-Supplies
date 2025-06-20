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
         <div key={index} className="w-full h-auto flex flex-wrap justify-between items-center mt-[10rem]">
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
            <div key={index} className="w-full h-auto flex flex-wrap justify-between items-center mt-[10rem]">
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
        <div className="h-auto w-full px-12 md:p-18 mt-16 flex flex-col items-center justify-between">
            <div>
                <h2 className="text-4xl text-center text-[#4CA771] font-bold p-8">
                    Medical supplies right at your doorstep
                </h2>
                <p className="text-[#343a40] text-lg text-center tracking-wide px-4 md:px-16">
                    At TrustCare, we take care of all the heavylifting so that you can focus on saving lives.
                </p>
            </div>
            {renderedServices}
        </div>
    )
}

export default Services;