"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const socialLinks = [
  { icon: <FaGithub className="h-6 w-6" />, href: "#", label: "GitHub" },
  { icon: <FaTwitter className="h-6 w-6" />, href: "#", label: "Twitter" },
  { icon: <FaInstagram className="h-6 w-6" />, href: "#", label: "Instagram" },
  { icon: <FaLinkedin className="h-6 w-6" />, href: "#", label: "LinkedIn" },
];

const footerLinks = [
  { title: "Product", links: ["Features", "Pricing", "Download", "Updates"] },
  { title: "Company", links: ["About", "Contact", "Privacy", "Terms"] },
  { title: "Resources", links: ["Blog", "Newsletter", "Support", "Docs"] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-500/10 bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-orange-500/5" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Luvsab
              </span>
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-sm">
              Experience the next generation of mobile innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="sr-only">{social.label}</span>
                  {React.cloneElement(social.icon, {
                    className: "h-5 w-5 sm:h-6 sm:w-6"
                  })}
                </motion.a>
              ))}
            </div>
          </div>
          {footerLinks.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href="#"
                      className="text-sm sm:text-base text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 border-t border-purple-500/10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Luvsab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 