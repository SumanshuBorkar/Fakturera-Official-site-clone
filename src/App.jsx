import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import Order from "./Components/Order/Order";
import OurCustomers from "./Components/OurCustomers/OurCustomers";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Terms from "./Components/Terms/Terms";
import { AppProvider } from "./Components/context.jsx";
import PriceList from "./Components/Pricelist/PriceList.jsx";
import { useEffect, useRef, useCallback } from "react";

import "./App.css";

function App() {
  const bgRef = useRef(null);

  // Improved background height update function
  const updateBgHeight = useCallback(() => {
    if (bgRef.current) {
      // Use both window.innerHeight and visualViewport for better compatibility
      const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      // Add a small buffer to prevent gaps
      const adjustedHeight = Math.max(height, window.innerHeight) + 10;
      bgRef.current.style.height = `${adjustedHeight}px`;
    }
  }, []);

  useEffect(() => {
    const bgEl = bgRef.current;
    if (!bgEl) return;

    let lastOrigin = "50% 0%";
    const MAX_STRETCH = 0.08;
    const DAMPING = 250;

    const setScale = (scale, origin) => {
      bgEl.style.transformOrigin = origin;
      bgEl.style.transform = `scaleY(${scale})`;
    };

    const handleStretch = (e) => {
      const origin = e.detail.origin;
      lastOrigin = origin;
      bgEl.style.transition = "transform 220ms cubic-bezier(.2,.8,.2,1)";
      setScale(1.02, origin);
      setTimeout(() => setScale(1, origin), 220);
    };

    let startY = 0;
    let dragging = false;

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

      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

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

    const onTouchEnd = () => {
      if (!dragging) return;
      dragging = false;
      bgEl.style.transition = "transform 220ms cubic-bezier(.2,.8,.2,1)";
      setScale(1, lastOrigin);
    };

    window.addEventListener("backgroundStretch", handleStretch);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("backgroundStretch", handleStretch);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  // Improved viewport height handling
  useEffect(() => {
    // Initial setup
    updateBgHeight();

    // Multiple event listeners for better coverage
    const events = ['resize', 'scroll', 'orientationchange'];
    
    // Visual viewport events (for modern browsers)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateBgHeight);
      window.visualViewport.addEventListener("scroll", updateBgHeight);
    }

    // Fallback events for older browsers
    events.forEach(event => {
      window.addEventListener(event, updateBgHeight, { passive: true });
    });

    // Additional scroll listener on document for immediate updates
    document.addEventListener('scroll', updateBgHeight, { passive: true });

    // Cleanup
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateBgHeight);
        window.visualViewport.removeEventListener("scroll", updateBgHeight);
      }
      events.forEach(event => {
        window.removeEventListener(event, updateBgHeight);
      });
      document.removeEventListener('scroll', updateBgHeight);
    };
  }, [updateBgHeight]);

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