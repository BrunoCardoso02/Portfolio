"use client"
import React from 'react';
import skillsData from "@/utils/skills.json";
import { VscTools } from "react-icons/vsc";
import Image from 'next/image';

import { motion, useInView, useAnimation } from 'framer-motion'

const Skills: React.FC = () => {
    const { skills } = skillsData;
    const variants = {
        initial: { opacity: 0, y: 100 },
        animate: {
            opacity: 1, y: 0, transition: {
                delay: 0.05
            }
        },
    }
    return (
        <section id="skills" className=" flex xl:max-w-[30rem] 2xl:max-w-full flex-col gap-14 mb-48 py-20">
            <motion.div

                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileInView={{ opacity: 1, y: 1 }}
                viewport={{once: true}}
                className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
                <i>
                    <VscTools color="#fff" size={19} />
                </i>
                <h3 className=" text-amber-50 text-md">
                    SKILLS
                </h3>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileInView={{ opacity: 1, y: 1 }}
                viewport={{ once: true }}
                className=" mm:text-[1.7rem] md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2.2rem] 2xl:text-5xl text-amber-50 text-wrap font-hairline leading-tight ">
                My <span className="text-sky-500">Advantages</span>
            </motion.h2>
            <div className="flex justify-evenly flex-wrap w-full">
                {
                    skills.map((skill, index) => (
                        <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        whileInView={{ opacity: 1, y: 1 }}
                        viewport={{ once: true }}
                        key={index} className="flex flex-col gap-3 mb-10">
                            <div className=" mm:w-36 md:w-40 lg:w-36 xl:w-36 2xl:w-52 mm:h-48 md:h-60 lg:h-44 xl:h-52 2xl:h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center mm:gap-3 md:gap-8 lg:gap-4 hover:border-sky-500 duration-300">
                                <figure className=" mm:h-[5rem] md:h-20 lg:h-20 xl:h-28 2xl:h-40 lg:w-20 xl:w-24 2xl:w-32">
                                    <Image src={skill.logo} alt={skill.alt} height={100} width={100} className="h-full w-full" />
                                </figure>
                                <p className="text-sky-500 mm:text-lg md:text-2xl">{skill.level}</p>
                            </div>
                            <span className="m-auto text-white mm:text-md md:text-xl">{skill.name}</span>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
}

export default Skills;