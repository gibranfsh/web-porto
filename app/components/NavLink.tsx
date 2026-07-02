"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { NavIcon } from "./navLinks";
import { NAV_SCROLL_OFFSET } from "../hooks/useActiveSection";

type NavLinkProps = {
  readonly href: string;
  readonly title: string;
  readonly icon: NavIcon;
  readonly isActive: boolean;
  readonly onNavigate?: () => void;
};

const NavLink = ({ href, title, icon: Icon, isActive, onNavigate }: NavLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        window.scrollTo({
          top:
            section.getBoundingClientRect().top +
            window.pageYOffset -
            NAV_SCROLL_OFFSET,
          behavior: "smooth",
        });
      }
      onNavigate?.();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      className="nav-link-cyber"
    >
      <Icon className="nav-link-icon" aria-hidden="true" />
      {title}
    </Link>
  );
};

export default NavLink;
