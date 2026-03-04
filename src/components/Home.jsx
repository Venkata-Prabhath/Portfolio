function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Prabhath
        </h1>

        <p className="text-xl text-gray-400 mb-6">
          Machine Learning Enthusiast | Data Science | Backend Developer | Student
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Venkata-Prabhath"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>
        </div>

        <div className="mt-6 space-x-4">
          <a
            href="/resume.pdf"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;