import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const NavDropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-white hover:text-[#C8973A] transition-colors duration-200 text-sm font-normal tracking-wide">
        {label}
        <FiChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-xl py-2 min-w-[190px] z-50 border border-gray-100">
          {items.map((item, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FBF5E6] hover:text-[#C8973A] transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]">
      <div className="w-full mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[60px]">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #D4A84B 0%, #A8731A 100%)",
              }}
            >
              <span className="text-white font-bold text-xs font-sans">AP</span>
            </div>

            <span className="text-white font-sans text-sm font-semibold tracking-wide">
              Ada Psychiatry
            </span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-7">
              <NavDropdown
                label="Who we are"
                items={["About Us", "Our Team", "Our Mission"]}
              />

              <NavDropdown
                label="Who we treat"
                items={[
                  "Mental Health",
                  "Addiction & Recovery",
                  "Weight Management",
                ]}
              />

              <a
                href="#services"
                className="text-white hover:text-[#C8973A] transition-colors duration-200 text-sm font-normal tracking-wide"
              >
                Services
              </a>

              <NavDropdown
                label="Resources"
                items={["Blog", "FAQs", "Fees and Insurance"]}
              />
            </div>

            <a
              href="#contact"
              className="text-black text-sm font-medium px-5 py-1.5 rounded-full transition-all duration-200 hover:brightness-110 whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50%, #C18C2C 100%)",
              }}
            >
              Book an Appointment
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-t border-gray-800 px-6 py-4 space-y-1">
          {["Who we are", "Who we treat", "Services", "Resources"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center justify-between text-white hover:text-[#C8973A] text-sm py-3 border-b border-gray-800 last:border-0"
              >
                {item}
                <FiChevronDown size={14} />
              </a>
            ),
          )}
          <div className="pt-3">
            <a
              href="#"
              className="block w-full text-center text-white text-sm font-medium px-5 py-3 rounded-full"
              style={{
                background: "linear-gradient(135deg, #D4A84B 0%, #A8731A 100%)",
              }}
            >
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
