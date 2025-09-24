import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Ban, BarChart3, Award, DollarSign, Headphones } from 'lucide-react';

const colors = [
  'from-blue-600 to-blue-700',
  'from-indigo-600 to-indigo-700', 
  'from-purple-600 to-purple-700',
  'from-sky-600 to-sky-700',
  'from-slate-600 to-slate-700',
  'from-cyan-600 to-cyan-700',
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  const features = [
    { 
      icon: Users, 
      title: 'Multidisciplinary Team', 
      description: 'Our digital strategy firm comprises a team of digital marketing consultants with vast experience and expertise in various areas of strategy development, including B2B social media strategy, AdWords strategy, Amazon advertising strategy, Shopify marketing strategy and SEO audit service.',
      benefits: ['Expert strategists', 'Continuous training', 'Multi-platform expertise', 'Industry knowledge']
    },
    { 
      icon: BarChart3, 
      title: 'Data-Driven Approach', 
      description: 'Every decision we make is backed by comprehensive data analysis and market research. We use advanced analytics tools to track performance, measure ROI, and continuously optimize your campaigns for maximum results.',
      benefits: ['Advanced analytics', 'ROI tracking', 'Performance optimization', 'Measurable results']
    },
    { 
      icon: Award, 
      title: 'Proven Track Record', 
      description: 'With hundreds of successful campaigns across diverse industries, Virtual Orbit has consistently delivered exceptional results for businesses of all sizes. Our portfolio showcases increased conversion rates, improved search rankings, and substantial revenue growth.',
      benefits: ['Hundreds of campaigns', 'Diverse industries', 'Increased conversions', 'Revenue growth']
    },
    { 
      icon: Ban, 
      title: 'No Commitment Necessary', 
      description: 'With our digital marketing strategy agency, you don\'t have to commit to our digital strategy services. You have the option to take our social media marketing plan and corporate marketing strategy and implement them yourself.',
      benefits: ['Flexible engagement', 'No long-term contracts', 'Implementation options', 'Your choice']
    },
    { 
      icon: DollarSign, 
      title: 'Cost-Effective Solutions', 
      description: 'Our strategic approach eliminates wasteful spending on ineffective marketing channels. We focus your budget on high-performing strategies that deliver the best ROI. By partnering with Virtual Orbit, you get enterprise-level marketing expertise.',
      benefits: ['Budget optimization', 'High ROI focus', 'Enterprise expertise', 'Cost savings']
    },
    { 
      icon: Headphones, 
      title: '24/7 Support & Communication', 
      description: 'Your success is our priority, which is why we provide round-the-clock support and maintain transparent communication throughout your campaign. You\'ll have direct access to your dedicated account manager.',
      benefits: ['Round-the-clock support', 'Dedicated manager', 'Regular reports', 'Transparent communication']
    },
  ];

  return (
    <div className="relative bg-white">
      {/* Header Section */}
      <motion.div 
        className="text-center py-8 px-4 bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Virtual Orbit ?
          </h2>
        </div>
      </motion.div>

      {/* Stacking Cards Section - Fixed for Front Stacking */}
      <div ref={containerRef} className="relative" style={{ height: `${features.length * 100}vh` }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const cardOffset = 20; // Equal gap between cards
          
          return (
            <div
              key={index}
              className="sticky h-screen flex items-center justify-center px-4 sm:px-6"
              style={{ 
                top: `${index * cardOffset}px`, // Equal spacing
                zIndex: index + 10 // Higher z-index for front stacking
              }}
            >
              <div className="w-full max-w-7xl">
                {/* Enhanced Horizontal Card */}
                <div className="flex flex-col lg:flex-row rounded-3xl shadow-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-3xl transition-all duration-300">
                  {/* Left Section - Icon & Title */}
                  <div className={`lg:w-2/5 p-8 sm:p-12 lg:p-16 bg-gradient-to-br ${colors[index]} text-white flex flex-col justify-center relative overflow-hidden min-h-[400px] lg:min-h-[500px]`}>
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/30 w-fit">
                          <Icon className="w-8 sm:w-10 h-8 sm:h-10" />
                        </div>
                        <div className="text-xs sm:text-sm font-semibold tracking-wide bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full w-fit">
                          0{index + 1}
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
                        {feature.title}
                      </h3>
                      <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-white/40 rounded-full mb-6"></div>
                      
                      {/* Key Benefits */}
                      <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-sm sm:text-base font-semibold text-white/90 mb-3">Key Benefits:</h4>
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-white/90">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Section - Description */}
                  <div className="lg:w-3/5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative min-h-[400px] lg:min-h-[500px]">
                    <div className="relative z-10">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl font-light mb-8 sm:mb-10">
                        {feature.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">99%</div>
                          <div className="text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1">24/7</div>
                          <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-8 sm:w-10 h-0.5 bg-blue-600 rounded-full group-hover:w-10 sm:group-hover:w-12 transition-all duration-300"></div>
                        <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base">Learn More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Background pattern */}
                    <div className="absolute top-6 right-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-gray-100 rounded-full opacity-30"></div>
                    <div className="absolute bottom-6 right-12 w-10 sm:w-16 h-10 sm:h-16 border border-gray-100 rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;


