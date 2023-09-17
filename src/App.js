import Home from "./Home";
import Blog from "./components/Blog/Blog";
import Blogpost from "./components/Blog/Blogpost";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/blog/:slug" element={<Blogpost />}></Route>
    </Routes>
  );
}

export default App;
