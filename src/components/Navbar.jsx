function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Prabhath
        </h1>

        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;