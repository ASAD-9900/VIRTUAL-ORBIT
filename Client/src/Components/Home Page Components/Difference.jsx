import React from 'react';
import CircleBG from "../../assets/Difference.png"

const DigitalVsTraditionalMarketing = () => {
  return (
      <section 
        className="max-w-full lg:pb-40"
        style={{
          backgroundImage: `url(${CircleBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      <div className="max-w-6xl mx-auto px-6 pb-30">
        <div className=" mb-5">
          <h3 className="text-3xl font-montserrat md:text-5xl text-center font- text-white mb-6">
            The Two Approaches to Marketing Your Business
          </h3>
          
          <p className="text-lg text-center text-white ">
            While traditional marketing has been around for decades, digital marketing offers modern solutions with measurable results and targeted reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Marketing Column */}
          <div className="bg-gray-100 border-1 border-blue-800 rounded-lg overflow-hidden">
            <div className="bg-gray-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold text-center">
                Traditional Marketing (OFFLINE)
              </h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Traditional marketing uses conventional offline channels like print, radio, TV, and billboards to reach broad audiences. 
                It's ideal for businesses with larger budgets seeking widespread brand awareness in specific geographic locations.
              </p>
              
              <p className="text-gray-800 font-semibold mb-4">
                Here are some key characteristics:
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Broad reach through TV, radio, newspapers, and outdoor advertising
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Higher upfront costs with longer commitment periods
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Limited targeting options and demographic control
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Difficult to measure ROI and campaign effectiveness
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  One-way communication with limited customer interaction
                </li>
                
              </ul>
            </div>
          </div>

          {/* Digital Marketing Column */}
          <div className="bg-blue-50 rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold text-center">
                Digital Marketing (ONLINE)
              </h3>
            </div>
            
            <div className="p-4">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Digital marketing leverages online platforms and technologies to reach targeted audiences through search engines, social media, email, and websites. 
                It offers precise targeting, real-time analytics, and cost-effective solutions for businesses of all sizes.
              </p>
              
              <p className="text-gray-800 font-semibold mb-4">
                Here are some key advantages:
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Precise audience targeting based on demographics, interests, and behavior
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Flexible budgets with options to start small and scale up
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time analytics and detailed performance tracking
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Two-way communication enabling customer engagement and feedback
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  24/7 availability and global reach potential
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalVsTraditionalMarketing;
