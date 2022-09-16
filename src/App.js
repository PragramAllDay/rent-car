import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import SearchACar from "./components/searchACar/SearchACar";
import CorporateEnquiries from "./components/CorporateEnquiries/CorporateEnquiries";
import OurClients from "./components/ourClients/OurClients";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import SignUp from "./components/reusableComponents/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search-a-car" element={<SearchACar />} />
        <Route path="/corporate-enquiries" element={<CorporateEnquiries />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
