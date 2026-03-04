function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-950 text-white py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-gray-400 leading-relaxed">
              I am a final year student at VIT with strong interest in
              Data Science, Machine Learning and Backend Development.
              I enjoy building intelligent systems and solving real-world
              problems using data-driven approaches.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              My experience includes developing machine learning models,
              building data analysis pipelines, and creating web
              applications using modern frameworks.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Quick Info
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>🎓 Final Year Student – VIT</li>
              <li>💻 Interested in ML & Data Science</li>
              <li>⚙️ Backend Development</li>
              <li>📊 Data Analysis & Visualization</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;