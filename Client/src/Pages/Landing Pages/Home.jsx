import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import HomeHero from "../../Components/Home Page Components/HomeHero";
import DmDefine from "../../Components/Home Page Components/DmDefine";
import AiSection from "../../Components/Home Page Components/HomeAI";
import Marqee from "../../Components/Global Components/Marqee";
import HomeFAQ from "../../Components/Home Page Components/HomeFAQ";
import WhyChooseUs from "../../Components/Global Components/WhyChooseUs";
import Contact from "../../Components/Global Components/ContactForm";
import Services from "../../Components/Home Page Components/Services";
import Difference from "../../Components/Home Page Components/Difference";
import OurProcess from "../../Components/Home Page Components/OurProcess";
import CTA from "../../Components/Home Page Components/CTA";
import Tips from "../../Components/Home Page Components/Tips";
import Demo from "../../Components/Demos/demo"
import DmIntro from "../../Components/Home Page Components/DmIntro"
import DmWhy from "../../Components/Home Page Components/DmWhy"
import DmResults from "../../Components/Home Page Components/DmResults"

// test Imports
import BentoGrid from "../../Components/Global Components/BentoGrids";

const Home = () => {
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
    <div className="">  
      <HomeHero />
      <div>
      <AiSection />
      <DmIntro/>
      <DmWhy/>
      <div className="bg-gray-50">
        <Difference />
      </div>
      <Demo/>
      <div className="hidden md:block">
        {/* <Services /> */}
      <BentoGrid/>
      </div>
      <DmResults/>
      <Tips />
            <div className="lg:mt-5 lg:mb-5">
        <Marqee
          texts={[
            <span className="text-[#4e38f5]">Virtual Orbit -</span>,
            "- Digital Marketing",
          ]}
          velocity={50}
          className="custom-scroll-text mb-5"
        />
      </div>
      <div className="bg-gray-50">
        <OurProcess />
      </div>
      <HomeFAQ />
      <CTA />
      <Contact />
      </div>
    </div>
  );
};

export default Home;


