const TiltedImageContainer = ({ sourceImage }) => {
  return (
    <div className="h-[40%] w-[40%] md:h-[80%] md:w-[80%]"
      style={{ backgroundImage: `url(${sourceImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
    </div>  
  )
}

export default TiltedImageContainer
