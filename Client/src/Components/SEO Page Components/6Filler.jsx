import React from "react";
import CircleBG from "../../assets/Difference.png"

const DmTips = () => {
  
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

  return (
  <section 
    className="max-w-full py-8 bg-cover bg-center xl:pt-3" 
    style={{ backgroundImage: `url(${CircleBG})` }}
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-40"> 
        {/* Header */}
        <div className="md:text-center md:mb-12">
          <h2 className="text-3xl font-montserrat md:text-5xl text-start sm:text-center text-gray-200 mb-2">
            Some Tips Regarding <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'>Filler Services</span>  
          </h2>
          <p className="text-gray-400 text-lg text-start sm:text-center font-semibold">
            Create a Lasting Impression Across Search Engines and Your Prospects
          </p>
        </div>

        {/* Box */}
        <div className="mt-8 bg-[#0f3064] rounded-lg p-8 relative overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.5),0_0_50px_rgba(59,130,246,0.3)]">
          <h3 className="font-bold text-lg text-center md:text-xl text-white mb-8 leading-relaxed">
            With 78% of local mobile searches resulting in offline purchases, local SEO isn't just an option—it's essential. Transform your business with these proven local SEO advantages
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mx-auto relative z-10">
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

          {/* Call to Action */}
          <p className="text-white text-base leading-relaxed relative z-10">
            Ready to chat about how our local SEO services can grow your business?{' '}
            <a href="#contact" className="text-blue-400 underline font-medium hover:text-blue-500 transition-colors">
              Reach out
            </a>{' '}
            to us and let's talk about which local SEO packages fit your online needs.
          </p>

          {/* Large Checkmark Background */}
          <div className="absolute -right-8 -top-8 md:-top-16 opacity-10"> 
            <svg
              className="w-32 h-32 md:w-48 md:h-48 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DmTips;
