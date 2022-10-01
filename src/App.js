import { Routes, Route } from "react-router-dom";


import './App.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/footer/Footer";
import Project from "./Components/Gallery/Project";

function App() {
  return (
    
    <div className="flex flex-col h-screen w-[100vw]">
      <Navbar />
      <main className="flex-1  w-full min-h-screen ">
      <Routes>
        <Route exact path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />}/ >
             
            
            <Route exact={true}  path="/gallery/:id" element={<Project />} /> 
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
      <Footer />
      </main>
      
     
    </div>
  );
}

export default App;
