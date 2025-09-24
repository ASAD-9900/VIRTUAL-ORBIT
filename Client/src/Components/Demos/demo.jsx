
// import React from "react";
// import Lenis from "lenis";
// import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
// import { SiSpacex } from "react-icons/si";
// import { FiArrowRight, FiMapPin } from "react-icons/fi";
// import { useRef, useEffect } from "react";
// import Analytics from "../../assets/Analytics.png"
// import Gscc from "../../assets/GSC-Dashboard.jpg"

// export default function SmoothScrollHero() {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.05,
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//     lenisRef.current = lenis;

//     return () => lenisRef.current.destroy(); 
//   }, []);

//   return (
//     <div className="bg-zinc-900"> 
//       <Hero />
//     </div>
//   );
// }

// const Nav = () => (
//   <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
//     <SiSpacex className="text-3xl mix-blend-difference" />
//     <button
//       onClick={() => {
//         document.getElementById("launch-schedule")?.scrollIntoView({ behavior: "smooth" });
//       }}
//       className="flex items-center gap-1 text-xs text-zinc-400"
//     >
//       LAUNCH SCHEDULE <FiArrowRight />
//     </button>
//   </nav>
// );

// const SECTION_HEIGHT = 1300;

// const Hero = () => (
//   <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative bg-white w-full">
//      {/* <span className="absolute top-10 left-1/2 -translate-x-1/2 text-gray-900 text-8xl font-bold z-50">
//      Scroll
//     </span> */}
//     <CenterImage />
//     <ParallaxImages />
//     {/* <div className="absolute bottom-0 left-0 right-0 h-66 bg-gradient-to-b from-zinc-600/0 to-zinc-600" /> */}
//   </div>
// );

// const CenterImage = () => {
//   const { scrollY } = useScroll();

//   const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
//   const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
//   const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

//   const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);
//   const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

//   return (
//     // <motion.div
//     //   className="sticky top-0 h-screen w-full"
//     //   style={{
//     //     clipPath,
//     //     backgroundSize,
//     //     opacity,
//     //     backgroundImage:
//     //       "url(https://www.storeapps.org/wp-content/uploads/2022/07/ga4-users.png)",
//     //     backgroundPosition: "center",
//     //     backgroundRepeat: "no-repeat",
//     //     filter: "brightness(1.1)", // lightened background
//     //   }}
//     // />

//       <motion.div
//       className="sticky top-0 h-screen w-full flex items-center justify-center bg-gradient-to-br from-white to-gray-100"
//       style={{
//         clipPath,
//         opacity,
//         filter: "brightness(1.1)",
//       }}
//     >
//       <div className="text-center text-gray-900 px-8">
//         <h1 className="text-6xl md:text-9xl lg:text-12xl font-black leading-none tracking-tight">
//           We Give 
//         </h1>
//         <h1 className="text-6xl md:text-9xl lg:text-12xl font-black leading-none tracking-tight">
//           Results!
//         </h1>
        
//       </div>
//     </motion.div>
//   );
// };

// const ParallaxImages = () => (
//   <div className="mx-auto max-w-5xl px-4 pt-[200px]">
//     <ParallaxImg
//       src={Gscc}
//       alt="And example of a space launch"
//       start={-200}
//       end={200}
//       className="w-2/4"
//     >
    
//     </ParallaxImg>
//     <ParallaxImg
//       src={Gscc}
//       alt="An example of a space launch"
//       start={200}
//       end={-250}
//       className="mx-auto w-2/3"
//     />
//     <ParallaxImg
//       src={Analytics}
//       alt="Orbiting satellite"
//       start={-200}
//       end={200}
//       className="ml-auto w-3/4"
//     />
//     <ParallaxImg
//       src={Analytics}
//       alt="Orbiting satellite"
//       start={0}
//       end={-500}
//       className="ml-24 w-7/12"
//     />
    
    
//   </div>
// );

// const ParallaxImg = ({ className, alt, src, start, end, children }) => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: [`${start}px end`, `end ${end * -1}px`],
//   });

//   const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
//   const y = useTransform(scrollYProgress, [0, 1], [start, end]);
//   const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

//   return (
//     <div className={`relative ${className}`} ref={ref}>
//       <motion.img
//         src={src}
//         alt={alt}
//         style={{ transform, opacity, filter: "brightness(1.1)" }} // lightened
//         className="w-full h-auto"
//       />
//       {children}
//     </div>
//   );
// };

import React, { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import Analytics from "../../assets/Analytics.png";
import Gscc from "../../assets/GSC-Dashboard.jpg";

const SECTION_HEIGHT = 1300;

export default function SmoothScrollHero() {
  return (
    <div className="bg-zinc-900">
      <Hero />
    </div>
  );
}

const Hero = () => {
  const ref = useRef(null);

  // Scope scroll progress to this section so visibility isn't tied to global page scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={ref}
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative bg-white w-full"
    >
      <CenterImage progress={scrollYProgress} />
      <ParallaxImages />
    </div>
  );
};

const CenterImage = ({ progress }) => {
  // Use section-local progress for clip/opacity
  const clip1 = useTransform(progress, [0, 1], [25, 0]);
  const clip2 = useTransform(progress, [0, 1], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Keep visible through most of section and fade near end
  const opacity = useTransform(progress, [0, 0.75, 1], [1, 1, 0]);

  return (
    <motion.div
      className="sticky top-0 z-10 h-screen w-full flex items-center justify-center bg-gradient-to-br from-white to-gray-100"
      style={{
        clipPath,
        opacity,
        filter: "brightness(1.1)",
      }}
    >
      <div className="text-center text-gray-900 px-8">
        <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tight">
          We Give
        </h1>
        <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tight">
          Results!
        </h1>
      </div>
    </motion.div>
  );
};

const ParallaxImages = () => (
  // Higher z-index so images sit above the sticky text
  <div className="relative z-20 mx-auto max-w-5xl px-4 pt-[200px]">
    <ParallaxImg
      src={Gscc}
      alt="Example launch"
      start={-200}
      end={200}
      className="w-2/4"
    />
    <ParallaxImg
      src={Gscc}
      alt="Example launch 2"
      start={200}
      end={-250}
      className="mx-auto w-2/3"
    />
    <ParallaxImg
      src={Analytics}
      alt="Orbiting satellite"
      start={-200}
      end={200}
      className="ml-auto w-3/4"
    />
    <ParallaxImg
      src={Analytics}
      alt="Orbiting satellite 2"
      start={0}
      end={-500}
      className="ml-24 w-7/12"
    />
  </div>
);

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${-end}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className={`relative ${className}`} ref={ref}>
      <motion.img
        src={src}
        alt={alt}
        style={{ transform, opacity, filter: "brightness(1.1)" }}
        className="w-full h-auto"
      />
    </div>
  );
};
