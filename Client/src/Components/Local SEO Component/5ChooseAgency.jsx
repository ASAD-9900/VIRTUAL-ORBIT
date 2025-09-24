import React from 'react';
import SpiralBG from "../../assets/Difference.png"
import LocalSEO from "../../assets/Local-SEO.jpg"
import GMB from "../../assets/GMB.png"

const Result
 = () => {
  return (
      <section 
        className="max-w-full"
        style={{
          backgroundImage: `url(${SpiralBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      > 
      <div className='max-w-6xl mx-auto px-4 py-4 sm:py-16 lg:pb-25'>
          <div className="grid gap-8 sm:gap-12 items-center">
            {/* heading */}
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl sm:text-3xl lg:text-5xl font-montserrat text-white leading-tight">
                  How To Choose a <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'>Local SEO Agency?</span> 
                </h2>
                <p className="text-gray-400 text-base sm:text-lg font-semibold">
                  Make Your Brand Name More Recognizable
                </p>
              </div>

              {/* text description */}
              <div className="space-y-4">
                <p className="text-white leading-relaxed text-lg sm:text-lg">
                  Several elements go into creating and executing a successful marketing plan, including lead generation and local search service. <span className="font-bold">Lead generation</span> serves as the lifeblood of your business. Without a steady stream of qualified leads, your business will struggle to make sales and expand. <span className="font-bold text-blue-400">Local SEO optimization</span>, on the other hand, acts as a funnel that drives prospects to your website.
                </p>

                <p className="text-white leading-relaxed text-lg sm:text-lg">
                  Local business SEO services, such as local citations service and Google My Business optimization service, complement your lead generation efforts by increasing brand awareness and driving organic traffic to your website. The more people in your community can see your website, the higher your chances of acquiring clicks and converting them into potential clients.
                </p>
              </div>

              {/* List and Image */}
              <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-16">
                <div className="w-full lg:w-96 lg:flex-shrink-0 order-2 lg:order-1">
                  <img 
                    src={GMB} 
                    alt="Local SEO Services" 
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover   "
                  />
                </div>
                
                {/* List */}
                <div className="flex-1 space-y-3 order-2 lg:order-2">
                  <p className="text-white font-semibold text-lg sm:text-lg">
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
                      <li key={index} className="flex items-start gap-3 text-white text-sm sm:text-base">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Result
;
