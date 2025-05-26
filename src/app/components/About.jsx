"use client";

import React, {useRef, useEffect} from 'react';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { useInView, useSpring, useMotionValue } from 'framer-motion';
import Skills from './Skills';



const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration:3000})
  const isInView = useInView(ref, {once:true});

  useEffect(() => {

    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
       if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
       }
    })
  }, [springValue, value])



  return <span ref={ref}></span>
}

const About = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center px-8 pb-5'>
      <span className='pt-16'>
        <AnimatedText
          text="Behind the cursor"
          className="mb-14 text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"
        />

        <div className='grid w-full grid-cols-8 gap-16'>
          {/* Text Section */}
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-4xl font-serif font-bold uppercase text-white hover:underline'>
              About Me
            </h2>

            <p className='text-white/80 text-lg'>
              As a curious engineering student with a love for clean code and beautiful design,
              I enjoy turning ideas into responsive, accessible, and interactive web experiences.
            </p>

            <p className='my-4 text-white/80 text-lg'>
              Over the past year, I’ve built several frontend projects that reflect my growth
              in modern technologies like HTML, CSS, JavaScript, React, and animation libraries
              such as Framer Motion and GSAP.
            </p>

            <p className='text-white/80 text-lg'>
              I'm constantly exploring new frameworks and design trends to sharpen my skills
              and bring creative concepts to life.
            </p>
          </div>

          {/* Tilted 3D Image Section */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
            className='col-span-3'
          >
            <div className='relative h-max p-3 rounded-2xl border-2 border-black/50 bg-black/50'>
              
              <div className='absolute top-2 left-2 w-full h-full rounded-2xl border-8 border-white -z-10'></div>

              
              <Image
                src="/images/pfp.jpg"
                alt="Archita"
                className="w-full h-auto rounded-2xl"
                width={400}
                height={500}
                priority
              />
            </div>
          </Tilt>

          <div className='text-white col-span-2 flex flex-col items-end justify-evenly'>
       <div className=' text-white flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold text-white'>
                <AnimatedNumbers value={20}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-white/75'>
                Creative Components Brought to Life
              </h2>
            </div>

            <div className=' text-white flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={5}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-white/75'>
                Projects Completed
              </h2>
            </div>

            <div className=' text-white flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={500}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-white/75'>
                Lines of Code written
              </h2>
            </div>

          </div>
        </div>

        <Skills/>
      </span>
    </main>
  );
};

export default About;
