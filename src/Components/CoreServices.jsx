import React from 'react'
import { coreValuesI, coreValuesII, coreValuesIII } from '../constants/data'

const CoreServices = () => {
  return (
    <div className='mb-24'>
        <div className='text-center my-6'>
            <h1 className='text-[48px] font-[700] text-[#333333]'>Our Core Services</h1>
            <h2 className='text-[15px] font-[400] text-[#696969]'>In a short time, CodingKey has achieved immense recognition across wide range of service domains</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 max-w-full mx-auto px-4 md:px-20 pb-24 pt-10 bg-gradient-to-b from-white to-[#F5F5F5]'>
            {coreValuesI.map((value) => (
                <div className='flex'>
                    {/* <div className='relative flex flex-col items-center text-center gap-y-5 border border-dashed
                    hover:shadow-2xl border-slate-300 p-8 transform transition-transform duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:scale-100 hover:border-transparent hover:z-10'> */}
                        <div className="flex flex-col items-center text-center gap-y-5 border border-dashed bg-gradient-to-b from-white to-[#F5F5F5]
                        border-slate-300 p-8 bg-white transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                        hover:shadow-xl hover:scale-105 hover:z-10 hover:border-transparent">
                        <img src={value.icon} className='h-[65px] w-[65px]' alt="no icon" />
                        <div className='text-[18px] font-[600] text-[#333333]'> {value.title} </div>                
                        <div className='text-[15px] font-[400] text-[#696969] leading-[26px]'> {value.desc} </div>
                    </div>
                </div>
            ))}

            {coreValuesII.map((value) => (
                <div className='flex'>
                        <div className="relative flex flex-col items-center text-center gap-y-5 border border-dashed bg-gradient-to-b from-white to-[#F5F5F5] hover:bg-gradient-white
                        border-slate-300 p-8 bg-white transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                        hover:shadow-xl hover:scale-105 hover:z-10 hover:border-transparent">
                        <img src={value.icon} className='h-[65px] w-[65px]' alt="no icon" />
                        <div className='text-[18px] font-[600] text-[#333333]'> {value.title} </div>                
                        <div className='text-[15px] font-[400] text-[#696969] leading-[26px]'> {value.desc} </div>
                    </div>
                </div>
            ))}

            {coreValuesIII.map((value) => (
                <div className='flex'>
                        <div className="relative flex flex-col items-center text-center gap-y-5 border border-dashed bg-gradient-to-b from-white to-[#F5F5F5]
                        border-slate-300 p-8 bg-white transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                        hover:shadow-xl hover:scale-105 hover:z-10 hover:border-transparent">
                        <img src={value.icon} className='h-[65px] w-[65px]' alt="no icon" />
                        <div className='text-[18px] font-[600] text-[#333333]'> {value.title} </div>                
                        <div className='text-[15px] font-[400] text-[#696969] leading-[26px]'> {value.desc} </div>
                    </div>
                </div>
            ))}

        </div>

    </div>
  )
}

export default CoreServices