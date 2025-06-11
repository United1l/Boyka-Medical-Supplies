import TiltedImageContainer from "./TiltedImageContainer"
import delivery from "../assets/services/delivery.jpg";
import customerCare from "../assets/services/customer-care.jpg";
import products from "../assets/services/products.jpg"; 

const services = [
    { img: delivery, alt: "Delivery", title: "Fast Delivery" },
    { img: customerCare, alt: "Customer Care", title: "24/7 Customer Care" },
    { img: products, alt: "Products", title: "Quality Products" },
]; 

const renderedServices = services.map((service, index) => (
    <div key={index} className="w-full h-[40%] flex justify-evenly items-center">
        <TiltedImageContainer sourceImage={service.img} />
        <p className="text-[#343a40] text-lg font-normal mt-2 italic flex-1">{service.title}</p>
    </div>
))


const Services = () => {
    return (
        <div className="h-full w-full mt-84 md:mt-16 flex flex-col">
            {renderedServices}
        </div>
    )
}

export default Services;