import React from 'react';

const benefitsLeft = [
  'Stronger local community outreach',
  'Optimized Google My Business listing',
  'High-authority local business citations',
  'Multi-channel local digital marketing campaigns',
  'Higher local SEO ranking',
  'More targeted website traffic',
  'More phone calls and site inquiries from prospective clients',
];

const benefitsRight = [
  'Increased sales revenue',
  'Repeat business from loyal customers',
  'More foot traffic',
  'Credible online reputation',
  'Enhanced Google Maps visibility', 
  'Reduced advertising costs',
  'Increased trustworthiness and market authority',
];

const OptimizeYourStore = () => {
  return (
    <section className='max-w-full bg-[#0f3064]'>
      <div className="max-w-7xl  mx-auto px-4 py-12">
        <div className="md:text-center md:mb-12">
          <h2 className="text-3xl font-montserrat md:text-5xl text-white mb-2">
            How To Optimize Your <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'>Online Store?</span>  
          </h2>
          <p className="text-gray-400 text-lg font-semibold">
            Create a Lasting Impression Across Search Engines and Your Prospects
          </p>
        </div>

        <p className="text-white text-lg leading-relaxed max-w-5xl mx-auto mb-12">
          In today's competitive digital landscape, investing in the best local SEO services could mean the difference between a thriving business and a failing establishment. Where does local digital marketing fall in your campaign priorities?
        </p>

        {/* Main Content  */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 max-w-7xl mx-auto mb-12">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Local SEO Illustration"
              className="max-w-full h-auto w-150"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-white text-lg leading-relaxed">
              A MarketingSherpa study determined which type of search had the biggest impact on brands' marketing objectives and found that almost <span className="font-bold text-blue-600">54%</span> of respondents consider <span className="font-bold text-blue-600">local search</span> to have the most positive impact on their digital marketing efforts.
            </p>

            <p className="text-white text-lg leading-relaxed">
              Evidently, digital dominance has made it vital for businesses of all sizes to concentrate their efforts on local SEO optimization. It is a critical strategy for acquiring qualified leads and converting them into sales. If you don't have a local SEO strategy in place, you could be doing more harm to your business than you initially realize.
            </p>

              <p className="text-white text-lg leading-relaxed">
              Evidently, digital dominance has made it vital for businesses of all sizes to concentrate their efforts on local SEO optimization. It is a critical strategy for acquiring qualified leads 
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-bg-[#0f3064] rounded-lg p-8 relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.5)]">
          <h3 className="font-bold text-lg text-center md:text-xl text-white mb-8 leading-relaxed">
            Still on the fence about investing in local search engine optimization services? You shouldn't be. These are the benefits of local SEO:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
            {/* Left */}
            <div className="space-y-4">
              {benefitsLeft.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="space-y-4">
              {benefitsRight.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-white text-base leading-relaxed relative z-10">
            Ready to chat about how our local SEO services can grow your business?{' '}
            <a href="#contact" className="text-blue-400 underline font-medium hover:text-blue-500 transition-colors">
              Reach out
            </a>{' '}
            to us and let's talk about which local SEO packages fit your online needs.
          </p>
  
          {/*  Checkmark  */}
          <div className="absolute -right-8 -top-8 md:-top-16 opacity-10"> 
            <svg
              className="w-58 h-58 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizeYourStore;
