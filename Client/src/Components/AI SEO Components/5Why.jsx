import React from 'react';
import { TrendingUp, Target, DollarSign, BarChart3, Clock, Zap } from 'lucide-react';

const DigitalMarketingBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />, 
      title: "Increased Online Visibility",
      description: "Digital marketing helps your business appear where your customers are looking - on search engines, social media, and other online platforms. By optimizing your online presence, you can reach potential customers who are actively searching for your products or services."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />, 
      title: "Targeted Audience Reach",
      description: "Unlike traditional marketing, digital marketing allows you to target specific demographics, interests, and behaviors. You can reach the right people at the right time with personalized messages that resonate with their needs and preferences.",
      highlight: "right people at the right time"
    }, 
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />, 
      title: "Cost-Effective Marketing",
      description: "Digital marketing typically costs less than traditional advertising methods while delivering better ROI. You can start with small budgets, test what works, and scale successful campaigns without the huge upfront costs of TV, radio, or print advertising."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />, 
      title: "Measurable Results",
      description: "Every digital marketing campaign provides detailed analytics and performance data. You can track website traffic, conversion rates, engagement metrics, and revenue attribution to understand exactly how your marketing efforts are performing.",
      highlight: "detailed analytics and performance data"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />, 
      title: "24/7 Marketing Presence",
      description: "Your digital marketing works around the clock, even when you're sleeping. SEO, social media posts, email campaigns, and online ads continue attracting and engaging customers outside of business hours, maximizing your marketing reach."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />, 
      title: "Competitive Advantage",
      description: "Businesses that embrace digital marketing gain significant advantages over competitors who rely solely on traditional methods. You can quickly adapt to market changes, test new strategies, and stay ahead of industry trends to maintain your competitive edge."
    }
  ];

  const renderDescription = (description, highlight) => {
    if (!highlight) return description;
    
    const parts = description.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-blue-400 underline font-medium">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="max-w-full bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064]" >
      <div className="max-w-7xl mx-auto px-6 py-6 lg:pb-18 space-y-16">
        <div className='mb-6'>
            <h2 className="text-4xl font-montserrat md:text-5xl lg:text-5xl text-center  text-white mt-8 mb-8 md:mb-15">
              How To Do {' '}
              <span className="bg-gradient-to-r text-bold from-orange-400 via-pink-400  to-purple-500 bg-clip-text text-transparent">
                Technical SEO 
              </span> For Your Webiste?
               
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {benefits.map(({ icon, title, description, highlight }, index) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {icon}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {title}
                  </h4>
                  <p className="text-white leading-relaxed text-sm md:text-base">
                    {renderDescription(description, highlight)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
  );
};

export default DigitalMarketingBenefits;
