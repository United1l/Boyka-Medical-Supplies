const TiltedImageContainer = ({ sourceImage }) => {
  return (
    <div className="h-[50%] w-[60%] md:h-[70%] flex-1"
      style={{ backgroundImage: `url(${sourceImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
    </div>  
  )
}

export default TiltedImageContainer
