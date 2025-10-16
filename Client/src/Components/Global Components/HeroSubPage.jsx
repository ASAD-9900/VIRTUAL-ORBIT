import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import Orb from '../Global Components/BG'; 

const HomeHero = ({ 
  firstHeadingText = "AI-Driven Digital Marketing That",
  secondHeadingText = "Transform Your Business", 
  descriptionText = "Invest intelligently and discover a better way to manage your entire wealth easily.",
  imageUrl = "", 
  imageAlt = "Dashboard image" 
}) => {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  // Optional SSR guard
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const validateUrl = (inputUrl) => {
    try {
      const trimmedUrl = inputUrl.trim();
      if (!trimmedUrl) {
        setUrlError('Please enter a website URL');
        return false;
      }
      let urlToValidate = trimmedUrl;
      if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
        urlToValidate = 'https://' + trimmedUrl;
      }
      const urlObj = new URL(urlToValidate);
      if (!urlObj.hostname || urlObj.hostname.length < 3) {
        setUrlError('Please enter a valid website URL');
        return false;
      }
      if (!urlObj.hostname.includes('.')) {
        setUrlError('Please enter a valid website URL');
        return false;
      }
      setUrlError('');
      return true;
    } catch {
      setUrlError('Please enter a valid website URL');
      return false;
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    if (urlError && value.trim()) setUrlError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidating(true);
    const isValid = validateUrl(url);
    if (isValid) {
      await new Promise(r => setTimeout(r, 1000));
      console.log('Form submitted with valid URL:', url);
    }
    setIsValidating(false);
  };

  const isUrlValid = url.trim() && !urlError;

  return (
    <div>
      <section
        className={`lg:rounded-4xl lg:mx-5 xl:mx-5 lg:mx-auto relative overflow-hidden lg:-mt-34 pt-8 bg-gradient-to-b from-[#01091c] via-[#0a244d] to-[#0f3064] bg-center bg-cover ${!imageUrl ? 'pb-7 sm:pb-8' : ''}`}
      >
        {/* Orb background layer */}
        {isClient && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div
              className="
                hidden lg:block
                absolute
                lg:w-[600px] lg:h-[600px] lg:top-[50%] lg:right-[33%]
                xl:w-[700px] xl:h-[700px] xl:top-[55%] xl:right-[26%]
                -translate-y-1/2
              "
            >
              <Orb hue={0} hoverIntensity={0.35} rotateOnHover forceHoverState={false} />
            </div>
          </div>
        )}

        {/* Content layer */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:pt-55 lg:pb-55">
          <div className="border border-indigo-600 p-1 w-75 mx-auto rounded-full flex items-center justify-between mb-7 lg:mb-15">
            <span className="font-inter text-base font-medium text-white ml-3">
              Explore how to use for brands.
            </span>
            <a
              href="javascript:;"
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
            >
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <h1 className="font-montserrat max-w-5xl mx-auto text-center font-base text-2xl sm:text-2xl md:text-5xl lg:text-6xl text-white mb-5 lg:mb-10 leading-tight sm:leading-snug md:leading-[50px] flex flex-col sm:gap-6 md:gap-6">
            <span>{firstHeadingText}</span>
            <span className="text-white">{secondHeadingText}</span>
          </h1>

          <p className="max-w-4xl mx-auto text-center text-sm sm:text-lg lg:text-xl font-normal leading-4 md:leading-7 text-gray-300 mb-9">
            {descriptionText}
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg sm:max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 shadow-2xl">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={url}
                  onChange={handleInputChange}
                  placeholder="Enter Website Address"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-0 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none focus:ring-2 sm:focus:ring-4 transition-all duration-200 ${
                    urlError 
                      ? 'focus:ring-red-200 bg-red-50' 
                      : isUrlValid 
                        ? 'focus:ring-green-200 bg-green-50' 
                        : 'focus:ring-blue-200 bg-white'
                  }`}
                  required
                />
                {url.trim() && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {urlError ? (
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    ) : isUrlValid ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    ) : null}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isValidating || !isUrlValid}
                className={`font-semibold px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-r-lg sm:rounded-l-none rounded-l-lg transition-all duration-200 transform shadow-lg ${
                  isValidating || !isUrlValid
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl'
                } text-white`}
              >
                {isValidating ? 'VALIDATING...' : 'GET MY FREE PROPOSAL'}
              </button>
            </div>

            {urlError && (
              <div className="mt-2 text-red-300 text-xs sm:text-sm flex items-center justify-center">
                <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {urlError}
              </div>
            )}
          </form>

          {imageUrl && (
            <div className="flex justify-center">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="rounded-t-xl md:rounded-t-3xl h-auto object-cover w-270 lg:w-350"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
