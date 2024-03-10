import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Content() {
  return (
    <div className=''>
        <div className='bg-[#eaf3f5] py-10'>
            <div className='flex justify-around items-center text-center w-[80rem] gap-[10rem] ml-[3rem]'>
                <div className='w-[250px] '>
                    <p className=' font-normal text-3xl'>260+</p>
                    <p className=' text-sm ml-12 mt-1'>Project Completed</p>
                </div>
                <div className='w-[200px] '>
                    <p className='font-normal text-3xl'>95%</p>
                    <p className='text-sm ml-12 mt-1'>Satisfaction Rate</p>
                </div>
                <div className='w-[200px] '>
                    <p className='font-normal text-3xl'>200+</p>
                    <p className='text-sm ml-6 mt-1'>Satisfied Client</p>
                </div>
                <div className='w-[250px] '>
                    <p className='font-normal text-3xl'>1000+</p>
                    <p className='text-sm ml-12 mt-1'>Qualified Engineers</p>
                </div>
            </div>
            <div className='flex justify-around items-center text-center w-[80rem] gap-[6rem] ml-[3rem] mt-10 '>
                <div className='box'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className='text-left'>Always building quality industrial</p>
                </div>
                <div className='box '>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className='text-left'>Best manufacturing service provider</p>
                </div>
                <div className='box '>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className='text-left'>Using the newest manufacturing tech</p>
                </div>
                <div className='box '>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className='text-left'>Experienced trusted contractor</p>
                </div>
            </div>
        </div>
        <div className='bg-white py-[4rem]'>
            <div className='mx-[10rem]'>
                <p className=' text-5xl'>Why choose Design <span className='text-[#8BC341]'>hill</span> construction</p>
                <p className=' text-xl mt-[1rem]'>
                    At Design hill construction, our commitment to excellence, unparalleled expertise and unwavering dedication set us apart. Here's why you should choose us:
                </p>
            </div>
            <div className='flex my-[3rem] gap-[2rem] ml-[10rem]'>
                <div className=' flex-col bg-[#FFF2E3] p-4 rounded-lg'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className='mt-[3rem]'>Proven track record</p>
                    <p className=''>We have a decade of successful projects.</p>
                </div>
                <div className=' flex-col p-4 bg-[#EAF3F5] rounded-lg'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className='mt-[3rem]'>Proven track record</p>
                    <p className=''>We have a decade of successful projects.</p>
                </div>
                <div className=' flex-col p-4 bg-[#F1F4EB] rounded-lg'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p className='mt-[3rem]'>Proven track record</p>
                    <p className=''>We have a decade of successful projects.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content