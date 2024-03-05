import React from "react";

const Skill =(props)=>{

    return <div className='w-full border rounded-md bg-slate-800  border-gray-800 p-4'>
              <img src={props.img} alt=""  className='w-full h-1/2'/>
              <h1 className="text-center font-bold">{props.title}</h1>
              <p> {props.decs}</p>
            </div>
    
  
  }

const About = () => {
    return (
        <section id="About" class="pt-0 pb-32 m-0 w-full">
        <div class="container mx-auto justify-center">
            <div class="mx-auto">
                <div>

                <div class="w-full mx-auto px-4 mb-10 lg:w-1/2">
                    <h4 class="font-bold text-center text-orange-500 text-3xl p-8 mb-3">
                        About ME
                        </h4>
                    <h2 class="font-bold text-black text-2xl mb-5 max-w-md lg:text-4xl">Mari Belajar Membuat WEB & Dasar-dasar Pemrograman.</h2>
                    <p class="font-medium text-slate-400 text-base max-w-xl lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, iusto? Unde excepturi, laborum exercitationem ullam dolor magnam ut esse! Atque.</p>
                </div>

                </div>

                
                <div>
                <h2 className="text-center p-8 text-orange-500 text-3xl">Tools That I Use</h2>
                <div >
                    <div className='gap-y-4 lg:grid lg:grid-cols-4 lg:mb-12 lg:gap-x-4 '> 
                    <Skill 
                        img='./image/onlineshop.jpg' 
                        title='Online Shop'
                        decs=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."/>

                    <Skill img="./image/Personalweb.jpg"/>

                    <Skill img="./image/bloging.jpg"  />

                    <Skill img="./image/landingPage.avif" />
      </div>
      
                </div>


                </div>
                

            </div>
        </div>
        </section>
    )
  }
  
  export default About