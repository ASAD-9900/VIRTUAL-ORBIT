import React from 'react';

const EcommerceSEOSales = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 sm:py-10 bg-gray-50">
      <div className="grid gap-8 sm:gap-12 items-center">

        {/* heading */}
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              How Ecommerce SEO Drives More Sales
            </h2>
            <p className="text-blue-700 text-base sm:text-lg font-semibold">
              Transform Organic Traffic Into Revenue Growth
            </p>
          </div>

          {/* text description */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Ecommerce SEO is the cornerstone of sustainable online sales growth, directly impacting your store's visibility in search results where customers actively look for products. <span className="font-bold">Strategic SEO optimization</span> ensures your products appear when high-intent buyers search, creating a direct pathway from search queries to completed purchases.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Unlike paid advertising that stops generating results when you stop spending, ecommerce SEO creates lasting value by building organic search rankings that continue driving qualified traffic to your product pages. <span className="font-bold">Optimized product listings</span> combined with technical SEO improvements result in higher conversion rates and increased average order values from organic visitors.
            </p>
          </div>

          {/* List and Image */}
          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-16">
            <div className="w-full lg:w-96 lg:flex-shrink-0 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1519181245277-cffeb31da2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx3fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Ecommerce SEO driving sales growth" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* List */}
            <div className="flex-1 space-y-3 order-1 lg:order-2">
              <p className="text-gray-900 font-semibold text-sm sm:text-base">
                Strategic ecommerce SEO implementation drives sales through:
              </p>
              <ul className="space-y-2">
                {[
                  'Higher product page rankings for buyer-intent keywords',
                  'Increased organic traffic from qualified shoppers', 
                  'Enhanced product descriptions that convert browsers to buyers',
                  'Improved site speed reducing cart abandonment rates',
                  'Optimized category pages that showcase product ranges',
                  'Strategic internal linking boosting cross-selling opportunities',
                  'Mobile-first optimization capturing mobile commerce growth',
                  'Rich snippets and schema markup increasing click-through rates'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                    <span className="text-blue-600 mt-1.5 flex-shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 sm:p-4 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Research shows that <span className="font-bold">organic search drives 53% of all ecommerce website traffic</span> and accounts for approximately <span className="font-bold">40% of ecommerce revenue</span>. Businesses that invest in comprehensive ecommerce SEO strategies typically see a <span className="font-bold">20-30% increase in online sales</span> within the first year. Maximize your store's potential with data-driven ecommerce SEO solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceSEOSales;
