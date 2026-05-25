import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Doctors", link: "#doctors" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className="w-full bg-white px-6 relative z-30"
      style={{
        height: "40px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Main Row */}
      <div className="flex items-center justify-between h-full" >

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{ width: "36px", height: "36px", backgroundColor: "#2563eb" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold" style={{ color: "#1e3a8a" }}>
            Care<span style={{ color: "#2563eb" }}>Plus</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-16 ">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Button FIXED */}
          <a
            href="https://wa.me/1234567890?text=I%20would%20like%20to%20book%20an%20appointment"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white rounded-lg px-4 py-2"
            style={{ backgroundColor: "#2563eb" }}
          >
            Book Appointment
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-5 h-0.5 bg-gray-600"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 bg-gray-600"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-gray-600"
              style={{
                transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu FIXED */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white px-6 py-4 flex flex-col gap-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm text-gray-600 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://wa.me/1234567890?text=I%20would%20like%20to%20book%20an%20appointment"
            className="mt-2 text-white text-center py-2 rounded-lg"
            style={{ backgroundColor: "#2563eb" }}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;