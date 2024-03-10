import React from 'react'

function Solution() {
  return (
    <div className='mx-[2rem] h-[100vh] cursor-default'>
        <p className='text-5xl mx-[7rem]'>Tailored Construction Solutions</p>
        <p className='text-xl mx-[7rem] mt-[1.5rem]'>
            At Design Hill, We offer a comprehensive suite of construction services, meticulously tailored to match your unique project requirements, ensuring success at every step.
        </p>
        <div className='flex gap-[2rem] ml-[6rem] mt-[5rem] mb-[3rem]'>
            <div className='flex hover:scale-[1.15] ease-in'>
                <div className=' absolute'>
                    <img className='h-[28rem] w-[350px] opacity-50 hover:opacity-100' src="https://i.pinimg.com/564x/1d/11/40/1d11407f66b26ac16670af963a3f1d74.jpg" alt="" />
                </div>
                <div className='relative w-[330px] top-[12rem] mx-4'>
                    <p className='text-2xl  font-semibold'>Design and planning service</p>
                    <p className='text-md'>Our expert design and planning services ensure meticulous execution</p>
                </div>
            </div>
            <div className='flex hover:scale-[1.15] ease-in'>
                <div className=' absolute '>
                    <img className='h-[28rem] w-[350px] opacity-50 hover:opacity-100' src="https://i.pinimg.com/564x/f1/29/75/f1297596cd674ce9f17af23979f70354.jpg" alt="" />
                </div>
                <div className='relative w-[330px] top-[12rem] mx-4'>
                    <p className='text-2xl font-semibold'>Design and planning service</p>
                    <p className='text-md '>Our expert design and planning services ensure meticulous execution</p>
                </div>
            </div>
            <div className='flex hover:scale-[1.15] ease-in'>
                <div className=' absolute'>
                    <img className='h-[28rem] w-[350px] opacity-50 hover:opacity-100' src="https://i.pinimg.com/564x/fc/f9/ec/fcf9ecd48ec6ecfb9a0a8f83b4157b2a.jpg" alt="" />
                </div>
                <div className='relative w-[330px] top-[12rem] mx-4'>
                    <p className='text-2xl  font-semibold '>Design and planning service</p>
                    <p className='text-md '>Our expert design and planning services ensure meticulous execution</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solution