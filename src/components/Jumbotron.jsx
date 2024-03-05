import React from 'react'



const Jumbotron = () => {
  return (
    
  <div id="Home" className='pb-0'>
    <div className='mx-auto px-4 border border-red-400 bg-slate-800 h-1/2 items-center'>
      <div className='flex flex-col md:grid md:grid-cols-2 md:my-12 '>
        <div className='flex flex-col text-center py-10 justify-center mx-auto md:text-left md:mx-12 '>
          <h1 className="text-base font-semibold text-orange-500 md:text-2xl">
            Hello Guys👋, I am 
          <span className="block font-bold text-gray-400 text-4xl mt-1 lg:text-5xl">
            Sandy Pratama
            </span>
          </h1>
          <h2 className="font-medium text-slate-300 text-lg mb-5">
            Junior Web Developer & Designer
          </h2>
          <p className="font-medium text-slate-400 mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fugit tempora, optio ipsam officia a!
          </p>
          <div className='items-center md:items-start'>
          <button className="font-semibold text-black w-36 py-2  px-4 bg-orange-500  rounded-full hover: shadow-lg hover:bg-orange-400">
            Hubungi Saya
          </button>
          </div>
        </div>
        <div className='flex justify-center mx-auto h-80 w-60 rounded-full bg-orange-500 mb-10'>
          <img src="./image/profile.png" alt="profil" className=' rounded-full  '/>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Jumbotron