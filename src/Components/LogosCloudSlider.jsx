import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {logos} from '../constants/data'
import { logosSettings } from '../constants/data';
import ideasFly from '../assets/CodingKeys.svg'

const LogosCloudSlider = () => {
  return (
    <>
      <div className='container md:max-w-7xl px-10 py-8 mx-auto'>
          <Slider {...logosSettings}>
              {logos.map((logo, index ) => (
                  <div className='flex justify-center focus:outline-none px-4'>
                      <img
                      key={index} 
                      src={logo} 
                      alt={`Logo ${index+1}`}
                      className='h-44 w-full object-contain filter grayscale hover:filter-none transition duration-300 focus:border-none focus:outline-none'
                      />
                  </div>
              ))}
          </Slider>
     </div>

      <div className='flex flex-col md:flex-row justify-center space-x-8 max-w-full'>
            <img src={ideasFly} alt="" className='max-w-[645px] max-h-[430px] pt-6' />
            <div className='pr-20'>
                <h1 className='text-[#41287B] text-[25px] md:text-[40px] font-[700] leading-[56.4px]'>We help your ideas fly</h1>
                <p className='text-[24px] font-[400] leading-[40.8px] max-w-xl'>With reliable and creative experts in a wide range of technical domains, businesses lean towards CodingKey to achieve their set goals with optimal results. We aim to find the solutions of the problems our clients face, and help them refine their ideas through strategic collaborations, resulting in fast paced product growth.</p>
            </div>
      </div> 
      
    </>
  )
}

export default LogosCloudSlider