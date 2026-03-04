import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold">Portfolio</h1>
      </div>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App