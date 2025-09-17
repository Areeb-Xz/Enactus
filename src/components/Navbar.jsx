import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Our Impact"}
  ];

  return (
    <nav className="font-Urbanist bg-[#30333C] mt-[2vh] mx-[3.5vw] w-[93vw] h-[10vh] text-white text-3xl px-8 flex justify-between items-center rounded-full fixed top-0 z-100 border-yellow-400 border-1 shadow-[0_0_10px_2px_rgba(250,204,21,0.6)]">
      {/* Left logo */}
      <div className=" font-urbanist text-xl font-bold">Enactus</div>

      {/* Desktop links */}
      <ul className=" font-urbanist text-xl hidden md:flex space-x-6 ">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-yellow-400 transition duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Join Us button */}
      <div className="hidden md:block">
        <a
          href="#join"
          className="bg-[#fdf1c8] text-[#30333C] font-semibold px-6 py-1 rounded-full hover:bg-yellow-400 transition"
        >
          Join Us
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#30333c] flex flex-col items-center justify-center z-50">
          {/* Close button inside */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          <ul className="flex flex-col space-y-8 text-2xl font-semibold">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#join"
                className="bg-yellow-400 text-[#30333C]font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
