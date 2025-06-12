const TiltedImageContainer = ({ sourceImage, altText }) => {
  return (
    <div className="w-full md:w-1/3 h-auto rounded-lg">
      <img src={sourceImage} alt={altText} className="w-full h-full" />
    </div>  
  )
}

export default TiltedImageContainer
