import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import Marqee from "../../Components/Global Components/Marqee"
import HeroSubPage from "../../Components/Global Components/HeroSubPage"
import ContactForm from "../../Components/Global Components/ContactForm"
import Pitch from "../../Components/AI SEO Components/1Pitch"
import WhatsAiSEO from "../../Components/AI SEO Components/2WhatsAiSEO"
import WhyAiSeo from '../../Components/AI SEO Components/5Why'
import FAQ from '../../Components/AI SEO Components/FAQ'
import MoreLeads from "../../Components/AI SEO Components/6Moreleads"
import Tips from "../../Components/AI SEO Components/Tips"
import ChooseAgency from "../../Components/AI SEO Components/9ChooseAgency"
import Need from "../../Components/AI SEO Components/7Need"
import SpiralBG from "../../assets/Difference.png"
import GEO from "../../Components/AI SEO Components/4WhatsGEO"
import AEO from "../../Components/AI SEO Components/3WhatsAEO"
import Banner from "../../Components/Global Components/Banner"
import AiMarqee from "../../Components/AI SEO Components/Marqee"
import WhyChoose from "../../Components/AI SEO Components/10WhyChoose"
import AiSeoHero from "../../assets/ai-seo-hero.png"
const AI_SEO = () => {
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
          firstHeadingText="AI Marketing Reinvented for Startups"
          secondHeadingText="Empower Your Business Online"
          descriptionText="Drive conversions intelligently with a unified, AI-powered marketing experience AI-powered marketing experience AI-powered marketing experience"
          // imageUrl={AiSeoHero}
          // imageAlt="Marketing dashboard illustration"
        />
        <div className="lg:mt-8">
        <Pitch></Pitch>
        </div>
        <WhatsAiSEO></WhatsAiSEO>
        <div className='bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064] max-w-full'>
          <AEO/>
          <GEO/>
        </div>
        <WhyAiSeo></WhyAiSeo>
        <Banner/> 
        <MoreLeads/>
        <div className="lg:my-5 lg:mt-10 bg-white sm:hidden">
            <Marqee
            texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
            velocity={50}
            className="custom-scroll-text mb-5"
            />
        </div>
        <div className="hidden lg:block">
        <AiMarqee/>
        </div>
        <Need/>
        <ChooseAgency/>
        <WhyChoose/>
        <Tips/>
        <FAQ></FAQ>
        <div className="bg-gradient-to-b from-[#0f3166] via-[#044b88]  to-white">
        <div className="bg-cover bg-center bg-no-repeat w-full 
            sm:bg-contain md:bg-cover lg:bg-cover"
            style={{ backgroundImage: `url(${SpiralBG})` }}>
        <ContactForm></ContactForm> 
        </div>
        </div>
    </div>
  )
}

export default AI_SEO