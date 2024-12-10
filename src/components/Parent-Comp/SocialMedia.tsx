import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social xs:flex justify-end items-center flex-col p-2 hidden">
    <div className="w-10 h-10 rounded-full bg-white mx-[0.25px] my-0 border border-[6b7688] flex items-center justify-center transition ease-in-out hover:bg-[#313bac] border-[#313bac]">
      <BsTwitter className="w-4 h-4 hover:text-white text-[#6b7688]" />
    </div>
    <div className="w-10 h-10 rounded-full bg-white mx-[0.25px] my-0 border border-[6b7688] flex items-center justify-center transition ease-in-out hover:bg-[#313bac] border-[#313bac]">
      <FaFacebookF className="w-4 h-4 hover:text-white text-[#6b7688]" />
    </div>
    <div className="w-10 h-10 rounded-full bg-white mx-[0.25px] my-0 border border-[6b7688] flex items-center justify-center transition ease-in-out hover:bg-[#313bac] border-[#313bac]">
      <BsInstagram className="w-4 h-4 hover:text-white text-[#6b7688]" />
    </div>
  </div>
);

export default SocialMedia;