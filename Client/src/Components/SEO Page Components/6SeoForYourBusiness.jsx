import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Invest from "../../assets/technical-seo-invest.png"
import SpiralBG from "../../assets/SpiralUp.png"
import { TrendingUp } from 'lucide-react';

function Pitch() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to translateY values
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={ref}
      className="bg-white py-6 px-4 sm:px-6 max-w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${SpiralBG})`
      }}
    >
      <motion.div 
        className="max-w-7xl mx-auto md:pt-60 xl:pt-100"
        style={{
          translateY: translateY,
          opacity: opacity
        }}
      > 
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={Invest}
                alt="Professional man using tablet for AI optimization"
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat text-gray-200 leading-tight">
              Why Your Business Need
              <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'> SEO Services?</span>
            </h2>
            
            <h3 className="text-lg lg:text-xl font-semibold text-blue-300 leading-relaxed">
              Build Topical Authority and Maximize Discoverability
            </h3>
            
            <div className="space-y-6 text-white leading-relaxed">
              <p className="text-lg lg:text-xl">
                AI has fundamentally reshaped how search engines interpret, rank and deliver 
                content to the end user.
              </p>
              
              <p className="text-lg lg:text-xl">
                Instead of focusing primarily on traditional keyword matching, search engines 
                leverage advanced large language models (LLMs), such as ChatGPT and Gemini, 
                to understand user intent and generate highly personalized answers.
              </p>

              <div className="mt-10 pb-4 flex justify-center sm:justify-start">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <span className="mr-3">Ready to Get Started?</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div> 
  );
}

export default Pitch;
