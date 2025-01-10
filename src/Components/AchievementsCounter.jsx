import React from 'react'
import CountUp from 'react-countup'
import { stats } from '../constants/data'


const AchievementsCounter = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <div className='max-w-full text-center mt-36 py-16'>
        <h1 className='text-[48px] font-[700] text-[#333333]'>Empowered Together: Achievements</h1>
        <h2 className='text-[15px] font-[400] text-[#696969]'>CodingKey is a team of senior industry professionals with proven delivery track record and international exposure</h2>
      </div>

      {/* <------------ //// Counter \\\\ ---------->  */}
      <div className="max-w-7xl mx-auto pb-20 pr-16">
        <dl className='grid grid-col-1 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-0'>
          {stats.map((stat) => 

          <div key={stat.id} className="flex pl-4 md:pl-4 md:mx-auto gap-x-6">

            <dt className='gap-x-4 flex flex-nowrap'>
              <div className='text-[30px] text-[#002FA6] items-center font-[300] bg-white rounded-lg w-[79px] h-[77px] flex justify-center'>
                {React.cloneElement(stat.icon, { size: 32, color: '#002FA6', border: '1px', strokeWidth: 1.2 })}
              </div>
            </dt>

            <dd className='text-[34px] font-[600] flex flex-col items-left gap-x-4'>
              <div className='flex tracking-tight text-[36px] font-[600] gap-x-2'>
                
                <CountUp end={stat.value} duration={2}/>
                <div className='text-[16px] font-[500] text-[#6e6e6e] pt-4'>
                  {stat.suffix}
                </div>
              </div>

              <div className='text-[15px] font-[700] text-[#333] uppercase tracking-widest'>
                {stat.text}
              </div>
            </dd>

          </div>
          )}
        </dl>
      </div>

    </div>
  )
}

export default AchievementsCounter