/* import { Routes, Route } from 'react-router-dom';


import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';



import { MobileMenuContextProvider } from './Contexts/MobileMenuContext';

function App() {
  return (
    <div  >
      <MobileMenuContextProvider >
      <Header className='h-[400px]'/>
      
      
      <Routes>
        <Route exact path='/'>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About /> } />
          <Route path='/gallery' element={ <Gallery />} />
          <Route path='/testimonials' element={ <Testimonials/>}/>
          <Route path='/contact' element={ <Contact/>} />
          


        </Route>
        
        </Routes>
        <footer className='h-[400px] '>
       
       <Footer />

     </footer>
      </MobileMenuContextProvider>
      

    </div>
  );
} */

import Navbar from "./Components1/Navbar";


function App() {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App;
