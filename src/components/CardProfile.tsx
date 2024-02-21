import Image from "next/image";
import ProfileImage from "../../public/assets/92158759.jpg";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function CardProfile() {
  return (
    <aside className="w-profile-container border border-solid border-second-gray rounded-3xl overflow-hidden py-10 px-10 fixed flex flex-col  items-center xl:w-[480px] 2xl:w-[512px] xl:py-6 2xl:py-10">
      <div className="flex flex-row items-center xl:gap-0 text-center xl:mb-1 2xl:mb-3 2xl:gap-5">
        <h2 className="text-4xl font-bold text-white font-roboto">Bruno Cardoso</h2>
      </div>
      <figure className="pt-5 h-80 w-10/12 xl:mb-7 2xl:mb-14">
        <Image src={ProfileImage} alt="Profile Image" className="object-cover w-full h-full rounded-profile-image" />
      </figure>
      <div className=" xl:mb-5 2xl:mb-12 ">
        <h2 className="text-center text-amber-50 xl:text-2xl 2xl:text-3xl font-roboto">
          Web Developer <br /> Base in São Paulo, BR
        </h2>
      </div>
      <p className="text-center text-third-gray xl:text-base 2xl:text-lg xl:mb-5 2xl:mb-10" >© 2024 Bruno. All Rights Reserved</p>
      <ul className="flex flex-row gap-5 xl:mb-6 2xl:mb-8">
        <li>
          <a href="#" className="flex items-center justify-center border border-solid border-second-gray rounded-full p-5 group hover:border-blue-500 duration-300 cursor-pointer">
            <i className="text-gray-500 group-hover:text-sky-400 duration-300">
              <FaGithub size={25} />
            </i>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center border border-solid border-second-gray rounded-full p-5 group hover:border-sky-400 duration-300 cursor-pointer">
            <i className="text-gray-500 group-hover:text-sky-400 duration-300">
              <FaLinkedin size={25} />
            </i>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center border border-solid border-second-gray rounded-full p-5 group hover:border-sky-400 duration-300 cursor-pointer">
            <i className="text-gray-500 group-hover:text-sky-400 duration-300">
              <FaWhatsapp size={25} />
            </i>
          </a>
        </li>
      </ul>
      <a href="#" className="flex flex-row gap-3 justify-center items-center w-5/6 xl:h-14 2xl:h-16 border border-solid border-primary-gray bg-sky-400 group hover:border-sky-400 hover:bg-primary-gray rounded-full duration-300 shadow-blue-500">
        <i className="text-zinc-800 group-hover:text-sky-400 duration-300 flex items-center">
          <MdOutlineMail size={28} />
        </i>
        <h1 className="group-hover:text-sky-400 duration-300 text-xl flex items-center ">
          HIRE ME!
        </h1>
      </a>
    </aside>
  );
}
