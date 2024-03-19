
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className=" bg-transparent w-full ">
          <Navbar />
          <HeroSlider />
        </div>
      </div>
    </>
  );
}

export default App;

