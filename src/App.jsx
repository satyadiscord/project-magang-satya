import "./App.css";
import {  HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import WhatsapFixed from "./Component/whatsapFixed";
import { Home, Portofolio, Harga } from "./pages/indexPageRouter";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/harga" element={<Harga />} />
        </Routes>
        <WhatsapFixed />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;