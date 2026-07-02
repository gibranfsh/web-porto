"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  HeartIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

const quickLinks = [
  { href: "#about", label: "About Me" },
  { href: "#tech_stacks", label: "Tech Stacks" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experience" },
  { href: "#awards", label: "Awards" },
];

const Footer = () => {
  const reducedMotion = usePrefersReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const currentYear = new Date().getFullYear();
  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      };

  return (
    <footer className="footer-cyber text-white py-16 px-4 sm:px-6 lg:px-8 mt-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent z-10" />

      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
        <button
          type="button"
          onClick={scrollToTop}
          className="footer-back-top"
          aria-label="Back to top"
        >
          <ChevronUpIcon className="footer-back-top-icon" />
        </button>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...motionProps} className="footer-panel">
            <p className="font-mono text-xs uppercase tracking-widest text-red-400/90 mb-2">
              {"// Contact"}
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              Get In Touch
            </h3>

            <p className="text-zinc-400 mb-6 max-w-lg text-sm sm:text-base">
              I&apos;m open to collaborations within my expertise and new
              opportunities for career development. Feel free to reach out!
            </p>

            <div className="space-y-3">
              <a
                href="mailto:gibran.fsh@gmail.com"
                className="footer-contact-row group"
              >
                <div className="footer-contact-icon">
                  <EnvelopeIcon className="h-5 w-5 text-red-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Email
                  </p>
                  <p className="text-white text-sm sm:text-base group-hover:text-red-400 transition-colors break-all">
                    gibran.fsh@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+6281311229890" className="footer-contact-row group">
                <div className="footer-contact-icon">
                  <PhoneIcon className="h-5 w-5 text-red-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Phone
                  </p>
                  <p className="text-white text-sm sm:text-base group-hover:text-red-400 transition-colors">
                    +62 813 1122 9890
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.1 }}
            className="footer-panel"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-red-400/90 mb-2">
              {"// Navigate"}
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              Quick Links
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link-cyber py-1">
                  {link.label}
                </a>
              ))}
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-red-400/90 mb-3">
              {"// Social"}
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/gibranfsh"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-cyber"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/gibran-fasha-ghazanfar"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-cyber"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/gibranfg"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-cyber"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-red-600/20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-mono text-xs text-zinc-500">
              {`// © ${currentYear} Gibran Fasha Ghazanfar — all rights reserved`}
            </p>
            <p className="font-mono text-xs text-zinc-500 flex items-center">
              Built with{" "}
              <HeartIcon className="h-3.5 w-3.5 text-red-500 mx-1.5" /> Next.js
              &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
