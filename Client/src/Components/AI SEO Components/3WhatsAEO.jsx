// import React from 'react';
// import AeoImage from "../../assets/AEO.png"
// import { TrendingUp } from 'lucide-react';
// import GraphBG from "../../assets/GraphBG.png"

// function AEO() {
//   return (
//       <div className="py-2 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
//         style={{
//         backgroundImage: `url(${GraphBG})`
//         }}
//       >
//       <div className="max-w-7xl mx-auto lg:pb-25">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-8">
          
//           {/* Content */}
//           <div className="space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-montserrat lg:text-5xl text-gray-700 leading-tight">What Is
//               <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'> Answer Engine Optimization </span>Service?
//             </h2>
            
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-400 leading-relaxed">
//               Build Topical Authority and Maximize Discoverability
//             </h3>
            
//             <div className="space-y-6 text-gray-800 leading-relaxed">
//               <p className="text-lg">
//                 AI has fundamentally reshaped how search engines interpret, rank and deliver 
//                 content to the end user.
//               </p>
              
//               <p className="text-lg">
//                 Instead of focusing primarily on traditional keyword matching, search engines 
//                 leverage advanced large language models (LLMs), such as ChatGPT and Gemini, 
//                 to understand user intent and generate highly personalized answers.
//               </p>
//             </div>
//             {/* button */}
//             <div className="pt-4 sm:pt-6 lg:pt-2 pb-4 flex justify-center lg:justify-start">
//               <div className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
//                 <span className="mr-2 sm:mr-3">Ready to Get Started?</span>
//                 <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </div>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative">
//             <div className="relative overflow-hidden">
//               <img
//                 src={AeoImage}
//                 alt="Professional man using tablet for AI optimization"
//                 className="w-full h-[560px] object-cover object-center"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> 
//   );
// }

// export default AEO;



import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import AeoImage from "../../assets/AEO.png"
import Google from "../../assets/google.png";
import Competitor from "../../assets/competitor.png";
import Rank from "../../assets/seo-rank.png";
import GraphBG from "../../assets/GraphBG.png"

const WhatsSEO = () => {
  const ref = useRef(null);

  // Floating animation variants for badges
  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -20, 0],
      transition: {
        duration: 3 + custom * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom * 0.3
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="max-w-full bg-white bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url(${GraphBG})`,
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb- sm:pb-12 lg:pb-10'>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-12">

          {/* Content Section - second (right on desktop) */}
          <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-start font-montserrat text-gray-700 mb-3 sm:mb-4 lg:mb-5">
                What's <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-['Playfair_Display',serif] italic">Answer Engine Optimization Service?</span> 
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-center lg:text-start text-blue-600 font-medium">
                Connect with Your Customers Where They Spend Their Time Online
              </p>
            </div>
            
            <p className="text-sm sm:text-base lg:text-xl text-gray-700 leading-relaxed text-center lg:text-left">
              Digital marketing is the use of online channels, platforms, and technologies to promote your business, products, 
              or services to potential customers. It encompasses everything from search engine optimization (SEO) and social media 
              marketing to{' '}
              <a href="#" className="text-blue-700 underline hover:text-blue-800 font-medium">
                email campaigns and pay-per-click advertising
              </a>
              . The goal is to reach your target audience where they're already spending their time - online.
            </p>
            <p className="text-sm sm:text-base lg:text-xl text-gray-700 leading-relaxed text-center lg:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto error eius sed accusantium expedita placeat autem beatae dolore eos nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            
            {/* button */}
            <div className="pt-4 sm:pt-6 lg:pt-5 pb-4 flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <span className="mr-2 sm:mr-3">Ready to Get Started?</span>
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Image Section - first (left on desktop) */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <img 
                src={AeoImage} 
                alt="Digital marketing analytics dashboard showing online marketing performance" 
                className="w-full h-auto object-contain"
              />
              {/* Floating Elements */}
              <div className="absolute inset-0">
                {/* Google - Diagonal Animation */}
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    y: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-2 left-1 sm:top-4 sm:left-2 lg:top-8 lg:-left-1 p-1 sm:p-2 lg:p-3"
                >
                  <img src={Google} alt="Google" className="w-12 h-12 sm:w-10 sm:h-10 lg:w-14 lg:h-14 object-contain" />
                </motion.div>
                {/* Rank 1 Badge - Float Up/Down */}
                <motion.div
                  custom={1}
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -top-2 right-1 sm:top-0 sm:right-2 lg:-top-4 lg:-right-12"
                >
                  <img src={Rank} alt="SEO Rank" className="w-28 h-28 sm:w-28 sm:h-28 lg:w-44 lg:h-44 object-contain" />
                </motion.div>
                {/* Competitor Badge - Float Up/Down */}
                <motion.div
                  custom={2}
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute bottom-4 left-1 sm:bottom-8 sm:left-2 lg:bottom-30 lg:-left-10"
                >
                  <img src={Competitor} alt="Competitor" className="w-28 h-28 sm:w-28 sm:h-28 lg:w-44 lg:h-44 object-contain" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsSEO;
