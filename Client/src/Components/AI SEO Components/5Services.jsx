import React from 'react';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Seller Account Setup',
      description: [
        "Our Amazon SEO company works directly with an ",
        { type: "link", text: "Amazon sales agent", url: "https://sellercentral.amazon.com", external: true },
        " to guide you through the entire setup process, including account creation, product entry and inbound shipping plan configuration. We ensure your seller account is compliant and well-optimized to start generating sales from day one. Our ",
        { type: "link", text: "Amazon SEO agency", url: "/amazon-seo-services", external: false },
        " handles every technical detail so you can focus on your product development and innovation."
      ]
    },
    {
      number: '02',
      title: 'Seller Brand Setup',
      description: [
        "Protecting your brand is just as important as promoting it. We support you through the ",
        { type: "link", text: "Amazon Brand Registry", url: "https://brandregistry.amazon.com", external: true },
        " setup process by coordinating with the Amazon client team and providing expert consultation. Once registered, your brand becomes eligible for ",
        { type: "link", text: "A+ Content", url: "https://advertising.amazon.com/solutions/products/a-plus-content", external: true },
        ", Brand Stores and other premium tools that help you differentiate your products and safeguard your intellectual property against unauthorized sellers."
      ]
    },
    {
      number: '03',
      title: 'Amazon Account Audit',
      description: [
        "Our Amazon SEO company conducts a comprehensive audit of your existing account and product listings. We uncover any issues that need to be addressed, evaluate the quality of your existing Amazon listings and campaigns and provide a strategic implementation plan to take your product sales to the next level. Once approved, we optimize your product listings to improve ",
        { type: "link", text: "search rankings", url: "/seo-services", external: false },
        " for high-volume keywords within your product categories."
      ]
    },
    {
      number: '04',
      title: 'Competitor Research',
      description: [
        "Winning on Amazon requires knowing who you're up against. Our ",
        { type: "link", text: "Amazon SEO specialists", url: "/team", external: false },
        " identify your direct competitors and uncover strategies they're using to succeed so we can help you do it better. From pricing strategies and coupon deployment to offensive targeting and positioning within related categories, our competitor research enables us to craft an SEO Amazon strategy that closes gaps and carves out more market share for your brand. This insight also helps shape your brand narrative and guide future promotional efforts."
      ]
    },
    {
      number: '05',
      title: 'Amazon Listing Optimization',
      description: [
        "Our Amazon SEO agency writes unique product descriptions, optimized titles and content that encourages shoppers to buy. We also work with your existing creative assets to create a dynamic image set designed to capture interest and inform and persuade consumers to buy. For ",
        { type: "link", text: "Amazon Brand Registered sellers", url: "https://brandregistry.amazon.com", external: true },
        ", our team develops compelling A+ Content designed to share your brand story, unique product details and comparison charts that help shoppers make the best purchase decisions. For Brand Registered sellers with a variety of products, we also develop a custom ",
        { type: "link", text: "Amazon Brand Store", url: "https://advertising.amazon.com/solutions/products/stores", external: true },
        " that allows shoppers to browse your full catalog."
      ]
    },
    {
      number: '06',
      title: 'Amazon Review Strategies',
      description: [
        "Ratings and reviews have a big impact on Amazon SEO and in the minds of Amazon shoppers. That's why Thrive recommends taking a proactive approach to Amazon ratings and reviews. Our Amazon strategists set up automated rating and review requests that adhere to ",
        { type: "link", text: "Amazon's strict policies", url: "https://sellercentral.amazon.com/gp/help/external/G201929730", external: true },
        ". These automated requests will be branded, personalized and timed to the seller's specifications for optimal review collection. This service also includes review notifications that enable sellers to promptly address any poor customer experiences, increasing the likelihood of getting negative reviews removed or amended."
      ]
    }
  ];

  const DescriptionWithLinks = ({ description }) => {
    if (typeof description === 'string') {
      return <p className="text-gray-900 leading-relaxed text-sm md:text-base">{description}</p>;
    }

    return (
      <p className="text-gray-900 leading-relaxed text-sm md:text-base">
        {description.map((item, index) => {
          if (typeof item === 'string') {
            return <span key={index}>{item}</span>;
          } else if (item.type === 'link') {
            return (
              <a
                key={index}
                href={item.url}
                className="text-blue-400 hover:text-blue-100 underline hover:no-underline transition-colors duration-200 font-medium"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
              >
                {item.text}
              </a>
            );
          }
          return null;
        })}
      </p>
    );
  };

  return (
    <section className="bg-white max-w-full">
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat md:text-5xl text-gray-900 mb-3">
            Virtual Orbit's <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'>AI SEO Services</span>
          </h2>
          <p className="text-lg text-blue-600 mb-8">
            Laying the Groundwork for Long-Term Organic Success
          </p>
        </div>

        {/* Services Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          {services.map(({ number, title, description }) => (
            <div key={number} className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            
              {/*  Number */}
              <div className="text-6xl md:text-7xl font-bold text-gray-400 mb-4">
                {number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 -mt-2">
                {title}
              </h3>
              <DescriptionWithLinks description={description} />
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};

export default Services;
