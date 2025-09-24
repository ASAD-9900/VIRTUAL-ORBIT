import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import Hero from "../../Components/Global Components/HeroSubPage"
import Pitch from "../../Components/Technical SEO Components/1Pitch"
import Affect from '../../Components/Technical SEO Components/2Affect'
import Marqee from "../../Components/Global Components/Marqee"
import TechnicalSeoWorth from "../../Components/Technical SEO Components/6Invest"
import TechnicalSeoServices from '../../Components/Technical SEO Components/4Services'
import CTA from '../../Components/Technical SEO Components/CTA'
import FAQ from '../../Components/Technical SEO Components/9FAQ'
import ContactForm from "../../Components/Global Components/ContactForm"
import Tips from '../../Components/Technical SEO Components/7Tips'
import HowToDo from "../../Components/Technical SEO Components/3HowToDo"
import ChooseAgency from "../../Components/Technical SEO Components/5ChooseAgency"

const TechnicalSEO = () => {
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
        <Hero title="Transform Your Website Into a Lead Generation "
                  subtitle="Get a free custom proposal showing exactly how we'll increase your conversions and grow your business">
        </Hero> 
        <Pitch></Pitch> 
        <Affect></Affect>  
        <HowToDo/>
        <TechnicalSeoServices></TechnicalSeoServices>
        <ChooseAgency/>
        <div className="lg:my-5 lg:mt-18 bg-white">
            <Marqee
                texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Technical SEO"]}
                velocity={50}
                className="custom-scroll-text mb-5"
            />
        </div>
        <TechnicalSeoWorth/>
        <Tips></Tips>
        <FAQ></FAQ>
        <div className="bg-gradient-to-b from-[#0f3166] to-blue-900 via-blue-700 to-white">
        <ContactForm/>
        </div>
    </div>
  )
}

export default TechnicalSEO