import React from 'react'
import Spline from "@splinetool/react-spline";
import GscDash from "../../assets/GSC-Dashboard.jpg"


const HomeHero = () => {
  return (
    <div>                                             
    <section
      class="pt-8 lg:pt bg-gradient-to-b from-[#01091c] via-[#0a244d] to-[#0f3064]  bg-center bg-cover"
    >  
    {/* bg-[url('https://pagedone.io/asset/uploads/1691055810.png')]*/}
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
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
        <h1 class="font-montserrat max-w-5xl mx-auto text-center font-base text-4xl sm:text-2xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight sm:leading-snug md:leading-[50px] flex flex-col  sm:gap-6 md:gap-6">
        <span>AI-Driven Digital Marketing That</span>
        <span class="text-white">Transform Your Business</span>
      </h1>
        <p
          class="max-w-4xl mx-auto text-center text-xl font-normal leading-7 text-gray-300 mb-9"
        >
          Invest intelligently and discover a better way to manage your entire
          wealth easily.
        </p>
        <a
          href="javascript:;"
          class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
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
        <div class="flex justify-center">
          <img
          src={GscDash}
          alt="Dashboard image" 
          class="rounded-t-xl md:rounded-t-3xl h-auto object-cover w-270 lg:w-350 shadow-[10px_20px_80px_rgba(59,130,246,0.3),0_10px_60px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>
    </section>
</div>
  )
}

export default HomeHero


