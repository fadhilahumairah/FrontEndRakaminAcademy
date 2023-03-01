import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Contact() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">Contact Us</h1>

      <div className="flex flex-row gap-8 mt-4 justify-center">
        <BsFacebook size={25} />
        <BsInstagram size={25} />
        <BsTwitter size={25} />
      </div>
    </div>
  );
}

export default Contact;
