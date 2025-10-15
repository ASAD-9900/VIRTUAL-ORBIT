import React from 'react';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Google Business Profile Optimization',
      description: [
        "We optimize your ",
        { type: "link", text: "Google Business Profile", url: "https://www.google.com/business/", external: true },
        " with accurate business details, targeted keywords, and engaging visuals to boost local visibility. Our local SEO experts ensure your profile ranks higher in map packs and local search results, making it easier for nearby customers to find and contact your business. We handle everything from category selection to attribute optimization and compelling business descriptions."
      ]
    },
    {
      number: '02',
      title: 'Local Keyword Research & Optimization',
      description: [
        "Effective local SEO starts with identifying the right keywords. Our ",
        { type: "link", text: "local SEO company", url: "/local-seo", external: false },
        " conducts comprehensive keyword research to uncover location-specific search terms with high commercial intent. We analyze how your local audience searches and prioritize phrases like 'near me' queries to connect you with nearby customers actively looking for your services, ensuring your website content targets local search intent."
      ]
    },
    {
      number: '03',
      title: 'Local Citations & NAP Consistency',
      description: [
        "We build accurate local citations and ensure your Name, Address, and Phone Number (NAP) are consistent across all major directories and platforms. Our team submits your business information to relevant local directories, industry-specific listings, and ",
        { type: "link", text: "citation sites", url: "https://www.brightlocal.com/", external: true },
        " to boost trust with search engines. This consistency improves your local search visibility and helps potential customers find accurate information about your business everywhere online."
      ]
    },
    {
      number: '04',
      title: 'On-Page Local SEO',
      description: [
        "Our local SEO services include comprehensive on-page optimization tailored for local search. We optimize meta titles, meta descriptions, headers, and content with location-specific keywords. We also implement ",
        { type: "link", text: "schema markup", url: "https://schema.org/LocalBusiness", external: true },
        " for local businesses, optimize images with geo-targeted alt tags, and create location-specific landing pages that improve your visibility in local search results and drive qualified traffic to your website."
      ]
    },
    {
      number: '05',
      title: 'Review Management & Reputation',
      description: [
        "Positive reviews significantly influence local search rankings and customer trust. Our ",
        { type: "link", text: "local SEO specialists", url: "/team", external: false },
        " implement strategies to encourage and manage customer reviews across Google, Yelp, and other platforms. We set up review monitoring systems, create review generation campaigns, and help you respond professionally to all feedback, building a strong online reputation that improves your local SEO performance and drives more conversions."
      ]
    },
    {
      number: '06',
      title: 'Local Link Building & Outreach',
      description: [
        "We build high-quality, location-specific backlinks through strategic outreach and partnerships with local websites, newspapers, business associations, and organizations. Our ",
        { type: "link", text: "link building strategies", url: "/link-building", external: false },
        " focus on earning authoritative links from locally relevant sources that enhance your domain authority, improve search rankings, and drive targeted traffic from within your geographic area. This localized approach strengthens your presence in local search results."
      ]
    }
  ];

  // Render descriptions with links
  const DescriptionWithLinks = ({ description }) => {
    if (typeof description === 'string') {
      return <p className="text-gray-800 leading-relaxed text-sm md:text-base">{description}</p>;
    }

    return (
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
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
    <section className="relative bg-white max-w-full min-h-screen w-full">
      {/* White Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      {/* Content Layer */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat md:text-5xl text-gray-700 mb-3">
            Virtual Orbit's <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-['Playfair_Display',serif] italic">Local SEO Services</span>
          </h2>
          <p className="text-lg text-blue-600 mb-8">
            Laying the Groundwork for Long-Term Organic Success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          {services.map(({ number, title, description }) => (
            <div
              key={number}
              className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Large Number */}
              <div className="text-6xl md:text-7xl font-bold text-gray-600 mb-4">
                {number}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 -mt-2">
                {title}
              </h3>
              
              {/* Service Description with Links */}
              <DescriptionWithLinks description={description} />
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};

export default Services;
