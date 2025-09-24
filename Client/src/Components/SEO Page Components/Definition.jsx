import React from 'react';
import { Search, TrendingUp, Users, Clock, Award, Target } from 'lucide-react';

const SeoSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl text-center font-bold leading-tight">
              <span className="text-gray-800">What is Search Engine Optimization (SEO)?</span>
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                
              </span>
            </h2>
            
            <h3 className="text-xl mb-5 lg:text-2xl text-center font-semibold text-blue-700">
              Understanding the Foundation of Digital Marketing Success
            </h3>   
          </div>

          <div className="grid lg:grid-cols-2 gap-18">
            {/* Mobile: Image first, Desktop: Content first */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Search Engine Optimization (SEO) is the practice of improving your website's visibility and ranking 
                  in search engine results pages (SERPs). When someone searches for products, services, or information 
                  related to your business, SEO helps ensure your website appears prominently in those search results.
                </p>

                <p>
                  SEO involves optimizing various elements of your website, including content quality, keyword usage, 
                  technical performance, and user experience. The goal is to make your site more attractive to search 
                  engines like Google, Bing, and Yahoo, which then reward you with higher rankings.
                </p>

                <p>
                  There are three main types of SEO: <strong>On-page SEO</strong> (optimizing individual web pages), 
                  <strong>Off-page SEO</strong> (building authority through backlinks and mentions), and 
                  <strong> Technical SEO</strong> (improving site structure, speed, and crawlability).
                </p>

              </div>
            </div>

            {/* Mobile: Image first, Desktop: Image second */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="SEO and Digital Marketing Concept"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoSection;
