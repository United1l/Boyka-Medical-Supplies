const MoveImages = ({ images }) => {
  const renderedImages = images.map((image, index) => (
    <div key={index} className="h-auto">
      <img src={image.src} alt={image.alt} className="h-full" />
    </div>
  ))

  return (
    <div className="w-full h-[100px]">
      <div className="w-full flex">
        {renderedImages}
      </div>
    </div>
  )
}

export default MoveImages
