const TiltedImageContainer = ({ sourceImage }) => {
  return (
    <div className="w-full md:w-1/2 h-full"
      style={{ backgroundImage: `url(${sourceImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
    </div>  
  )
}

export default TiltedImageContainer
