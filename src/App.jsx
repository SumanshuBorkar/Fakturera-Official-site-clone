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

    let startY = 0;
    let dragging = false;
    let lastOrigin = "50% 0%";
    const MAX_STRETCH = 0.06; // 6%
    const DAMPING = 500;

    const setScale = (scale, origin) => {
      bgEl.style.transformOrigin = origin;
      bgEl.style.transform = `scaleY(${scale})`;
    };

    const onTouchStart = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      startY = e.touches[0].clientY;
      dragging = true;
      bgEl.style.transition = "";
    };

    const onTouchMove = (e) => {
      if (!dragging) return;
      const currentY = e.touches[0].clientY;
      const dy = currentY - startY;

      const atTop = scrollEl.scrollTop <= 0;
      const atBottom =
        Math.ceil(scrollEl.scrollTop + scrollEl.clientHeight) >=
        scrollEl.scrollHeight;

      if (atTop && dy > 0) {
        const stretch = Math.min(Math.abs(dy) / DAMPING, MAX_STRETCH);
        lastOrigin = "50% 0%";
        setScale(1 + stretch, lastOrigin);
        return;
      }

      if (atBottom && dy < 0) {
        const stretch = Math.min(Math.abs(dy) / DAMPING, MAX_STRETCH);
        lastOrigin = "50% 100%";
        setScale(1 + stretch, lastOrigin);
        return;
      }

      setScale(1, lastOrigin);
    };

    const endStretch = () => {
      dragging = false;
      bgEl.style.transition = "transform 220ms cubic-bezier(.2,.8,.2,1)";
      setScale(1, lastOrigin);
      const tid = setTimeout(() => {
        bgEl.style.transition = "";
      }, 240);
      return () => clearTimeout(tid);
    };

    const onScroll = () => {
      if (dragging) return;

      const atTop = scrollEl.scrollTop <= 0;
      const atBottom =
        Math.ceil(scrollEl.scrollTop + scrollEl.clientHeight) >=
        scrollEl.scrollHeight;

      if (atTop) {
        lastOrigin = "50% 0%";
        bgEl.style.transition = "transform 200ms ease-out";
        setScale(1.02, lastOrigin);
        setTimeout(() => setScale(1, lastOrigin), 200);
      } else if (atBottom) {
        lastOrigin = "50% 100%";
        bgEl.style.transition = "transform 200ms ease-out";
        setScale(1.02, lastOrigin);
        setTimeout(() => setScale(1, lastOrigin), 200);
      }
    };

    scrollEl.addEventListener("touchstart", onTouchStart, { passive: true });
    scrollEl.addEventListener("touchmove", onTouchMove, { passive: true });
    scrollEl.addEventListener("touchend", endStretch, { passive: true });
    scrollEl.addEventListener("touchcancel", endStretch, { passive: true });
    scrollEl.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      scrollEl.removeEventListener("touchstart", onTouchStart);
      scrollEl.removeEventListener("touchmove", onTouchMove);
      scrollEl.removeEventListener("touchend", endStretch);
      scrollEl.removeEventListener("touchcancel", endStretch);
      scrollEl.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="appWrapper" ref={scrollRef}>
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
