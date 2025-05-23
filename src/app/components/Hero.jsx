"use client";

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12 '>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>
                            Hey, I'm {""}
                            </span>

                            <br></br>
                       <TypeAnimation
              sequence={[
                "Archita",
                1000,
                "Frontend Developer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-100'
            />
          
                    </h1>

                    <p className='text-[#ADB7BE] text-base  mb-6 sm:text-lg lg:text-xl '>
                        A passionate Frontend Developer in the making. As a curious engineering student
                        with a love for clean code and beautiful design, I enjoy
                        turning ideas into responsive, accessible, and interactive web
                        experiences. Whether it’s building sleek UIs or exploring the
                        latest in web technologies, I’m always learning, creating,
                        and improving. Let’s build something great together.
                    </p>

                    <div>
                        <button className='px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 hover:-translate-y-1 transition-transform text-white'>
                            Hire Me
                             </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full  hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:-translate-y-1 transition-transform'> 
                            <span className='block bg-[#181818] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download Resume 
                            </span>
                            </button>
                    </div>

                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative '>
                        <Image
                    src= "/images/1hero.png"
                    alt="hero image"
                    className='absolute transform -translate-x-1/2
                     -translate-y-1/2 top-1/2 left-1/2'
                    width = {300}
                    height = {300}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero