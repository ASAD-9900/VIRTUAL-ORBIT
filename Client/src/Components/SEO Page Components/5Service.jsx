import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ServicesAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Local SEO Optimization Service",
      description: "Crafting engaging and shareable content tailored to your brand, designed to captivate your audience and enhance your social media presence.",
      points: [
        "Analyze target audience and competitors;",
        "Develop a content calendar;",
        "Write engaging copy and create visuals;",
        "Track performance metrics and audience interactions"
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      number: "02",
      title: "AI SEO Optimization Service",
      description: "Complete social media oversight including strategy development, content creation, community engagement, and performance analytics.",
      points: [
        "Create and manage social media calendars;",
        "Engage with followers and respond to comments;",
        "Run paid advertising campaigns;",
        "Monitor trends and competitor activity"
      ],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      number: "03",
      title: "Ecommerce SEO Service",
      description: "Improve your search engine rankings and organic traffic through comprehensive on-page and off-page optimization strategies.",
      points: [
        "Keyword research and analysis;",
        "Technical SEO audits and fixes;",
        "Content optimization for search engines;",
        "Link building and authority development"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      number: "04",
      title: "Technical SEO Optimization",
      description: "Improve your search engine rankings and organic traffic through comprehensive on-page and off-page optimization strategies.",
      points: [
        "Keyword research and analysis;",
        "Technical SEO audits and fixes;",
        "Content optimization for search engines;",
        "Link building and authority development"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      number: "05",
      title: "SEO Auditing & Analysis",
      description: "Improve your search engine rankings and organic traffic through comprehensive on-page and off-page optimization strategies.",
      points: [
        "Keyword research and analysis;",
        "Technical SEO audits and fixes;",
        "Content optimization for search engines;",
        "Link building and authority development"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-orange-500 to-red-600"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <div>
            <p className="text-blue-600 text-sm sm:text-base font-semibold mb-2 uppercase tracking-wider">
              SERVICES .
            </p>
            <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
              MAKE YOUR SMM<br />EXCEPTIONAL
            </h2>
          </div>
          <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold uppercase text-sm transition-colors duration-300 shadow-lg">
            ALL SERVICES
          </button>
        </div>

        {/* Accordion Items */}
        <div>
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              {/* Top Border - Hidden when this or previous item is expanded */}
              {index > 0 && expandedIndex !== index && expandedIndex !== index - 1 && (
                <div className="border-b border-gray-300"></div>
              )}

              <motion.div
                className={`${
                  expandedIndex === index 
                    ? 'bg-white shadow-xl rounded-2xl sm:rounded-3xl border border-gray-200 my-6' 
                    : ''
                } overflow-hidden transition-all duration-300`}
                initial={false}
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                    <span className="text-blue-600 text-xl sm:text-2xl lg:text-3xl font-bold">
                      {service.number}
                    </span>
                    <h3 className="text-blue-600 text-base sm:text-lg lg:text-xl font-bold uppercase text-left">
                      {service.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10 border-t border-gray-200">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center pt-6 sm:pt-8">
                          {/* Text Content */}
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="space-y-4 sm:space-y-6"
                          >
                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                              {service.description}
                            </p>
                            <ul className="space-y-2 sm:space-y-3">
                              {service.points.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="text-gray-600 text-sm sm:text-base flex items-start"
                                >
                                  <span className="text-blue-600 mr-2 font-bold">•</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </motion.div>

                          {/* Image */}
                          <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:h-80 shadow-lg"
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-10`}></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
