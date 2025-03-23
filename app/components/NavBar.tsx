"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    href: "#about",
    title: "About Me",
  },
  {
    href: "#tech_stacks",
    title: "Tech Stacks",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#experiences",
    title: "Experiences",
  },
  {
    href: "#awards",
    title: "Awards",
  },
  // {
  //   href: "/menfess",
  //   title: "Menfess",
  // },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
      scrolled 
        ? "bg-[#121212]/95 backdrop-blur-sm shadow-lg" 
        : "bg-[#121212]"
    }`}>
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 sm:px-8 lg:px-32 py-4">
        <Link href={"/"} className="text-5xl text-white font-semibold flex items-center">
          <Image
            src="/images/gijax_logo.png"
            className="cursor-pointer w-24 lg:w-[150px] transition-all duration-300 hover:scale-105"
            alt="navbar-logo"
            width={150}
            height={150}
            priority
          />
        </Link>
        
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors"
            aria-label={navbarOpen ? "Close Menu" : "Open Menu"}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink href={navLink.href} title={navLink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          navbarOpen 
            ? "max-h-[400px] opacity-100" 
            : "max-h-0 opacity-0"
        }`}
      >
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </div>
    </nav>
  );
};

export default NavBar;
