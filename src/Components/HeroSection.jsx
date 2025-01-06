import React from 'react'
import gridPattern from '../assets/bg-gird-pattern-repeat-alt.png'
import heroImg from '../assets/home-reputable-success.png'
import { useState } from 'react'

const HeroSection = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [query, setQuery] = useState('');
    const [queryError, setQueryError] = useState('');
  
  
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            setEmailError('Valid email address is required');
            valid = false;
        } else {
          setEmailError('');
        }
  
        if (!query) {
            setQueryError('Query is required');
            valid = false;
          } else {
            setQueryError('');
          }
      
        if(!valid) {
          return;
        }
    
        console.log('Form submitted with:', { query });  //......... ???
      };

  return (
    <div className='pt-40 max-w-7xl mx-auto md:pl-4' 
    style={{
        backgroundImage: `url(${gridPattern})`,
        backgroundSize: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
    }}>

        <div className='md:hidden'>
            <img src={heroImg} alt="hero-img" className='mt-[-120px] mb-14 pr-2 w-[414px] h-[545px]'/>
        </div>

        
            <h1 className='text-[#41287B] md:text-[65px] text-[33px] font-[700] leading-[40px] md:leading-[78px] max-w-3xl md:max-w-4xl pl-3 md:pl-10'> Leave Your Digital Worries to 
                <span className='text-[#43B7C5]'> CodingKey</span> 
            </h1>
            <h2 className='text-[#2e2828] text-[18px] md:text-[18px] font-[700] pl-3 md:pl-10 pt-6 max-w-[400px] md:max-w-5xl'>
                Our technology experts can take care of your problems, you can simply outsource and relax
            </h2>
        
        <div className='hidden md:flex justify-between space-x-16'>

            <div className='pl-10'>
                <h2 className='text-[#333333] text-[24px] font-[700] pt-28'>Connect with our Consultants!</h2>

                {/* ------------------|||| FORM ||||------------------ */}
                <form onSubmit={handleSubmit}>   
                    <div className="md:col-span-2 mt-5">
                        <div>
                            <input
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            placeholder='Your Email*'
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            className="block w-[550px] rounded-md border-0 py-2 px-4 text-gray-900 bg-[#F8F8F8] placeholder:text-gray-500 md:text-md focus:outline-none md:leading-10"
                            />
                        </div>
                        {emailError && (
                            <p className="mt-2 text-sm text-start text-red-600">
                            {emailError}
                            </p>
                        )}
                    </div>

                    <div className="md:col-span-2 mt-5">
                        <div>
                            <input
                            id="query"
                            name="query"
                            type="text"
                            value={query}
                            placeholder='Your Query'
                            onChange={(e) => setQuery(e.target.value)}
                            autoComplete="query"
                            className="block w-[550px] rounded-md border-0 items-start pt-2 pb-[100px] px-4 bg-[#F8F8F8] text-gray-900 placeholder:text-gray-500 focus:outline-none md:text-md md:leading-10"
                            />
                        </div>
                        {queryError && (
                            <p className="mt-2 text-sm text-start text-red-600">
                            {queryError}
                            </p>
                        )}
                    </div>

                    <div className='flex justify-center mt-5'>
                        <button type='submit' className='mt-4 py-4 w-[550px] rounded-md text-white font-[400]
                        bg-[#41287B] text-[15px] transition duration-500'>LET'S DISCUSS</button>
                    </div>
                </form> 
            </div>

            <img src={heroImg} alt="hero-img" className='mt-[-120px] ' />
        </div>

        <div className='md:hidden items-center px-4 '>
                <h2 className='text-[#2e2828] text-[20px] font-[800] pt-12'>Connect with our Consultants!</h2>

                {/* ------------------|||| FORM ||||------------------ */}
                <form onSubmit={handleSubmit}>   
                    <div className="md:col-span-2 mt-5">
                        <div>
                            <input
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            placeholder='Your Email*'
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            className="block w-[340px] rounded-md border-0 py-2 px-4 text-gray-900 bg-[#F8F8F8] placeholder:text-gray-500 md:text-md focus:outline-none md:leading-10"
                            />
                        </div>
                        {emailError && (
                            <p className="mt-2 text-sm text-start text-red-600">
                            {emailError}
                            </p>
                        )}
                    </div>

                    <div className="md:col-span-2 mt-5">
                        <div>
                            <input
                            id="query"
                            name="query"
                            type="text"
                            value={query}
                            placeholder='Your Query'
                            onChange={(e) => setQuery(e.target.value)}
                            autoComplete="query"
                            className="block w-[340px] rounded-md border-0 items-start pt-2 pb-[100px] px-4 bg-[#F8F8F8] text-gray-900 placeholder:text-gray-500 focus:outline-none md:text-md md:leading-10"
                            />
                        </div>
                        {queryError && (
                            <p className="mt-2 text-sm text-start text-red-600">
                            {queryError}
                            </p>
                        )}
                    </div>

                    <div className='flex  mt-5'>
                        <button type='submit' className='mt-4 py-4 w-[340px] rounded-md text-white font-[400]
                        bg-[#41287B] text-[15px] transition duration-500'>LET'S DISCUSS</button>
                    </div>
                </form> 
            </div>
        
        <div className='flex justify-center pt-20 md:pt-40 text-center'>
            <h2 className='text-[20px] md:text-[24px] font-[500] text-[#333333] max-w-96 md:max-w-3xl'> Join the emerging success stories that are taking advantage of CodingKeys' services and take your business to the next level</h2>
        </div>

    </div>

    
  )
}

export default HeroSection