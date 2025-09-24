import React from 'react'
import { BarChart, Globe } from "lucide-react"

const InfoComponent = () => {
  return (
    <div>
        <div className="max-w-6xl p-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb- lg:mb-6">
          {/* Left Content */}
          <div className="max-w-6xl lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              How We Grow Your Revenue
            </h1>
            
            <div className="space-y-4 lg:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Thrive stands apart from the more than 100,000 marketing companies with 
                its <span className="font-semibold text-gray-800">proprietary technology</span> that 
                gives you complete visibility into your performance across channels.
              </p>
              
              <p>
                Our unrivaled tools give clients a unique advantage by turning raw data into 
                clear, actionable insights. Combined with our <span className="font-semibold text-gray-800">proven, strategy-first approach,</span> these 
                tools maximize budget efficiency and drive measurable, meaningful results.
              </p>
            </div>
          </div>

          {/* Right Side - Stack Component */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 -mt-4 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Digital Marketing Analytics" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

    <section className="">
        <div className='max-w-6xl mx-auto text-lg p-4 pb-12'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi natus quisquam soluta. Perspiciatis veritatis repellat nihil expedita placeat, explicabo illo eos dolores, ea minus praesentium laborum quo nisi numquam! Dignissimos voluptatibus a cum sunt veritatis. Veritatis consequuntur praesentium architecto temporibus consectetur culpa maxime dignissimos, at accusantium reprehenderit incidunt aut nobis, atque eligendi. Et placeat praesentium fugiat facilis sint. Similique, molestiae?</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-30">
            {/* Left Column */}
            <div>
            {/* Heading + Icon */}
            <div className="flex items-center space-x-3 mb-4">
                <BarChart className="h-8 w-8 text-green-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                What are local SEO ranking factors?
                </h2>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Google Business Profile or GMB listing</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> NAP consistency (Name, Address, Phone)</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Domain authority</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Quality of local search citations</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> CTR from search results</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Keywords</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> User experience (UX)</li>
            </ul>
            </div>

            {/* Right Column */}
            <div>
            {/* Heading + Icon */}
            <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-8 w-8 text-green-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                How to do local SEO?
                </h2>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Local business SEO keyword targeting</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> GMB optimization</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Local search citations</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Online reputation management</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Link building</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> On-page SEO</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Local landing page optimization</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span> Local SEO content marketing</li>
            </ul>
            </div>
            
        </div>
        <div className='max-w-6xl mx-auto text-lg p-4 pb-12'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores magnam reprehenderit laudantium, necessitatibus amet quo!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione facilis tempore, accusamus tenetur labore magni natus porro est veniam doloribus quos iste fugiat itaque commodi ad provident distinctio a.</p>
        </div>
    </section>

    </div>
  )
}

export default InfoComponent