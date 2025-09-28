import React from 'react';
import Time from "../../assets/How-long-does-local-seo-take-to-affect.jpeg"

function Filler() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto"> 
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={Time}
                alt="Professional man using tablet for AI optimization"
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-3xl lg:text-5xl text-center sm:text-start font-montserrat text-white leading-tight">What Is
              <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'> Filler Content </span>Service?
            </h2>
            
            <h3 className="text-lg sm:text-xl text-center sm:text-start font-semibold text-gray-200 leading-relaxed">
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
              
              <p className="text-lg lg:text-xl">
                <span className="font-bold text-green-600">Zero-Click Search</span> is commonplace, 
                with users getting the information they need directly from AI-generated answers, 
                often without visiting a website. That means fewer clicks, lower organic traffic 
                and more missed opportunities unless your business is actively optimized for AI 
                discoverability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Filler;
