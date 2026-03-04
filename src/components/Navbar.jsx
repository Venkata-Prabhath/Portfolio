function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Prabhath</h1>

        <ul className="flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;