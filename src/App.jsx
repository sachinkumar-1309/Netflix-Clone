import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import MiddleSection from "./components/middleSection/MiddleSection";
import Footer from "./components/Footer/Footer";
import "./i18n";

function App() {
  // console.log(description);
  return (
    <>
      <Navbar />
      <HeroSlider />
      <MiddleSection />
      <Footer />
      {/* <div className="m-10 ">
        <LanguageSelector />
        <h1 className="text-3xl">{t("grettings")}</h1>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div> */}
    </>
  );
}

export default App;
