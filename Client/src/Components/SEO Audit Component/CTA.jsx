import React from "react";

const SeoAuditCTA = () => {
  return (
    <section className="bg-gradient-to-r md:mt-8 mb-8 from-blue-900 to-blue-600 text-white py-16 px-8 rounded-xl max-w-6xl mx-auto shadow-lg">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-md">
          Unlock Your Website’s True Potential
        </h2>
        <p className="text-blue-200 text-lg mb-8">
          Get a <span className="font-semibold text-white">FREE SEO Audit</span> today and discover how to improve your rankings, traffic, and conversions.
        </p>
        <a href="/Contact-Us">
        <button
          type="button"
          aria-label="Get my free SEO audit"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer  transition-colors duration-300 px-10 py-4 rounded-lg font-semibold text-white shadow-md transform"
        >
          Get My Free SEO Audit
        </button>
        </a>

        <p className="mt-5 text-blue-200 text-sm font-light">
          No cost. No obligation. Just real insights.
        </p>
      </div>
    </section>
  );
};

export default SeoAuditCTA;
