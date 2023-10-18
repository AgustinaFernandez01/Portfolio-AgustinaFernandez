import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./views/About";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Contact from "./views/Contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
