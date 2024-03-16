"use client"
import React, { useEffect, useState } from 'react';
import { LuUser } from "react-icons/lu";
import { motion } from 'framer-motion'
import CONSTANTS from './constants';

const About: React.FC = () => {
  const [language, setLanguage] = useState('en-US')

  useEffect(() => {
    const navigatorLanguage = navigator.language

    if (navigatorLanguage !== 'en-US' && navigatorLanguage !== 'pt-BR') return

    setLanguage(navigatorLanguage)
  }, [])

  return (
    <section id="about" className=" xl:min-w-[450px] 2xl:w-full flex flex-col mm:gap-10 lg:gap-10 xl:gap-14 mm:mb-12 lg:mb-32 xl:mb-48 2xl:mb-48 py-20">
      <button 
        style={{ background: '#FFF', color: '#000', padding: '10px 15px', position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)' }}
        onClick={() => setLanguage(language === 'en-US' ? 'pt-BR' : 'en-US')}
      >
        Change language
      </button>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}

        className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
        <i>
          <LuUser color="#fff" size={19} />
        </i>
        <h3 className=" text-amber-50 text-md">
          {CONSTANTS[language].title}
        </h3>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        className=" mm:text-[1.5rem] md:text-[2.3rem] lg:text-[1.3rem] xl:text-3xl 2xl:text-5xl xl:leading-snug 2xl:leading-tight text-amber-50 text-wrap font-hairline font-inter ">
        Hello everyone! <span className="text-sky-500">How are you?</span>
      </motion.h1>
      <div className="flex flex-row flex-wrap gap-5">
        {CONSTANTS[language].paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            className="text-third-gray mm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

export default About;