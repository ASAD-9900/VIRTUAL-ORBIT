import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CircleBG from "../../assets/Difference.png"
import { Check, ArrowRight } from 'lucide-react';

const DigitalVsTraditionalMarketing = () => {
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

  const diyX = useTransform(scrollYProgress, [0, 0.5], isLargeScreen ? [-200, 0] : [0, 0]);
  const agencyX = useTransform(scrollYProgress, [0, 0.5], isLargeScreen ? [200, 0] : [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={ref}
      className="max-w-full py-10 md:py-16 lg:pb-40 lg:pt-10"
      style={{
        backgroundImage: `url(${CircleBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-30">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-montserrat text-center text-white mb-4 md:mb-6 px-2">
            What's Better: <span className="font-['Playfair_Display',serif] italic bg-gradient-to-r from-pink-500 via-orange-400 to-pink-400 bg-clip-text text-transparent">DIY Or Hiring a SEO Agency</span>
          </h3>
          
          <p className="text-base md:text-lg text-center text-white px-4">
            While traditional marketing has been around for decades, digital marketing offers modern solutions with measurable results and targeted reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* DIY Column */}
          <motion.div 
            style={{ x: diyX, opacity }}
            className="bg-green-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Badge */}
            <div className="flex justify-center pb-3 md:pb-4">
              <span className="bg-green-300 rounded-b-2xl text-gray-800 px-8 md:px-12 lg:px-15 py-2 text-base md:text-lg font-medium">
                Do-it-yourself
              </span>
            </div>
            
            <div className="px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
                Complete GEO Stack
              </h3>
              
              <p className="text-sm md:text-base text-gray-600 text-center mb-6 md:mb-8">
                Own your GEO strategy with powerful AI tools.
              </p>
              
              <div className="border-t border-gray-600 pt-4 md:pt-6 mb-3 md:mb-4"></div>
              
              <p className="text-base md:text-lg text-gray-900 font-semibold mb-3 md:mb-4">
                Choose this path if you:
              </p>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Prefer full control over your GEO game</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Have the team to manage it in-house</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Can effectively harness AI to boost rankings and visibility</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Want to save costs on agency fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Have time to learn and implement strategies</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Agency Column */}
          <motion.div 
            style={{ x: agencyX, opacity }}
            className="bg-blue-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Badge */}
            <div className="flex justify-center pb-3 md:pb-4">
              <span className="bg-blue-300 rounded-b-2xl text-gray-800 px-8 md:px-10 lg:px-12 py-2 text-base md:text-lg font-medium">
                Done-for-you
              </span>
            </div>
            
            <div className="px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
                Expert-Managed GEO Services
              </h3>
              
              <p className="text-sm md:text-base text-gray-600 text-center mb-6 md:mb-8">
                Let the Experts Run GEO - You Focus on Growth
              </p>
              
              <div className="border-t border-gray-600 pt-4 md:pt-6 mb-3 md:mb-4"></div>
              
              <p className="text-base md:text-lg text-gray-900 font-semibold mb-3 md:mb-4">
                Choose this if you:
              </p>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-4">
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Want experts to build and run your entire GEO strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Don't have time to create AI-citable, optimized content</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Need faster results without trial and error</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Prefer to focus on core business operations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Want guaranteed professional results</span>
                </li>               
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalVsTraditionalMarketing;
