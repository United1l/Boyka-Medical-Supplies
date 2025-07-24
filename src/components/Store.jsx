import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import logo from '../assets/logo.jpeg'

const Store = () => {
  const [menuState, setMenuState] = useState(false);

  const handleClick = () => (
    setMenuState(prevState => !prevState)
  )

  return (
    <div className="h-screen w-screen text-green-500">
      <header className="fixed top-0 h-[4rem] w-full flex 
        items-center justify-between z-10 p-4">
        <Link to="/">
          <img src={logo} width={55} height={55} alt="TrustCare MS logo" className="ml-2 cursor-pointer" />
        </Link>

        <Button className="w-[3rem] flex items-center justify-center p-2 border-2 border-[#C0E6BA]
          cursor-pointer md:hidden mr-2" onClick={handleClick}>
          <FontAwesomeIcon icon={menuState?faClose:faBars} />
        </Button>

        <nav className="hidden w-2/3 md:flex items-center relative">
          <div className="flex w-1/2 justify-evenly">
            <h3 className="cursor-pointer">Drugs</h3>
            <h3 className="cursor-pointer">Non-Drugs</h3>
            <h3 className="cursor-pointer">Equipment</h3>
          </div>
          <div className="flex w-1/2 justify-evenly">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
            <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
            <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer"/>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Store
