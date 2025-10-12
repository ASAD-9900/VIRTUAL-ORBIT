import React from 'react'
import Marqee from "../../Components/Global Components/Marqee"
import HeroSubPage from "../../Components/Global Components/HeroSubPage"
import ContactForm from "../../Components/Global Components/ContactForm"
import Pitch from "../../Components/AI SEO Components/1Pitch"
import WhatsAiSEO from "../../Components/AI SEO Components/2WhatsAiSEO"
import WhyAiSeo from '../../Components/AI SEO Components/5Why'
import FAQ from '../../Components/AI SEO Components/FAQ'
import MoreLeads from "../../Components/AI SEO Components/6Moreleads"
import Tips from "../../Components/AI SEO Components/Tips"
import ChooseAgency from "../../Components/AI SEO Components/9ChooseAgency"
import Need from "../../Components/AI SEO Components/7Need"
import SpiralBG from "../../assets/Difference.png"
import GEO from "../../Components/AI SEO Components/4WhatsGEO"
import AEO from "../../Components/AI SEO Components/3WhatsAEO"
import Banner from "../../Components/Global Components/Banner"
import AiMarqee from "../../Components/AI SEO Components/Marqee"
import WhyChoose from "../../Components/AI SEO Components/10WhyChoose"

const AI_SEO = () => {
  return (
    <div>
         <HeroSubPage title="Transform Your Website Into a Lead Generation "
                  subtitle="Get a free custom proposal showing exactly how we'll increase your conversions and grow your business">
        </HeroSubPage>
        <Pitch></Pitch>
        <WhatsAiSEO></WhatsAiSEO>
        <div className='bg-gradient-to-b from-[#0f3064] via-[#2563eb] to-[#0f3064] max-w-full'>
          <AEO/>
          <GEO/>
        </div>
        <WhyAiSeo></WhyAiSeo>
        <Banner/> 
        <MoreLeads/>
        <div className="lg:my-5 lg:mt-10 bg-white sm:hidden">
            <Marqee
            texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
            velocity={50}
            className="custom-scroll-text mb-5"
            />
        </div>
        <AiMarqee/>
        <Need/>
        <ChooseAgency/>
        <WhyChoose/>
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