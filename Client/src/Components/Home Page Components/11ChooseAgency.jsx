import React from "react";

const DigitalMarketingTips = () => {
  const leftColumnTips = [
    "Define your target audience and buyer personas",
    "Create valuable, consistent content",
    "Leverage social media marketing",
    "Optimize your website for conversions", 
    "Use email marketing automation",
    "Implement SEO best practices",
    "Track and analyze your marketing metrics"
  ];
  
  const rightColumnTips = [
    "Invest in paid advertising (PPC/social ads)",
    "Build a strong brand presence online",
    "Use video marketing to engage audiences",
    "Implement strategic marketing funnels",
    "Focus on customer retention strategies",
    "Partner with influencers or industry leaders"
  ];

  const TipItem = ({ children }) => (
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
      <span className="text-gray-700">{children}</span>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-montserrat text-center text-gray-800 mb-6">
        How to Choose A <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text  text-transparent">Digital Marketing Agency</span>?
      </h2>
      
      {/* Description */}
      <p className="text-gray-700 text-sm sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-7xl mx-auto">
        Looking to accelerate your business growth through digital marketing? Implement these proven digital marketing strategies to increase your online visibility, attract more customers, and boost your revenue: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quod.
      </p>
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 mb-8">
        {/* Left list */}
        <div className="space-y-4 md:mx-auto text-sm sm:text-lg lg:text-xl">
          {leftColumnTips.map((tip, index) => (
            <TipItem key={index}>{tip}</TipItem>
          ))}
        </div>
        
        {/* Right list */}
        <div className="space-y-4 md:mx-auto text-sm sm:text-lg lg:text-xl">
          {rightColumnTips.map((tip, index) => (
            <TipItem key={index}>{tip}</TipItem>
          ))}
        </div>
      </div>
      
      {/* bottom text */}
      <div className="space-y-4 text-gray-700  text-sm sm:text-lg lg:text-xl leading-relaxed">
        <p>
          Implementing these digital marketing strategies takes time, expertise, and consistent effort. Partnering with a professional digital marketing agency can help you execute these tactics effectively while you focus on running your business.
        </p>
        
        <p>
          Ready to take your business to the next level with comprehensive digital marketing solutions? Virtual Orbit's expert team can help you implement these strategies and more.{' '}
          <a 
            href="/Contact-Us" 
            className="text-blue-600 underline hover:text-blue-700 transition-colors"
          >
            Schedule a consultation
          </a>{' '}
          with us today to discover how our digital marketing services can accelerate your business growth and maximize your ROI.
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketingTips;
