import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-4 rounded-t-3xl bg-linear-to-r from-[#ff451a]/10 via-[#ffa202]/10 to-[#ff451a]/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#ff451a] to-[#ffa202] bg-clip-text text-transparent"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-6 mt-8 text-2xl"
        >
          <p className="text-gray-600 hover:text-[#ff451a] transition">
            <FaGithub />
          </p>
          <p className="text-gray-600 hover:text-[#ffa202] transition">
            <FaLinkedin />
          </p>
          <p className="text-gray-600 hover:text-pink-500 transition">
            <FaInstagram />
          </p>
          <p className="text-gray-600 hover:text-purple-500 transition">
            <FaDribbble />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
