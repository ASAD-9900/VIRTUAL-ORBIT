import React from 'react';
import { Search, BarChart3, Target, TrendingUp, FileText, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your website\'s current SEO performance and competitive landscape.',
      color: 'from-blue-500 to-blue-600',
      delay: '0'
    },
    {
      icon: Target,
      title: 'Strategy Development',
      description: 'Custom SEO strategy tailored to your business goals and target audience.',
      color: 'from-indigo-500 to-indigo-600',
      delay: '200'
    },
    {
      icon: FileText,
      title: 'Content Optimization',
      description: 'Creating and optimizing content that ranks well and engages your audience.',
      color: 'from-purple-500 to-purple-600',
      delay: '400'
    },
    {
      icon: Zap,
      title: 'Technical Implementation',
      description: 'Technical SEO improvements including site speed, mobile optimization, and structure.',
      color: 'from-blue-600 to-indigo-600',
      delay: '600'
    },
    {
      icon: BarChart3,
      title: 'Performance Monitoring',
      description: 'Continuous tracking and optimization based on data-driven insights.',
      color: 'from-indigo-600 to-purple-600',
      delay: '800'
    },
    {
      icon: TrendingUp,
      title: 'Results & Growth',
      description: 'Measurable improvements in rankings, traffic, and conversions.',
      color: 'from-purple-600 to-blue-600',
      delay: '1000'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-8 shadow-sm border border-blue-200/50">
            <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Process</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            How Our SEO
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Process Works
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our proven 6-step methodology ensures your website achieves sustainable growth 
            and dominates search engine results through data-driven strategies.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-300 transform -translate-x-1/2"></div>

          {/* Timeline dots connector line */}
          <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-px bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 transform -translate-x-1/2 opacity-50"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative group animate-fade-in-up`}
                  style={{ animationDelay: `${step.delay}ms` }}
                >
                  {/* Fixed Timeline dot positioning */}
                  <div className={`hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}>
                    <div className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full border-4 border-white shadow-xl group-hover:scale-125 transition-all duration-300`}>
                      <div className="absolute inset-0.5 bg-white rounded-full opacity-30"></div>
                    </div>
                    {/* Pulsing ring effect */}
                    <div className={`absolute inset-0 w-6 h-6 bg-gradient-to-r ${step.color} rounded-full animate-ping opacity-20`}></div>
                  </div>

                  {/* Content positioning */}
                  <div className={`lg:flex lg:items-center ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className={`lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      {/* Step Card */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 group-hover:border-blue-200/50 relative overflow-hidden">
                        {/* Card gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10">
                          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          
                          <div className="space-y-5">
                            <div className="flex items-center gap-4">
                              <span className="text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">0{index + 1}</span>
                              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced connection line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-300 to-indigo-300 rounded-full relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <span className="mr-3">Ready to Get Started?</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Process;