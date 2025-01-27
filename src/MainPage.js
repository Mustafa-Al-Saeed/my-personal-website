import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import CopyRight from "./Components/CopyRight";
import ScrollToTop from "./Components/Shared/ScrollToTop";

const MainPage = () => {
  return (
    <div className=" relative">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <CopyRight />
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
