import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { Routes, Route } from "react-router-dom";
import Authentication, {PageType} from "./pages/Authentication";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Features/>} />
        <Route path="/login" element={<Authentication pageType={PageType.LOGIN}/>} />
        <Route path="/register" element={<Authentication pageType={PageType.REGISTER}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
