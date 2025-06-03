'use client'
import Image from "next/image";
import ProfileImage from "../../public/assets/92158759.jpg";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import socialMediaLinks from "@/utils/contact.json";

export default function CardProfile() {
  const { socialLinks } = socialMediaLinks;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      whileInView={{ opacity: 1, y: 1 }}
      viewport={{ once: true }}
      className="mm:w-[22.5rem] sm:w-[24rem] md:w-[32rem] border border-solid border-second-gray rounded-3xl overflow-hidden mm:py-5 lg:py-10 lg:px-10 mm:m-auto lg:fixed flex flex-col items-center lg:w-[420px] xl:w-[480px] 2xl:w-[512px] 2xl:py-10"
    >
      <div className="flex flex-col gap-4 md:gap-4 xl:gap-5 2xl:gap-7 items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="items-center text-center"
        >
          <h2 className="md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-roboto">
            Bruno Cardoso
          </h2>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="h-80 lg:w-[22rem]"
        >
          <Image
            src={ProfileImage}
            alt="Imagem de Perfil"
            className="object-cover w-full h-full rounded-profile-image"
          />
        </motion.figure>

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="text-center text-amber-50 md:text-xl xl:text-2xl 2xl:text-3xl font-roboto"
        >
          Desenvolvedor Web <br /> Localizado em São Paulo, BR
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="text-center text-third-gray xl:text-base 2xl:text-lg"
        >
          © 2024 Bruno. Todos os direitos reservados
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className="flex flex-row gap-5"
        >
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                className="flex items-center justify-center border border-solid border-second-gray rounded-full p-5 group hover:border-blue-500 duration-300 cursor-pointer"
              >
                <i className="text-gray-500 group-hover:text-sky-400 duration-300">
                  {item.icon === "FaGithub" && <FaGithub size={item.size} />}
                  {item.icon === "FaWhatsapp" && <FaWhatsapp size={item.size} />}
                  {item.icon === "FaLinkedin" && <FaLinkedin size={item.size} />}
                </i>
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.a
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          href="mailto:bruno.cardoso02@outlook.com"
          target="_blank"
          className="flex flex-row gap-3 justify-center items-center mm:w-[20rem] md:w-[30rem] lg:w-[22rem] xl:w-[24rem] mm:h-12 md:h-12 lg:h-12 xl:h-14 2xl:h-16 border border-solid border-primary-gray bg-sky-400 group hover:border-sky-400 hover:bg-primary-gray rounded-full duration-300 shadow-blue-500"
        >
          <i className="text-zinc-800 group-hover:text-sky-400 duration-300 flex items-center">
            <MdOutlineMail size={28} />
          </i>
          <h1 className="group-hover:text-sky-400 duration-300 text-xl flex items-center">
            ME CONTRATE!
          </h1>
        </motion.a>
      </div>
    </motion.aside>
  );
}
