import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdoreFellowship from "./pages/AdoreFellowship";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adore-fellowship" element={<AdoreFellowship />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
