import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-main-background w-full md:min-h-[65vh] py-4 '>
      <div className="w-[80wh] h-[30vh] md:h-[60vh] mx-16 rounded-lg bg-main-background shadow-2xl">
        <div className="flex flex-col justify-center items-center text-center h-full px-4 py-8">
  <h2 className="text-primary text-2xl md:text-3xl font-semibold mb-4 mt-6">
    Let's Create Something Yours
  </h2>
  <p className="text-black mb-6">
    Whether you want a portrait of someone special or a piece that's uniquely yours, <br/> 
     I'm open for commissions and original art. Reach out and let's talk
  </p>
  <a
    href=""
    className="px-6 py-3 bg-amber-200 mb-4 text-black font-semibold rounded-full hover:bg-Accent hover:text-white transition"
  >
    Start a Conversation
  </a>
</div>

      </div>
    </div>
  )
}

export default Contact


