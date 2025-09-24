import React from 'react';
import { Search, Target, FileEdit, Rocket, TrendingUp, BarChart } from 'lucide-react';

const DigitalMarketingProcess = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery and Analysis",
      description: "We start by thoroughly understanding your business goals, target audience, and current digital presence. This includes analyzing your competitors, identifying opportunities, and establishing clear objectives for your digital marketing campaigns.",
      icon: <Search className="w-5 h-5" />
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Based on our findings, we develop a comprehensive digital marketing strategy tailored to your business. This includes selecting the right channels, defining target audiences, setting budgets, and creating a timeline for implementation.",
      icon: <Target className="w-5 h-5" />
    },
    {
      number: 3,
      title: "Content Creation and Setup",
      description: "Our team creates compelling ad copy, engaging social media content, optimized website content, and visual assets. We also set up tracking systems, analytics tools, and implement necessary technical configurations across all platforms.",
      icon: <FileEdit className="w-5 h-5" />
    },
    {
      number: 4,
      title: "Campaign Launch and Monitoring",
      description: "We launch your campaigns across selected digital channels and begin continuous monitoring. This phase involves real-time adjustments, performance tracking, and ensuring all systems are working optimally to drive the best results.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      number: 5,
      title: "Optimization and Testing",
      description: "Using data-driven insights, we continuously optimize your campaigns through A/B testing, keyword refinement, audience adjustments, and budget reallocation. This ensures maximum ROI and improved performance over time.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      number: 6,
      title: "Reporting and Growth Planning",
      description: "We provide detailed monthly reports showing campaign performance, key metrics, and ROI analysis. Based on results, we plan future growth strategies and recommend scaling successful campaigns to maximize your digital marketing investment.",
      icon: <BarChart className="w-5 h-5" />
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h4 className="text-3xl md:text-5xl font-montserrat text-gray-800 mb-4">
          Virtual Orbit's Digital Marketing Process
        </h4>
        <p className="text-lg text-gray-700">
          We follow a proven methodology to ensure success for your digital marketing campaigns:
        </p>
      </div>

      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-blue-200"></div>
        
        <div className="space-y-12">
          {processSteps.map((step) => (
            <div key={step.number} className="relative flex items-start">
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
              </div>
              
              {/* Step content */}
              <div className="ml-8 flex-1">
                <div className="mb-3">
                  <h3 className="inline-block bg-blue-100 px-4 py-2 rounded-md text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingProcess;
