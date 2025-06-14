const TiltedImageContainer = ({ sourceImage, altText }) => {
  return (
    <div className="w-full md:w-1/3 h-auto rounded-lg rotate-9 bg-linear-to-r from-[#95d5b2] to-[#2b9348]">
      <img src={sourceImage} alt={altText} className="w-full h-full rotate-350" />
    </div>  
  )
}

export default TiltedImageContainer
