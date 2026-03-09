import React from 'react'
const Navitem = ['Home','About', 'Artworks', 'Contact'];


const Navbar = () => {
  return (
    <div className='fixed inset-x-0 top-0 bg-black/60 backdrop-blur-md w-full h-14 
    border-b border-white/10 shadow-md rounded-b-2xl z-50 '>
      <div className="flex justify-center items-center px-4">
        
        <ul className='flex gap-8'>
          {Navitem.map((item,index)=>(
            <li key={index}><a className='text-gray-300 hover:text-amber-200 
                            cursor-pointer transition-all duration-300
                            text-sm font-extralight tracking-wide
                            relative group'>
              {item}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 
                                   bg-amber-200 transition-all duration-300
                                   group-hover:w-full' />
              </a></li>
          ))}
        </ul>
      </div>
        

    </div>
  )
}

export default Navbar