import React from 'react'

function Portfolio() {
  return (
    <div className='portfolio '>
        <div className='w-[70rem] ml-[10rem]'>
            <p className='text-5xl'>Our Remarkable Project Portfolio</p>
            <p className='text-2xl mt-7'>
                Explore our extensive portfolio showcasing the breadth of our expertise, from iconic structures to sustainable solutions, all meticulously crafted to perfection.
            </p>
        </div>
        <div className='flex gap-[6rem] mt-10 w-[80rem] ml-[6rem]'>
            <div className='flex-col w-[22rem]'>
                <img className='h-[20rem] w-[22rem] rounded-xl' src="https://i.pinimg.com/736x/a8/05/08/a805081091785b15523fff9b2737537a.jpg" alt="" />
                <div className='mx-3 mt-3'>
                    <p className='text-xl font-bold'>Project Domu Home</p>
                    <p className='text-sm'>Construction of a modern household consisting of 50 families.</p>
                    <div className='flex justify-between text-sm mt-3'>
                        <p>Location</p>
                        <p>Gurgaon, India</p>
                    </div>
                    <div className='flex justify-between text-sm mt-1'>
                        <p>Duration</p>
                        <p>36 Months</p>
                    </div>
                    <div className='flex justify-between text-sm mt-1'>
                        <p>Total Budget</p>
                        <p>$20 Million</p>
                    </div>
                    <button className='border-black border-[1.5px] rounded-3xl w-full text-center mt-3'>
                        Read More
                    </button>
                </div>
            </div>
            <div className='flex-col w-[22rem]'>
                <img className='h-[20rem] w-[22rem] rounded-xl' src="https://i.pinimg.com/564x/ad/17/51/ad175136a26df0b23c6cf76807b60b40.jpg" alt="" />
                <div className='mx-3 mt-3'>
                    <p className='text-xl font-bold'>Project Bates Smart</p>
                    <p className='text-sm'>Construction of a modern office of Bates Smart pvt.</p>
                    <div className='flex justify-between text-sm mt-3'>
                        <p>Location</p>
                        <p>Delhi, India</p>
                    </div>
                    <div className='flex justify-between text-sm mt-1'>
                        <p>Duration</p>
                        <p>18 Months</p>
                    </div>
                    <div className='flex justify-between text-sm mt-1'>
                        <p>Total Budget</p>
                        <p>$100 Million</p>
                    </div>
                    <button className='border-black border-[1.5px] rounded-3xl w-full text-center mt-3'>
                        Read More
                    </button>
                </div>
            </div>
            <div className='flex-col w-[22rem]'>
                <img className='h-[20rem] w-[22rem] rounded-xl' src="https://i.pinimg.com/564x/9f/b9/29/9fb9294d8884e9c0988cb48ed6c12be6.jpg" alt="" />
                <div className='mx-3 mt-3'>
                    <p className='text-xl font-bold'>Project Public Library</p>
                    <p className='text-sm'>Construction of a modern public library with large space.</p>
                    <div className='flex justify-between text-sm mt-3'>
                        <p>Location</p>
                        <p>Pune, India</p>
                    </div>
                    <div className='flex justify-between text-sm mt-1'>
                        <p>Duration</p>
                        <p>12 Months</p>
                    </div>
                    <div className='flex justify-between text-sm mt-1'>
                        <p>Total Budget</p>
                        <p>$2 Million</p>
                    </div>
                    <button className='border-black border-[1.5px] rounded-3xl w-full text-center mt-3'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio