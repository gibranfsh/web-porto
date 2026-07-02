"use client";

import NavLink from "./NavLink";
import { motion } from "framer-motion";
import type { NavLinkItem } from "./navLinks";

type MenuOverlayProps = {
  readonly links: NavLinkItem[];
  readonly activeSection: string;
  readonly onNavigate?: () => void;
};

const MenuOverlay = ({ links, activeSection, onNavigate }: MenuOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="relative z-10 py-4 px-2"
    >
      <ul className="flex flex-col items-stretch gap-1">
        {links.map((link, index) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex justify-center"
          >
            <NavLink
              href={link.href}
              title={link.title}
              icon={link.icon}
              isActive={activeSection === link.sectionId}
              onNavigate={onNavigate}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
