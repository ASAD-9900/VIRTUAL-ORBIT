import React from 'react'
import { BarChart, Globe, TrendingUp } from "lucide-react"
import TechnicalSEO from "../../assets/learning-technical-seo.png"
import SpiralBG from "../../assets/Difference.png"

const DigitalMarketingIntro = () => {
  return (
        <section 
        className="max-w-full bg-cover bg-center bg-no-repeat" 
        style={{
        backgroundImage: `url(${SpiralBG})`
        }}
        >
         <div className='max-w-7xl mx-auto px-6 lg:pb-25'>
            <div className="flex flex-col lg:flex-row items-center lg:pb-55 gap-12">
              {/* Content  */}
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat text-white leading-tight">
                    How Do
                    <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'> AI SEO Services</span> Generate More Leads? 
                  </h2>
                  <p className="text-lg mt-4 text-gray-400 font-medium">
                    Connect with Your Customers Where They Spend Their Time Online
                  </p>
                </div>
                
                <p className="text-base mt-8 md:text-lg text-white leading-relaxed">
                  Digital marketing is the use of online channels, platforms, and technologies to promote your business, products, 
                  or services to potential customers. It encompasses everything from search engine optimization (SEO) and social media 
                  marketing to{' '}
                  <a href="#" className="text-blue-700 underline hover:text-blue-800 font-medium">
                    email campaigns and pay-per-click advertising
                  </a>
                  . The goal is to reach your target audience where they're already spending their time - online.
                </p>
              </div>
              
              {/* Image Right */}
              <div className="relative hidden md:block overflow-hidden ">
                  <img
                  src={TechnicalSEO}
                  alt="Professional man using tablet for AI optimization"
                  className="w-full h-[500px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default DigitalMarketingIntro;
