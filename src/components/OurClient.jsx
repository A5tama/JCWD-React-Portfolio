import React from 'react'

const Projects =(props)=>{

  return <div className='w-full border bg-slate-500  border-gray-800 p-4'>
            <img src={props.img} alt=""  className='w-full h-1/2'/>
            <h1 className="text-center font-bold">{props.title}</h1>
            <p> {props.decs}</p>
          </div>
  

}


const OurClient = () => {
  return (
    <div id="Projects" className='bg-orange-300 mx-0'> 
      <div className='container w-full m-auto px-4 border border-orange-300 '>
      <h1 className="text-center text-3xl font-bold pt-8 pb-4">
        PROJECTS
      </h1 >
      <div >
      <div className='gap-y-4 lg:grid lg:grid-cols-4 lg:mb-12 lg:gap-x-4 '> 
      <Projects 
        img='./image/onlineshop.jpg' 
        title='Online Shop'
        decs=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."/>

      <Projects 
        img="./image/Personalweb.jpg" 
        title="Personal Web"
        decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."/>

      <Projects
        img="./image/bloging.jpg" 
        title="Blog Building"
        decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos." />

      <Projects 
        img="./image/landingPage.avif" 
        title="Blog Building"
        decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."/>
      </div>
      
      </div>

    </div>


    </div>
    
  )
}


export default OurClient