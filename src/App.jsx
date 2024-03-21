import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import { useRef } from "react";
import MiddleSection from "./components/middleSection/MiddleSection";
import CurveDiv from "./components/CurveDiv";
import Faqs from "./components/FAQ/Faqs";
function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <MiddleSection />
    </>
  );
}

export default App;
