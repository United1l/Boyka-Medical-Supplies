const Services = () => {
    const servicesText = [
        {
            title: "Expansive Inventory",
            description: "We offer a wide range of hospital equipment and supplies tailored for your hospital"
        },
        {
            title: "Delivery services",
            description: "We ensure timely delivery of medical supplies to your hospital"
        },
        {
            title: "24/7 Customer Support",
            description: "Our customer support team is available 24/7 to assist you with your needs"
        }
    ];

    const renderedServices = servicesText.map((service, index) => (
        <div key={index} className="service-container flex flex-col flex-[0 0 33.33%] items-center 
            justify-center py-10 mx-4">
            <h3 className="service-title text-2xl font-bold text-[#4CA771]">{service.title}</h3>
            <p className="service-description text-sm font-normal mt-2 text-center text-[#6b9080]">
                {service.description}
            </p>
        </div>
    ));

    return (
        <div className="h-2/5 w-full mt-32 md:mt-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#4CA771] font-bold">
                Our Services
            </h1>
            <div className="services h-4/5 w-full mt-8 flex flex-wrap items-center justify-evenly">
                {renderedServices}
            </div>
        </div>
    )
}

export default Services;