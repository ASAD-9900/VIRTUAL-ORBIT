import React, { useState, useRef, useEffect } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: 'How is local search optimization different from traditional SEO?',
      answer: 'While traditional SEO focuses on improving your website\'s visibility on a national or global scale, SEO services for local business target users searching in a specific geographic area. Local business search engine optimization involves optimizing your Google Business Profile, managing local citations, collecting reviews and creating content with location-specific keywords. The goal is to help your business appear in the "local pack" (map results) and drive traffic from nearby customers who are ready to take action.'
    },
    {
      question: 'How long does it take to see results from local SEO?',
      answer: 'Results from local SEO can vary depending on your industry, competition, and current online presence. On average, businesses may start seeing noticeable improvements within 3 to 6 months of consistent local SEO efforts. However, some changes like Google Business Profile optimizations can show results within a few weeks.'
    },
    {
      question: 'Can SEO services for local business benefit multi-location companies or franchises?',
      answer: 'Yes, local SEO services are especially beneficial for multi-location businesses and franchises. Each location needs its own optimized Google Business Profile, localized content, and citation management. We create location-specific strategies that help each branch rank in its local market while maintaining brand consistency.'
    },
    {
      question: 'Do I need a local SEO strategy even if I don\'t have a physical storefront?',
      answer: 'Absolutely. Many service-based businesses without a physical storefront benefit significantly from local SEO. Whether you\'re a consultant, contractor, or online service provider serving specific geographic areas, local SEO helps you attract customers within your service radius through location-based searches.'
    },
    {
      question: 'What should be included in a comprehensive local SEO checklist?',
      answer: 'A comprehensive local SEO checklist should include: Google Business Profile optimization, local citation management across directories, review acquisition and management strategies, localized content creation, mobile-friendly website design, local link building, schema markup implementation, and ongoing monitoring of local search rankings.'
    },
    {
      question: 'What questions should I ask local SEO specialists before hiring them?',
      answer: 'Key questions include: What\'s your experience with local SEO campaigns? Can you show case studies and results? How do you approach citation management? What\'s your review management strategy? How do you create location-specific content? What reporting and metrics do you provide? How do you stay updated with Google algorithm changes?'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        if (idx === openIndex) {
          const scrollHeight = ref.scrollHeight;
          ref.style.maxHeight = `${scrollHeight + 20}px`;  
          ref.style.opacity = '1';
          ref.style.visibility = 'visible';
        } else {
          ref.style.maxHeight = '0px';
          ref.style.opacity = '0';
          ref.style.visibility = 'hidden';
        }
      }
    });
  }, [openIndex]);

  return (
    <section className="max-w-full bg-gradient-to-b from-[#0f3166] via-sky-600 to-[#0f3166]">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-montserrat lg:text-5xl  text-white mb-2">
            FAQ About <span className='bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent'>Technical SEO Services</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg">
            Get answers to common questions about technical SEO services
          </p>
        </div>

        {/* Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-blue-300/30 rounded-lg overflow-hidden shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/60 transition-all duration-300 bg-[#0f3166]"
            >
              {/* Button */}
              <button
                className={`w-full text-left px-4 sm:px-6 py-4 sm:py-5 font-semibold hover:bg-blue-800/50 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset transition-all duration-200 ${
                  openIndex === index 
                    ? 'bg-blue-700/30 text-blue-100' 
                    : 'bg-[#0f3166] text-white hover:text-blue-100'
                }`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="pr-4 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                  {faq.question}
                </span>
                
                {/* Icon */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ease-in-out ${
                      openIndex === index 
                        ? 'transform rotate-45 text-blue-200' 
                        : 'transform rotate-0 text-blue-300'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {/* Content */}
              <div
                id={`faq-content-${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                className="transition-all duration-500 ease-in-out overflow-hidden bg-[#0f3166]"
                style={{
                  maxHeight: openIndex === index ? 'fit-content' : '0px',
                  opacity: openIndex === index ? '1' : '0',
                  visibility: openIndex === index ? 'visible' : 'hidden'
                }}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t border-blue-400/30 pt-4">
                    <p className="text-sm sm:text-base lg:text-lg text-blue-50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
