import TiltedImageContainer from "./TiltedImageContainer"
import delivery from "../assets/services/delivery.jpg";
import customerCare from "../assets/services/customer-care.jpg";
import products from "../assets/services/products.jpg"; 

const services = [
    { img: delivery, alt: "Delivery", title: "Fast Delivery" },
    { img: customerCare, alt: "Customer Care", title: "24/7 Customer Care" },
    { img: products, alt: "Products", title: "Quality Products" },
]; 

const renderedServices = services.map((service, index) => {
    if (index % 2 !== 0) { 
      return ( 
         <div key={index} className="w-full h-[35%] flex flex-wrap justify-between items-center mt-24">
            <p className="text-[#343a40] text-lg font-normal text-center mt-2 italic">{service.title}</p>
            <TiltedImageContainer sourceImage={service.img} altText={service.alt} />
        </div>
        );
    } else {
        return ( 
            <div key={index} className="w-full h-[35%] flex flex-wrap justify-between items-center mt-24">
                <TiltedImageContainer sourceImage={service.img} />
                <p className="text-[#343a40] text-lg font-normal text-center mt-2 italic">{service.title}</p>
            </div>
        );
    }
});


const Services = () => {
    return (
        <div className="h-full w-full p-4 md:p-28 mt-84 md:mt-16 flex flex-col items-center">
            {renderedServices}
        </div>
    )
}

export default Services;