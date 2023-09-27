import ScrollToTop from "react-scroll-to-top";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NumberPlates from "./components/NumberPlates/NumberPlates";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <NumberPlates />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop
        smooth
        height='15px'
        viewBox='150 -20 200 256'
        className='scrollToTop'
      />
    </>
  );
}

export default App;
