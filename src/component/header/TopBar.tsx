import React from "react";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
function TopBar() {
  return (
    <div className="">
      <div className="custom-container bg-[#161439] h-12 flex justify-between items-center">
        <div
          title="address-email-box"
          className="flex gap-4 items-center h-full"
        >
          <div title="addressDiv" className="flex items-center gap-2">
            <span>
              <IoLocationOutline color="#adb5bd" size={18} />
            </span>
            <span className="text-[#E6EAEF] text-sm12">
              589 5th Ave , NY 10024, USA
            </span>
          </div>
          <div title="emailDiv" className="flex items-center gap-2">
            <span>
              <IoMailOutline color="#adb5bd" size={18} />
            </span>
            <span className="text-[#E6EAEF] text-sm12">info@skildemo.com</span>
          </div>
        </div>
        <div title="number-links-box" className="flex items-center gap-4">
          <div title="addressDiv" className="flex items-center gap-2">
            <span>
              <MdOutlinePhoneInTalk color="#adb5bd" size={18} />
            </span>
            <span className="text-[#E6EAEF] text-sm12">
              Call Us : +123 5555 005
            </span>
          </div>{" "}
          <div title="addressDiv" className="flex items-center gap-2">
            <span className="text-[#adb5bd] text-sm12">Follow Us On :</span>
            <span className="text-[#E6EAEF] flex items-center gap-2 text-sm12">
              <span>
                <FaFacebookF size={14} />
              </span>
              <span>
                <FaXTwitter size={14} />
              </span>
              <span>
                <FaWhatsapp size={14} />
              </span>
              <span>
                <FaLinkedinIn size={14} />
              </span>
              <span>
                <FaYoutube size={14} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
