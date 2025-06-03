"use client"
import React from 'react';
import { LuUser } from "react-icons/lu";
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section id="about" className=" xl:min-w-[450px] 2xl:w-full flex flex-col mm:gap-10 lg:gap-10 xl:gap-14 mm:mb-12 lg:mb-32 xl:mb-48 2xl:mb-48 py-20">
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
          SOBRE
        </h3>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        className=" mm:text-[1.5rem] md:text-[2.3rem] lg:text-[1.3rem] xl:text-3xl 2xl:text-5xl xl:leading-snug 2xl:leading-tight text-amber-50 text-wrap font-hairline font-inter ">
        Olá a todos! <span className="text-sky-500">Tudo bem?</span>
      </motion.h1>
      <div className="flex flex-row flex-wrap gap-5">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="text-third-gray mm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-pretty">
          Meu nome é Bruno Cardoso, nascido em 2004. Sou desenvolvedor Full Stack com boa experiência em desenvolvimento web, tendo meu primeiro contato com programação há cerca de 5 anos, criando páginas por curiosidade e diversão.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="text-third-gray mm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">
          Após concluir o ensino médio, entrei na faculdade de Análise e Desenvolvimento de Sistemas pela FIAP, onde me formei em dezembro de 2023. Antes disso, busquei aprender o básico em alguns cursos online que me deram uma boa visão geral sobre tecnologia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="text-third-gray mm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">
          No meu tempo livre, gosto de assistir futebol, filmes, séries, ouvir música e explorar o vasto mundo da web.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
