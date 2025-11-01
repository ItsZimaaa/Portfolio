import { motion } from "framer-motion";
import GradientText from "../Components/GradientText";
import hero from "../assets/Hero.jpg";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative overflow-hidden mt-4 bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-center">

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ff451a]/20 rounded-full blur-[120px] animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffa202]/20 rounded-full blur-[140px] animate-[float_6s_ease-in-out_infinite] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:w-[45%] space-y-6 z-10"
      >
        <GradientText
          colors={["#ff451a", "#ffa202", "#ff451a", "#ffa202"]}
          animationSpeed={7}
          showBorder={false}
          className="text-5xl md:text-6xl font-bold"
        >
          Developers Group!
        </GradientText>

        <p className="text-gray-500 uppercase tracking-[4px] text-sm">
          Crafting digital magic ✨
        </p>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          We are <span className="text-[#ff451a] font-semibold">Front-End Developers</span> and
          <span className="text-[#ffa202] font-semibold"> Designers</span> passionate about creating
          visually stunning, user-focused digital experiences. We love turning ideas into clean,
          interactive interfaces that feel modern and intuitive.
        </p>


        <div className="flex flex-wrap gap-3 mt-4">
          {["React", "Tailwind", "Framer Motion", "CorelDraw", "Adobe Photoshop", "Figma"].map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #ff7a1a" }}
            className="px-6 py-3 button"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
            className="px-6 py-3 button2"
          >
            Contact Me
          </motion.button>
        </div>

        <div className="flex gap-5 text-2xl text-gray-500 mt-6">
          <a className="hover:text-black transition"><FaGithub /></a>
          <a className="hover:text-blue-600 transition"><FaLinkedin /></a>
          <a className="hover:text-pink-500 transition"><FaDribbble /></a>
        </div>

        <div className="flex gap-10 mt-10">
          <div>
            <h3 className="text-4xl font-bold text-[#ff451a]">3+</h3>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#ffa202]">40+</h3>
            <p className="text-gray-500 text-sm">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#ff451a]">20+</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-[45%] mt-10 md:mt-0"
      >
        <img
          src={hero}
          alt="Hero"
          className="rounded-[2rem] shadow-lg w-full animate-[float_5s_ease-in-out_infinite]"
        />
      </motion.div>

      <div className="absolute bottom-0 w-full left-0 right-0 py-4 bg-white/40 backdrop-blur-lg border-t border-gray-200">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          {["Google", "Meta", "OpenAI", "Adobe"].map((brand, i) => (
            <span key={i} className="text-gray-600 font-medium text-sm md:text-base">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
