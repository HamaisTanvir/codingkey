import React, { useState } from 'react';
import { tabMobile, tabFrontEnd, tabDatabase, tabBackEnd, tabCMS, tabDevops } from '../constants/data';

const MobileTabs = () => {
  const [activeTab, setActiveTab] = useState(0); 

  return (

    <div className="my-24">
      <div className="text-center my-6">
        <h1 className="text-[40px] font-[700] text-[#333333] pb-8">
          Technologies we work with
        </h1>
      </div>

      <div className="block md:hidden max-w-7xl mx-auto">
          <div className="grid grid-cols-2 justify-items-center gap-y-4 px-6">
            <button 
                className={`py-3 px-0 w-36 uppercase rounded-md border border-[#c3c3c3] text-[#696969] font-[500] text-[14px] transition-all duration-300 
                ${activeTab === 0 ? 'bg-[#43b7c5] text-white border-none' : 'bg-white'}
                focus:bg-[#43b7c5] focus:text-white`}
                onClick={() => setActiveTab(0)} >
              Mobile 
            </button>
            <button
                className={`py-3 px-0 w-36 uppercase rounded-md border border-[#c3c3c3] text-[#696969] font-[500] text-[14px] transition-all duration-300 
                ${activeTab === 1 ? 'bg-[#43b7c5] text-white border-none' : 'bg-white'}
                focus:bg-[#43b7c5] focus:text-white`}
                onClick={() => setActiveTab(1)} >
              Frontend
            </button>
            <button
              className={`py-3 px-0 w-36 uppercase rounded-md border border-[#c3c3c3] text-[#696969] font-[500] text-[14px] transition-all duration-300 
                ${activeTab === 2 ? 'bg-[#43b7c5] text-white border-none' : 'bg-white'}
                focus:bg-[#43b7c5] focus:text-white`}
              onClick={() => setActiveTab(2)}
            >
              Database
            </button>
            <button
              className={`py-3 px-0 w-36 uppercase rounded-md border border-[#c3c3c3] text-[#696969] font-[500] text-[14px] transition-all duration-300 
                ${activeTab === 3 ? 'bg-[#43b7c5] text-white border-none' : 'bg-white'}
                focus:bg-[#43b7c5] focus:text-white`}
              onClick={() => setActiveTab(3)}
            >
              Backend
            </button>
            <button
              className={`py-3 px-0 w-36 uppercase rounded-md border border-[#c3c3c3] text-[#696969] font-[500] text-[14px] transition-all duration-300 
                ${activeTab === 4 ? 'bg-[#43b7c5] text-white border-none' : 'bg-white'}
                focus:bg-[#43b7c5] focus:text-white`}
              onClick={() => setActiveTab(4)}
            >
              CMS
            </button>
            <button
              className={`py-3 px-0 w-36 uppercase rounded-md border border-[#c3c3c3] text-[#696969] font-[500] text-[14px] transition-all duration-300 
                ${activeTab === 5 ? 'bg-[#43b7c5] text-white border-none' : 'bg-white'}
                focus:bg-[#43b7c5] focus:text-white`}
              onClick={() => setActiveTab(5)}
            >
              Devops
            </button>
          </div>
        
        {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-0 mt-8 px-4">
                {tabMobile.map((data, index) => (
                  <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                    <img className="bg-[#F4F6F6] rounded-lg max-w-44 h-24" src={data.icon} alt={data.brand} />
                    <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-0 mt-8 px-4">
                {tabFrontEnd.map((data, index) => (
                  <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                    <img className="bg-[#F4F6F6] rounded-lg max-w-44 h-24" src={data.icon} alt={data.brand} />
                    <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-0 mt-8 px-4">
                {tabDatabase.map((data, index) => (
                  <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                    <img className="bg-[#F4F6F6] rounded-lg max-w-44 h-24" src={data.icon} alt={data.brand} />
                    <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 3 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-0 mt-8 px-4">
                {tabBackEnd.map((data, index) => (
                  <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                    <img className="bg-[#F4F6F6] rounded-lg max-w-44 h-24" src={data.icon} alt={data.brand} />
                    <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                  </div>
                ))}
              </div>
            )}

              {activeTab === 4 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-0 mt-8 px-4">
                {tabCMS.map((data, index) => (
                  <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                    <img className="bg-[#F4F6F6] rounded-lg max-w-44 h-24" src={data.icon} alt={data.brand} />
                    <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                  </div>
                ))}
              </div>
            )}

              {activeTab === 5 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-0 mt-8 px-4">
                {tabDevops.map((data, index) => (
                  <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                    <img className="bg-[#F4F6F6] rounded-lg max-w-44 h-24" src={data.icon} alt={data.brand} />
                    <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
       
      </div>
    </div>
  );
};

export default MobileTabs;
