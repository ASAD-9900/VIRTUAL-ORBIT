import React, { useEffect, useRef } from "react";
  import Lenis from "lenis";

import SpiralBG from "../../assets/Difference.png"

import HeroSection from "../../Components/SEO Page Components/HeroSection"
import AiSEO from "../../Components/SEO Page Components/1AiSEO"
import WhatsSEO from "../../Components/SEO Page Components/2WhatsSEO";
import SeoNeed from "../../Components/SEO Page Components/3SeoNeed";
import FillerFour from "../../Components/SEO Page Components/4Filler"
import FillerFive from '../../Components/SEO Page Components/5Filler'
import FillerSix from "../../Components/SEO Page Components/6Filler"
import Benifit from "../../Components/SEO Page Components/7Benifit"
import Marqee from "../../Components/Global Components/Marqee"
import WeGiveResults from "../../Components/SEO Page Components/8WeGiveResults"
import SeoForYourBusiness from "../../Components/SEO Page Components/9SeoForYourBusiness"
import Services from '../../Components/SEO Page Components/10Services'
import DiyVsHiringAgency from "../../Components/SEO Page Components/11DiyVsAgency"
import Process from "../../Components/SEO Page Components/12Process"
import Time from "../../Components/SEO Page Components/13TIme"
import Worth from "../../Components/SEO Page Components/14Worth"
import HowToChooseAgency from "../../Components/SEO Page Components/15HowToChooseAgency"
import Tips from "../../Components/SEO Page Components/16Tips"
import FAQ from "../../Components/SEO Page Components/17Faq";
import ContactForm from '../../Components/Global Components/ContactForm'

const SEO = () => {
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
      <HeroSection></HeroSection>
      <AiSEO/>
      <WhatsSEO/>
      <SeoNeed/>
      <div className='bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064] max-w-full'>
      <FillerFour/>
      <FillerFive/>      
      </div> 
      <FillerSix/>
      <Benifit/>
      <div className="lg:mt-5 mb- bg-white">
             <Marqee
              texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "- Local SEO - Ecommerce - AI SEO - Technical SEO - SEO Audits"]}
              velocity={50}
              className="custom-scroll-text mb-5"
             />
      </div>
      <WeGiveResults/>
      <SeoForYourBusiness/>
      <Services/>
      <DiyVsHiringAgency/>
      <Process></Process>
      <Time/> 
      <Worth/>
      <HowToChooseAgency/>
      <Tips/>
      <FAQ/>
      <div className="bg-cover bg-center bg-no-repeat w-full sm:bg-contain md:bg-cover lg:bg-cover"
           style={{ backgroundImage: `url(${SpiralBG})` }}>
        <ContactForm/>
      </div>
    </div>
  )
} 

export default SEO 