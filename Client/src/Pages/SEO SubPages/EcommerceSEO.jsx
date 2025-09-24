import React from 'react'
import Hero from "../../Components/Global Components/HeroSubPage"
import Marqee from "../../Components/Global Components/Marqee"
import ContactForm from "../../Components/Global Components/ContactForm"
import Services from "../../Components/Ecommerce SEO Components/Services"
import Pitch from '../../Components/Ecommerce SEO Components/Pitch'
import Definition from "../../Components/Ecommerce SEO Components/Definition"
import Importance from "../../Components/Ecommerce SEO Components/Importance"
import Result from "../../Components/Ecommerce SEO Components/Result"
import CTA from '../../Components/Ecommerce SEO Components/CTA'
import FAQ from "../../Components/Ecommerce SEO Components/FAQ"

const EcommerceSEO = () => {
  return (
    <div>
        <Hero></Hero>
        <Pitch></Pitch>
        <Definition></Definition>
        <div className="lg:my-5 mb- bg-white">
                    <Marqee
                    texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
                    velocity={50}
                    className="custom-scroll-text mb-5"
                    />
        </div>
        <div className='bg-gray-50'>
          <Importance></Importance>
        </div>
        <Services></Services>
        <div className='bg-gray-50'>
          <Result></Result>
        </div>
        <FAQ></FAQ>
        <CTA></CTA>
        <ContactForm></ContactForm>  
    </div>
  )
}

export default EcommerceSEO