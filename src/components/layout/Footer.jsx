import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-little-green p-10 md:p-20 flex justify-between">
      <div className="w-1/2"></div>

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
          <p>hello@loremipsum.com</p>
          <p>London</p>
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 border border-[#0C5220] rounded-md w-full bg-[#F9F8EA] text-[#0C5220] focus:outline-none focus:border-[#0C5220]"
            />
            <button className="absolute inset-y-0 right-2 flex items-center text-[#0C5220]">
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
              className="text-[#0C5220] bg-[#F9F8EA] p-3 rounded-full border-2 border-[#0C5220] hover:bg-[#0C5220] hover:text-[#F9F8EA]"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#0C5220] bg-[#F9F8EA] p-3 rounded-full border-2 border-[#0C5220] hover:bg-[#0C5220] hover:text-[#F9F8EA]"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-[#0C5220] bg-[#F9F8EA] p-3 rounded-full border-2 border-[#0C5220] hover:bg-[#0C5220] hover:text-[#F9F8EA]"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#0C5220] bg-[#F9F8EA] p-3 rounded-full border-2 border-[#0C5220] hover:bg-[#0C5220] hover:text-[#F9F8EA]"
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
