import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GraphBG from "../../assets/GraphBG.png"
import { Search, BarChart3, Target, TrendingUp, FileText, Zap } from 'lucide-react';

const WhatsSEO = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="max-w-full bg-blue-200 bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url(${GraphBG})`
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='max-w-7xl mx-auto px-6 py-6'
      >
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="lg:w-2/3 space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl text-center sm:text-start font-montserrat text-gray-700 mb-5">
                What Is <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-['Playfair_Display',serif] italic">Search Engine Optimization</span> Service?
              </h2>
              <p className="text-lg text-center sm:text-start text-blue-600 font-medium">
                Connect with Your Customers Where They Spend Their Time Online
              </p>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Digital marketing is the use of online channels, platforms, and technologies to promote your business, products, 
              or services to potential customers. It encompasses everything from search engine optimization (SEO) and social media 
              marketing to{' '}
              <a href="#" className="text-blue-700 underline hover:text-blue-800 font-medium">
                email campaigns and pay-per-click advertising
              </a>
              . The goal is to reach your target audience where they're already spending their time - online.
            </p>
            
            {/* button */}
            <div className="mt-10 md:mb-18 pb-4 flex justify-center sm:justify-start">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <span className="mr-3">Ready to Get Started?</span>
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
          
          {/* Image Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx3fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
              alt="Digital marketing analytics dashboard showing online marketing performance" 
              className="w-120 h-120 object-cover rounded-lg shadow-lg hidden lg:block"
            />  
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatsSEO;
