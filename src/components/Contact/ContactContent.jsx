import React from "react";

//icons

import { BsVoicemail } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

function ContactContent() {
  return (
    <div className="col-span-2">
      <div className="flex items-center gap-5 text-2xl">
        <BsVoicemail size={30} /> rayanjaberi@gmail.com
      </div>
      <div className="flex items-center gap-5 text-2xl mt-5">
        <AiOutlinePhone size={30} /> +98-920-757-6900
      </div>
    </div>
  );
}

export default ContactContent;
