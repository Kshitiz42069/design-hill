import React from 'react';

function Navbar() {
  return (
    <nav>
        <div className='flex justify-around py-5'>
            <div className="logo w-[100px]">
                <img 
                    src='https://cdn1.designhill.com/assets/dh/images/designhill_logo.svg?ver=2.12.75' 
                    alt='logo'
                />
            </div>
            <div className='flex gap-10 text-[#375366]'>
                <p className='nav-cat'>Search</p>
                <p className='nav-cat'>About Us</p>
                <p className='nav-cat'>Contact</p>
                <p className='nav-cat'>How it's work</p>
            </div>
            <div className='text-[#375366] font-bold'>
                <p className='tracking-widest cursor-pointer'>buildnlive@construct.com</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar