import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#4CA771] mt-24 px-12 py-6 text-[#343a40]">
      <div className="w-full h-4/5 flex flex-wrap justify-evenly items-center mt-4">
        <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">
            TrustCare Medical Supply
          </h2>
          <div className="icons w-full flex flex-wrap justify-evenly items-center mt-4">
              <span className="flex flex-wrap items-center">
                <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                <p>+233 545 022 250</p>
              </span>
              <span className="flex flex-wrap items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-2" />
                <p>trustcaremsup21@gmail.com</p>
              </span>
          </div>
        </div>
        <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">
            Quick Links
          </h2>
          <ul>
            <li className="link">
              <Link to="/store">Store</Link>
            </li>
            <li className="link">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/5 border-t-2 border-[#495057] mx-auto mt-16 mb-auto">
        <h3 className="text-center text-lg font-semibold mt-4">
          © 2025 TrustCare Medical Supply. All rights reserved.
        </h3>
      </div>
    </footer>
  )
}

export default Footer
