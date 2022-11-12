import About from "./components/About/About";
import HomeAnimation from "./components/HomeAnimation/HomeAnimation";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar />
          <HomeAnimation />
          <About />
          <Skills />
          <Projects />
          <Contact />
            <Routes>
              <Route path="/contact/success" element="<ContactSuccess />" />
            </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
