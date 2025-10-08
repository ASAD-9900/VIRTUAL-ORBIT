import React, { useEffect } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Keyword Research",
      description: "We identify high-impact keywords tailored to your target audience, industry, and goals."
    },
    {
      number: "02",
      title: "Content Optimization",
      description: "We identify high-impact keywords tailored to your target audience, industry, and goals."
    },
    {
      number: "03",
      title: "Technical SEO Tools",
      description: "We identify high-impact keywords tailored to your target audience, industry, and goals."
    },
    {
      number: "04",
      title: "Performance Tracking",
      description: "We identify high-impact keywords tailored to your target audience, industry, and goals."
    }
  ];

  const lineControls = useAnimation();
  const stepControls = steps.map(() => useAnimation());
  const headerControls = useAnimation();

  // Intersection observer hook to detect visibility
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    async function sequence() {
      await headerControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      for (let i = 0; i < steps.length; i++) {
        if (i > 0) {
          await lineControls.start({
            width: `${(i / steps.length) * 100}%`,
            transition: { duration: 0.5, ease: 'easeInOut' }
          });
        }
        await stepControls[i].start({ opacity: 1, y: 0, transition: { duration: 0.4 } });
      }
      await lineControls.start({ width: '100%', transition: { duration: 0.4 } });
    }

    if (inView) {
      sequence();
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerControls}
          className="flex items-center gap-2 mb-3 sm:mb-4"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </div>
          <p className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
            HOW IT WORKS
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={headerControls}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Step by Step <span className="text-blue-600">guide</span> to SEO success
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={headerControls} className="flex items-center">
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Our process simplifies SEO into clear, actionable steps keyword research and content optimization to link building and performance tracking, we ensure your website achieves sustainable.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated horizontal line for desktop */}
          <motion.div
            initial={{ width: 0 }}
            animate={lineControls}
            className="hidden lg:block absolute top-6 left-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"
            style={{ right: 0 }}
          />

          {/* Static vertical line for mobile/tablet */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={stepControls[index]}
                className="relative pl-12 lg:pl-0"
              >
                <div className="absolute left-0 top-0 lg:relative flex items-start gap-4 lg:flex-col lg:items-start mb-4 sm:mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full bg-blue-500 flex items-center justify-center relative z-10 shadow-lg">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:mt-4">
                    <span
                      className="text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600"
                      style={{
                        WebkitTextStroke: '2px rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <span className="lg:hidden text-4xl sm:text-5xl font-bold text-blue-500 block mb-2">
                    {step.number}
                  </span>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-4 sm:pt-6 lg:pt-10 pb-4 flex justify-center">
          <div className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <span className="mr-2 sm:mr-3">Ready to Get Started?</span>
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
