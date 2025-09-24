// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const DropdownCard = ({ title, content, isOpen, onToggle }) => {
//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg mb-4 transition-all duration-300 hover:shadow-md hover:from-blue-100 hover:to-green-100">
//       <div 
//         className="p-6 cursor-pointer"
//         onClick={onToggle}
//       >
//         <div className="flex justify-between items-center">
//           <h3 className="text-blue-600 font-semibold text-lg">{title}</h3>
//           <ChevronDown 
//             className={`text-blue-600 w-5 h-5 transition-transform duration-300 ${
//               isOpen ? 'transform rotate-180' : ''
//             }`}
//           />
//         </div>
//       </div>
      
//       {isOpen && (
//         <div className="px-6 pb-6 pt-0">
//           <div className="border-t border-blue-200 pt-4">
//             <p className="text-gray-600 leading-relaxed">{content}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// function App() {
//   const [openCards, setOpenCards] = useState({
//     proven: false,
//     honest: false,
//     digital: false,
//     customers: false,
//   });

//   const toggleCard = (cardKey) => {
//     setOpenCards(prev => ({
//       ...prev,
//       [cardKey]: !prev[cardKey]
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* Left Column - Text Content */}
//           <div className="space-y-8">
//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
//               Meet Our Team of<br />
//               Digital Marketing Experts
//             </h1>
            
//             <p className="text-gray-600 text-lg leading-relaxed">
//               You may have a website, but if it fails to generate leads and increase 
//               conversions, then the search engines aren't picking it up. To ensure 
//               customers find your site online, our marketing company takes your 
//               online presence to the next level — your website design, copywriting, 
//               keywords, social media presence and more. Work with the best digital 
//               marketing agency and maximize your return on marketing investment.
//             </p>
//           </div>

//           {/* Right Column - Dropdown Cards */}
//           <div className="space-y-4">
//             <DropdownCard
//               title="We Have Proven Results"
//               content="Our digital marketing strategies have consistently delivered measurable results for our clients. We track key performance indicators and provide detailed analytics to show the impact of our campaigns on your business growth."
//               isOpen={openCards.proven}
//               onToggle={() => toggleCard('proven')}
//             />
            
//             <DropdownCard
//               title="We Are Honest & Ethical"
//               content="Transparency is at the core of our business practices. We provide honest assessments, clear reporting, and ethical marketing strategies that build long-term trust with your customers and sustainable growth for your business."
//               isOpen={openCards.honest}
//               onToggle={() => toggleCard('honest')}
//             />
            
//             <DropdownCard
//               title="We Know Digital Marketing"
//               content="Our team stays current with the latest digital marketing trends, algorithm updates, and best practices. From SEO and PPC to social media and content marketing, we have the expertise to maximize your online presence."
//               isOpen={openCards.digital}
//               onToggle={() => toggleCard('digital')}
//             />
            
//             <DropdownCard
//               title="We Put Customers First"
//               content="Your success is our priority. We take the time to understand your unique business goals and create customized marketing strategies that align with your objectives and deliver real value to your customers."
//               isOpen={openCards.customers}
//               onToggle={() => toggleCard('customers')}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DropdownCard = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg mb-4 transition-all duration-300 hover:shadow-md hover:from-blue-100 hover:to-green-100">
      <div 
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-blue-600 font-semibold text-lg">{title}</h3>
          <ChevronDown 
            className={`text-blue-600 w-5 h-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* Animated content */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="border-t border-blue-200 pt-4">
            <p className="text-gray-600 leading-relaxed">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [openCards, setOpenCards] = useState({
    proven: false,
    honest: false,
    digital: false,
    customers: false,
  });

  const toggleCard = (cardKey) => {
    setOpenCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  return (
    <div className=" bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
             A Digital Marketing Firm<br />
              That Delivers
            </h4>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              You may have a website, but if it fails to generate leads and increase 
              conversions, then the search engines aren't picking it up. To ensure 
              customers find your site online, our marketing company takes your <br/>
              online presence to the next level — your website design, copywriting, 
              keywords, social media presence and more. Work with the best digital 
              marketing agency and maximize your return on marketing investment.
            </p>
          </div>

          {/* Right Column - Dropdown Cards */}
          <div className="space-y-4">
            <DropdownCard
              title="We Have Proven Results"
              content="Our digital marketing strategies have consistently delivered measurable results for our clients. We track key performance indicators and provide detailed analytics to show the impact of our campaigns on your business growth."
              isOpen={openCards.proven}
              onToggle={() => toggleCard('proven')}
            />
            
            <DropdownCard
              title="We Are Honest & Ethical"
              content="Transparency is at the core of our business practices. We provide honest assessments, clear reporting, and ethical marketing strategies that build long-term trust with your customers and sustainable growth for your business."
              isOpen={openCards.honest}
              onToggle={() => toggleCard('honest')}
            />
            
            <DropdownCard
              title="We Know Digital Marketing"
              content="Our team stays current with the latest digital marketing trends, algorithm updates, and best practices. From SEO and PPC to social media and content marketing, we have the expertise to maximize your online presence."
              isOpen={openCards.digital}
              onToggle={() => toggleCard('digital')}
            />
            
            <DropdownCard
              title="We Put Customers First"
              content="Your success is our priority. We take the time to understand your unique business goals and create customized marketing strategies that align with your objectives and deliver real value to your customers."
              isOpen={openCards.customers}
              onToggle={() => toggleCard('customers')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
