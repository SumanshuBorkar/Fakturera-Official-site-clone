import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import Order from "./Components/Order/Order";
import OurCustomers from "./Components/OurCustomers/OurCustomers";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Terms from "./Components/Terms/Terms";
import { AppProvider } from "./Components/context.jsx";
import PriceList from "./Components/Pricelist/PriceList.jsx";
import { useEffect, useRef } from "react";

import "./App.css";

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    const bgEl = bgRef.current;
    if (!bgEl) return;

    const setScale = (scale, origin) => {
      bgEl.style.transformOrigin = origin;
      bgEl.style.transform = `scaleY(${scale})`;
    };

    const handleStretch = (e) => {
      const origin = e.detail.origin; // comes from page
      bgEl.style.transition = "transform 200ms ease-out";
      setScale(1.02, origin);
      setTimeout(() => setScale(1, origin), 200);
    };

    window.addEventListener("backgroundStretch", handleStretch);

    return () => {
      window.removeEventListener("backgroundStretch", handleStretch);
    };
  }, []);

  return (
    <div className="appWrapper">
      <div className="background-layer" ref={bgRef}></div>
      <div className="appContainer">
        <AppProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/bestall.html" element={<Order />} />
              <Route path="/kunder.html" element={<OurCustomers />} />
              <Route path="/omoss.html" element={<AboutUs />} />
              <Route path="/kontaktaoss.html" element={<ContactUs />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/Pricelist" element={<PriceList />} />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
