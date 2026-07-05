function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Section */}
          <div>
            <p className="text-gray-400 leading-relaxed">
              I am a final-year Computer Science student at VIT with a strong
              interest in Software Development and Backend Engineering. I enjoy
              building scalable web applications, designing RESTful APIs, and
              solving real-world problems through clean and efficient code.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              My experience includes developing full-stack applications using
              Java, Spring Boot, React, PostgreSQL, and Docker. I continuously
              improve my problem-solving skills through Data Structures &
              Algorithms and actively explore cloud technologies such as AWS to
              build production-ready applications.
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Quick Info
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>🎓 Final Year Computer Science Student – VIT</li>
              <li>💻 Aspiring Software Development Engineer</li>
              <li>⚙️ Java | Spring Boot | React Developer</li>
              <li>🗄️ PostgreSQL | Redis | Docker | AWS</li>
              <li>🧩 Strong Foundation in Data Structures & Algorithms</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;