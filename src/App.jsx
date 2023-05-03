import { BrowserRouter } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StarsCanvas from './components/Stars';

const App = () => {
  return (
    <BrowserRouter>
    <div className="">
        <Navbar />
        <StarsCanvas />
        <Hero />
    </div>
    </BrowserRouter>
  )
}

export default App
