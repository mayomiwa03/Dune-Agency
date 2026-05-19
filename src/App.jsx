import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/styles";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Recent from "./components/Recent";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Recent />
      <Testimonial />
      <Footer />
    </>
  );
}
export default App;
