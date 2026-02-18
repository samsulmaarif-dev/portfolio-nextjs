"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-bold text-lg">Samsul</h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="#experience" className="hover:text-blue-500">
              Experience
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 pt-24">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-blue-500">Samsul</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl text-gray-400 mb-8"
        >
          Fullstack Developer building scalable, high-performance digital
          products.
        </motion.p>

        <motion.a
          href="#projects"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="px-8 py-3 bg-blue-600 rounded-lg hover:scale-105 transition duration-300"
        >
          View My Work
        </motion.a>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="py-24 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
          Passionate about building clean architecture systems and modern user
          interfaces. Experienced with React, Next.js, API integrations, and
          performance optimization.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-950 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Crypto Dashboard", "E-Commerce Platform", "Portfolio Website"].map(
            (title, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400 text-sm">
                  Modern web application built with scalable architecture and
                  optimized performance.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="py-24 px-6 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-blue-500 pl-6">
            <h3 className="font-semibold">Frontend Developer</h3>
            <p className="text-gray-400 text-sm">2023 - Present</p>
            <p className="text-gray-400 mt-2">
              Developed scalable UI systems and optimized application
              performance.
            </p>
          </div>

          <div className="border-l-2 border-blue-500 pl-6">
            <h3 className="font-semibold">Freelance Web Developer</h3>
            <p className="text-gray-400 text-sm">2022 - 2023</p>
            <p className="text-gray-400 mt-2">
              Built responsive websites and business landing pages for clients.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center bg-gray-950">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-gray-400 mb-8">
          Interested in collaborating or building something impactful?
        </p>
        <a
          href="mailto:youremail@email.com"
          className="px-8 py-3 bg-blue-600 rounded-lg hover:scale-105 transition duration-300"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
