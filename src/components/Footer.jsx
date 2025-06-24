import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#4CA771] mt-24 p-12 text-[#343a40]">
      <div className="w-full h-4/5 flex flex-wrap justify-evenly items-center">
        <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">
            TrustCare Medical Supply
          </h2>
          <div className="icons w-full flex justify-evenly items-center mt-4">
            <a href="#" className="mx-2">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">
            Quick Links
          </h2>
          <ul>
            <li className="link">
              <a href="#">Shop</a>
            </li>
            <li className="link">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">
            My Account
          </h2>
          <ul>
            <li className="link">
              <a href="#">My Account</a>
            </li>
            <li className="link">
              <a href="#">Order History</a>
            </li>
            <li className="link">
              <a href="#">Wish List</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/5 border-t-2 border-[#495057] mx-auto mt-16">
        <h3 className="text-center text-lg font-semibold mt-4">
          © 2025 TrustCare Medical Supply. All rights reserved.
        </h3>
      </div>
    </footer>
  )
}

export default Footer
