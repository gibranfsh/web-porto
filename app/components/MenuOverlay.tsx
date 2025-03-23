"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

interface Link {
  href: string;
  title: string;
}

const MenuOverlay = ({ links }: { links: Link[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-900/95 backdrop-blur-sm py-4"
    >
      <ul className="flex flex-col items-center space-y-4">
        {links.map((link, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full text-center"
          >
            <NavLink href={link.href} title={link.title} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
