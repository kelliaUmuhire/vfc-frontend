import { Link } from "react-router-dom";

export default function Navbar() {
  const toggleMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("flex");
  };
  return (
    <nav className="absolute top-0 z-30 w-full flex justify-between items-center flex-wrap lg:py-8 lg:px-12 py-8 px-6 bg-transparent text-base">
      <Link to="/">
        <img src="/images/logo.svg" alt="Logo" className="lg:hidden" />
      </Link>
      <button className="lg:hidden" onClick={toggleMenu}>
        Menu
      </button>
      <div
        id="menu"
        className="w-full lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-3 lg:mt-0 mt-3 lg:flex hidden lg:bg-transparent bg-little-green lg:py-0 py-10"
      >
        <div className="relative group">
          <span className="inline-flex items-center cursor-pointer">
            <span>About</span>
            <img src="/images/arrow-down.svg" className="mt-1 ml-1.5" />
          </span>
          <div className="absolute hidden group-hover:block bg-little-green shadow-lg rounded text-sm p-2">
            <Link to="/vision" className="block px-4 py-2">
              Vision
            </Link>
            <Link to="/beliefs" className="block px-4 py-2">
              Beliefs
            </Link>
            <Link to="/leaders" className="block px-4 py-2">
              Leaders
            </Link>
          </div>
        </div>
        <Link to="/sermons">Ministries</Link>
        <Link to="/sermons">Sermons</Link>
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className="hidden lg:block" />
        </Link>
        <Link to="/">Contact</Link>
        <Link to="/">Events</Link>
        <Link to="/donate">
          <button className="bg-primary text-white px-8 py-2 rounded-md font-recoleta">
            DONATE
          </button>
        </Link>
      </div>
    </nav>
  );
}
