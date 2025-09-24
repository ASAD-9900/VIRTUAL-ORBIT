import React, { useEffect, useRef } from "react";
  import Lenis from "lenis";

import HeroSection from "../../Components/SEO Page Components/HeroSection"
import Process from '../../Components/Demos/process'
import WhyUs from '../../Components/SEO Page Components/WhyUs'
import ContactForm from '../../Components/Global Components/ContactForm'
import Definition from "../../Components/SEO Page Components/Definition"
import Importace from "../../Components/SEO Page Components/Importance"
import Services from '../../Components/SEO Page Components/Services'
import Marqee from "../../Components/Global Components/Marqee"
import Tips from "../../Components/SEO Page Components/Tips"
import Results from "../../Components/SEO Page Components/Result"

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
      <Definition></Definition>
      <div className='bg-gray-50'>
        <Importace/>
      </div>
      <div className="lg:mt-5 mb- bg-white">
             <Marqee
              texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "- Local SEO - Ecommerce - AI SEO - Technical SEO - SEO Audits"]}
              velocity={50}
              className="custom-scroll-text mb-5"
             />
      </div>
      <Services/>
      <div className='bg-gray-50'>
        <Results/>
      </div>
      <Tips></Tips>
      <WhyUs></WhyUs>
      <Process></Process>
      <ContactForm></ContactForm>
    </div>
  )
}

export default SEO 