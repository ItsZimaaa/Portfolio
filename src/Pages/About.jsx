import { motion } from "framer-motion";
import { FaReact, FaCode, FaAward, FaFigma, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative mt-10 bg-white rounded-3xl p-8 md:p-16 overflow-hidden">
      {/* 🔮 Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ffa202]/10 to-[#ff451a]/10 blur-2xl -z-10"></div>

      {/* 🧠 Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          About <span className="text-[#ff451a]">Me</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          I’m a developer & designer passionate about crafting smooth, aesthetic and user-focused digital experiences.
        </p>
      </motion.div>

      {/* 👤 Personal Info */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-6">Who I Am 👇</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m a <span className="text-[#ff451a] font-semibold">Front-End Developer</span> and 
            <span className="text-[#ffa202] font-semibold"> UI/UX Designer</span> focused on bringing creativity into code.  
            <br /><br />
            I enjoy turning complex problems into clean, interactive, and functional experiences — with a deep attention to detail and design logic.
          </p>

          {/* 🧾 Quick Info */}
          <div className="grid grid-cols-2 gap-4 mt-8 text-gray-800">
            <div>
              <h4 className="font-semibold text-gray-500">Experience:</h4>
              <p>2+ Years</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-500">Location:</h4>
              <p>Tashkent, Uzbekistan</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-500">Freelance:</h4>
              <p>Available ✅</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-500">Email:</h4>
              <p>youremail@email.com</p>
            </div>
          </div>
        </motion.div>

        {/* 💬 Philosophy / Quote */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Philosophy 🧭</h3>
          <p className="text-gray-600 italic">
            “Good design is invisible — it guides, communicates, and connects people effortlessly.
            My goal is to make interfaces that *feel* as good as they look.”
          </p>
        </motion.div>
      </div>

      {/* 🧠 Skills */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-semibold mb-10 text-center">My Skills</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "React", value: 90 },
            { name: "Tailwind CSS", value: 85 },
            { name: "UI/UX Design", value: 80 },
            { name: "Framer Motion", value: 75 },
            { name: "JavaScript", value: 90 },
            { name: "HTML & CSS", value: 95 },
          ].map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-gray-600">{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-gradient-to-r from-[#ff451a] to-[#ffa202] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🕓 Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-10 text-center">My Journey</h3>
        <div className="relative border-l-4 border-[#ff451a] ml-6 space-y-10">
          {[
            {
              year: "2025",
              title: "Front-End Developer (Freelance)",
              desc: "Building performant, elegant, and modern web apps using React + Tailwind.",
            },
            {
              year: "2024",
              title: "UI/UX Design Intern",
              desc: "Worked on design systems, micro-interactions, and product prototypes.",
            },
            {
              year: "2023",
              title: "Started Web Development Journey",
              desc: "Discovered the beauty of React, animations, and minimal design.",
            },
          ].map((item, i) => (
            <div key={i} className="ml-6">
              <div className="absolute -left-3 top-2 w-6 h-6 bg-[#ff451a] rounded-full"></div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500 mb-1">{item.year}</p>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🏆 Achievements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-3xl font-semibold text-center mb-10">Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <FaAward />, title: "Top Rated Freelancer", desc: "Recognized for consistent high-quality work." },
            { icon: <FaLaptopCode />, title: "100+ Projects Completed", desc: "Delivered production-level web apps and designs." },
            { icon: <FaCode />, title: "Open Source Contributor", desc: "Helped build reusable UI components and libraries." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm text-center hover:shadow-md transition"
            >
              <div className="text-4xl text-[#ff451a] mb-4 mx-auto">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
