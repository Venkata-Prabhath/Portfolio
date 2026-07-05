function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-gray-400 text-center mb-12">
          A collection of full-stack and backend applications built using modern technologies,
          showcasing problem-solving, scalable architecture, and software development practices.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Featured Project 1 */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <span className="inline-block bg-indigo-600 text-sm px-3 py-1 rounded-full mb-3">
              ⭐ Featured Project
            </span>

            <h3 className="text-2xl font-semibold mb-2">
              E-Commerce Platform
            </h3>

            <p className="text-gray-400 mb-4">
              A full-stack e-commerce application featuring secure JWT authentication,
              product management, shopping cart, order processing, admin dashboard,
              Redis caching, and Dockerized deployment.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Java • Spring Boot • React • PostgreSQL • Redis • Docker • JWT • AWS
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Venkata-Prabhath/E-commerce_project"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Featured Project 2 */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <span className="inline-block bg-indigo-600 text-sm px-3 py-1 rounded-full mb-3">
              ⭐ Featured Project
            </span>

            <h3 className="text-2xl font-semibold mb-2">
              Real-Time Chat Application
            </h3>

            <p className="text-gray-400 mb-4">
              Built a real-time messaging platform using WebSockets with secure user
              authentication, responsive UI, and persistent message storage.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Java • Spring Boot • React • WebSocket • STOMP • PostgreSQL • JWT
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Venkata-Prabhath/chat_app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Featured Project 3 */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <span className="inline-block bg-indigo-600 text-sm px-3 py-1 rounded-full mb-3">
              ⭐ Featured Project
            </span>

            <h3 className="text-2xl font-semibold mb-2">
              PaymentHub
            </h3>

            <p className="text-gray-400 mb-4">
              Developed a secure payment management application with REST APIs,
              Redis integration, transaction handling, and containerized deployment.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Java • Spring Boot • PostgreSQL • Redis • Docker • REST APIs
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Venkata-Prabhath/paymenthub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Featured Project 4 */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <span className="inline-block bg-indigo-600 text-sm px-3 py-1 rounded-full mb-3">
              ⭐ Featured Project
            </span>

            <h3 className="text-2xl font-semibold mb-2">
              Job Application Tracker
            </h3>

            <p className="text-gray-400 mb-4">
              A full-stack application that helps users organize and monitor job
              applications, interview schedules, and application progress.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Java • Spring Boot • React • PostgreSQL
            </p>

            <div className="flex gap-4">
              <a
                href="YOUR_JOB_TRACKER_GITHUB_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Other Project 1 */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">

            <h3 className="text-2xl font-semibold mb-2">
              Movie Recommendation System
            </h3>

            <p className="text-gray-400 mb-4">
              Content-based recommendation engine that suggests movies using cosine
              similarity and machine learning techniques.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Python • Pandas • Scikit-learn • Streamlit
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/your-repo"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
            </div>

          </div>

          {/* Other Project 2 */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">

            <h3 className="text-2xl font-semibold mb-2">
              AI Email Writer Extension
            </h3>

            <p className="text-gray-400 mb-4">
              Browser extension that generates AI-powered email replies and integrates
              seamlessly with Gmail using the Gemini API.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Java • Spring Boot • React • Gemini API
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/your-repo"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;