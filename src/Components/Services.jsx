import React from 'react'
import servicesBg from '../assets/services-hero-bg.jpg'
import CoreServices from './CoreServices'
import BasicTabs from './BasicTabs'
import MobileTabs from './MobileTabs'

const Services = () => {
  return (
    <>
        <div className='bg-cover bg-center py-16 md:py-48 h-[340px] md:h-[561px]' style={{backgroundImage: `url(${servicesBg})`}}>
            <div className='px-2 md:px-[260px] text-center'>
                <h1 className='text-[32px] md:text-[56px] font-[700] text-[#fff] pb-4'>Services</h1>
                <h2 className='text-[20px] md:text-[24px] font-[400] text-[#fff] leading-[34px]'>In a short time, CodingKey has achieved immense recognition across wide range of service domains</h2>
            </div>
        </div>
        <div>
            <CoreServices showHeading = {true} customMargin='-mt-36' />
            {/* BELOW NETHOD THROUGH CLASS */}
        {/* <div> 
            <CoreServices /> <style> {`.core-h1 h1, h2{
            display: none;}`}</style> 
        </div>*/}
        </div>
        <div className='hidden md:block -mt-36'>
            <BasicTabs />
        </div>
        <div className='block md:hidden -mt-10'>
            <MobileTabs />
        </div>
            

    </>
  )
}

export default Services