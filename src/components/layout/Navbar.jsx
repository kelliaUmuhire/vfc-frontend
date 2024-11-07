export default function Navbar() {
  const toggleMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("flex");
  };
  return (
    <nav className="absolute top-0 z-10 w-full flex justify-between items-center flex-wrap lg:py-8 lg:px-12 py-8 px-6 bg-transparent">
      <img src="/images/logo.svg" alt="Logo" className="lg:hidden" />
      <button className="lg:hidden" onClick={toggleMenu}>
        Menu
      </button>
      <div
        id="menu"
        className="w-full lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-3 lg:mt-0 mt-3 lg:flex hidden"
      >
        <a href="/">About</a>
        <a href="/">Ministries</a>
        <a href="/">Sermons</a>
        <img src="/images/logo.svg" alt="Logo" className="hidden lg:block" />
        <a href="/">Contact</a>
        <a href="/">Events</a>
        <button className="bg-primary text-white px-8 py-2 rounded-md font-recoleta">
          DONATE
        </button>
      </div>
    </nav>
  );
}
