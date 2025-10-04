import React from 'react'
import SpiralBG from "../../assets/Difference.png"

// Components Imports 
import HeroSubPage from "../../Components/Global Components/HeroSubPage"
import Pitch from "../../Components/Google Ads Components/1Pitch"
import WhatsGoogleAds from "../../Components/Google Ads Components/2WhatsGoogleAds"
import CampaignTypes from "../../Components/Google Ads Components/3CampaignTypes"
import CostFactors from "../../Components/Google Ads Components/4CostFactors"
import SetUp from "../../Components/Google Ads Components/5SetUp"
import OptimizeGoogleAds from '../../Components/Google Ads Components/6Optimization'
import GoogleAdsNeed from '../../Components/Google Ads Components/7GoogleAdsNeed'
import GoogleAdsTips from '../../Components/Google Ads Components/8Tips'
import FAQ from '../../Components/Google Ads Components/9FAQ'
import ContactForm from "../../Components/Global Components/ContactForm"

const GoogleAds = () => {
  return (
    <div>
      <HeroSubPage 
        firstHeadingText="Google Ads That" 
        secondHeadingText="Dominates Your Competition" 
        descriptionText="Get more customers, increase revenue, and build lasting brand recognition with our proven marketing strategies."
      />
      <Pitch/>
      <WhatsGoogleAds/>
      <CampaignTypes/>
      <CostFactors/>
      <SetUp/>
      <OptimizeGoogleAds/>
      <GoogleAdsNeed/>
      <GoogleAdsTips/>
      <FAQ/>
      <div className="bg-cover bg-center bg-no-repeat w-full 
          sm:bg-contain md:bg-cover lg:bg-cover"
          style={{ backgroundImage: `url(${SpiralBG})` }}>  
          <ContactForm/>
      </div>
    </div>
  )
}

export default GoogleAds