import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white border border-t-[#33353F] border-l-transparent border-r-transparent ">
      <div className="container p-12 flex justify-between">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
        <p className="text-slate-600">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
