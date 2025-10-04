import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Card = ({ project, index, progress, range, targetScale }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-6"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          backgroundColor: project.color,
          scale,
          top: `calc(-5vh + ${index * 25}px)`
        }}
        className="relative flex flex-col h-auto md:h-[500px] w-full max-w-6xl rounded-[25px] p-6 md:p-8 lg:p-12 origin-top"
      >
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold m-0 mb-6 md:mb-0">
          {project.title}
        </h2>

        <div className="flex flex-col md:flex-row h-full md:mt-12 gap-6 md:gap-8 lg:gap-12">
          {/* Description */}
          <div className="w-full md:w-2/5 relative md:top-[10%]">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed first-letter:text-3xl md:first-letter:text-4xl first-letter:font-bold">
              {project.description}
            </p>
            
            <span className="flex items-center gap-2 mt-4 md:mt-6">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-lg font-medium underline cursor-pointer hover:opacity-70 transition-opacity"
              >
                Learn More
              </a>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-3/5 h-64 md:h-full rounded-[20px] md:rounded-[25px] overflow-hidden">
            <motion.div 
              style={{ scale: imageScale }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StickyStackingCards = () => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const projects = [
    {
      id: 1,
      title: 'Search Engine Optimization',
      description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO services. We optimize your website structure, content, and technical elements to achieve higher rankings on search engines.',
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      url: '/services/seo',
      color: '#E8F5E9'
    },
    {
      id: 2,
      title: 'Content Marketing Strategy',
      description: 'Create compelling content that resonates with your audience and drives conversions. Our strategic approach includes blog writing, content optimization, and distribution across multiple channels.',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
      url: '/services/content-marketing',
      color: '#E3F2FD'
    },
    {
      id: 3,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize your ROI with targeted PPC campaigns across Google Ads, Facebook, and LinkedIn. Our experts create high-converting ad copy, optimize bidding strategies, and continuously monitor performance.',
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200',
      url: '/services/ppc',
      color: '#FCE4EC'
    },
    {
      id: 4,
      title: 'Social Media Management',
      description: 'Build a strong social presence and engage with your audience across all major platforms. We develop custom content calendars, create eye-catching visuals, and manage community interactions.',
      src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200',
      url: '/services/social-media',
      color: '#FFF3E0'
    },
    {
      id: 5,
      title: 'Analytics & Reporting',
      description: 'Make informed decisions with comprehensive analytics and transparent reporting. We track all key metrics, provide actionable insights, and demonstrate the true value of your digital marketing investment.',
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
      url: '/services/analytics',
      color: '#F3E5F5'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Heading */}
      <div className="pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-3 md:mb-4">
            Our Digital Marketing Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive solutions to grow your online presence and drive measurable results
          </p>
        </div>
      </div>

      {/* Sticky Cards */}
      <section ref={container} className="relative" style={{ height: '500vh' }}>
        {projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);
          return (
            <Card 
              key={`p_${index}`}
              project={project} 
              index={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </div>
  );
};

export default StickyStackingCards;
