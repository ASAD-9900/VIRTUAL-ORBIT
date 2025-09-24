import React from 'react';

const Result
 = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 sm:py-16 ">
      <div className="grid gap-8 sm:gap-12 items-center">

        {/* heading */}
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              How Local SEO Services Drive Lead Generation
            </h2>
            <p className="text-blue-700 text-base sm:text-lg font-semibold">
              Make Your Brand Name More Recognizable
            </p>
          </div>

          {/* text description */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Several elements go into creating and executing a successful marketing plan, including lead generation and local search service. <span className="font-bold">Lead generation</span> serves as the lifeblood of your business. Without a steady stream of qualified leads, your business will struggle to make sales and expand. <span className="font-bold">Local SEO optimization</span>, on the other hand, acts as a funnel that drives prospects to your website.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Local business SEO services, such as local citations service and Google My Business optimization service, complement your lead generation efforts by increasing brand awareness and driving organic traffic to your website. The more people in your community can see your website, the higher your chances of acquiring clicks and converting them into potential clients.
            </p>
          </div>

          {/* List and Image */}
          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-16">
            <div className="w-full lg:w-96 lg:flex-shrink-0 order-2 lg:order-1">
              <img 
                src="/path-to-your-image.jpg" 
                alt="Local SEO Services" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* List */}
            <div className="flex-1 space-y-3 order-2 lg:order-2">
              <p className="text-gray-900 font-semibold text-sm sm:text-base">
                Using local SEO services to acquire leads also opens opportunities for:
              </p>
              <ul className="space-y-2">
                {[
                  'Building your local search citations',
                  'Gathering online reviews', 
                  'Participating in appropriate social networks',
                  'Creating expert content',
                  'Troubleshooting any visibility problems',
                  'Penetrating a strategic local market',
                  'Ranking for business-related keywords',
                  'Converting page visitors into leads and sales'
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
              A Junto survey revealed that <span className="font-bold">57% of business-to-business (B2B) marketers</span> consider local digital marketing services among the most effective ways to generate leads. If done right, a local search engine optimization service can drive a <span className="font-bold">14.6% conversion rate</span>. Propel your online success with growth-driven local SEO solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Result
;
