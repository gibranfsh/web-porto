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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the active section based on the scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 lg:px-32 py-4">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          <Image
            src="/images/gijax_logo.png"
            className="cursor-pointer w-24 lg:w-[150px]"
            alt="navbar-logo"
            width={150}
            height={150}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink
                  href={navLink.href}
                  title={navLink.title}
                  isActive={navLink.title.toLowerCase() === activeSection}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
