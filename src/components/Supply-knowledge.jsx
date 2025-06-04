import pocketcomputer from '../assets/supply-knowledge/pocket-computer.jpg'

const SupplyKnowledge = () => {
    const SupplyKnowledgeContainer = [
        {
            img: pocketcomputer,
            alt: "Pocket Computer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },

        {
            img: pocketcomputer,
            alt: "Pocket Computer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },

        {
            img: pocketcomputer,
            alt: "Pocket Computer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },
    ];

    const renderedKnowledge = SupplyKnowledgeContainer.map((item, index) => (
        <div key={index} className="knowledge-item w-1/3 h-4/6 flex flex-col items-center justify-center">
            <img src={item.img} alt={item.alt} className="w-4/5 h-3/4 object-cover rounded-lg mb-4" />
            <p className="text-center text-sm text-[#6b9080]">{item.description}</p>
        </div>
    ))
    return (
        <div className="h-2/5 w-full mt-[20rem] md:mt-10 flex flex-wrap items-center justify-evenly bg-blue-400">
            {renderedKnowledge}
        </div>
    )
}

export default SupplyKnowledge;