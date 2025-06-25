import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";

function App() {
  return (
    <>
      {/* 
    Navbar
    Landing Page
    Challenge List
    Features
    Footer
    */}
      <Navbar />
      <Features />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Footer />
    </>
  );
}

export default App;
