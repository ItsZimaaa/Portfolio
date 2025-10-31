import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Services from "../src/Pages/Services"
import Resume from "../src/Pages/Resume"
import Projects from "../src/Pages/Projects"
import Contact from "../src/Pages/Contact"

import DarkVeil from "./Components/DarkVeil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <main>
      <div className="">

        <div className="absolute inset-0 -z-10 w-full h-full">
          <DarkVeil />
        </div>

        <div className="relative z-10 text-center">
          <BrowserRouter>
            <div className="side">

              <Navbar />

              <div>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/services" element={<Services />}></Route>
                  <Route path="/resume" element={<Resume />}></Route>
                  <Route path="/projects" element={<Projects />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                </Routes>
              </div>

              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </main>
  )
}
