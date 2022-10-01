import { Routes, Route } from "react-router-dom";


import './App.css';

import Navbar from "./Components1/Navbar";
import Home from "./Components1/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components1/footer/Footer.js";

function App() {
  return (
    
    <div className="flex flex-col h-screen w-[100vw]">
      <Navbar />
      <main className="flex-1  w-full min-h-screen ">
      <Routes>
        <Route exact path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
      </main>
      
     
    </div>
  );
}

export default App;
