import React from 'react';
import { 
  Settings, 
  Search, 
  PenTool, 
  Link2, 
  GitBranch, 
  Headphones,
  ArrowRight 
} from 'lucide-react';

const ScalenutSection = () => {
  const features = [
    {
      icon: <Settings className="w-4 h-4 md:w-5 md:h-5" />,
      title: "All in one GEO platform - no juggling tools"
    },
    {
      icon: <Search className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Content AI engines can crawl, rank, and cite"
    },
    {
      icon: <PenTool className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Human-like writing, structured for AI answers"
    },
    {
      icon: <Link2 className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Build trusted backlinks without cold outreach"
    },
    {
      icon: <GitBranch className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Track brand mentions across AI engines, Reddit & more"
    },
    {
      icon: <Headphones className="w-4 h-4 md:w-5 md:h-5" />,
      title: "1:1 onboarding & world-class support"
    }
  ];

  const stats = [
    {
      number: "1 Mn",
      suffix: "+",
      label: "Users"
    },
    {
      number: "10X",
      suffix: "",
      label: "Growth in Organic Traffic"
    },
    {
      number: "5 Mn",
      suffix: "+",
      label: "SEO Blogs Created"
    }
  ];

  return (
    <div className="w-full">
      <div className='mx-auto'>
        <div className="relative bg-gradient-to-br from-[#002855] via-[#003366] to-[#002855] px-4 md:px-6 pt-8 md:pt-12 pb-12 md:pb-8 mx-4 md:mx-8 rounded-3xl md:rounded-4xl">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-base text-center mb-6 md:mb-3 px-2">
              Why choose Virtual Orbit?
            </h2>
            <div className="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-6 lg:gap-x-8 lg:gap-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="text-white mt-0.5 md:mt-1 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <p className="text-white text-sm md:text-base leading-relaxed">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[calc(100%-2rem)] md:w-auto px-2 md:px-0">
            <div className="bg-gray-900 rounded-full px-3 py-3 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 shadow-2xl border border-gray-800">
              <span className="text-white font-medium text-sm md:text-base lg:text-lg text-center md:whitespace-nowrap">
                Be the answer AI engines pick
              </span>
              <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 shadow-lg text-sm md:text-base">
                Get Started
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white px-4 md:px-6 py-16 md:py-20 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2 md:mb-3">
                  {stat.number}
                  {stat.suffix && (
                    <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 font-medium px-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalenutSection;
