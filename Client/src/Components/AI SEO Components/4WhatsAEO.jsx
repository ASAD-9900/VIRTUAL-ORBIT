import React from 'react';
import Graph from "../../assets/GraphBG.png"
import LocalSEO from "../../assets/Local-SEO.jpg"
import { TrendingUp } from 'lucide-react';


function AEO() {
  return (
      <div 
        className="py-2 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-6 lg:pb-25">
            <h2 className="text-3xl sm:text-4xl font-montserrat lg:text-5xl text-white leading-tight">What Is
              <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'> Answer Engine Optimization </span>Service?
            </h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 leading-relaxed">
              Build Topical Authority and Maximize Discoverability
            </h3>
            
            <div className="space-y-6 text-white leading-relaxed">
              <p className="text-lg">
                AI has fundamentally reshaped how search engines interpret, rank and deliver 
                content to the end user.
              </p>
              
              <p className="text-lg">
                Instead of focusing primarily on traditional keyword matching, search engines 
                leverage advanced large language models (LLMs), such as ChatGPT and Gemini, 
                to understand user intent and generate highly personalized answers.
              </p>
              
              <p className="text-lg">
                <span className="font-bold text-green-600">Zero-Click Search</span> is commonplace, 
                with users getting the information they need directly from AI-generated answers, 
                often without visiting a website. That means fewer clicks, lower organic traffic 
                and more missed opportunities unless your business is actively optimized for AI 
                discoverability.
              </p>
            </div>
                <div className=" mt-10 lg:hidden pb-4">
                  <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <span className="mr-3">Ready to Get Started?</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={LocalSEO}
                alt="Professional man using tablet for AI optimization"
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default AEO;
