"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaGithub className="h-5 w-5" />, href: "#", label: "GitHub" },
  { icon: <FaTwitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <FaInstagram className="h-5 w-5" />, href: "#", label: "Instagram" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-poilcy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "FAQ", href: "/faq" },
    ]
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="relative border-t border-purple-500/20 bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Social Links */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <Link href="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Luvsab
              </span>
            </Link>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors hover:border-purple-500 hover:bg-gray-900 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8"
          >
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-gray-300">{section.title}</h3>
                <div className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-4 border-t border-purple-500/10 text-center md:text-left"
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Luvsab. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 