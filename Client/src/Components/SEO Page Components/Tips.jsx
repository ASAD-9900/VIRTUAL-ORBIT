import React from "react";

const SEOLeadGenerationTips = () => {
  const leftColumnTips = [
    "Optimize for local search keywords and phrases",
    "Create high-quality, keyword-rich content regularly",
    "Improve your website's loading speed and performance",
    "Write compelling title tags and meta descriptions",
    "Build quality backlinks from relevant industry sites",
    "Target long-tail keywords for better conversion rates",
    "Optimize your content for voice search queries"
  ];
  
  const rightColumnTips = [
    "Create location-specific landing pages for local SEO",
    "Optimize your Google My Business profile completely",
    "Use schema markup to enhance search result snippets",
    "Focus on mobile-first website optimization",
    "Conduct regular SEO audits and fix technical issues",
    "Target buyer-intent keywords that convert visitors into leads"
  ];

  const TipItem = ({ children }) => (
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
      <span className="text-gray-700">{children}</span>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        SEO Tips to Generate More Leads for Your Business
      </h2>
      
      {/* Description */}
      <p className="text-gray-700 text-center mb-8 leading-relaxed max-w-4xl mx-auto">
        Want to attract more qualified leads through organic search? Implement these proven SEO strategies to improve your search rankings, increase website visibility, and convert more visitors into valuable leads:
      </p>
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mb-8">
        {/* Left list */}
        <div className="space-y-4">
          {leftColumnTips.map((tip, index) => (
            <TipItem key={index}>{tip}</TipItem>
          ))}
        </div>
        
        {/* Right list */}
        <div className="space-y-4">
          {rightColumnTips.map((tip, index) => (
            <TipItem key={index}>{tip}</TipItem>
          ))}
        </div>
      </div>
      
      {/* bottom text */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Implementing these SEO strategies requires technical expertise, ongoing optimization, and consistent monitoring. Working with a professional SEO agency ensures these tactics are executed correctly and deliver maximum lead generation results.
        </p>
        
        <p>
          Ready to boost your lead generation with powerful SEO strategies? Virtual Orbit's SEO experts can help you implement these techniques and develop a comprehensive SEO strategy tailored to your business.{' '}
          <a 
            href="/Contact-Us" 
            className="text-blue-600 underline hover:text-blue-700 transition-colors"
          >
            Schedule a consultation
          </a>{' '}
          with us today to discover how our SEO services can increase your leads and grow your business.
        </p>
      </div>
    </div>
  );
};

export default SEOLeadGenerationTips;
