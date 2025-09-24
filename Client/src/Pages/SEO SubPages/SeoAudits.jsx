import React from 'react'
import Hero from "../../Components/Global Components/HeroSubPage"
import Marqee from "../../Components/Global Components/Marqee"
import ContactForm from "../../Components/Global Components/ContactForm"
import Definition from "../../Components/SEO Audit Component/Definition"
import Importance from "../../Components/SEO Audit Component/Importance"
import Result from '../../Components/SEO Audit Component/Result'
import FAQ from "../../Components/SEO Audit Component/FAQ"
import CTA from "../../Components/SEO Audit Component/CTA"

const SeoAudits = () => {
  return (
    <div>
        <Hero title="Transform Your Website Into a Lead Generation "
                  subtitle="Get a free custom proposal showing exactly how we'll increase your conversions and grow your business">
        </Hero>
        <Definition/>
        <div className='bg-gray-50'>
          <Importance/>
        </div>
        <CTA/>
        <div className="lg:my-5 mb- bg-white">
                    <Marqee
                    texts={[<span className="text-[#4e38f5]">Virtual Orbit -</span>, "-  Local SEO"]}
                    velocity={50}
                    className="custom-scroll-text mb-5"
                    />
        </div>
        <Result/>
        <FAQ/>
        <ContactForm></ContactForm>
    </div>
  )
}

export default SeoAudits