import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ src, alt, prodname, rating }) => {
  return (
    <div className="h-[300px] w-[300px] border-2 border-[#4CA771] flex flex-col
        items-center justify-between bg-white shadow-lg rounded-lg text-[#4CA771] m-6">
      <img 
        src={src}
        alt={alt}
        className="h-3/5 w-3/5"
      />
      <div className="flex w-full items-center justify-between p-4">
        <h2 className="text-2xl font-bold">{prodname}</h2>
        <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faStar} className="text-[#ffdd00]"/>
            <h2>{rating}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
