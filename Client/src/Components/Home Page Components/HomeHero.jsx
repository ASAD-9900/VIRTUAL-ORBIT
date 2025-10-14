import React from 'react'
import Spline from "@splinetool/react-spline";
import GscDash from "../../assets/hero-img.png"


const HomeHero = () => {
  return (
    <div>                                             
    <section
      class="pt-8 lg:pt bg-gradient-to-b from-[#01091c] via-[#0a244d] to-[#0f3064]  bg-center bg-cover  lg:-mt-30 lg:rounded-b-4xl"
    >  
    {/* bg-[url('https://pagedone.io/asset/uploads/1691055810.png')]*/}
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center lg:pt-30">
        <div
          class="border border-indigo-600 p-1 w-75 mx-auto rounded-full flex items-center justify-between mb-7"
        >
          <span class="font-inter text-base  font-medium text-white ml-3"
            >Explore how to use for brands.</span >
          <a
            href="javascript:;"
            class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <h1 class=" max-w-6xl mx-auto text-center font-base text-4xl sm:text-2xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight sm:leading-snug md:leading-[50px] flex flex-col  sm:gap-6 md:gap-6 lg:mt-10">
        <span>AI-Driven <span class="">Digital Marketing Agency</span> </span>
        <span class="text-white ">That Transforms Businesses</span>
      </h1>
        <p
          class="max-w-4xl mx-auto text-center text-xl font-normal leading-7 text-gray-300 mb-8 lg:mt-12"
        >
          Invest intelligently and discover a better way to manage your entire
          wealth easily. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequuntur?
        </p>

        {/* Button */}
        <div>
        <a
          href="javascript:;"
          class="w-full md:w-auto inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500 lg:mr-5"
        >
          Create an account
          <svg
            class="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        </div>

        {/* image */}
        <div class="flex justify-center h-190 w-350 lg:w-300">
          <img
          src={GscDash}
          alt="Dashboard image" 
          class="rounded-t-xl md:rounded-t-3xl object-end w-350"
          />
        </div>
      </div>
    </section>
</div>
  )
}

export default HomeHero


