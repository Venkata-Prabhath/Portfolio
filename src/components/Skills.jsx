function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            Python
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            Machine Learning
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            Pandas
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            NumPy
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            React
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            Spring Boot
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            SQL
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
            Power BI
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;