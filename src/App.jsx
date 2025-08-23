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
  const scrollRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const bgEl = bgRef.current;

    if (!scrollEl || !bgEl) return;

    let isAnimating = false;

    const handleScroll = () => {
      if (isAnimating) return;

      // check if at top or bottom
      const atTop = scrollEl.scrollTop === 0;
      const atBottom =
        scrollEl.scrollHeight - scrollEl.scrollTop === scrollEl.clientHeight;

      if (atTop || atBottom) {
        isAnimating = true;
        bgEl.classList.add("stretch");

        setTimeout(() => {
          bgEl.classList.remove("stretch");
          isAnimating = false;
        }, 400); // match animation duration
      }
    };

    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="appWrapper">
      <div className="background-layer" ref={bgRef}></div>
      <div className="appContainer" ref={scrollRef}>
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
