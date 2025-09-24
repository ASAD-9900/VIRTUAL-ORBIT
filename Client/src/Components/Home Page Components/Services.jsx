import React, { useRef, useMemo } from 'react';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Finish horizontal sweep earlier and leave buffer for the last panel
  const x = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["0vw", `-${(4 - 1) * 100}vw`, `-${(4 - 1) * 100}vw`]
  );

  const services = useMemo(() => ([
    {
      number: '01',
      title: 'SEO Services',
      subtitle: 'Dominate Search Rankings',
      description: "Boost your online visibility with our comprehensive SEO strategies. We optimize your website to rank higher in search results, drive organic traffic, and increase your digital presence across all major search engines.",
      features: [
        'Keyword Research & Analysis',
        'On-Page & Technical SEO', 
        'Link Building Strategies',
        'Content Optimization',
        'Local SEO Management',
        'Analytics & Reporting'
      ],
      stats: [
        { label: 'Average Ranking Improvement', value: '150%' },
        { label: 'Organic Traffic Increase', value: '300%' },
        { label: 'Client Retention Rate', value: '95%' }
      ],
      color: {
        primary: 'from-blue-600 to-indigo-700',
        secondary: 'from-blue-50 to-indigo-100',
        accent: 'blue-600',
        bg: 'from-blue-50 via-white to-indigo-50'
      },
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Web Development',
      subtitle: 'Crafting Digital Experiences',
      description: "Create stunning, responsive websites that convert visitors into customers. Our development team builds modern, fast-loading websites using the latest technologies and best practices for optimal user experience.",
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'CMS Development',
        'Progressive Web Apps',
        'API Integration',
        'Performance Optimization'
      ],
      stats: [
        { label: 'Load Time Improvement', value: '75%' },
        { label: 'Conversion Rate Boost', value: '250%' },
        { label: 'Mobile Responsiveness', value: '100%' }
      ],
      color: {
        primary: 'from-emerald-600 to-teal-700',
        secondary: 'from-emerald-50 to-teal-100',
        accent: 'emerald-600',
        bg: 'from-emerald-50 via-white to-teal-50'
      },
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Pay Per Click',
      subtitle: 'Maximize Your Ad ROI',
      description: "Maximize your ROI with targeted PPC campaigns across Google Ads, Facebook, and other platforms. We create data-driven advertising strategies that deliver qualified leads and measurable results for your business.",
      features: [
        'Google Ads Management',
        'Social Media Advertising',
        'Conversion Tracking',
        'A/B Testing & Optimization',
        'Audience Targeting',
        'Budget Optimization'
      ],
      stats: [
        { label: 'Average ROAS', value: '400%' },
        { label: 'Cost Per Lead Reduction', value: '60%' },
        { label: 'Click-Through Rate', value: '8.5%' }
      ],
      color: {
        primary: 'from-orange-600 to-red-600',
        secondary: 'from-orange-50 to-red-100',
        accent: 'orange-600',
        bg: 'from-orange-50 via-white to-red-50'
      },
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Custom Software',
      subtitle: 'Tailored Tech Solutions',
      description: "Transform your business with tailored software solutions. We develop custom applications, automation tools, and integrated systems designed specifically for your unique business requirements and workflow.",
      features: [
        'Custom Web Applications',
        'Mobile App Development',
        'Database Management',
        'System Integration',
        'Process Automation',
        'Cloud Solutions'
      ],
      stats: [
        { label: 'Process Efficiency Gain', value: '200%' },
        { label: 'Development Time Saved', value: '40%' },
        { label: 'User Satisfaction', value: '98%' }
      ],
      color: {
        primary: 'from-purple-600 to-pink-600',
        secondary: 'from-purple-50 to-pink-100',
        accent: 'purple-600',
        bg: 'from-purple-50 via-white to-pink-50'
      },
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 006 20.25z" />
        </svg>
      )
    }
  ]), []);

  // Variants to reduce multiple IntersectionObservers and orchestrate with one trigger
  const leftCol = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightCol = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const featuresContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
  };

  const featureItem = {
    hidden: { opacity: 0, x: 16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${(services.length + 1) * 100}vh` }}
      >
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Horizontal Scrolling Services */}
          <div className="h-full flex items-center">
            <motion.div
              className="flex"
              style={{ x, willChange: 'transform', transform: 'translate3d(0,0,0)' }}
            >
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className={`flex-none w-screen h-screen bg-gradient-to-br ${service.color.bg} relative overflow-hidden`}
                  style={{ contain: 'paint' }}
                >
                  {/* Background Elements (lighter blur and opacity for performance) */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                      className={`absolute w-96 h-96 bg-gradient-to-r ${service.color.secondary} rounded-full opacity-25 blur-xl md:blur-2xl`}
                      style={{ top: '-10%', right: '-10%', transform: 'translateZ(0)' }}
                    />
                    <div
                      className={`absolute w-64 h-64 bg-gradient-to-r ${service.color.primary} rounded-full opacity-15 blur-lg md:blur-xl`}
                      style={{ bottom: '-5%', left: '-5%', transform: 'translateZ(0)' }}
                    />

                    {/* Lightweight grid using CSS gradients instead of heavy SVG paint */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.6) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        backgroundPosition: '0 0',
                        willChange: 'transform',
                      }}
                    />
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <div className="max-w-7xl mx-auto w-full">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Main Content */}
                        <motion.div
                          variants={leftCol}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.25 }}
                          className="space-y-8"
                        >
                          {/* Service Number & Icon */}
                          <div className="flex items-center gap-6">
                            <div className={`text-6xl font-bold bg-gradient-to-r ${service.color.primary} bg-clip-text text-transparent`}>
                              {service.number}
                            </div>
                            <div className={`text-${service.color.accent} p-4 bg-white rounded-2xl shadow-md`}>
                              {service.icon}
                            </div>
                          </div>

                          {/* Title & Subtitle */}
                          <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                              {service.title}
                            </h3>
                            <p className={`text-xl text-${service.color.accent} font-semibold`}>
                              {service.subtitle}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                            {service.description}
                          </p>

                          {/* CTA Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                              className={`bg-gradient-to-r ${service.color.primary} text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-transform duration-200`}
                              whileHover={{ scale: 1.03, y: -1 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              Get Started Today
                            </motion.button>
                            <motion.button
                              className={`border-2 border-${service.color.accent} text-${service.color.accent} px-8 py-4 rounded-xl font-semibold text-lg hover:bg-${service.color.accent} hover:text-white transition-colors duration-200`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              View Portfolio
                            </motion.button>
                          </div>
                        </motion.div>

                        {/* Right Column - Bento Grid */}
                        <motion.div
                          variants={rightCol}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.25 }}
                          className="h-full flex items-center"
                        >
                          <motion.div
                            variants={featuresContainer}
                            className="grid grid-cols-2 grid-rows-3 gap-4 w-full h-[600px]"
                          >
                            {/* Large Feature Card - Top Left (spans 2 columns) */}
                            <motion.div
                              variants={featureItem}
                              className="col-span-2 row-span-1 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative z-10">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${service.color.primary} text-white text-sm font-semibold rounded-full mb-3`}>
                                  <span>✨</span> Key Benefits
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">
                                  {service.title === 'SEO Services' && 'Rank Higher, Convert Better'}
                                  {service.title === 'Web Development' && 'Fast, Modern, Responsive'}
                                  {service.title === 'Pay Per Click' && 'Maximum ROI Guaranteed'}
                                  {service.title === 'Custom Software' && 'Tailored to Your Business'}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                  {service.features.slice(0, 2).join(' • ')}
                                </p>
                              </div>
                            </motion.div>

                            {/* Stats Card - Top Right */}
                            <motion.div
                              variants={featureItem}
                              className={`bg-gradient-to-br ${service.color.primary} rounded-2xl p-6 shadow-lg text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
                            >
                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative z-10">
                                <div className="text-3xl font-bold mb-1">
                                  {service.stats[0].value}
                                </div>
                                <div className="text-white/90 text-sm font-medium">
                                  {service.stats[0].label}
                                </div>
                              </div>
                              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
                            </motion.div>

                            {/* Process Card - Middle Left */}
                            <motion.div
                              variants={featureItem}
                              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                            >
                              <div className={`w-12 h-12 bg-gradient-to-r ${service.color.secondary} rounded-xl flex items-center justify-center mb-3`}>
                                <div className={`w-6 h-6 bg-gradient-to-r ${service.color.primary} rounded-md`} />
                              </div>
                              <h5 className="font-semibold text-gray-900 mb-1">Our Process</h5>
                              <p className="text-gray-600 text-xs">Analyze → Execute → Optimize</p>
                            </motion.div>

                            {/* Interactive Feature Card - Middle Right */}
                            <motion.div
                              variants={featureItem}
                              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-2xl">🎯</span>
                                <div className={`w-3 h-3 bg-${service.color.accent} rounded-full animate-pulse`} />
                              </div>
                              <h5 className="font-semibold text-gray-900 mb-1">Live Tracking</h5>
                              <p className="text-gray-600 text-xs">Real-time analytics & reporting</p>
                            </motion.div>

                            {/* Tools/Technology Card - Bottom Left */}
                            <motion.div
                              variants={featureItem}
                              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                            >
                              <div className="flex -space-x-2 mb-3">
                                {[1, 2, 3].map((i) => (
                                  <div
                                    key={i}
                                    className={`w-8 h-8 bg-gradient-to-r ${service.color.primary} rounded-full border-2 border-white flex items-center justify-center`}
                                  >
                                    <span className="text-white text-xs font-bold">T</span>
                                  </div>
                                ))}
                              </div>
                              <h5 className="font-semibold text-gray-900 mb-1">Latest Tools</h5>
                              <p className="text-gray-600 text-xs">
                                {service.title === 'SEO Services' && 'Ahrefs, SEMrush, GA4'}
                                {service.title === 'Web Development' && 'React, Next.js, Tailwind'}
                                {service.title === 'Pay Per Click' && 'Google Ads, Facebook, Analytics'}
                                {service.title === 'Custom Software' && 'Node.js, Python, Cloud'}
                              </p>
                            </motion.div>

                            {/* Support Card - Bottom Right */}
                            <motion.div
                              variants={featureItem}
                              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-green-600 text-sm font-semibold">24/7 Support</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span key={star} className="text-yellow-400">⭐</span>
                                ))}
                              </div>
                              <p className="text-gray-600 text-xs mt-1">Dedicated account manager</p>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Services;
