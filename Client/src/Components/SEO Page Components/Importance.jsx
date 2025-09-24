import React from 'react';
import { Check } from 'lucide-react';

const WhySEOVitalExtended = () => {
  const seoBenefits = [
    "Higher search engine rankings for your target keywords",
    "Increased organic traffic to your website", 
    "Better user experience and site navigation",
    "Enhanced online visibility and brand awareness",
    "Improved conversion rates from qualified leads",
    "Reduced customer acquisition costs",
    "Stronger brand authority and credibility",
    "More targeted website traffic from search engines",
    "Higher click-through rates from search results",
    "Increased sales and revenue from organic search",
    "Better mobile search performance",
    "Enhanced local search visibility for your business",
    "Improved site speed and technical performance",
    "Long-term sustainable growth without ongoing ad spend"
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-6 bg-gray-50">
        <div className='flex justify-center'>
            <h2 className="text-3xl mb-8 md:text-4xl font-bold text-gray-900 leading-tight">
            Why SEO Is Vital for Your Business Success
            </h2>
        </div>
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Image  */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx3fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="SEO business growth illustration" 
            className="w-105 h-105 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In today's competitive digital landscape, SEO serves as the most critical growth driver for businesses of all sizes. 
            Without proper SEO optimization, your business remains invisible to the <strong className="text-gray-800">93% of online experiences</strong> that 
            begin with search engines, missing out on countless potential customers.
          </p>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Consider this: moving your website from <strong className="text-gray-800">page 2 to the top 3 positions</strong> on 
            Google can potentially increase your organic traffic by over 300% without spending an additional dollar on advertising. That's the transformative 
            power of strategic SEO implementation for your business.
          </p>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            SEO doesn't just drive traffic—it attracts high-intent prospects actively searching for your products or services, resulting in 
            higher conversion rates, reduced marketing costs, and sustainable long-term growth for your business.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
          Still on the fence about investing in SEO services? You shouldn't be. These are the 
          benefits of professional SEO for your business:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-base md:text-lg">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-blue-100">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Ready to chat about how our SEO services can grow your business?{' '}
            <a href="#contact" className="text-blue-600 underline hover:text-blue-800 font-medium">
              Reach out
            </a>{' '}
            to us and let's talk about which SEO packages fit your business needs.
          </p>
        </div>
      </div>
        <div className="pt-5 flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get a Free Consultation
              </button>
        </div>
    </section>
  );
};

export default WhySEOVitalExtended;
