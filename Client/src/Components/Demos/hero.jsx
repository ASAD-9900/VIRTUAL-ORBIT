import React from 'react';
import { Search, TrendingUp, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-400/30">
                <Search className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">SEO Excellence</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Dominate
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                  Search Results
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 font-light max-w-2xl">
                Transform your online presence with data-driven SEO strategies that deliver measurable results and sustainable growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Free SEO Audit
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">500+</div>
                <div className="text-sm text-blue-200">Clients Ranked #1</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">250%</div>
                <div className="text-sm text-blue-200">Avg. Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">99%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <img 
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="SEO Analytics Dashboard"
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-4 animate-bounce">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 animate-pulse">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl filter blur-xl opacity-30 scale-110"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;