import React from 'react'
import HeroSection from './HeroSection'
import LogosCloudSlider from './LogosCloudSlider'
import AchievementsCounter from './AchievementsCounter'
import CoreServices from './CoreServices'
import BasicTabs from './BasicTabs'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <LogosCloudSlider />
      <AchievementsCounter />
      <CoreServices />
      <BasicTabs />
    </div>
  )
}

export default Home