import React from 'react'

const CTA = () => {
  return (
    <div>
         {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-8 px-8 rounded-2xl text-center border border-green-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Dominate Local Search Results?
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Don't let your competitors outrank you in local search. Get a comprehensive SEO strategy that drives more traffic, leads, and revenue to your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-block bg-[#00c951] hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Free SEO Audit
          </a>
          <a
            href="#consultation"
            className="inline-block border-2 border-[#00c951] text-[#00c951] hover:bg-[#00c951] hover:text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  )
}

export default CTA