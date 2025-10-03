import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

// Pages
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import BrowseMenu from "./pages/BrowseMenu";
import LocationMap from "./pages/LocationMap";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Always visible */}
      <TopBar />
      <Navbar />
      {/* Routed pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pages/browsermenu" element={<BrowseMenu />} />
        </Routes>
      </main>

 <LocationMap/>


      {/* Always visible */}
      <Footer />
    </div>
  );
}
