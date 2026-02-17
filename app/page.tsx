export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-blue-500">Samsul</span>
        </h1>
        <p className="max-w-xl text-gray-400 mb-8">
          Fullstack Web Developer building scalable and modern web applications.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
          I am passionate about building digital products with clean
          architecture and high-performance systems. Experienced in React,
          Next.js, and backend integration with modern technologies.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-950 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Project One</h3>
            <p className="text-gray-400 text-sm">
              Modern web application built with Next.js and Tailwind CSS.l
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Project Two</h3>
            <p className="text-gray-400 text-sm">
              Responsive dashboard with API integration.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Project Three</h3>
            <p className="text-gray-400 text-sm">
              Fullstack system with authentication and database.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Interested in working together? Let's connect.
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-lg hover:scale-105 transition">
          Email Me
        </button>
      </section>
    </main>
  );
}
