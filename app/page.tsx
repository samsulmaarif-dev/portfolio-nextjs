export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I&apos;m<span className="text-blue-500">Samsul</span>
        </h1>
        <p className="max-w-xl text-gray-400">
          Fullstack Web Developer building scalable and modern web applications.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-blue-600 rounded-lg hover:scale-105 transition">
            View Projects
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
}
