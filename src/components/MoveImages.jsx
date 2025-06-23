const MoveImages = ({ images }) => {
  const renderedImages = images.map((image, index) => (
    <div key={index} className="item size-[40px] md:size-[100px] absolute left-[100%]
     animate-[autoRun_10s_linear_infinite]"
      style={{ animationDelay: `${index}s` }}>
      {/* The absolute positioning and animation will move the images */}
      {/* from right to left across the screen */}
      <img src={image.src} alt={image.alt} className="h-full" />
    </div>
  ))

  return (
    <div className="w-full h-[100px] mt-8">
      <div className="w-full flex justify-between relative">
        {renderedImages}
      </div>
    </div>
  )
}

export default MoveImages
