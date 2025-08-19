import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import Order from "./Components/Order/Order";
import OurCustomers from "./Components/OurCustomers/OurCustomers";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Terms from "./Components/Terms/Terms";
import { AppProvider } from "./Components/context.jsx";

import "./App.css";

function App() {
  return (
    <div className="appContianer">
      <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/bestall.html" element={<Order />} />
          <Route path="/kunder.html" element={<OurCustomers />} />
          <Route path="/omoss.html" element={<AboutUs />} />
          <Route path="/kontaktaoss.html" element={<ContactUs />} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
