import React from 'react';
import { TrendingDown, ArrowRightCircle, MousePointerClick, FileText, Clock, DollarSign } from 'lucide-react';

const EcommerceSEOMetrics = () => {
  const metrics = [
    {
      icon: <TrendingDown className="w-6 h-6 text-blue-700" />, 
      title: "Bounce Rate",
      description: "The percentage of visitors who land on your ecommerce product pages but leave without browsing other products or categories. A high bounce rate may indicate poor product relevance, slow loading times, or weak SEO targeting. Reducing bounce rates improves overall ecommerce SEO performance."
    },
    {
      icon: <ArrowRightCircle className="w-6 h-6 text-blue-700" />, 
      title: "Organic Traffic",
      description: "Visitors who discover your online store through organic search results from Google, Bing, and other search engines. Higher organic traffic indicates successful ecommerce SEO strategies and better product visibility in search results.",
      highlight: "organic search results"
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-blue-700" />, 
      title: "Click-through Rate (CTR)",
      description: "The percentage of users who click on your product listings in search engine results pages. Higher CTR indicates effective product titles, meta descriptions, and rich snippets that attract potential customers to your ecommerce store."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-700" />, 
      title: "Product Page Views",
      description: "Measures how many individual product pages visitors view during their session. Higher product page views indicate good site navigation, internal linking, and successful cross-selling through SEO-optimized related products."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-700" />, 
      title: "Page Load Speed",
      description: "How quickly your ecommerce pages load for users. Google considers page speed a ranking factor, and studies show that the first three seconds of load time significantly impact user retention and search rankings.",
      highlight: "first three seconds of load time"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-700" />, 
      title: "SEO Revenue Attribution",
      description: "Tracks how much revenue is directly attributed to organic search traffic. This metric helps measure the financial impact of your ecommerce SEO efforts and guides budget allocation for future SEO investments."
    }
  ];

  const renderDescription = (description, highlight) => {
    if (!highlight) return description;
    
    const parts = description.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-blue-700 font-medium">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Ecommerce SEO Introduction Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Content Left */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Is Ecommerce SEO?
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Drive More Traffic and Sales to Your Online Store
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Ecommerce SEO is the process of optimizing your online store to rank higher in search engine results pages (SERPs). 
            Unlike traditional SEO, ecommerce SEO focuses on product pages, category pages, and{' '}
            <a href="#" className="text-blue-700 underline hover:text-blue-800 font-medium">
              user experience optimization
            </a>
            . The goal is to attract qualified traffic that converts into paying customers, ultimately increasing your online 
            revenue and brand visibility.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Key strategies include optimizing product descriptions with targeted keywords, implementing structured data markup, 
            improving site architecture, enhancing page speed, and creating SEO-friendly URLs that help search engines 
            understand and rank your products effectively.
          </p>
        </div>
        
        {/* Image Right */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx3fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
            alt="Ecommerce SEO analytics and online store optimization" 
            className="w-100 h-100 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Ecommerce SEO Metrics Section */}
      <div>
        <p className="mb-8 text-gray-800 text-base md:text-lg">
          <span className="font-bold italic">Ecommerce SEO Metrics</span> are key performance indicators used to measure your online store's search visibility and organic performance. Essential ecommerce SEO metrics include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {metrics.map(({ icon, title, description, highlight }) => (
            <div key={title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {icon}
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {renderDescription(description, highlight)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Ecommerce SEO Context */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Why These Metrics Matter for Ecommerce Success
          </h4>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Monitoring these ecommerce SEO metrics helps you understand how well your online store performs in search engines. 
            By tracking <span className="font-medium text-blue-700">organic traffic growth</span>, optimizing for 
            <span className="font-medium text-blue-700"> faster page speeds</span>, and improving 
            <span className="font-medium text-blue-700"> product page engagement</span>, you can boost your store's visibility, 
            attract more qualified customers, and increase sales through organic search channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSEOMetrics;
