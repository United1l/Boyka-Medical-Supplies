import pocketcomputer from '../assets/supply-knowledge/pocket-computer.jpg'

const SupplyKnowledge = () => {
    return (
        <div className="h-4/5 w-full mt-20 flex flex-wrap items-center justify-evenly">
            <div className="tool-image-container w-3/5 h-full rounded-tr-3xl border-2 border-[#4CA771] overflow-hidden">
                <img src={pocketcomputer} alt="pocket-computer" className="object-fill" />
            </div>
            <p className="text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas minima placeat, provident magnam 
                voluptatibus quod! A deserunt quia qui ad nobis repellendus voluptatum odio quos 
                harum! Labore ex odio culpa!
            </p>
        </div>
    )
}

export default SupplyKnowledge;