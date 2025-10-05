import React, { useRef, useState, useEffect } from 'react';
import { Search, BarChart3, Target, TrendingUp, FileText, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Process = () => {
  const ref = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  
  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      number: '01',
      title: 'Website Audit & Analysis',
      description: 'Comprehensive analysis of your website\'s current SEO performance and competitive landscape to identify opportunities for growth and improvement.Comprehensive analysis of your website\'s current SEO performance and competitive landscape to identify opportunities for growth and improvement',
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Custom SEO strategy tailored to your business goals and target audience with clear objectives and measurable KPIs for success.Comprehensive analysis of your website\'s current SEO performance and competitive landscape to identify opportunities for growth and improvement',
    },
    {
      number: '03',
      title: 'Content Optimization',
      description: 'Creating and optimizing content that ranks well and engages your audience while meeting search intent and driving conversions.Comprehensive analysis of your website\'s current SEO performance and competitive landscape to identify opportunities for growth and improvement',
    },
    {
      number: '04',
      title: 'Technical Implementation',
      description: 'Technical SEO improvements including site speed optimization, mobile responsiveness, and proper site structure for better crawling.Comprehensive analysis of your website\'s current SEO performance and competitive landscape to identify opportunities for growth and improvement',
    },
    {
      number: '05',
      title: 'Performance Monitoring',
      description: 'Continuous tracking and optimization based on data-driven insights to ensure sustained growth and improvement over time.Comprehensive analysis of your website\'s current SEO performance and competitive landscape to identify opportunities for growth and improvement',
    },
  ];

  const getStepAnimation = (index) => {
    const isEven = index % 2 === 0;
    const startProgress = index * 0.15;
    const endProgress = startProgress + 0.2;
    
    return {
      x: useTransform(
        scrollYProgress,
        [startProgress, endProgress],
        isLargeScreen ? [isEven ? -150 : 150, 0] : [0, 0]
      ),
      opacity: useTransform(
        scrollYProgress,
        [startProgress, endProgress],
        [0, 1]
      )
    };
  };

  return (
    <section ref={ref} className="md:py-12 lg:py-5 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-3 md:mb-5 px-2">
            Our Approach Towards SEO
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center text-blue-600 font-medium px-4">
            A strategic, data-driven process to elevate your online presence
          </p>
        </motion.div>

        {/* Steps List */}
        <div className="space-y-0">
          {steps.map((step, index) => {
            const animation = getStepAnimation(index);
            
            return (
              <motion.div
                key={index}
                style={{ 
                  x: animation.x, 
                  opacity: animation.opacity 
                }}
              >
                <div className="flex flex-col md:grid md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-12 items-center md:items-start py-6 sm:py-8 md:py-12 lg:py-16">
                  {/* Number Circle Background */}
                  <div className="md:col-span-1 flex justify-center w-full md:w-auto">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl md:text-xl lg:text-xl font-bold text-blue-600">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-3 text-center md:text-left w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 px-4 md:px-0">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-8 text-center md:text-left w-full">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg px-4 md:px-0">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Border */}
                {index < steps.length - 1 && (
                  <div className="border-b border-gray-200 mx-4 md:mx-0"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
