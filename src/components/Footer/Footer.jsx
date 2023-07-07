import React from "react";

//icons

import { BiLogoTelegram } from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-[#222]">
      <div className="container mx-auto flex justify-between items-center py-5">
        <div className="flex gap-8 text-white">
          <a href="#" className="hover:text-[#03df83] transition">
            Telegram
          </a>
          <a href="#" className="hover:text-[#03df83] transition">
            Instagram
          </a>
          <a href="#" className="hover:text-[#03df83] transition">
            Linkedin
          </a>
        </div>

        <p className="text-white">© 2023 All rights reserved. Rayan</p>
      </div>
    </div>
  );
}

export default Footer;
