import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, DollarSign, BarChart3, Clock, Zap } from 'lucide-react';

const DigitalMarketingOverview = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-700" />, 
      title: "Increased Online Visibility",
      description: "Digital marketing helps your business appear where your customers are looking - on search engines, social media, and other online platforms. By optimizing your online presence, you can reach potential customers who are actively searching for your products or services."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-700" />, 
      title: "Targeted Audience Reach",
      description: "Unlike traditional marketing, digital marketing allows you to target specific demographics, interests, and behaviors. You can reach the right people at the right time with personalized messages that resonate with their needs and preferences.",
      highlight: "right people at the right time"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-700" />, 
      title: "Cost-Effective Marketing",
      description: "Digital marketing typically costs less than traditional advertising methods while delivering better ROI. You can start with small budgets, test what works, and scale successful campaigns without the huge upfront costs of TV, radio, or print advertising."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-700" />, 
      title: "Measurable Results",
      description: "Every digital marketing campaign provides detailed analytics and performance data. You can track website traffic, conversion rates, engagement metrics, and revenue attribution to understand exactly how your marketing efforts are performing.",
      highlight: "detailed analytics and performance data"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-700" />, 
      title: "24/7 Marketing Presence",
      description: "Your digital marketing works around the clock, even when you're sleeping. SEO, social media posts, email campaigns, and online ads continue attracting and engaging customers outside of business hours, maximizing your marketing reach."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-700" />, 
      title: "Competitive Advantage",
      description: "Businesses that embrace digital marketing gain significant advantages over competitors who rely solely on traditional methods. You can quickly adapt to market changes, test new strategies, and stay ahead of industry trends to maintain your competitive edge."
    }
  ];

  const renderDescription = (description, highlight) => {
    if (!highlight) return description;
    
    const parts = description.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-blue-700 font-medium">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.section 
      className="max-w-6xl mx-auto px-6 py-6 space-y-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Digital Marketing Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Content  */}
        <motion.div 
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Is Digital Marketing?
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Connect with Your Customers Where They Spend Their Time Online
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Digital marketing is the use of online channels, platforms, and technologies to promote your business, products, 
            or services to potential customers. It encompasses everything from search engine optimization (SEO) and social media 
            marketing to{' '}
            <a href="#" className="text-blue-700 underline hover:text-blue-800 font-medium">
              email campaigns and pay-per-click advertising
            </a>
            . The goal is to reach your target audience where they're already spending their time - online.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Modern digital marketing includes strategies like content marketing, influencer partnerships, online advertising, 
            website optimization, and data analytics. These approaches work together to build brand awareness, generate leads, 
            drive sales, and create lasting relationships with customers across multiple digital touchpoints.
          </p>
        </motion.div>
        
        {/* Image Right */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx3fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
            alt="Digital marketing analytics dashboard showing online marketing performance" 
            className="w-120 h-120 object-cover rounded-lg shadow-lg"
          />  
        </motion.div>
      </div>

      {/* Why  */}
      <motion.div 
        className='mb-6'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="mb-8 text-gray-800 text-base md:text-lg">
          <span className="font-bold italic">Why Your Business Needs Digital Marketing</span> - In today's connected world, your customers are online. Here's why digital marketing is essential for business growth:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map(({ icon, title, description, highlight }, index) => (
            <motion.div 
              key={title} 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-1">
                {icon}
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {renderDescription(description, highlight)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Context */}
        <motion.div 
          className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            The Bottom Line: Digital Marketing Drives Business Growth
          </h4>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Whether you're a small local business or a growing company, digital marketing levels the playing field. 
            With <span className="font-medium text-blue-700">strategic online presence</span>, 
            <span className="font-medium text-blue-700"> targeted advertising</span>, and 
            <span className="font-medium text-blue-700"> data-driven optimization</span>, you can compete with larger 
            competitors, reach new markets, and build a sustainable customer base that grows your business over time.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="pt- flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Book a Free Consultation
        </button>
      </motion.div>
    </motion.section>
  );
};

export default DigitalMarketingOverview;



