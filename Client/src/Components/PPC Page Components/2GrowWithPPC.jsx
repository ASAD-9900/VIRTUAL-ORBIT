import React from 'react';
import GraphBG from "../../assets/GraphBG.png"
import { Search, BarChart3, Target, TrendingUp, FileText, Zap } from 'lucide-react';


const GrowWithPPC = () => {
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
    <div>
        <section 
        className="max-w-full bg-blue-200 bg-cover bg-center bg-no-repeat mt-10" 
        style={{
        backgroundImage: `url(${GraphBG})`
        }}
        >
         <div className='max-w-7xl mx-auto px-6  py-6'>
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/3 space-y-6">
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl text-center sm:text-start md:text-5xl  text-gray-700 mb-5">
                    Grow Your Business With <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-['Playfair_Display',serif] italic"> PPC Marketing Company</span>
                    </h2>
                    <p className="text-lg text-center sm:text-start text-blue-600 font-medium">
                    Connect with Your Customers Where They Spend Their Time Online
                    </p>
                </div>
                
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Digital marketing is the use of online channels, platforms, and technologies to promote your business, products, 
                    or services to potential customers. It encompasses everything from search engine optimization (SEO) and social media 
                    marketing to{' '}
                    <a href="#" className="text-blue-700 underline hover:text-blue-800 font-medium">
                    email campaigns and pay-per-click advertising
                    </a>
                    . The goal is to reach your target audience where they're already spending their time - online.
                </p>
                
                {/* button */}
                <div className=" mt-10 md:mb-18 pb-4 flex justify-center sm:justify-start">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <span className="mr-3">Ready to Get Started?</span>
                    <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx3fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                    alt="Digital marketing analytics dashboard showing online marketing performance" 
                    className="w-120 h-120 object-cover rounded-lg shadow-lg"
                />  
                </div>
            </div>
      </div>
    </section>

    {/* Points Section */}
      <section 
        className="max-w-full pt-10 pb-5 bg-cover bg-center bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064]" 
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            {/* Header */}
            <div className="md:text-center md:mb-12">
              <h2 className="text-3xl font-montserrat md:text-5xl text-start sm:text-center text-gray-300 mb-2">
                Major Challenges <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-['Playfair_Display',serif] italic">Online Businesses Face</span>  
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
    </div>
  );
};

export default GrowWithPPC;
