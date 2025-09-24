import React from 'react';

const AuditSEO = () => {
  return (
    <section className="bg-white py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/path-to-your-technical-seo-image.jpg" 
                alt="Technical SEO Illustration - Person with magnifying glass analyzing SEO" 
                className="w-full max-w-lg h-auto object-contain drop-shadow-xl rounded-lg"
              />
              {/* Optional decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-100 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Technical SEO: Your First Step in Creating{' '}
                <span className="text-green-700">a Better Search Experience</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                At the core of algorithm changes is one goal: to provide the best user experience possible. To achieve this, you need to understand carefully what is technical SEO, what it entails and how you can leverage SEO technical audit to ensure your website adheres to search engine guidelines and industry standards.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Technical on page SEO includes several components, such as site speed, Accelerated Mobile Pages (AMP), robots exclusion standard (robots.txt), XML sitemap status and content quality. These factors are critical to your website's online performance.
              </p>

              
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AuditSEO;
