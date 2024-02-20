
import './App.css'
import Footer from './components/Footer/index';
import Pricing from "./components/Pricing/index";
import Team from "./components/Team/index";
import About from "./components/About1/index";
import Brand from "./components/Brand/index";
import Contact from "./components/Contact/index";
import Hero from "./components/Hero/index";
import Offers from "./components/Offers/index";

function App() {

  return (
    <>    
        <Hero />
        <Offers/>
        <Team/> 
        <Brand/>
        <Contact/>
        <About/>
        <Pricing/>
        <Footer/>
     
        </>
  )
}

export default App
