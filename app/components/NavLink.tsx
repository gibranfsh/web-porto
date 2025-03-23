"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const checkActive = () => {
      if (href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isInView = (
            rect.top <= 100 && 
            rect.bottom >= 100
          );
          setIsActive(isInView);
        }
      } else {
        setIsActive(window.location.pathname === href);
      }
    };
    
    checkActive();
    window.addEventListener('scroll', checkActive);
    
    return () => {
      window.removeEventListener('scroll', checkActive);
    };
  }, [href]);
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`
        relative block py-2 pl-3 pr-4 text-lg rounded lg:p-0 
        transition-all duration-300 ease-in-out
        ${isActive 
          ? "text-red-500 font-medium" 
          : "text-[#ADB7BE] hover:text-white"
        }
      `}
    >
      {title}
      <span 
        className={`
          absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 
          transition-all duration-300 ease-out
          ${isActive ? "w-full" : ""}
        `}
      />
    </Link>
  );
};

export default NavLink;