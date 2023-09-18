import About from "./components/About/About";
import HomeAnimation from "./components/HomeAnimation/HomeAnimation";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlogHome from "./components/Blog/BlogHome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeAnimation />
      <About />
      <BlogHome />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
