import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import logo from '../assets/logo.jpeg'
import Drugs from './Drugs'
import NonDrugs from './Non-drugs'
import Equipment from './Equipment'

const Store = () => {
  const [menuState, setMenuState] = useState(false);

  const handleClick = () => (
    setMenuState(prevState => !prevState)
  )

  const categories = ["Drugs", "Non-Drugs", "Equipment"];

  const [highlighted, setHighlighted] = useState("Drugs");

  const handleHighlight = (category) => {
    setHighlighted(category);
  }

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <header className="fixed top-0 h-[5rem] w-full flex 
        items-center justify-between z-10 p-4">
        <Link to="/">
          <img src={logo} width={55} height={55} alt="TrustCare MS logo" className="ml-2 cursor-pointer" />
        </Link>

        <Button className="w-[3rem] flex items-center justify-center p-2 border-2 border-[#C0E6BA]
          cursor-pointer md:hidden mr-2" onClick={handleClick}>
          <FontAwesomeIcon icon={menuState?faClose:faBars} />
        </Button>

        <nav className="hidden w-4/5 md:flex items-center relative font-semibold text-[#4CA771]">
          <div className="flex w-3/4 justify-evenly text-2xl">
            {categories.map((category, index) => (
              <h3 key={index} className={`cursor-pointer ${category === highlighted ? 'border-b-2 border-[#4CA771]' : ''}`}
                onClick={() => {handleHighlight(category)}}>
                {category}
              </h3>
            ))}
          </div>
        </nav>
        <div className={`${menuState? "flex" : "hidden"} md:hidden absolute w-full min-h-[40rem] bg-[#4CA771] top-20 p-6
        flex-col items-center justify-evenly z-10`}>
          {
            categories.map((category, index) => (
              <h3 key={index} className="cursor-pointer text-2xl"
                onClick={() => {handleHighlight(category)}}>
                {category}
              </h3>
            ))
          }
      </div>
      </header>
      <div className="placeholder-div h-[6rem]"></div>
      <section className="w-full h-5/6">
            {highlighted === "Drugs" && <Drugs />}
            {highlighted === "Non-Drugs" && <NonDrugs />}
            {highlighted === "Equipment" && <Equipment />}
      </section>      
    </div>
  )
}

export default Store
