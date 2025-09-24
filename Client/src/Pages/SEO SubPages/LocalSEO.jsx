import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import HeroSubPage from "../../Components/Global Components/HeroSubPage"
import HowDoesItGetleads from "../../Components/Local SEO Component/2HowDoesItGetleads"
import Pitch from "../../Components/Local SEO Component/1Pitch"
import Marqee from "../../Components/Global Components/Marqee"
import HowToOptimize from "../../Components/Local SEO Component/3HowToOptimize"
import Services from "../../Components/Local SEO Component/4Services"
import FaqSection from "../../Components/Local SEO Component/9FAQ"
import ContactForm from "../../Components/Global Components/ContactForm"
import ChooseAgency from "../../Components/Local SEO Component/5ChooseAgency"
import Tips from "../../Components/Local SEO Component/8Tips"
import TimeItTakes from "../../Components/Local SEO Component/6TimeItTakes"
import WorthIt from "../../Components/Local SEO Component/7Worth"
import SpiralBG from "../../assets/Difference.png"
import GscDash from "../../assets/Analytics.png"


const LocalSEO = () => {
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
        <HeroSubPage 
          firstHeadingText="Local Business Marketing That" 
          secondHeadingText="Dominates Your Competition" 
          descriptionText="Get more customers, increase revenue, and build lasting brand recognition with our proven marketing strategies."
          imageUrl={GscDash}
          imageAlt="Different dashboard"
        />
        <Pitch></Pitch>
        <HowDoesItGetleads></HowDoesItGetleads>
        <HowToOptimize></HowToOptimize>
        <Services></Services>
        <ChooseAgency></ChooseAgency>
          <div className="my-8 lg:my-5 mb- bg-white">
              <Marqee
              texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
              velocity={50}
              className="custom-scroll-text mb-5"
              />
        </div>
        <TimeItTakes/>
        <WorthIt/>
        <Tips></Tips>
        <FaqSection></FaqSection>
        <div className="bg-cover bg-center bg-no-repeat w-full 
            sm:bg-contain md:bg-cover lg:bg-cover"
            style={{ backgroundImage: `url(${SpiralBG})` }}>
        <ContactForm></ContactForm> 
        </div>

    </div>
  )
}

export default LocalSEO