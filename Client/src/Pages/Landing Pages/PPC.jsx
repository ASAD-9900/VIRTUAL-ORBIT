import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

// Image 
import SpiralBG from "../../assets/Difference.png"

// Components Import 
import Hero from "../../Components/PPC Page Components/1Hero"
import GrowWithPPC from "../../Components/PPC Page Components/2GrowWithPPC"
import Difference from "../../Components/PPC Page Components/3Difference"
import WhatsPPC from "../../Components/PPC Page Components/4WhatsPPC"
import PpcTypes from "../../Components/PPC Page Components/5PpcTypes"
import HowItWorks from "../../Components/PPC Page Components/6HowItWorks"
import HowItHelps from "../../Components/PPC Page Components/7HowItHelps"
import DiyVsAgency from "../../Components/PPC Page Components/8DiyVsAgency"
import ChoosingAgency from "../../Components/PPC Page Components/9ChoosingAgency"
import WhyUs from "../../Components/PPC Page Components/10WhyUs"
import Worth from "../../Components/PPC Page Components/11Worth"
import Tips from "../../Components/PPC Page Components/12Tips"
import Faq from "../../Components/PPC Page Components/13Faq"
import ContactForm from "../../Components/Global Components/ContactForm"

const PPC = () => {
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
      <Hero/>
      <GrowWithPPC/>
      <Difference/>
      <WhatsPPC/>
      <PpcTypes/>
      <HowItWorks/>
      <HowItHelps/>
      <DiyVsAgency/>
      <ChoosingAgency/>
      <WhyUs/>
      <Worth/>
      <Tips/>
      <Faq/>
      <div className="bg-cover bg-center bg-no-repeat w-full sm:bg-contain md:bg-cover lg:bg-cover"
           style={{ backgroundImage: `url(${SpiralBG})` }}>
        <ContactForm/>
      </div>
    </div>
  )
}

export default PPC