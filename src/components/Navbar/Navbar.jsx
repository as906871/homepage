import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../../data/Data";

const NavDropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handle);
    return () => document.removeEventListener("pointerdown", handle);
  }, []);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div
      ref={ref}
      className="relative pt-2"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 text-white hover:text-[#C8973A] transition text-sm">
        {label}
        <FiChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`
          absolute top-full left-0 mt-0
          bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-50
          border border-gray-100 origin-top
          transition-all duration-200 ease-out
          ${
            open
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-95 pointer-events-none"
          }
        `}
      >
        {items.map((item, i) => (
          <button
            key={i}
            className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#FBF5E6] hover:text-[#C8973A]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};


const MobileNavItem = ({ label, items, href, closeMenu }) => {
  const [open, setOpen] = useState(false);

  if (href) {
    return (
      <a
        href={href}
        onClick={closeMenu}
        className="block text-white py-3 border-b border-gray-800"
      >
        {label}
      </a>
    );
  }

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-white py-3"
      >
        {label}
        <FiChevronDown
          className={`transition ${open ? "rotate-180 text-[#C8973A]" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        {items.map((item, i) => (
          <button
            key={i}
            onClick={closeMenu}
            className="block w-full text-left text-gray-400 py-2 pl-4 hover:text-[#C8973A]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111] shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[60px]">

            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#D4A84B] to-[#A8731A]">
                <span className="text-white text-xs font-bold">AP</span>
              </div>
              <span className="text-white text-sm font-semibold">
                Ada Psychiatry
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link, i) =>
                link.items ? (
                  <NavDropdown key={i} {...link} />
                ) : (
                  <a
                    key={i}
                    href={link.href}
                    className="text-white hover:text-[#C8973A] text-sm transition"
                  >
                    {link.label}
                  </a>
                )
              )}

              <a
                href="#contact"
                className="text-black text-sm px-5 py-1.5 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] hover:brightness-110 transition"
              >
                Book Appointment
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-[#111111] px-4 pb-6">
            {NAV_LINKS.map((link, i) => (
              <MobileNavItem
                key={i}
                {...link}
                closeMenu={() => setMobileOpen(false)}
              />
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-4 text-black font-semibold py-3 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C]"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      <div className="h-[60px]" />
    </>
  );
};

export default Navbar;