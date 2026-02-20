"use client";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden scroll-smooth">
      {/* Gradient Glow Background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[200px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50"></nav>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between"></div>
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
      <main className="relative bg-black text-white overflow-hidden scroll-smooth">
        {/* Soft Animated Glow */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-orange-500/20 blur-[200px] rounded-full animate-pulse"></div>
        </div>

        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 gap-12">
          {/* TEXT */}
          <div className="text-center md:text-left">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Hi, I&apos;m <span className="text-blue-500">Samsul Maarif</span>
            </motion.h1>
          </div>

          {/* IMAGE */}
          <motion.img
            src="/DCAAF3CE-F8EB-4C78-9508-79E45BDF91D2.jpeg"
            alt="profile"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 object-cover rounded-2xl shadow-xl"
          />
        </section>
        <div className="flex gap-6 justify-center mt-6 text-gray-400">
          <a
            href="https://github.com/samsulmaarif-dev"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samsul-maarif-8713b83ab"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
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
          <div className="flex gap-4 justify-center">
            {/* View Work */}
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 rounded-lg hover:scale-105 transition duration-300"
            >
              View My Work
            </a>

            {/* Download CV */}
            <a
              href="/Samsul_Maarif_CV.pdf"
              download
              className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.a>
      </main>
      {/* STATS */}
      <section className="py-16 text-center">
        <div className="grid grid-cols-3 max-w-4xl mx-auto text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-500">3+</h3>
            <p className="text-gray-400">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">2+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">8+</h3>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24"
      ></motion.section>
      <motion.section
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
      {/* SKILLS */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        {[
          { name: "React", level: "90%" },
          { name: "Next.js", level: "85%" },
          { name: "TypeScript", level: "80%" },
          { name: "Node.js", level: "75%" },
        ].map((skill, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span className="text-gray-400">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-700"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </section>
      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE - CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Indonesia</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>samsulmaarif55063@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-500 text-xl" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+6281385058714</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="mt-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-20 pb-10 rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Logo / Brand */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-widest text-orange-500">
              SAMUEL<span className="text-white">DEV</span>
            </h1>
          </div>

          {/* Name */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Samsul Maarif</h2>

          <p className="text-gray-400 mb-8">Fullstack Developer</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-10">
            <a
              href="https://github.com/samsulmaarif-dev"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/samsul-maarif-8713b83ab"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Samsul Maarif. All rights reserved.
            </p>

            <p className="text-gray-600 text-xs mt-2">
              Crafted with passion and clean code ✨
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
