import React from 'react'
import dotsImg from '../assets/mitech-processing-contact-bg.png'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const FurtherInfo = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-x-10 px-4 md:px-24 bg-[#482d7d]
     bg-right bg-cover md:bg-cover pb-16 md:pb-32'
    style={{
        backgroundImage: `url(${dotsImg})`,
    }}>
        <div className='pt-14 md:pt-40'>
            <div className='relative pl-7'>
                <div className='absolute top-0 left-[0px] w-[4px] h-[105px] mt-[4px] bg-[#43B7C5]'>
                </div>
                <h1 className='text-[25px] md:text-[40px] font-[600] text-[#fff] pr-14 leading-[1.4]'>To get further information
                  please contact us </h1> 
                <h1 className='text-[18px] font-[400] text-[#fff] pt-4'>We’re available for 24/7</h1>
            </div>
        </div>
    
        <div className='md:pr-24 pt-10 md:pt-32'>  
            <div className='text-center'>
                <PhoneEnabledIcon sx={{fontSize: '48px', color: '#fff'}}/>
                <h2 className='text-[15px] font-[500] text-[#fff] uppercase tracking-widest pt-4'>Reach out now!</h2>
            </div>

            <div class="relative group text-center flex flex-col justify-center">
                <a href="tel:+9221111087423">
                    <h1 class="text-[30px] md:text-[48px] font-[700] text-[#43B7C5]"> +9221111087423 </h1>
                </a>
                <span class="absolute left-0 bottom-[10px] w-0 h-[1px] bg-[#43B7C5] transition-all
                duration-700 group-hover:w-full"></span>
            </div>

            <div className='flex justify-center '>
                <button className='bg-[#fff] text-[#482d7d] px-[72px] py-4 mt-3 rounded-md text-[15px] font-[500]'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default FurtherInfo