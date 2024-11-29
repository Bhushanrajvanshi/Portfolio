import Contact from "./components/Contact/Contact.jsx";
import Project from "./components/Projects/Project.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.Jsx";
import Footer from "./components/Footer/Footer.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";



function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <About />  
      <Skills /> 
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
