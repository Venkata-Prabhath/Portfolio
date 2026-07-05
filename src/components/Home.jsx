import profileImage from "../assets/Bobby2.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Stars Background */}
      <div className="stars"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">

        {/* Left Side – Profile Image */}
        <div className="md:col-span-2 flex justify-center">
          <img
            src={profileImage}
            alt="Prabhath"
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-400 shadow-lg"
          />
        </div>

        {/* Right Side – Content */}
        <div className="md:col-span-3 text-center md:text-left">

          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Prabhath
          </h1>

          <p className="text-xl text-gray-400 mb-6">
            Aspiring Software Development Engineer | Java Full-Stack Developer |
            Spring Boot | React | PostgreSQL
          </p>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
            Final-year Computer Science student at VIT, passionate about
            building scalable full-stack applications and backend systems.
            Experienced in developing secure REST APIs, responsive web
            applications, and cloud-ready solutions using modern technologies.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Venkata-Prabhath"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-gray-700 via-gray-800 to-purple-500 text-white rounded-lg hover:opacity-80 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/YOUR-INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-white rounded-lg hover:opacity-80 transition"
            >
              Instagram
            </a>

          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;