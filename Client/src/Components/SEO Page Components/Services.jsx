import React from 'react';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Seller Account Setup',
      description: "Our Amazon SEO company works directly with an Amazon sales agent to guide you through the entire setup process, including account creation, product entry and inbound shipping plan configuration. We ensure your seller account is compliant and well-optimized to start generating sales from day one. Our Amazon SEO agency handles every technical detail so you can focus on your product development and innovation."
    },
    {
      number: '02',
      title: 'Seller Brand Setup',
      description: "Protecting your brand is just as important as promoting it. We support you through the Amazon Brand Registry setup process by coordinating with the Amazon client team and providing expert consultation. Once registered, your brand becomes eligible for A+ Content, Brand Stores and other premium tools that help you differentiate your products and safeguard your intellectual property against unauthorized sellers."
    },
    {
      number: '03',
      title: 'Amazon Account Audit',
      description: "Our Amazon SEO company conducts a comprehensive audit of your existing account and product listings. We uncover any issues that need to be addressed, evaluate the quality of your existing Amazon listings and campaigns and provide a strategic implementation plan to take your product sales to the next level. Once approved, we optimize your product listings to improve search rankings for high-volume keywords within your product categories."
    },
    {
      number: '04',
      title: 'Competitor Research',
      description: "Winning on Amazon requires knowing who you're up against. Our Amazon SEO specialists identify your direct competitors and uncover strategies they're using to succeed so we can help you do it better. From pricing strategies and coupon deployment to offensive targeting and positioning within related categories, our competitor research enables us to craft an SEO Amazon strategy that closes gaps and carves out more market share for your brand. This insight also helps shape your brand narrative and guide future promotional efforts."
    },
    
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Thrive's Amazon SEO Services
        </h2>
        <p className="text-lg text-blue-700 mb-8">
          Laying the Groundwork for Long-Term Organic Success
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
        {services.map(({ number, title, description }) => (
          <div key={number} className="relative">
            {/* Number */}
            <div className="text-6xl md:text-7xl font-bold text-gray-200 mb-4">
              {number}
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 -mt-2">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
