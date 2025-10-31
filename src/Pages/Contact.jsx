import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-white mt-8 p-10 rounded-3xl shadow-lg overflow-hidden relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ff451a] to-[#ffa202] bg-clip-text text-transparent">
          Let’s Build Something Great Together 🚀
        </h1>
        <p className="text-gray-500 text-lg mt-4 max-w-2xl">
          Have a project in mind or just want to connect? Drop me a message below.
          I’m always open to discussing new ideas, creative projects, or opportunities to collaborate.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="mt-10 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition">
          <FaEnvelope className="text-3xl text-[#ff451a] mb-3" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600">hello@devgroup.com</p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition">
          <FaPhoneAlt className="text-3xl text-[#ffa202] mb-3" />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-600">+998 90 123 45 67</p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition">
          <FaMapMarkerAlt className="text-3xl text-[#ff451a] mb-3" />
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-gray-600">Tashkent, Uzbekistan</p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="mt-12 grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <label className="block text-gray-600 mb-2 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffa202] transition"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2 font-medium">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff451a] transition"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-600 mb-2 font-medium">Your Message</label>
          <textarea
            placeholder="Write your message here..."
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffa202] transition"
          />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <motion.button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-[#ff451a] to-[#ffa202] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message ✉️
          </motion.button>
        </div>
      </motion.form>

      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff451a]/10 to-[#ffa202]/10 blur-3xl -z-10"></div>
    </section>
  );
}
