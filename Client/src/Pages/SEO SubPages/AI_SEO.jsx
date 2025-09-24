import React from 'react'
import Marqee from "../../Components/Global Components/Marqee"
import HeroSubPage from "../../Components/Global Components/HeroSubPage"
import ContactForm from "../../Components/Global Components/ContactForm"
import Pitch from "../../Components/AI SEO Components/1Pitch"
import WhatsAiSEO from "../../Components/AI SEO Components/2WhatsAiSEO"
import Importance from '../../Components/AI SEO Components/Importance'
import WhyAiSeo from '../../Components/AI SEO Components/3Why'
import CTA from '../../Components/AI SEO Components/CTA'
import FAQ from '../../Components/AI SEO Components/7FAQ'
import MoreLeads from "../../Components/AI SEO Components/4Moreleads"
import Services from "../../Components/AI SEO Components/5Services"
import Tips from "../../Components/AI SEO Components/6Tips"
import ChooseAgency from "../../Components/AI SEO Components/6ChooseAgency"
import Need from "../../Components/AI SEO Components/5Need"
import SpiralBG from "../../assets/Difference.png"


const AI_SEO = () => {
  return (
    <div>
         <HeroSubPage title="Transform Your Website Into a Lead Generation "
                  subtitle="Get a free custom proposal showing exactly how we'll increase your conversions and grow your business">
        </HeroSubPage>
        <Pitch></Pitch>
        <WhatsAiSEO></WhatsAiSEO>
        <WhyAiSeo></WhyAiSeo>
        <MoreLeads/>
        <div className="lg:my-5 lg:mt-4 bg-white">
            <Marqee
            texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
            velocity={50}
            className="custom-scroll-text mb-5"
            />
        </div>
        <Need/>
        <Services/>
        <ChooseAgency/>
        <Tips/>
        <FAQ></FAQ>
        <div className="bg-gradient-to-b from-[#0f3166] via-[#044b88]  to-white">
        <div className="bg-cover bg-center bg-no-repeat w-full 
            sm:bg-contain md:bg-cover lg:bg-cover"
            style={{ backgroundImage: `url(${SpiralBG})` }}>
        <ContactForm></ContactForm> 
        </div>
        </div>
    </div>
  )
}

export default AI_SEO