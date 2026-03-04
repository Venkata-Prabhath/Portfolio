function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">

        {/* Left Side – Profile Image */}
        <div className="md:col-span-2 flex justify-center">
          <img
            src="/profile.jpg"
            alt="Prabhath"
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>

        {/* Right Side – Existing Content */}
        <div className="md:col-span-3 text-center md:text-left">

          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Prabhath
          </h1>

          <p className="text-xl text-gray-400 mb-6">
            Machine Learning Enthusiast | Data Science | Backend Developer | Student
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Projects
            </a>

            <a
              href="https://github.com/Venkata-Prabhath"
              className="px-6 py-3 bg-gradient-to-r from-gray-700 via-gray-800 to-purple-500 text-white rounded-lg hover:opacity-80"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-white rounded-lg hover:opacity-80"
            >
              Instagram
            </a>

          </div>

          <div className="mt-6">
            <a
              href="/resume.pdf"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 ml-35">
              Download Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;