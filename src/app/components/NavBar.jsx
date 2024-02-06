"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 px-4  ">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="mobilemenu block md:hidden">
          {!navbarOpen ? (
            <button
              className="flex items-center  px-3 py-2 border rounded
            border-slate-200 text-slate-200
            hover:text-white hover:border-white"
              onClick={() => {
                alert("clicked");
                setNavbarOpen(true);
              }}
            >
              <Bars3Icon className="h-3 w-5" />
            </button>
          ) : (
            <button
              className="flex items-center  px-3 py-2 border rounded
            border-slate-200 text-slate-200
            hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-3 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul
            className="flex p-4 
            md:p-0 md:flex-row
            md:space-x-8 mt-0"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink key={index} href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default NavBar;
