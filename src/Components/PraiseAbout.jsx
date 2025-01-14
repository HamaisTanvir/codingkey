import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from '../constants/data';
import { testimonials } from '../constants/data';
import avatar from '../assets/profile-avatar.svg'
import { Star } from 'lucide-react';

const PraiseAbout = () => {
    const starStyle = {
        fill: '#FFB944',
        strokeWidth: '0px'
    }
  return (
    <div className='py-6 mb-16'>
           <div className='text-center mx-auto pb-10'>
                <h2 className='text-[14px] font-[700] text-[#ABABAB] tracking-widest uppercase pb-3'>Testimonials </h2>
                <h1 className='text-[40px] font-[700] text-[#333333]'>What do people praise about
                <span className='text-[40px] 
                font-[700] text-[#43B7C5]'> CodingKey </span> </h1>
            </div>

        <Slider {...sliderSettings} className=''>
            {testimonials.map((testi) =>(
                <div className='flex px-8 mx-auto md:hover:-translate-y-2 tranisition duration-700 pb-36'> 
                    <dl className='shadow-xl p-8 rounded-lg'>
                        <div key={testi.id} className='flex px-4 gap-x-6'>
                            <dt className='flex items-center'>
                                <div>
                                    <img src={avatar} className='w-[50px] h-[50px]' alt="avatar-profile" />
                                </div>
                            </dt>
                            <dd className='flex flex-col gap-y-2'>
                                <div className='flex'>
                                    <Star style={starStyle} /><Star style={starStyle} /><Star style={starStyle} /><Star style={starStyle} /><Star style={starStyle} />
                                </div>
                                <div className='flex gap-x-2 my--auto'>
                                    <h1 className='text-[18px] font-[700] text-[#333333]'>{testi.title}</h1>
                                    <h2 className='text-[14px] font-[400] text-[#696969] pt-1'>{testi.desig}</h2>
                                </div>
                            </dd>
                        </div>
                        <div className='px-4 pt-6'>
                            <p className='text-[17.5px] text-[#696969] font-[400] leading-[1.74]'>{testi.text}</p>
                        </div>
                    </dl>
                </div>
            ))}
            
        </Slider>
    </div>
  )
}

export default PraiseAbout