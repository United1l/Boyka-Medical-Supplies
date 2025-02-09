import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

const Header = () => {
  const [menuState, setMenuState] = useState(true);

  const handleClick = () => (
    setMenuState(prevState => !prevState)
  )

  return (
    <div className="fixed top-0 h-[4rem] w-full bg-[#4CA771] flex 
     items-center justify-between text-[#C0E6BA] px-2">
      <h2 className="text-sm tracking-tight cursor-pointer">
        TRUSTCARE MEDICAL SUPPLIES
      </h2>

      <div className="w-[3rem] flex items-center justify-center p-2 border-2 border-[#C0E6BA]
       rounded-tr-xl cursor-pointer md:hidden" onClick={handleClick}>
        <FontAwesomeIcon icon={menuState?faBars:faClose} />
      </div>

      <nav className="hidden w-2/3 md:flex lg:flex items-center justify-center relative">
        <div className="text-xs flex justify-between items-center h-full md:w-[10rem] lg:w-[13rem] fixed right-[50%]">
          <a className="cursor-pointer hover:text-[#013237]">STORE</a>
          <a className="cursor-pointer hover:text-[#013237]">ABOUT</a>
        </div>

        <div className="text-xs  flex justify-between items-center h-full w-[13rem] fixed right-2">
          <h3 className="cursor-pointer hover:text-[#013237]">
            NEW ACCOUNT
          </h3>
          <Button className="w-[5rem] p-2 border-2 border-[#C0E6BA] rounded-tr-xl cursor-pointer
          hover:bg-[#C0E6BA] hover:text-[#013237]">
            SIGN IN
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default Header
