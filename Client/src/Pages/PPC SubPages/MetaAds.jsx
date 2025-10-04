import React from 'react'
import Pitch from "../../Components/Meta Ads Components/1Pitch"
import HeroSubPage from "../../Components/Global Components/HeroSubPage"
import WhatsMetaAds from "../../Components/Meta Ads Components/2WhatsMetaAds"
import WhyMetaAds from "../../Components/Meta Ads Components/3WhyMetaAds"
import GoogleVsMeta from "../../Components/Meta Ads Components/4GoogleVsMeta"
const MetaAds = () => {
  return (
    <div>
      <HeroSubPage 
        firstHeadingText="Meta Ads That" 
        secondHeadingText="Dominates Your Competition" 
        descriptionText="Get more customers, increase revenue, and build lasting brand recognition with our proven marketing strategies."
      />
      <Pitch/>
      <WhatsMetaAds/>
      <WhyMetaAds/>
      <GoogleVsMeta/>
    </div>
  )
}

export default MetaAds