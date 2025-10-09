import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const ProductCard = ({ src, alt, prodname, rating }) => {
  return (
    <div className="h-[320px] w-[300px] border-2 border-[#4CA771] flex flex-col
        items-center justify-between bg-white shadow-lg rounded-lg text-[#4CA771] m-6">
      <img 
        src={src}
        alt={alt}
        className="h-3/5 w-3/5"
      />
      <div className="flex w-full flex-wrap items-center justify-between p-4">
        <h2 className="text-2xl text-wrap font-bold">{prodname}</h2>
        <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faStar} className="text-[#ffdd00]"/>
            <h2>{rating}</h2>
        </div>
      </div>
    </div>
  )
}
ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  prodname: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductCard
