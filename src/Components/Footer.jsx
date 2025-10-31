import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-[#ff451a]/10 via-[#ffa202]/10 to-[#ff451a]/10 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Animated text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff451a] to-[#ffa202] bg-clip-text text-transparent"
        >
          Developers Group
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Building the future of the web — one pixel and one line of code at a time.
          Let’s make digital experiences that truly stand out!
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-6 mt-8 text-2xl"
        >
          <a href="#" className="text-gray-600 hover:text-[#ff451a] transition">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#ffa202] transition">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-500 transition">
            <FaDribbble />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#ff451a] to-[#ffa202] mx-auto mt-8 rounded-full"></div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-sm text-gray-500 dark:text-gray-500"
        >
          © {new Date().getFullYear()} <span className="font-semibold">Developers Group</span>. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
