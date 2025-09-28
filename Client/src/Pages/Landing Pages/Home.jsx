// import React, { useEffect, useRef } from "react";
// import Lenis from "lenis";

// import HomeHero from "../../Components/Home Page Components/HomeHero";
// import DmDefine from "../../Components/Home Page Components/DmDefine";
// import AiSection from "../../Components/Home Page Components/HomeAI";
// import Marqee from "../../Components/Global Components/Marqee";
// import HomeFAQ from "../../Components/Home Page Components/HomeFAQ";
// import WhyChooseUs from "../../Components/Global Components/WhyChooseUs";
// import Contact from "../../Components/Global Components/ContactForm";
// import Services from "../../Components/Home Page Components/Services";
// import Difference from "../../Components/Home Page Components/Difference";
// import OurProcess from "../../Components/Home Page Components/OurProcess";
// import CTA from "../../Components/Home Page Components/CTA";
// import Tips from "../../Components/Home Page Components/Tips";
// import Demo from "../../Components/Demos/demo"
// import DmIntro from "../../Components/Home Page Components/DmIntro"
// import DmWhy from "../../Components/Home Page Components/DmWhy"
// import DmResults from "../../Components/Home Page Components/DmResults"

// // test Imports
// import BentoGrid from "../../Components/Global Components/BentoGrids";

// const Home = () => {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1,   
//       smooth: true,
//       wheelMultiplier: 1.3, 
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//     lenisRef.current = lenis;

    
//     lenis.scrollTo(0);

//     return () => {
//       lenis.destroy(); 
//     };
//   }, []);

//   return (
//     <div className="">  
//       <HomeHero />
//       <div>
//       <AiSection />
//       <DmIntro/>
//       <DmWhy/>
//       <div className="bg-gray-50">
//         <Difference />
//       </div>
//       <Demo/>
//       <div className="hidden md:block">
//         {/* <Services /> */}
//       <BentoGrid/>
//       </div>
//       <DmResults/>
//       <Tips />
//             <div className="lg:mt-5 lg:mb-5">
//         <Marqee
//           texts={[
//             <span className="text-[#4e38f5]">Virtual Orbit -</span>,
//             "- Digital Marketing",
//           ]}
//           velocity={50}
//           className="custom-scroll-text mb-5"
//         />
//       </div>
//       <div className="bg-gray-50">
//         <OurProcess />
//       </div>
//       <HomeFAQ />
//       <CTA />
//       <Contact />
//       </div>
//     </div>
//   );
// };

// export default Home;


// Optimized Home.jsx
import React, { useEffect, useRef, lazy, Suspense, useMemo } from "react";
import Lenis from "lenis";

import CornerBG from "../../assets/CornerBG.png"
import SpiralBG from "../../assets/Difference.png"

// Critical above-fold components - load immediately
import HomeHero from "../../Components/Home Page Components/HomeHero";
import AiSection from "../../Components/Home Page Components/1AiSEO";

// Lazy load all below-fold components
const Marqee = lazy(() => import("../../Components/Global Components/Marqee"));
const WhyChooseUs = lazy(() => import("../../Components/Home Page Components/13WhyChooseUs"));
const Contact = lazy(() => import("../../Components/Global Components/ContactForm"));
const Services = lazy(() => import("../../Components/Home Page Components/8Services"));
const Difference = lazy(() => import("../../Components/Home Page Components/6Difference"));
const OurProcess = lazy(() => import("../../Components/Home Page Components/12OurProcess"));
const ChooseAgency = lazy(() => import("../../Components/Home Page Components/11ChooseAgency"));
const Demo = lazy(() => import("../../Components/Demos/demo"));
const DmIntro = lazy(() => import("../../Components/Home Page Components/2DmIntro"));
const DmWhy = lazy(() => import("../../Components/Home Page Components/3DmNeed"));
const DmResults = lazy(() => import("../../Components/Home Page Components/7Benifit"));
const Filler1 = lazy(() => import("../../Components/Home Page Components/4Filler"));
const Filler2 = lazy(() => import("../../Components/Home Page Components/5Filler"));
const Time = lazy(() => import("../../Components/Home Page Components/9Time"));
const Worth = lazy(() => import("../../Components/Home Page Components/10Worth"));
const Tips = lazy(() => import("../../Components/Home Page Components/14Tips"));
const Faq = lazy(() => import("../../Components/Home Page Components/15FAQ"));



// Optimized loading component
const SectionLoader = React.memo(() => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-pulse bg-gray-200 rounded w-full h-32 max-w-4xl"></div>
  </div>
));

// Optimized intersection observer hook for progressive loading
const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// Progressive loading wrapper component
const LazySection = React.memo(({ children, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <Suspense fallback={<SectionLoader />}>
          {children}
        </Suspense>
      ) : (
        <SectionLoader />
      )}
    </div>
  );
});

const Home = () => {
  const lenisRef = useRef(null);

  // Memoize Lenis configuration to prevent recreation
  const lenisConfig = useMemo(() => ({
    lerp: 0.1,   
    smooth: true,
    wheelMultiplier: 1.3, 
  }), []);

  // Memoize marquee texts to prevent recreation
  const marqueeTexts = useMemo(() => [
    <span key="brand" className="text-[#4e38f5]">Virtual Orbit -</span>,
    "- Digital Marketing",
  ], []);

  useEffect(() => {
    // Defer Lenis initialization to not block initial render
    const initLenis = () => {
      const lenis = new Lenis(lenisConfig);

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
    };

    // Initialize after initial render
    const timeoutId = setTimeout(initLenis, 100);
    
    return () => {
      clearTimeout(timeoutId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [lenisConfig]);

  return (
    <div className="">  
      {/* Critical above-fold content - loads immediately */}
      <HomeHero />
      <AiSection />
      
      <div>
        {/* Progressive loading sections */}
        <LazySection>
          <DmIntro />
        </LazySection>

        <LazySection>
          <DmWhy />
        </LazySection>

        <div className='bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064] max-w-full'>
        <LazySection>
          <Filler1 />
        </LazySection>

        <LazySection>
          <Filler2 />
        </LazySection>
        </div>
        
        <LazySection className="bg-gray-50">
          <Difference />
        </LazySection>

        <LazySection>
          <DmResults />
        </LazySection>

        <LazySection>
          <Demo />
        </LazySection>

        <LazySection className="hidden md:block">
          <Services />
        </LazySection>

        <LazySection className="">
          <Time />
        </LazySection>

        <div className="bg-gradient-to-b from-[#ccd9f4] via-sky-50 to-[#ccd9f4] pt-10">
        <LazySection className="">
          <Worth />
        </LazySection>
        </div>

        <LazySection>
          <ChooseAgency />
        </LazySection>

        <LazySection className="lg:mt-5 lg:mb-5">
          <Marqee
            texts={marqueeTexts}
            velocity={50}
            className="custom-scroll-text mb-5"
          />
        </LazySection>

        <div className='bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${CornerBG})` }}>     
        <LazySection className="">
          <OurProcess />
        </LazySection>

        <LazySection>
          <WhyChooseUs />
        </LazySection>
        </div> 

        <LazySection>
          <Tips />
        </LazySection>

        <LazySection>
          <Faq />
        </LazySection>

        <div className="bg-cover bg-center bg-no-repeat w-full 
            sm:bg-contain md:bg-cover lg:bg-cover"
            style={{ backgroundImage: `url(${SpiralBG})` }}>
        <LazySection>
          <Contact />
        </LazySection>
        </div>

      </div>
    </div>
  );
};

export default Home;
