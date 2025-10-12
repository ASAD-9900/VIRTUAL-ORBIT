import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import Hero from "../../Components/Global Components/HeroSubPage"
import Marqee from "../../Components/Global Components/Marqee"
import ContactForm from "../../Components/Global Components/ContactForm"
import FAQ from "../../Components/Ecommerce SEO Components/FAQ"
import Pitch from "../../Components/Ecommerce SEO Components/1Pitch"
import HowDoesItGetLeads from '../../Components/Ecommerce SEO Components/2HowDoesItGetleads'
import Services from '../../Components/Ecommerce SEO Components/7Services'
import HireOrDiy from "../../Components/Ecommerce SEO Components/8HireOrDIY"
import TimeTakes from '../../Components/Ecommerce SEO Components/9TimeItTakes'
import Worth from "../../Components/Ecommerce SEO Components/10Worth"
import ShopifySEO from "../../Components/Ecommerce SEO Components/4ShopifySEO"
import WooCommerceSEO from "../../Components/Ecommerce SEO Components/5WooCommerceSEO"
import HowToChoose from '../../Components/Ecommerce SEO Components/6HowToChoose'
import Tips from "../../Components/Ecommerce SEO Components/11Tips"
import Banner from "../../Components/Global Components/Banner"
import SpiralBG from "../../assets/Difference.png"


const EcommerceSEO = () => { 
   const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,   
      smooth: true,
      wheelMultiplier: 1.3, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    
    lenis.scrollTo(0);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <div>
        <Hero></Hero>
        <Pitch></Pitch>
        <HowDoesItGetLeads/>
        <Banner/>
        <div className='bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064] max-w-full'>
          <ShopifySEO/>
          <WooCommerceSEO/>
        </div>
        <HireOrDiy/>
        <div className="lg:my-5 mb- bg-white">
                    <Marqee
                    texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
                    velocity={50}
                    className="custom-scroll-text mb-5"
                    />
        </div>
        <HowToChoose/>
        <Services/>
        <TimeTakes/>
        <Worth/>
        <Tips/>
        <FAQ></FAQ>
        <div className="bg-cover bg-center bg-no-repeat w-full 
            sm:bg-contain md:bg-cover lg:bg-cover"
            style={{ backgroundImage: `url(${SpiralBG})` }}>
        <ContactForm></ContactForm> 
        </div>
      </div>
  )
}

export default EcommerceSEO