import React from 'react'
import HeroSection from './HeroSection'
import LogosCloudSlider from './LogosCloudSlider'
import AchievementsCounter from './AchievementsCounter'
import CoreServices from './CoreServices'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <LogosCloudSlider />
      <AchievementsCounter />
      <CoreServices />
    </div>
  )
}

export default Home