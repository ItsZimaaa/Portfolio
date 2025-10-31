import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket, FaMobileAlt, FaPenNib, FaServer, FaSearch, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "I craft responsive, high-performance websites using React, Next.js, and Tailwind CSS. Every project is coded with scalability and speed in mind, ensuring smooth navigation, strong structure, and maintainable design systems.",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Design",
      desc: "A website is more than visuals — it’s an experience. I design intuitive, human-centered interfaces that make users stay longer and interact more naturally. Every pixel, color, and animation is chosen for purpose, not decoration.",
    },
    {
      icon: <FaRocket />,
      title: "Performance & SEO Optimization",
      desc: "Your website should not just look good, it should fly. I optimize loading times, SEO structure, and accessibility, making your site fast, discoverable, and friendly to both users and search engines.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "No matter the device — phone, tablet, or desktop — your website should feel native. I ensure each design is fluid, adaptable, and perfectly fits every screen size with flexible grids and breakpoints.",
    },
    {
      icon: <FaPenNib />,
      title: "Brand Identity & Digital Strategy",
      desc: "Design is storytelling. I help you define your brand’s tone, color psychology, and visual consistency so every page speaks with your voice. Together, we turn your concept into a recognizable digital identity.",
    },
    {
      icon: <FaServer />,
      title: "API & Backend Integration",
      desc: "Modern websites rely on data. From REST APIs to headless CMS, I connect your frontend to real-time content and scalable backend systems, ensuring everything runs seamlessly behind the scenes.",
    },
    {
      icon: <FaSearch />,
      title: "Market Research & UX Testing",
      desc: "Before designing, I analyze competitors, trends, and user behavior to ensure we’re building for the right audience. Each UI decision is backed by usability tests and research-driven insights.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Continuous Support & Maintenance",
      desc: "Once your site goes live, I don’t disappear. I offer long-term support, feature updates, and security checks to keep your digital product strong and relevant as technology evolves.",
    },
  ];

  return (
    <section className="relative bg-white rounded-3xl px-6 py-16 md:px-16 overflow-hidden">
      {/* 🔮 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ffa202]/10 to-[#ff451a]/10 blur-2xl -z-10"></div>

      {/* 🧭 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          What I <span className="text-[#ff451a]">Offer</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Every project is unique — that’s why I focus on understanding your goals before writing a single line of code. 
          From design to deployment, I deliver full-stack digital experiences that are fast, clean, and built to inspire. 
          Below are the services I offer to help you stand out in the digital world.
        </p>
      </motion.div>

      {/* ⚙️ Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-default"
          >
            <div className="text-4xl text-[#ff451a] mb-5 group-hover:text-[#ffa202] transition-all">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#ff451a] transition">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 🌟 Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          How I <span className="text-[#ff451a]">Work</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-14">
          My workflow is transparent and collaborative. I believe the best results come from continuous communication and iteration. 
          Here's a quick overview of how we’ll bring your idea to life:
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              step: "01",
              title: "Discovery & Strategy",
              desc: "We start by understanding your goals, audience, and competition. Together, we define the strategy and creative direction for your project.",
            },
            {
              step: "02",
              title: "Design & Development",
              desc: "I design wireframes, refine UI/UX, and turn those concepts into working, interactive components with clean, scalable code.",
            },
            {
              step: "03",
              title: "Launch & Growth",
              desc: "After testing and refining, we deploy your project. I continue to track analytics, optimize performance, and support long-term improvements.",
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

      {/* ✉️ CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-24"
      >
        <h3 className="text-3xl font-semibold mb-4">
          Ready to build something <span className="text-[#ff451a]">amazing</span>?
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let’s collaborate and turn your ideas into reality. Whether it’s a landing page, a personal portfolio, or a full-scale web application — 
          I can help you create something that truly stands out.
        </p>
        <button className="px-8 py-3 bg-[#ff451a] text-white rounded-full font-semibold hover:bg-[#ffa202] transition-all shadow-md">
          Let’s Work Together
        </button>
      </motion.div>
    </section>
  );
}
