import { BrowserRouter } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FirstCanvas from './components/Stars';
import Fire from './components/Fire';
import Grass from './components/Grass';
import Water from './components/Water';
import Section from './components/Section';
import CallToAction from "./components/CallToAction";
import CtaSection from "./components/CtaSection";

const App = () => {
  return (
    <BrowserRouter>
    <div className="">
        <Navbar />
        <FirstCanvas />
        <Hero />
    </div>
    <div className="">
        <Fire />
        <Section />
    </div>
    <div className="">
        <Grass />
        <Section />
    </div>
    <div className="">
        <Water />
        <Section />
    </div>
    <div className="">
        <CallToAction />
        <CtaSection />
    </div>
    </BrowserRouter>
  )
}

export default App
