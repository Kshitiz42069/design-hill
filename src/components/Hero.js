import React from 'react'

function handlemail(){
  var mailAdd = 'builnlive@construct.com';
  var subject = 'Inquiry about the construct';

  var mailto = `mailto:${encodeURIComponent(mailAdd)}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailto;
}

function Hero() {
  return (
    <div className='hero h-[90vh] cursor-default'>
      <div className='background absolute w-full'>
        <img className='h-[90vh] w-full' src="https://i.pinimg.com/564x/10/e5/85/10e585db9cf2a39893f5814982024404.jpg" alt="hero" />
      </div>
      <div className='w-[53rem] h-[80vh] relative top-[4rem]'>
        <p className='text-black font-bold sm:text-2xl md:text-8xl ml-16'>Crafting a better <span className='text-[#8BC341]'>Tomorrow</span>!</p>
        <p className='text-black font-bold text-4xl ml-16 mt-8'>Design <span className='text-[#8BC341]'>Hill</span> is here to build a Safe, Reliable & high quality construction.</p>
        <button 
          onClick={handlemail}
          className='ml-[20rem] mt-[4rem] bg-black p-2 rounded-2xl text-xl text-[#8BC341] font-semibold hover:text-white hover:bg-[#8BC341]'
        >
          Contact us
        </button>
      </div>
    </div>
  )
}

export default Hero