import React from 'react'
import Hero from "../../Components/Global Components/HeroSubPage"
import Marqee from "../../Components/Global Components/Marqee"
import ContactForm from "../../Components/Global Components/ContactForm"
// import Services from "../../Components/Ecommerce SEO Components/Services"
// import Pitch from '../../Components/Ecommerce SEO Components/Pitch'

import CTA from '../../Components/Ecommerce SEO Components/CTA'
import FAQ from "../../Components/Ecommerce SEO Components/FAQ"
import Pitch from "../../Components/Ecommerce SEO Components/1Pitch"
import HowDoesItGetLeads from '../../Components/Ecommerce SEO Components/2HowDoesItGetleads'
import OptimizeYourStore from '../../Components/Ecommerce SEO Components/3OptimizeYourStore'
import Services from '../../Components/Ecommerce SEO Components/6Services'
import HireOrDiy from "../../Components/Ecommerce SEO Components/7HireOrDIY"
import TimeTakes from '../../Components/Ecommerce SEO Components/8TimeItTakes'
import Worth from "../../Components/Ecommerce SEO Components/9Worth"
import ShopifySEO from "../../Components/Ecommerce SEO Components/4ShopifySEO"
import WooCommerceSEO from "../../Components/Ecommerce SEO Components/5WooCommerceSEO"
import HowToChoose from '../../Components/Ecommerce SEO Components/HowToChoose'

const EcommerceSEO = () => { 
  return (
    <div>
        <Hero></Hero>
        <Pitch></Pitch>
        <HowDoesItGetLeads/>
        <OptimizeYourStore/>
        <div className='bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064] max-w-full'>
          <ShopifySEO/>
          <WooCommerceSEO/>
        </div>
        <HireOrDiy/>
        <div className="lg:my-5 mb- bg-white">
                    <Marqee
                    texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
                    velocity={50}
                    className="custom-scroll-text mb-5"
                    />
        </div>
        <HowToChoose/>
        <Services/>
        <TimeTakes/>
        <Worth/>
        <FAQ></FAQ>
        <CTA></CTA>
        <ContactForm></ContactForm>  
    </div>
  )
}

export default EcommerceSEO