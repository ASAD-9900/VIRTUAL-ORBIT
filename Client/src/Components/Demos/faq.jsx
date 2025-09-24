import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy, and results typically begin to show within 3-6 months. However, some improvements like technical fixes and on-page optimizations can show quicker results. We provide monthly reports to track your progress and ensure you're seeing consistent improvement in rankings, traffic, and conversions."
    },
    {
      question: "What makes your SEO approach different?",
      answer: "Our approach combines technical expertise with creative content strategies and data-driven insights. We don't use one-size-fits-all solutions. Instead, we develop custom strategies based on your industry, competition, and business goals. We also focus on long-term, sustainable growth rather than quick fixes that could harm your site."
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "While no legitimate SEO company can guarantee specific rankings (search engines don't allow this), we do guarantee our commitment to improving your search visibility. Our track record shows that 95% of our clients achieve first-page rankings for their target keywords within 6-12 months."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple KPIs including organic traffic growth, keyword rankings, click-through rates, conversion rates, and ROI. You'll receive detailed monthly reports showing your progress, and we provide access to our client dashboard where you can monitor your SEO performance in real-time."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 30-day money-back guarantee for all new clients. If you're not completely satisfied with our service or don't see the progress outlined in your strategy, we'll refund your investment. Our 99% client retention rate speaks to the quality of our work and results."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We work with businesses across all industries, from local service providers to global e-commerce brands. Our team has experience in over 50 different industries and we adapt our strategies to meet the unique challenges and opportunities in your specific market sector."
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our comprehensive SEO services include keyword research, on-page optimization, technical SEO audits, content creation and optimization, link building, local SEO (if applicable), competitor analysis, and detailed reporting. Each plan is customized based on your specific needs and goals."
    },
    {
      question: "Can you help with local SEO?",
      answer: "Absolutely! Local SEO is one of our specialties. We help businesses optimize their Google My Business profiles, build local citations, manage online reviews, and create location-specific content to dominate local search results. This is especially effective for service-based businesses and retail locations."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className=" bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
         
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked-
            <span className=" bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our SEO services and how we can help grow your business.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 transform transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600 transform transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white max-w-7xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
            </div>
            
            <div className="relative z-10">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-100 mb-6">
                Our SEO experts are here to help. Schedule a free consultation to discuss your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                  Schedule Free Call
                </button>
                <button className="px-6 py-3 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;