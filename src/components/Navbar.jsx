import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // state untuk burger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // fungsi untuk toggle burger menu
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Septian</div>

        {/* Burger Icon untuk tampilan mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}{" "}
            {/* Ikon burger/tutup */}
          </button>
        </div>

        {/* Links dan tombol di tampilan desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Contact Button (tampilan desktop) */}
        <button
          onClick={() => window.open("mailto:sptnfahmi@gmail.com")}
          className="hidden md:inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact Me
        </button>
      </div>

      {/* Menu yang muncul saat burger menu dibuka (tampilan mobile) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 mt-4">
          <a href="#home" onClick={toggleMenu} className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="hover:text-gray-400">
            About Me
          </a>
          <a
            href="#services"
            onClick={toggleMenu}
            className="hover:text-gray-400"
          >
            Services
          </a>
          <a
            href="#project"
            onClick={toggleMenu}
            className="hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-gray-400"
          >
            Contact
          </a>

          {/* Contact Button dalam burger menu */}
          <button
            onClick={() => window.open("mailto:sptnfahmi@gmail.com")}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
