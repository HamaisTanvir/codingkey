import React from 'react'
import { MapPin, Mail, PhoneIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import logoWhite from '../assets/logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    const dividerStyle = {
        mt: 4,
        height: '1px',
        width: '100%',
        backgroundColor: '#ededed26',
        // maxWidth: 360,
        borderRadius: 1,
        // border: '1px solid #9e9c9c',
        border: 'none',
      };
  return (
    <div className='bg-[#482d7d] pt-8 pb-12 p-4 md:pt-20 md:pb-10 md:pl-20'>
        <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Company  */}
            <div className='flex flex-col'>
                <h1 className='text-[18px] font-[700] text-[#fff] pb-4 md:pb-8'>Company</h1>

                    <div className='relative group flex items-center'>
                        <MapPin style={{stroke: '#43B7C5', marginRight: 12}}/>
                        <a href="https://www.google.com/maps/dir/33.734656,73.089024/Tribe+Consulting+Islamabad,+Plot+04,+Office+%23101%26+102,+1st+Floor+EvacueeTrust+Complex,+Sir,+Agha+Khan+Rd,+F-5%2F1+F-5,+Islamabad,+Islamabad+Capital+Territory+44210,+Pakistan/@33.7341059,73.0861882,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38dfc1cc98518753:0xaf7f63890ee82e32!2m2!1d73.0887267!2d33.7335558?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target='blank'>
                        <h1 className='text-[15px] text-[#fff]'>Islamabad</h1></a>
                        <span class="absolute left-0.5 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[130px]"></span>
                    </div>
                    <div className='relative group flex items-center mt-6'>
                        <MapPin style={{stroke: '#43B7C5', marginRight: 12}}/>
                        <a href="https://www.google.com/maps/dir//floor+10+%26+11,+Bahria+Town+Tower,+Tariq+Rd,+P.E.C.H.S+Block+2+Block+2+PECHS,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8654136,67.0559716,19.83z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33e8f880a11bf:0x423c3351615c8592!2m2!1d67.0561454!2d24.8653886?shorturl=1" target='blank'>
                        <h1 className='text-[15px] text-[#fff]'>Karachi</h1></a>
                        <span class="absolute left-0.5 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[100px]"></span>
                    </div>
                    <div className='relative group flex items-center mt-6'>
                        <a href='mailto:info@codingkey.com'><Mail style={{stroke: '#43B7C5', marginRight: 12}}/></a>
                        <a href='mailto:info@codingkey.com' className='text-[15px] text-[#fff]'>info@codingkey.com</a>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[226px]"></span>
                    </div> 
                    <div className='relative group flex items-center mt-6'>
                        <a href='tel:+9221111087423'><PhoneIcon style={{stroke: '#43B7C5', marginRight: 12}}/></a>
                        <a href='tel:+9221111087423' className='text-[15px] text-[#fff]'>+9221111087423</a>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[163px]"></span>
                    </div>
               
                    <div className='mt-10 px-6 space-x-10'>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faFacebookF}  color='#482d7d' style={{backgroundColor: '#fff',
                                padding: 3, paddingLeft: 6, paddingRight: 6, borderRadius: 2
                            }}/>
                        </Link>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faLinkedinIn}  color='#482d7d' style={{backgroundColor: '#fff',
                                padding: 3, paddingLeft: 5, paddingRight: 5, borderRadius: 2
                            }}/>
                        </Link>
                    </div>
            </div>
            {/* IT Services */}
            <div className="flex flex-col mt-6 md:mt-0">
                <h1 className='text-[18px] font-[700] text-[#fff] pb-4 md:pb-8'>IT Services</h1>
                
                    <div className='relative group flex items-center'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Cloud Solutions</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[145px]"></span>
                    </div>
              
                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Mobile App Development</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[225px]"></span>
                    </div>
                
                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Quality Assurance</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[165px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Testing & Automation</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[198px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Data Science</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[120px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Internet of Things (IOT)</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[205px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Infrastructure & Devops</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[213px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>UI/ UX Design</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[120px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={'/services'}><h1 className='text-[15px] text-[#fff] font-[400]'>Digital Marketing</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[153px]"></span>
                    </div>
            </div>
            {/* Quick Links  */}
            <div className='flex flex-col mt-6 md:mt-0'>
                <h1 className='text-[18px] font-[700] text-[#fff] pb-4 md:pb-8'>Quick Links</h1>
                <div className='relative group flex items-center'>
                        <Link to={''}><h1 className='text-[15px] text-[#fff] font-[400]'>About Us</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[82px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={''}><h1 className='text-[15px] text-[#fff] font-[400]'>Leadership Team</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[156px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={''}><h1 className='text-[15px] text-[#fff] font-[400]'>Our Products</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[117px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={''}><h1 className='text-[15px] text-[#fff] font-[400]'>Career</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[62px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={''}><h1 className='text-[15px] text-[#fff] font-[400]'>Priovacy Policy</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[133px]"></span>
                    </div>

                    <div className='relative group flex items-center mt-4'>
                        <Link to={''}><h1 className='text-[15px] text-[#fff] font-[400]'>Contact Us</h1></Link>
                        <span class="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#43B7C5] transition-all
                        duration-700 group-hover:w-[102px]"></span>
                    </div>
            </div>
        </div>
            <Divider sx={dividerStyle}/>
            <div className='flex flex-col justify-center items-center pt-12 gap-y-2'>
                <img src={logoWhite} alt="ck-Logo" width={200} height={32}/>
                <Link to={'https://tc-bpo.com/'}><h2 className='text-[14px] font-[400] text-[#800080]
                 hover:text-[#fff] ease transition duration-1000'>A Tribe
                Consulting Company</h2></Link>
                <h2 className='text-[15px] font-[400] text-[#fff] pt-8'>© 2025 Codingkey.com All Rights Reserved.</h2>
            </div>
    </div>
  )
}

export default Footer