function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <p>
          © 2026 Prabhath. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">

          <a
            href="https://github.com/Venkata-Prabhath"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com"
            className="hover:text-white transition"
          >
            Instagram
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;