import React from 'react'
import Navbar from './navbar'

const Hero = () => {
  return (
    <div className='md:h-screen w-full bg-main-background flex justify-center md:items-end items-start relative'>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar/>
      </div>
      <div className="bg-main-background shadow-2xl md:rounded-t-lg md:h-[90vh] h-auto md:w-[90%] w-full 
                      relative overflow-visible mt-auto pt-14 md:pt-0">
        <div className="bg-main-background justify-between md:h-1/2 h-auto flex md:rounded-t-lg md:flex-row flex-col relative">
          <div className="bg-main-background md:w-1/3 w-full gap-x-1 md:px-10 px-6 md:py-0 py-6 flex flex-col
            md:rounded-t-lg items-start justify-center relative z-10">
            <div className="text-6xl text-Primary-text font-tensor">AASHISH</div>
            <div className="font-tensor">DRAWING & ARTWORK</div>
          </div>
          <img
            className='md:px-4 px-0 md:-mt-32 mt-0 h-auto md:max-h-[150%] max-h-[50vh] w-full md:w-auto object-contain relative z-20'
            src='/images/Hero1 (1).png'
            alt="Hero artwork"
          />
        </div>
        <div className="md:h-1/2 h-auto bg-white rounded-lg flex md:flex-row flex-col relative z-0">
          <div className="bg-white text-7xl md:h-full h-16 md:w-1/10 w-full flex items-center justify-center">🔥</div>
          <div className="bg-main-background md:h-full h-auto md:w-9/10 w-full px-8 py-6 flex flex-col text-black">
            <div className="h-10 text-2xl font-tensor">FEATURED EXHIBITION</div>
            <div className="flex items-center md:justify-evenly justify-start gap-4 h-full 
                            overflow-x-auto overflow-y-hidden flex-nowrap pb-4  hide-scrollbar">
              {[1,2,3,4,5,6].map((item, index) => ( 
                <div key={index} className="exhibition hover:scale-110 transition-all duration-200 shrink-0">
                  <div className="display"></div>
                  <div className="px-4">FRAGMENT {item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero