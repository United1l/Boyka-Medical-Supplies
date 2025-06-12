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
         <div key={index} className="w-full h-[40%] flex flex-wrap justify-between items-center">
            <p className="text-[#343a40] text-lg font-normal text-center mt-2 italic">{service.title}</p>
            <TiltedImageContainer sourceImage={service.img} altText={service.alt} />
        </div>
        );
    } else {
        return ( 
            <div key={index} className="w-full h-[20%] flex flex-wrap justify-between items-center">
                <TiltedImageContainer sourceImage={service.img} />
                <p className="text-[#343a40] text-lg font-normal text-center mt-2 italic">{service.title}</p>
            </div>
        );
    }
});


const Services = () => {
    return (
        <div className="h-full w-full space-y-12 p-12 md:p-28 mt-84 md:mt-16 flex flex-col justify-between items-center">
            {renderedServices}
        </div>
    )
}

export default Services;