import React from 'react'
import { outSourcingI, outSourcingII } from '../constants/data'

const OutsourcingPartner = () => {
  return (
    <div className='mb-20 bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]'>
        <div className='text-center  mx-auto py-24'>
            <h1 className='text-[40px] font-[700] text-[#333333]'>Why <span className='text-[40px] 
             font-[700] text-[#43B7C5]'>CodingKey </span> </h1>
            <h1 className='text-[40px] font-[700] text-[#333333]'> is the most preferred outsourcing
             partner for you </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 max-w-full mx-auto px-4 md:px-20 pb-24 pt-10 bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]'>
            {outSourcingI.map((value, key) => (
                <div className='flex' key={key}>
                    <div className="flex flex-col items-center text-center gap-y-5 border border-dashed bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]
                     border-slate-300 p-8 hover:bg-[#fff] hover:bg-none transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                     hover:shadow-xl hover:scale-105 hover:z-10">
                        <img src={value.icon} className='h-[65px] w-[65px]' alt="no icon" />
                        <div className='text-[18px] font-[600] text-[#333333]'> {value.title} </div>                
                        <div className='text-[15px] font-[400] text-[#696969] leading-[26px]'> {value.desc} </div>
                    </div>
                </div>
            ))}

            {outSourcingII.map((value, key) => (
                <div className='flex' key={key}>
                        <div className="flex flex-col items-center text-center gap-y-5 border border-dashed bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]
                        border-slate-300 p-8 hover:bg-[#fff] hover:bg-none transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]
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

export default OutsourcingPartner