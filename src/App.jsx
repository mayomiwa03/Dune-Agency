import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/styles";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Recent from "./components/Recent";
import About from "./components/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Recent />
      <Testimonial />
      <Footer />
    </>
  );
}
export default App;
