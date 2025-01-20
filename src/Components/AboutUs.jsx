import React from 'react'
import aboutImg from '../assets/contact-us-01-hero-bg.jpg'
import dedicated from '../assets/dedicated-customer-team.png'
import fixed from '../assets/fixed-cost-model.png'
import model from '../assets/partnership-model.png'
import startUp from '../assets/collaboration-model.png'
import { Link } from 'react-router-dom'
import brochure from '../assets/companybrochure-scaled.jpg'
import pattern from '../assets/mitech-slider-cybersecurity-global-image.png'

const AboutUs = () => {
  return (
    <>
      <div className='bg-cover bg-center py-16 md:py-48 h-[340px] md:h-[565px] mb-10' style={{backgroundImage: `url(${aboutImg})`}}>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-[32px] md:text-[56px] font-[700] text-[#fff] pb-4'>About us</h1>
          <h2 className='text-[20px] md:text-[24px] font-[400] text-[#fff] leading-[34px]'>We work with motivated product strategists who have incomparable experience in software designing and development. We transform most complicated business problems into sophisticated, scalable solutions.</h2>
        </div>
      </div>

      <div className="text-center max-w-6xl mx-auto">
        <h1 className='text-[14px] font-[700] text-[#ababab] tracking-widest uppercase pb-6'>Our Company</h1>
        <h1 className='text-[40px] font-[700] leading-[56px] text-[#333333] pb-6'>We ensure strategic value addition to your business growth through our competitive service offering</h1>
        <h2 className='text-[18px] font-[400] leading-[31px] text-[#696969] pb-16'>Our satisfied customer base holds testimony to the quality of work we offer. You can be assured of well-organized and hassle-free engagement by outsourcing your digital transformation to CodingKey. We assure you of an engagement that will solve your complex technical problems with an agile and innovative approach</h2>
      </div>

      <div className='flex items-start max-w-7xl gap-x-8 mx-20 p-12 pb-20 mb-8 ease md:hover:-translate-y-1.5 ease transition duration-700' style={{boxShadow: '0 0 40px 5px rgba(51, 51, 51, 0.1)'}}>
          <img src={dedicated} className='max-w-[248px] h-[181px]' alt='dedicated'/>
        <div className='flex flex-col max-w-4xl'>
          <h1 className='text-[24px] font-[500] text-[#333333] pb-4'>Dedicated Customer Team</h1>
          <h2 className='text-[15px] font-[400] text-[#696969] leading-[26px]'>A ‘Dedicated Team’ at CodingKey is characterized as an extension to customer’s team sitting at a distant development facility. Customer interacts with individual team members in a ‘white box’ setting on day to day basis through various collaboration tools to achieve project goals. This ‘white box’ setting allows a customer to maintain deeper insight of team’s daily routine, tasks management, productivity and internal collaboration with other team members. CodingKey facilitates the customer in team management and project delivery through various means and ensures mutual success by taking full responsibility of timely and quality delivery of assigned project(s)</h2>
        </div>
      </div>

      <div className='flex items-start max-w-7xl gap-x-8 mx-20 p-12 pb-20 mb-8 ease md:hover:-translate-y-1.5 ease transition duration-700' style={{boxShadow: '0 0 40px 5px rgba(51, 51, 51, 0.1)'}}>
        <div className='flex flex-col max-w-4xl '>
          <h1 className='text-[24px] font-[500] text-[#333333] pb-4'>Fixed Cost Model</h1>
          <h2 className='text-[15px] font-[400] text-[#696969] leading-[26px]'>This is the most commonly used standard delivery model in the industry where CodingKey analyzes and estimates project requirements, agree on a Fixed Price and Timeline with the customer, mobilize the team and kicks-off the project. This is usually a grey box engagement setting with limited access and communication with project team. CodingKey takes full responsibility of timelines and quality of delivery, within agreed upon price. Team selection and project execution is purely managed by CodingKey.</h2>
        </div>
          <img src={fixed} className='max-w-[340px] h-[305x]' alt='fixed'/>
      </div>

      <div className='flex items-start max-w-7xl gap-x-8 mx-20 p-12 pb-20 mb-10 ease md:hover:-translate-y-1.5 ease transition duration-700' style={{boxShadow: '0 0 40px 5px rgba(51, 51, 51, 0.1)'}}>
          <img src={model} className='max-w-[248px] h-[247px]' alt='model'/>
        <div className='flex flex-col max-w-4xl'>
          <h1 className='text-[24px] font-[500] text-[#333333] pb-4'>Partnership Model</h1>
          <h2 className='text-[15px] font-[400] text-[#696969] leading-[26px]'>This is a unique collaboration opportunity CodingKey offers to its valuable customers to facilitate low cost product development by investing its profits into product development. This is 100% transparent service model where CodingKey delivers the product as per usual terms stated in other engagement models and charges only the Actual Cost of Development that includes salary of developer and associated overheads. We exercise various modes of partnerships including revenue / profit sharing, shares in the business and regional sales rights.</h2>
        </div>
      </div>

      <div className="text-center max-w-6xl space-y-12 mx-auto">
        <h1 className='text-[40px] font-[700] text-[#333333] leading-[56px]'>Startup Collaborations</h1>
        <img src={startUp} alt="" />
      </div>

      <div className='flex justify-between gap-x-8 my-20 bg-[#f8f8f8] bg-contain bg-right p-10 pl-24 pr-4 pb-20' 
      style={{backgroundImage: `url(${pattern})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto'}}>
        <div className='space-y-4 pt-10'>
          <h1 className='text-[18px] font-[700] text-[#ababab]'>Resources</h1>
          <h1 className='text-[40px] font-[700] text-[#333333] pb-6'>Get a copy of brochure.</h1>
          <Link to={''}><button className='text-[15px] font-[500] text-[#fff] bg-[#482D7D] uppercase 
            rounded-[5px] px-9 py-4'>Coming Soon</button></Link>
        </div>
        <img src={brochure} alt="brochure" className='w-[645px] h-[430px]' />

      </div>
    </>
  )
}

export default AboutUs