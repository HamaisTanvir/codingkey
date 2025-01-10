import React from 'react'
import HeroSection from './HeroSection'
import LogosCloudSlider from './LogosCloudSlider'
import AchievementsCounter from './AchievementsCounter'
import CoreServices from './CoreServices'
import BasicTabs from './BasicTabs'
import FurtherInfo from './FurtherInfo'
import OutsourcingPartner from './OutsourcingPartner'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <LogosCloudSlider />
      <AchievementsCounter />
      <CoreServices />
      <BasicTabs />
      <FurtherInfo />
      <OutsourcingPartner />
    </div>
  )
}

export default Home