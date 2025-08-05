import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ src, alt, prodname, rating }) => {
  return (
    <div className="h-[500px] w-[500px] border-2 border-green-500">
      <img 
        src={src}
        alt={alt}
        className="h-[200px] w-[200px]"
      />
      <div>
        <h2 className="text-2xl font-bold">{prodname}</h2>
        <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faStar} />
            <h2>{rating}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
