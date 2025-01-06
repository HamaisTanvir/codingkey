import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import {navItems} from '../constants/data'
import { Link, NavLink } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

const Navbar = () => {
    const [mobileIconOpen, setmobileIconOpen] = useState(false);

    const toggleNavbar = () => {
        setmobileIconOpen(!mobileIconOpen);
    }

  return (
    <>
        <nav className='sticky top-0 py-4 md:py-7 z-50 bg-white shadow-lg'>

            <div className="hidden md:block mx-auto">
                <div className="flex justify-center space-x-96 items-center">
                    <Link to='/'>
                        <img src={logo} className='w-[160px] h-[26px]' alt="codingkey-logo"/>
                    </Link>
                    <ul className='hidden md:flex space-x-10 pr-96 font-[500] text-[16px]'>
                        {navItems.map((item, key) => (
                            <li key={key}>
                                <NavLink className="hover:border-b-[3px] border-[#41287B] pb-7" to={item.slug}>{item.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            
                {/* <--------  |||||  Mobile View  ||||| --------> */}
        <div className="md:hidden flex justify-between items-center px-4">
            
            <Link to='/'>
                <img src={logo} className='w-[160px] h-[26px]' alt="codingkey-logo"/>
            </Link>

            <div className=' flex flex-col justify-end trasition duration-300'>
                <button onClick={toggleNavbar}>
                    {mobileIconOpen ? < X /> : <Menu /> }
                </button>
            
                {mobileIconOpen && (
                <nav>
                    <div className='fixed md:hidden flex flex-col z-20 right-0 mt-[20px] p-6 h-full w-64 bg-[#41287B] justify-left'>
                        <ul>
                            {navItems.map((item, key) => (
                                <li className='p-5 border-b-[0.2px] border-gray-400' key={key}>
                                    <NavLink className='text-white' to={item.slug}>{item.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                )}
            </div>

        </div>
        
      
        </nav>
</>
  )
}

export default Navbar