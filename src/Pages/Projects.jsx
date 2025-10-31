import { motion } from "framer-motion";
import { FaLink, FaCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Creative Landing Page",
      desc: "A visually dynamic landing page built with React and Tailwind CSS, featuring smooth scroll animations and a minimal dark aesthetic.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      desc: "A modern, responsive online store with dynamic product filtering, cart functionality, and secure checkout experience.",
      tech: ["Next.js", "TypeScript", "Stripe API"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal brand website focused on interaction, clean layout, and performance optimization. Designed and coded from scratch.",
      tech: ["React", "Vite", "GSAP"],
      link: "#",
      github: "#",
    },
    {
      title: "3D Interactive Showcase",
      desc: "A 3D visual experience using Three.js and shaders, allowing users to interact with lighting, shapes, and perspective.",
      tech: ["Three.js", "GLSL", "React Three Fiber"],
      link: "#",
      github: "#",
    },
    {
      title: "Blog Platform",
      desc: "A markdown-based blogging system with CMS integration and SEO optimization for fast, search-friendly content delivery.",
      tech: ["Next.js", "Sanity", "SEO Tools"],
      link: "#",
      github: "#",
    },
    {
      title: "AI Chat Assistant",
      desc: "Built an AI-powered chat interface using OpenAI API and WebSocket, enabling real-time conversations and memory features.",
      tech: ["React", "Node.js", "OpenAI API"],
      link: "#",
      github: "#",
    },
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
          Featured <span className="text-[#ff451a]">Projects</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          A collection of my favorite works — blending design, code, and creativity.
          Each project represents a unique problem solved through thoughtful design
          and clean engineering.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="group bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-default border border-gray-100"
          >
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#ff451a] transition">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.link}
                className="flex items-center gap-2 text-[#ff451a] hover:text-[#ffa202] font-medium transition"
              >
                <FaLink /> Live
              </a>
              <a
                href={project.github}
                className="flex items-center gap-2 text-gray-600 hover:text-black font-medium transition"
              >
                <FaCode /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          My <span className="text-[#ff451a]">Approach</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-14">
          Every project starts with understanding your idea — and ends with a refined,
          meaningful product. I focus on a structured process that ensures both creativity
          and reliability from start to finish.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              step: "01",
              title: "Concept & Research",
              desc: "Understanding the client's vision, researching target users, and building the strategy for a purposeful design.",
            },
            {
              step: "02",
              title: "Design & Development",
              desc: "Creating wireframes, visual mockups, and translating them into high-quality code that performs beautifully.",
            },
            {
              step: "03",
              title: "Launch & Refine",
              desc: "Deploying with performance and SEO in mind, followed by user testing and improvements based on feedback.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#ffa202] transition"
            >
              <span className="text-5xl font-extrabold text-[#ffa202] opacity-70">
                {item.step}
              </span>
              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-24"
      >
        <h3 className="text-3xl font-semibold mb-4">
          Want to see more <span className="text-[#ff451a]">Projects</span>?
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          I’m always experimenting with new technologies and ideas. Check my GitHub
          for open-source projects or reach out if you'd like to collaborate.
        </p>
        <button className="px-8 py-3 bg-[#ff451a] text-white rounded-full font-semibold hover:bg-[#ffa202] transition-all shadow-md">
          Explore More
        </button>
      </motion.div>
    </section>
  );
}
