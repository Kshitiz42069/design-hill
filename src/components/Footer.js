import React from 'react'

function Footer() {
  return (
    <div className='text-white cursor-default'>
        <div className='bg-[#051009] p-[3rem]'>
            <div className='ml-[6rem]'>
                <p className='text-5xl '>Design <span className='text-[#8BC341]'>Hill</span></p>
                <p className='text-2xl mt-4'>Building your Vision with precision</p>
            </div>
            <div className='flex mt-[4rem] justify-around text-xl'>
                <div className='flex flex-col gap-[2rem]'>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Portfolio</p>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Portfolio</p>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Portfolio</p>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Portfolio</p>
                </div>
            </div>
        </div>
        <div className='text-black mx-10 p-3 flex justify-between'>
            <p className='font-bold'>© Copyright 2024 Design Hill*</p>
            <p className='font-bold'>Socials</p>
        </div>
    </div>
  )
}

export default Footer