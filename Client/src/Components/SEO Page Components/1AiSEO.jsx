import React, { useState, useEffect } from 'react';
import { Eye, Search, RotateCcw, Rocket, TrendingUp } from 'lucide-react';

const AiSection = () => {
  const [activeTab, setActiveTab] = useState('visibility');

  const tabContents = [
    {
      id: 'visibility',
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: 'AI Mode Visibility',
      description: 'Google AI Mode redefines how customers discover businesses, prioritizing zero-click answers over traditional search results. Thrive\'s AI SEO experts optimize your content for passage-level targeting and conversational queries to build topical authority that AI recognizes.'
    },
    {
      id: 'search',
      icon: <Search className="w-8 h-8 text-teal-600" />,
      title: 'AI Search Optimization',
      description: 'Our advanced AI search optimization strategies ensure your content ranks prominently in AI-powered search results. We optimize for semantic understanding, context relevance, and query intent to maximize your visibility across all AI search platforms.'
    },
    {
      id: 'refresh',
      icon: <RotateCcw className="w-8 h-8 text-green-600" />,
      title: 'AI Content Refresh',
      description: 'Keep your content fresh and AI-friendly with our intelligent content refresh strategies. We continuously update and optimize your existing content to maintain relevance and authority in rapidly evolving AI search algorithms.'
    },
    {
      id: 'growth',
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: 'AI Growth Acceleration',
      description: 'Accelerate your business growth with our comprehensive AI-driven strategies. We leverage cutting-edge AI tools and techniques to scale your online presence, drive qualified traffic, and convert visitors into customers.'
    }
  ];

  // Card change every 4 second
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabContents.findIndex(tab => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabContents.length;
        return tabContents[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [tabContents]);

  const activeContent = tabContents.find(tab => tab.id === activeTab) || tabContents[0];

  return (
    <div className="py-8 px-6 lg:mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-sans md:text-5xl lg:text-6xl text-gray-700 mb-4">
            The Best AI SEO Agency for{' '}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-['Playfair_Display',serif] italic">
              AI Visibility
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-green-600 font-semibold">
            Helping Businesses Dominate Large Language Model AI Search
          </p>
        </div>

        {/* Card DIv */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

          {/* AI Referral Card */}
          <div className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-center relative z-10">
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">+1,877%</div>
              <div className="text-sm font-semibold text-blue-50 leading-tight">AI Referral Traffic<br/><span className="text-xs opacity-80">(Q1-Q2 2025)</span></div>
            </div>
          </div>

          {/* Gemini Card */}
          <div className="group relative bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 rounded-2xl p-4 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-center relative z-10">
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">+117%</div>
              <div className="text-sm font-semibold text-teal-50 leading-tight">Gemini Traffic<br/><span className="text-xs opacity-80">(Q1-Q2 2025)</span></div>
            </div>
          </div>

          {/* Perplexity  Card */}
          <div className="group relative bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 rounded-2xl p-4 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-center relative z-10">
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">+101%</div>
              <div className="text-sm font-semibold text-teal-50 leading-tight">Perplexity Traffic<br/><span className="text-xs opacity-80">(Q1-Q2 2025)</span></div>
            </div>
          </div>

          {/* ChatGPT Traffic  */}
          <div className="group relative bg-gradient-to-br from-emerald-500 via-green-600 to-green-700 rounded-2xl p-4 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-center relative z-10">
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">+119%</div>
              <div className="text-sm font-semibold text-green-50 leading-tight">ChatGPT Search Traffic<br/><span className="text-xs opacity-80">(Q1-Q2 2025)</span></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Rapid advances in generative artificial intelligence (AI) models have reshaped 
              how content is discovered and consumed. Traditional search engine 
              optimization (SEO) is no longer enough to reach those looking for your 
              products or services. To stay visible online amid shifting algorithms, you need 
              to optimize for AI-first discovery.
            </p>
            
            <p className="text-lg sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur.
            </p>
            <div className="mt-4 pb-4 flex justify-center sm:justify-start">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <span className="mr-3">Get a Free Consultation</span>
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Icons Row */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setActiveTab('visibility')}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  activeTab === 'visibility'
                    ? 'bg-blue-600 shadow-lg shadow-blue-200 ring-4 ring-blue-100'
                    : 'bg-blue-100 hover:bg-blue-200'
                }`}
              >
                <Eye className={`w-7 h-7 ${activeTab === 'visibility' ? 'text-white' : 'text-blue-600'}`} />
              </button>
              <button
                onClick={() => setActiveTab('search')}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  activeTab === 'search'
                    ? 'bg-teal-600 shadow-lg shadow-teal-200 ring-4 ring-teal-100'
                    : 'bg-teal-100 hover:bg-teal-200'
                }`}
              >
                <Search className={`w-7 h-7 ${activeTab === 'search' ? 'text-white' : 'text-teal-600'}`} />
              </button>
              <button
                onClick={() => setActiveTab('refresh')}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  activeTab === 'refresh'
                    ? 'bg-green-600 shadow-lg shadow-green-200 ring-4 ring-green-100'
                    : 'bg-green-100 hover:bg-green-200'
                }`}
              >
                <RotateCcw className={`w-7 h-7 ${activeTab === 'refresh' ? 'text-white' : 'text-green-600'}`} />
              </button>
              <button
                onClick={() => setActiveTab('growth')}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  activeTab === 'growth'
                    ? 'bg-purple-600 shadow-lg shadow-purple-200 ring-4 ring-purple-100'
                    : 'bg-purple-100 hover:bg-purple-200'
                }`}
              >
                <Rocket className={`w-7 h-7 ${activeTab === 'growth' ? 'text-white' : 'text-purple-600'}`} />
              </button>
            </div>

            {/* Dynamic Content Card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg min-h-[280px]">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 via-blue-500 to-green-500 rounded-2xl p-[3px]">
                <div className="bg-white rounded-2xl h-full w-full"></div>
              </div>
              
              {/* Card Content */}
              <div className="relative z-10 opacity-0 animate-fade-in" key={activeTab}>
                <div className="flex items-center space-x-3 mb-6">
                  {activeContent.icon}
                  <h3 className="text-2xl font-bold text-gray-800">{activeContent.title}</h3>
                </div>
                
                <p className="text-lg sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {activeContent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// custom CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default AiSection;
