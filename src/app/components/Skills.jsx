import React from 'react'
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className=' flex items-center justify-center rounded-full 
            font-semibold bg-white/80 text-black/90 p-y-3 px-6 shadow-white/60
            cursor-pointer absolute'

            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}

        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-7xl mt-60 w-full font-serif text-center uppercase text-white hover:underline p-2'>Skills</h2>
            <div className=' w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight '>
                <motion.div className='flex items-center justify-center rounded-full 
            font-semibold bg-white/80 text-black/90 p-8 shadow-white/60
            cursor-pointer'

                    whileHover={{ scale: 1.05 }}

                >
                    Web
                </motion.div>

                <Skill name="HTML" x="12vw" y="0vw" />
                <Skill name="CSS" x="6vw" y="10vw" />
                <Skill name="JavaScript" x="-6vw" y="10vw" />
                <Skill name="ReactJS" x="-12vw" y="0vw" />

                <Skill name="NextJS" x="-16vw" y="-10vw" />
                <Skill name="Figma" x="-6vw" y="-14vw" />
                <Skill name="Tailwind CSS" x="6vw" y="-14vw" />
                <Skill name="Framer-motion" x="16vw" y="-10vw" />
                <Skill name="GSAP" x="0vw" y="16vw" />

                <Skill name="C++" x="20vw" y="0vw" />
                <Skill name="Pandas" x="14vw" y="14vw" />
                <Skill name="NumPy" x="-14vw" y="14vw" />
                <Skill name="TypeScript" x="-24vw" y="0vw" />


            </div>
        </>
    )
}

export default Skills