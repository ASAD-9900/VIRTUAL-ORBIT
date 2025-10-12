import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import SpiralBG from "../../assets/Difference.png"

import HeroSection from "../../Components/SEO Page Components/HeroSection"
import AiSEO from "../../Components/SEO Page Components/1AiSEO"
import GrowWithSEO from "../../Components/SEO Page Components/2GrowWithSEO";
import SeoNeed from "../../Components/SEO Page Components/3SeoNeed";
import Banner from "../../Components/SEO Page Components/Banner"
import WeGiveResults from "../../Components/SEO Page Components/4WeGiveResults"
import Services from "../../Components/SEO Page Components/5Services"
import Filler from "../../Components/SEO Page Components/Filler"
import SeoForYourBusiness from "../../Components/SEO Page Components/6SeoForYourBusiness"
import DiyVsHiringAgency from "../../Components/SEO Page Components/7DiyVsAgency"
import Marqee from "../../Components/Global Components/Marqee"
import Process from "../../Components/SEO Page Components/8Process"
import Invest from "../../Components/SEO Page Components/9Invest"
import WhyChooseVO from "../../Components/SEO Page Components/10WhyChooseVO"
import Tips from "../../Components/SEO Page Components/11Tips"
import FAQ from "../../Components/SEO Page Components/12Faq";
import ContactForm from '../../Components/Global Components/ContactForm'
import Marqee1 from "../../Components/SEO Page Components/Marqee"

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
      <WeGiveResults/>
      <GrowWithSEO/>
      <SeoNeed/>
      <Banner/>
      {/* <FillerSix/> */}
      {/* <Services/> */}
      <Filler/>
      <SeoForYourBusiness/>
      <DiyVsHiringAgency/>
      <div className="lg:mt-20 lg:mb-20">
      <Process/>
      </div>
        <div className="lg:my-5 lg:mt-10 bg-white lg:hidden">
            <Marqee
            texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
            velocity={50}
            className="custom-scroll-text mb-5"
            />
        </div>
      <div className="hidden lg:block">
      <Marqee1/>
      </div>
      <Invest/> 
      <WhyChooseVO/>
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