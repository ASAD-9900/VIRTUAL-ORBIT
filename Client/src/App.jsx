import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Global Components/NavBar"
import Footer from "./Components/Global Components/Footer"

// Pages
import Home from "./Pages/Landing Pages/Home";
import Contact from "./Pages/Contact"; 
import Seo from "./Pages/Landing Pages/SEO"
import LocalSEO from "./Pages/SEO SubPages/LocalSEO";
import TechnicalSEO from "./Pages/SEO SubPages/TechnicalSEO";
import AI_SEO from "./Pages/SEO SubPages/AI_SEO";
import EcommerceSEO from "./Pages/SEO SubPages/EcommerceSEO";
import SeoAudits from "./Pages/SEO SubPages/SeoAudits";
import Demo from "./Pages/Landing Pages/demo"
import WebDev from "./Pages/WebDev";

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/seo-services" element={<Seo/>}/>
          <Route path="/seo-services/local-seo" element={<LocalSEO/>}/>
          <Route path="/seo-services/technical-seo" element={<TechnicalSEO/>}/>
          <Route path="/seo-services/ai-seo-services" element={<AI_SEO/>}/>
          <Route path="/seo-services/ecommerce-seo" element={<EcommerceSEO/>}/>
          <Route path="/seo-services/seo-audit" element={<SeoAudits/>}/>
          <Route path="/demo" element={<Demo/>}/>
          <Route path="/web-development" element={<WebDev/>}/>
        </Routes>
       <Footer></Footer> 
    </div>
  );
}

export default App;
