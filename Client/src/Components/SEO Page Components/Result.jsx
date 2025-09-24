import React from 'react';

const SEOLeadGenerationSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 sm:py-16 bg-gray-50">
      <div className="grid gap-8 sm:gap-12 items-center">

        {/* heading */}
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              How SEO Services Drive More Leads to Your Business
            </h2>
            <p className="text-blue-700 text-base sm:text-lg font-semibold">
              Transform Search Visibility Into Quality Lead Generation
            </p>
          </div>

          {/* text description */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Several elements go into creating and executing a successful marketing plan, with <span className="font-bold">lead generation</span> serving as the foundation of business growth. Without a steady stream of qualified leads, your business will struggle to make sales and expand. <span className="font-bold">SEO optimization</span> acts as a powerful funnel that drives high-intent prospects directly to your website when they're actively searching for solutions.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Professional SEO services, including keyword optimization, content marketing, and technical SEO improvements, complement your lead generation efforts by increasing online visibility and driving targeted organic traffic to your website. The higher your website ranks in search results, the more qualified prospects discover your business, leading to increased clicks, engagement, and conversions.
            </p>
          </div>

          {/* List and Image */}
          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-16">
            <div className="w-full lg:w-96 lg:flex-shrink-0 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="SEO Lead Generation Services" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* List */}
            <div className="flex-1 space-y-3 order-2 lg:order-2">
              <p className="text-gray-900 font-semibold text-sm sm:text-base">
                Using SEO services to generate leads also creates opportunities for:
              </p>
              <ul className="space-y-2">
                {[
                  'Targeting high-intent search keywords that convert',
                  'Building domain authority and search credibility', 
                  'Creating valuable content that attracts prospects',
                  'Optimizing conversion paths and user experience',
                  'Capturing leads at every stage of the buying journey',
                  'Reducing customer acquisition costs over time',
                  'Ranking for industry-specific and product keywords',
                  'Converting organic traffic into qualified leads and sales'
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
              Research shows that <span className="font-bold">organic search drives 53% of all website traffic</span> and SEO leads have a <span className="font-bold">14.6% close rate</span> compared to just 1.7% for outbound marketing. Companies that blog regularly generate <span className="font-bold">67% more leads</span> than those that don't. Accelerate your business growth with strategic SEO solutions that turn search visibility into sustainable lead generation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOLeadGenerationSection;
