function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-center mb-12">
          I'm currently seeking Software Development Engineer internship and full-time opportunities.
          Feel free to connect with me for collaborations or professional discussions.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-6">

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">
                YOUR_EMAIL@gmail.com
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View LinkedIn Profile
              </a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/Venkata-Prabhath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                github.com/Venkata-Prabhath
              </a>
            </div>

          </div>

          <form className="bg-gray-900 p-8 rounded-lg space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            ></textarea>

            <button
              className="w-full bg-indigo-600 py-3 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;