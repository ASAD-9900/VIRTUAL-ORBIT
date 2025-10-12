import React from 'react';
import { motion } from 'framer-motion';
import GraphBG from "../../assets/GraphBG.png"
import { Search, BarChart3, Target, TrendingUp, FileText, Zap } from 'lucide-react';
import Tools from "../../assets/Tools.png"
import Hand from "../../assets/hand.png"
import Star from "../../assets/star.png"

const WhatsSEO = () => {
  return (
    <section className="max-w-full bg-[#0b254f] lg:overflow-hidden">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-12 '>
        {/* Digital Marketing Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-35">
          {/* Image Left with Hand */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">     
              {/* Main Tools Image */}
              <img 
                src={Tools}
                alt="Digital marketing analytics dashboard showing online marketing performance" 
                className="w-full h-auto object-contain"
              />
              
              {/* Hand Image - Diagonal Animation with Responsive Sizing */}
              <motion.img 
                src={Hand}
                alt="Hand pointing" 
                className="absolute bottom-0 right-4 w-32 h-48 sm:w-36 sm:h-52 sm:bottom-2 sm:-right-4 lg:w-79 lg:h-79 lg:-bottom-29 lg:-right-25 object-contain z-10"
                animate={{
                  x: [-10, 10, -10],
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-start font-montserrat text-gray-200 mb-3 sm:mb-4 lg:mb-5 leading-tight">
                Why Your Store Need <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-['Playfair_Display',serif] italic">Ecommerce SEO</span> Service?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-center lg:text-start text-blue-200 font-medium">
                Connect with Your Customers Where They Spend Their Time Online
              </p>
            </div>
            
            <p className="text-sm sm:text-base lg:text-xl text-white leading-relaxed text-center lg:text-left">
              Digital marketing is the use of online channels, platforms, and technologies to promote your business, products, 
              or services to potential customers. It encompasses everything from search engine optimization (SEO) and social media 
              marketing to{' '}
              <a href="#" className="text-blue-200 underline hover:text-blue-400 duration-200 font-medium">
                email campaigns and pay-per-click advertising
              </a>
              . The goal is to reach your target audience where they're already spending their time.
            </p>
            
            {/* Button - Responsive sizing */}
            <div className="pt-4 sm:pt-4 lg:pb-4 flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <span className="mr-2 sm:mr-3">Ready to Get Started?</span>
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsSEO;
