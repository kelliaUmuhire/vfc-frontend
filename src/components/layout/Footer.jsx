import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-little-green p-10 md:p-20 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      {/* Left Side: Newsletter */}
      <div className="w-full md:w-1/2">
        <Newsletter />
      </div>

      {/* Right Side: Footer Content */}
      <div className="w-1/2 space-y-8 text-primary font-footer text-footer leading-footer">
        <div className="flex items-start space-x-20">
          <div>
            <h3 className="text-lg font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>History</li>
              <li>Vision</li>
              <li>Leaders</li>
              <li>Beliefs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">MINISTRIES</h3>
            <ul className="space-y-2">
              <li>Kids</li>
              <li>Youths</li>
              <li>Women</li>
              <li>Men</li>
              <li>ARTS</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="Logo" className="ml-auto h-12" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">CONTACT US</h3>
          <p>+1 (999) 999-99-99</p>
          <p>victoryfaithchurchesint@gmail.com</p>
          <p>Nigeria</p>
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 border border-primary rounded-md w-full bg-little-green text-primary focus:outline-none focus:border-primary"
            />
            <button className="absolute inset-y-0 right-2 flex items-center text-primary">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <div className="flex space-x-8 text-center">
            <span>SERMONS</span>
            <span>EVENTS</span>
            <span>GIVE</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-primary bg-little-green p-3 rounded-full border-2 border-primary hover:bg-primary hover:text-little-greenbg-little-green"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-primary bg-little-green p-3 rounded-full border-2 border-primary hover:bg-primary hover:text-little-greenbg-little-green"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-primary bg-little-green p-3 rounded-full border-2 border-primary hover:bg-primary hover:text-little-greenbg-little-green"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-primary bg-little-green p-3 rounded-full border-2 border-primary hover:bg-primary hover:text-little-greenbg-little-green"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <p className="text-footer leading-footer font-footer text-primary">
            &copy; 2024 Copyright
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
