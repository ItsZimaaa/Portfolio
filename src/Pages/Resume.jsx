import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaTools, FaChartLine } from "react-icons/fa";

export default function Resume() {
  const experiences = [
    {
      role: "Front-End Developer",
      company: "Creative Studio",
      period: "2023 – Present",
      desc: "Developing modern, responsive web apps using React, Tailwind, and Framer Motion. I focus on animations, user experience, and performance optimization for client-facing projects.",
    },
    {
      role: "UI/UX Designer",
      company: "DesignSphere",
      period: "2022 – 2023",
      desc: "Designed intuitive interfaces and interactive prototypes for web and mobile applications. Focused on accessibility, motion design, and improving conversion rates through user testing.",
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "2021 – 2022",
      desc: "Collaborated with startups and small businesses to create unique brand identities and high-quality websites tailored to their goals and audience.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2019 – 2023",
      desc: "Specialized in front-end development, UI/UX design, and web application architecture. Graduated with honors.",
    },
    {
      degree: "Design Foundations",
      school: "Online Course",
      period: "2021",
      desc: "Completed a professional design course focusing on color theory, typography, and interactive motion design.",
    },
  ];

  const skills = [
    { name: "React / Next.js", level: "90%" },
    { name: "Tailwind CSS / SCSS", level: "95%" },
    { name: "UI / UX Design", level: "85%" },
    { name: "Framer Motion / GSAP", level: "80%" },
    { name: "JavaScript / TypeScript", level: "88%" },
    { name: "Node.js / API Integration", level: "75%" },
  ];

  return (
    <section className="relative bg-white rounded-3xl px-6 py-16 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ff451a]/10 to-[#ffa202]/10 blur-2xl -z-10"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          My <span className="text-[#ff451a]">Resume</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Here’s a glimpse of my journey — a blend of design passion, development skills, and constant learning.
          I believe in crafting experiences that connect technology and emotion through clean, purposeful interfaces.
        </p>
      </motion.div>

      {/* Experience */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <FaBriefcase className="text-[#ff451a] text-3xl" />
          <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-4 border-[#ff451a] pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-[#ff451a] rounded-full left-[-6px] top-3"></div>
              <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
              <p className="text-gray-500 text-sm mb-2">
                {exp.company} — {exp.period}
              </p>
              <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <FaGraduationCap className="text-[#ffa202] text-3xl" />
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-4 border-[#ffa202] pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-[#ffa202] rounded-full left-[-6px] top-3"></div>
              <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-500 text-sm mb-2">
                {edu.school} — {edu.period}
              </p>
              <p className="text-gray-600 leading-relaxed">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <FaTools className="text-[#ff451a] text-3xl" />
          <h2 className="text-3xl font-bold text-gray-800">Skills & Tools</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex justify-between text-gray-700 font-medium mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="h-2 bg-gradient-to-r from-[#ff451a] to-[#ffa202] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-24"
      >
        <h3 className="text-3xl font-semibold mb-4">
          Let’s <span className="text-[#ff451a]">Collaborate</span>!
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Interested in working together or want to see a detailed resume?  
          I’d love to connect and discuss how I can bring your next project to life.
        </p>
        <button className="px-8 py-3 bg-[#ff451a] text-white rounded-full font-semibold hover:bg-[#ffa202] transition-all shadow-md">
          Download CV
        </button>
      </motion.div>
    </section>
  );
}
