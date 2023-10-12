import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import About from "./views/About";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

