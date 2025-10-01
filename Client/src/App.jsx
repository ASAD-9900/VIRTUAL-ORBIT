import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Global Components/NavBar"
import Footer from "./Components/Global Components/Footer"

// Pages
import Home from "./Pages/Landing Pages/Home";
import Contact from "./Pages/Contact"; 
import Seo from "./Pages/Landing Pages/SEO"
import WebDev from "./Pages/WebDev";
import PPC from "./Pages/Landing Pages/PPC"

// SEO Subpages 
import LocalSEO from "./Pages/SEO SubPages/LocalSEO";
import TechnicalSEO from "./Pages/SEO SubPages/TechnicalSEO";
import AI_SEO from "./Pages/SEO SubPages/AI_SEO";
import EcommerceSEO from "./Pages/SEO SubPages/EcommerceSEO";
import SeoAudits from "./Pages/SEO SubPages/SeoAudits";

// PPC Subpages
import GoogleAds from "./Pages/PPC SubPages/GoogleAds"
import MetaAds from "./Pages/PPC SubPages/MetaAds"
import SearchEngineMarketing from "./Pages/PPC SubPages/SearchEngineMarketing";
import Leadgeneration from "./Pages/PPC SubPages/Leadgeneration";

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/seo-services" element={<Seo/>}/>
          <Route path="/ppc-marketing-services" element={<PPC/>}/>
          <Route path="/web-development" element={<WebDev/>}/>          

          {/* SEO SubPages */}
          <Route path="/seo-services/local-seo" element={<LocalSEO/>}/>
          <Route path="/seo-services/technical-seo" element={<TechnicalSEO/>}/>
          <Route path="/seo-services/ai-seo-services" element={<AI_SEO/>}/>
          <Route path="/seo-services/ecommerce-seo" element={<EcommerceSEO/>}/>
          <Route path="/seo-services/seo-audit" element={<SeoAudits/>}/>

          {/* PPC SubPages */}
          <Route path="/google-ads-management" element={<GoogleAds/>}/>
          <Route path="/meta-ads-management" element={<MetaAds/>}/>
          <Route path="/search-engine-marketing" element={<SearchEngineMarketing/>}/>
          <Route path="/lead-generation-services" element={<Leadgeneration/>}/>

        </Routes>
       <Footer></Footer> 
    </div>
  );
}

export default App;
