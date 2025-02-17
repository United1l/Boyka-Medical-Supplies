import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import logo from '../assets/logo.jpeg'

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleClick = () => (
    setMenuState(prevState => !prevState)
  )

  return (
    <div className="fixed top-0 h-[4rem] w-full bg-[#4CA771] flex 
     items-center justify-between text-[#C0E6BA] z-10">
      <img src={logo} width={50} height={50} alt="TrustCare MS" className="ml-2" />

      <Button className="w-[3rem] flex items-center justify-center p-2 border-2 border-[#C0E6BA]
       cursor-pointer md:hidden mr-2" onClick={handleClick}>
        <FontAwesomeIcon icon={menuState?faClose:faBars} />
      </Button>

      <nav className="hidden w-2/3 md:flex lg:flex items-center justify-center relative">
        <div className="text-xs flex justify-between items-center h-full md:w-[10rem] lg:w-[13rem] fixed right-[50%]">
          <a className="">STORE</a>
          <a className="">ABOUT</a>
        </div>

        <div className="text-xs  flex justify-between items-center h-full w-[13rem] fixed right-2">
          <a className="">
            NEW ACCOUNT
          </a>
          <Button className="w-[5rem] p-2 border-2 border-[#C0E6BA] cursor-pointer
          hover:bg-[#C0E6BA] hover:text-[#013237] mr-2">
            SIGN IN
          </Button>
        </div>
      </nav>
      <div className={`${menuState? "flex" : "hidden"} md:hidden absolute w-full h-[40rem] bg-[#4CA771] top-20 p-6
        flex-col justify-evenly items-center`}>
        <a className="">STORE</a>
        <a className="">ABOUT</a>
        <a className="">
            NEW ACCOUNT
        </a>
        <a className="">
            SIGN IN
        </a>
      </div>
    </div>
  )
}

export default Header
