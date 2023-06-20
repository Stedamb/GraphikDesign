import { BrowserRouter } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FirstCanvas from './components/Stars';
import SecondCanvas from './components/Second';
import Section from './components/Section';

const App = () => {
  return (
    <BrowserRouter>
    <div className="">
        <Navbar />
        <FirstCanvas />
        <Hero />
    </div>
    <div className="">
        <SecondCanvas />
        <Section />
    </div>
    </BrowserRouter>
  )
}

export default App
