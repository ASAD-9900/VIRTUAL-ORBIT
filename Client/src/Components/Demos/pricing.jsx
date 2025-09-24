import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses getting started with SEO',
      monthlyPrice: 599,
      annualPrice: 499,
      color: 'from-blue-500 to-indigo-600',
      popular: false,
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Technical SEO Audit',
        'Monthly Performance Reports',
        'Local SEO Setup',
        '5 Pages Optimized',
        'Basic Link Building',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Comprehensive SEO solution for growing businesses',
      monthlyPrice: 1199,
      annualPrice: 999,
      color: 'from-indigo-500 to-purple-600',
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced Keyword Research',
        'Content Strategy & Creation',
        'Competitor Analysis',
        'Advanced Link Building',
        '15 Pages Optimized',
        'Social Media Integration',
        'Priority Phone Support',
        'Bi-weekly Strategy Calls',
        'Custom Landing Pages'
      ]
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'Full-service SEO for established businesses',
      monthlyPrice: 2499,
      annualPrice: 1999,
      color: 'from-purple-500 to-indigo-600',
      popular: false,
      features: [
        'Everything in Professional',
        'Unlimited Page Optimization',
        'Advanced Analytics & Reporting',
        'Multi-location SEO',
        'Premium Link Building',
        'Content Marketing Strategy',
        'Conversion Rate Optimization',
        'Dedicated Account Manager',
        'Weekly Strategy Sessions',
        'Custom Integrations',
        'White-label Reporting',
        '24/7 Priority Support'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-blue-300 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-blue-200">
            <Rocket className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-800 font-medium">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SEO Package
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Transparent pricing with no hidden fees. All plans include our proven SEO methodology and dedicated support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 border border-blue-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isAnnual 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 overflow-hidden ${
                  plan.popular ? 'border-blue-500 lg:-mt-8 lg:mb-8' : 'border-gray-100'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">${price}</span>
                      <span className="text-gray-600 ml-2">/{isAnnual ? 'month' : 'month'}</span>
                      {isAnnual && (
                        <div className="text-sm text-green-600 font-medium">
                          Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mr-3`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-xl hover:shadow-2xl`
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                No long-term contracts
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Free setup & onboarding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;