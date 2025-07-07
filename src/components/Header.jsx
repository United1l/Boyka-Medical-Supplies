import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import logo from '../assets/logo.jpeg'

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleClick = () => (
    setMenuState(prevState => !prevState)
  )

  const links = [
    { label: "STORE", href: "/shop"},
    { label: "ABOUT", href: "#" },
    { label: "NEW ACCOUNT", href: "#" },
    { label: "SIGN IN", href: "#" },
  ];

  const renderedLinks = links.slice(0, 2).map((link, i) => (
    <Link key={i} to={link.href}>{link.label}</Link>
  ));

  return (
    <header className="fixed top-0 h-[4rem] w-full bg-[#4CA771] flex 
     items-center justify-between text-[#C0E6BA] z-10">
      <img src={logo} width={50} height={50} alt="TrustCare MS logo" className="ml-2" />

      <Button className="w-[3rem] flex items-center justify-center p-2 border-2 border-[#C0E6BA]
       cursor-pointer md:hidden mr-2" onClick={handleClick}>
        <FontAwesomeIcon icon={menuState?faClose:faBars} />
      </Button>

      <nav className="hidden w-2/3 md:flex items-center relative">
        <div className="text-xs flex justify-between items-center h-auto min-w-2/5 mr-auto">
          {renderedLinks}
        </div>

        <div className="text-xs flex justify-between items-center h-auto w-[13rem] ml-auto">
          <Button className="hover:text-[#013237] cursor-pointer">
            NEW ACCOUNT
          </Button>
          <Button className="w-[5rem] p-2 border-2 border-[#C0E6BA] cursor-pointer
          hover:bg-[#C0E6BA] hover:text-[#013237] mr-2">
            SIGN IN
          </Button>
        </div>
      </nav>
      <div className={`${menuState? "flex" : "hidden"} md:hidden absolute w-full min-h-[40rem] bg-[#4CA771] top-20 p-6
        flex-col items-center justify-evenly z-10`}>
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header
