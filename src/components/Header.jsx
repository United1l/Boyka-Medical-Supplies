const Header = () => {
  return (
    <div className="fixed top-0 h-[4rem] w-full bg-[#4CA771] flex 
     items-center justify-evenly text-[#C0E6BA]">
      <h2 className="fixed left-2 text-sm">
        Boyka Medical Supplies
      </h2>

      <div className="text-xs flex justify-between w-[6rem] cursor-pointer">
        <h3>STORE</h3>
        <h3>ABOUT</h3>
      </div>
    </div>
  )
}

export default Header
