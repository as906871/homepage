import React from "react";
import { footerLinks, socialIcons } from "../../data/Data";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[#DAA520] font-semibold text-lg mb-4 tracking-wide">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>

                     <button
                    key={i}
                   className="text-gray-400 text-xs hover:text-[#C9A84C] transition-colors duration-200"
                    onClick={() => console.log(i)}
                  >
                    {link}
                  </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[#DAA520] font-semibold text-lg mb-4 tracking-wide">
              Business Hours
            </h4>
            <p className="text-gray-400 text-xs mb-1">Monday – Thursday</p>
            <p className="text-gray-400 text-xs">08:00 am – 4:00 pm</p>

            <h4 className="text-[#DAA520] font-semibold text-lg mt-6 mb-3 tracking-wide">
              For Careers
            </h4>
            <p className="text-gray-400 text-xs mb-1">
              Interested in joining the ADA Team?
            </p>
            <a
              href="mailto:Career@adapsychiatry.com"
              className="text-[#C9A84C] text-xs hover:underline"
            >
              Career@adapsychiatry.com
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-serif font-bold text-sm">
                  AP
                </span>
              </div>
              <span className="text-white font-serif text-base font-semibold tracking-wide leading-tight">
                ADA PSYCHIATRY
              </span>
            </div>

            <div className="mb-4">
              <h5 className="text-[#DAA520] text-md font-semibold mb-1 tracking-wide">
                Locate us
              </h5>
              <p className="text-gray-400 text-xs leading-relaxed">
                1820 E Ray Road, STE N107,
                <br />
                Chandler, Arizona 85225
              </p>
              <p className="text-gray-400 text-xs mt-1">Phone: 480-526-9292</p>
            </div>

            <div>
              <h5 className="text-[#C9A84C] text-md font-semibold mb-3 tracking-wide">
                Follow us
              </h5>
              <div className="flex items-center gap-3">
                {socialIcons.map((s, i) => (
                  <button
                    key={i}
                    className="text-gray-400 hover:text-[#C9A84C] transition-colors duration-200 text-base"
                    onClick={() => console.log(s)}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-600 text-xs">
            © Ada Psychiatry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
