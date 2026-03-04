// function Projects() {
//   return (
//     <section id="projects" className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
//       <div className="text-center max-w-4xl">
//         <h2 className="text-4xl font-bold mb-6">Projects</h2>

//         <p className="text-gray-300">
//           Movie Recommendation System, AI Email Generator Extension,
//           and Data Science Projects.
//         </p>
//       </div>
//     </section>
//   );
// }

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <h3 className="text-2xl font-semibold mb-2">
              Movie Recommendation System
            </h3>

            <p className="text-gray-400 mb-4">
              Machine learning based system that recommends movies using cosine similarity and content-based filtering.
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

              <a
                href="#"
                className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Live Demo
              </a>
            </div>
          </div>


          <div className="bg-gray-950 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <h3 className="text-2xl font-semibold mb-2">
              AI Email Writer Extension
            </h3>

            <p className="text-gray-400 mb-4">
              Browser extension that generates email responses using AI and integrates directly inside Gmail.
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