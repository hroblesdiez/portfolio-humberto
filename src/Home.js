import About from "./components/About/About";
import HomeAnimation from "./components/HomeAnimation/HomeAnimation";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeAnimation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
