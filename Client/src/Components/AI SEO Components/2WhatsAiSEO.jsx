import React from 'react';
import Background from "../../assets/Background.jpg"
import { TrendingUp} from 'lucide-react';


function AIVisibilitySection() {
  return (
        <div
          className="bg-white py-8 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional man using tablet for AI optimization"
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <h2 className="text-4xl font-montserrat md:text-5xl lg:text-5xl text-center  text-white mt-8 mb-8 md:mb-15">
              What Is {' '}
              <span className="bg-gradient-to-r text-bold from-orange-400 via-pink-400  to-purple-500 bg-clip-text text-transparent">
                AI SEO Service? 
              </span>   
            </h2>
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
                <span className="font-bold text-green-300">Zero-Click Search</span> is commonplace, 
                with users getting the information they need directly from AI-generated answers, 
                often without visiting a website. That means fewer clicks, lower organic traffic 
                and more missed opportunities unless your business is actively optimized for AI 
                discoverability.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Optional CTA Button */}
          <div className=" mt-10 flex justify-center  pb-4">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <span className="mr-3">More About AI Optimization?</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
    </div>
  );
}

export default AIVisibilitySection;
