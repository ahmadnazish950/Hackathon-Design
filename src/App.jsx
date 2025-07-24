import AboutSection from "./Components/AboutSection"
import FinalSection from "./Components/FinalSection"
import Hero from "./Components/Hero"
import SpecsSections from "./Components/SpecsSections"
import Navbar from "./Components/Navbar"
import ThirdSection from "./Components/ThirdSection"
import { useLenis } from "./Hooks/UseLenis"
import Preloader from "./Components/PreLoader"

const App = () => {

  useLenis()
  
  return (
    <div className="w-full h-full overflow-auto ">
      <Preloader/>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <ThirdSection/>
      <SpecsSections/>
      <FinalSection/>
    </div>
  )
}

export default App
