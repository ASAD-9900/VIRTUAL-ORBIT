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

// Critical above-fold components - load immediately
import HomeHero from "../../Components/Home Page Components/HomeHero";
import AiSection from "../../Components/Home Page Components/HomeAI";

// Lazy load all below-fold components
const DmDefine = lazy(() => import("../../Components/Home Page Components/DmDefine"));
const Marqee = lazy(() => import("../../Components/Global Components/Marqee"));
const HomeFAQ = lazy(() => import("../../Components/Home Page Components/HomeFAQ"));
const WhyChooseUs = lazy(() => import("../../Components/Global Components/WhyChooseUs"));
const Contact = lazy(() => import("../../Components/Global Components/ContactForm"));
const Services = lazy(() => import("../../Components/Home Page Components/Services"));
const Difference = lazy(() => import("../../Components/Home Page Components/Difference"));
const OurProcess = lazy(() => import("../../Components/Home Page Components/OurProcess"));
const CTA = lazy(() => import("../../Components/Home Page Components/CTA"));
const Tips = lazy(() => import("../../Components/Home Page Components/Tips"));
const Demo = lazy(() => import("../../Components/Demos/demo"));
const DmIntro = lazy(() => import("../../Components/Home Page Components/DmIntro"));
const DmWhy = lazy(() => import("../../Components/Home Page Components/DmWhy"));
const DmResults = lazy(() => import("../../Components/Home Page Components/DmResults"));
const BentoGrid = lazy(() => import("../../Components/Global Components/BentoGrids"));

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
          <BentoGrid />
        </LazySection>

        <LazySection>
          <Tips />
        </LazySection>

        <LazySection className="lg:mt-5 lg:mb-5">
          <Marqee
            texts={marqueeTexts}
            velocity={50}
            className="custom-scroll-text mb-5"
          />
        </LazySection>

        <LazySection className="bg-gray-50">
          <OurProcess />
        </LazySection>

        <LazySection>
          <HomeFAQ />
        </LazySection>

        <LazySection>
          <CTA />
        </LazySection>

        <LazySection>
          <Contact />
        </LazySection>
      </div>
    </div>
  );
};

export default Home;
