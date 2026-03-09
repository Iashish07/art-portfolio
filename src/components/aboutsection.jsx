import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Aboutsection = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const clipanimation = gsap.timeline({
        scrollTrigger: {
        
          trigger: sectionRef.current,
          start: 'center center',
          end: '+=800',
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        }
      });
      clipanimation.to(boxRef.current, {
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        ease: 'none',
      });
    }, sectionRef);
    return () => ctx.revert(); 
  }, []);
  return (
    <div
      ref={sectionRef}
      id='about'
      className='h-screen w-full flex items-center justify-center overflow-hidden'>      
      <div
        ref={boxRef}
        className='overflow-hidden bg-main-background shadow-2xl rounded-lg relative'
        style={{ width: '50vw', height: '50vh' }}
      > <img
          className='absolute inset-0 size-full object-cover'
          src='/images/about.jpg'
          alt='background'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent' />
        <div className="relative z-10 flex justify-center h-full items-center flex-col px-8">
          <h1 className='text-white font-bold text-4xl sm:text-3xl font-tensor text-center'>
            The Artist Voice About~
          </h1>
          <p className='text-base sm:font-light font-tensor text-white mt-4 text-center leading-relaxed'>
            I've been drawing since I was a kid — pencil in hand before I even knew what I was making.
            Four years ago I got serious about it. Realistic portraits, anime, figures, faces — anything
            that lets me capture something true on paper. No digital, no paint. Just pencil, pressure, and patience.
            For me drawing isn't just a skill. It's how I process the world — a self reflection, a way of seeing
            people closely enough to actually understand them. Every portrait I make carries something of the person in it.
            That's what I'm after.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutsection
