"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { navLinks, navSectionIds } from "./navLinks";
import { useActiveSection } from "../hooks/useActiveSection";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number>(0);
  const activeSection = useActiveSection(navSectionIds);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const closeMenu = () => setNavbarOpen(false);

  return (
    <div className="fixed top-3 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-50">
      <nav
        className={`nav-cyber ${scrolled ? "nav-cyber-scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <div className="relative z-10 flex flex-wrap items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <Link
            href="/"
            className="nav-logo-glow flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm"
          >
            <Image
              src="/images/gijax_logo.png"
              className="cursor-pointer w-20 sm:w-24 lg:w-[130px] h-auto"
              alt="Gibran Fasha Ghazanfar logo"
              width={150}
              height={150}
              priority
            />
          </Link>

          <div className="block md:hidden">
            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="btn-cyber btn-cyber-secondary px-3 py-2 min-h-[40px] min-w-[40px]"
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
              aria-expanded={navbarOpen}
            >
              <span className="btn-cyber-label">
                {navbarOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </span>
            </button>
          </div>

          <div className="hidden md:block md:w-auto" id="navbar">
            <ul className="flex flex-row items-center gap-1 lg:gap-2">
              {navLinks.map((navLink) => (
                <li key={navLink.href}>
                  <NavLink
                    href={navLink.href}
                    title={navLink.title}
                    icon={navLink.icon}
                    isActive={activeSection === navLink.sectionId}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`md:hidden nav-cyber-dropdown overflow-hidden transition-all duration-300 ease-in-out ${
            navbarOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navbarOpen && (
            <MenuOverlay
              links={navLinks}
              activeSection={activeSection}
              onNavigate={closeMenu}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
