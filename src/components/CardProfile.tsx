import Image from "next/image";
import ProfileImage from "@/assets/92158759.jpg";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function CardProfile() {
  return (
    <aside className="w-profile-container border border-solid border-second-gray rounded-3xl overflow-hidden py-20 px-10 fixed flex flex-col items-center">
      <div className="flex flex-row items-center gap-5 text-center mb-3">
        <h2 className="text-4xl font-bold text-white font-roboto">Bruno Cardoso</h2>
        {/* <p className="text-white font-inter">Full Stack Developer</p>*/}
      </div>
      <figure className="pt-5 h-96 w-11/12 p-0 mb-14">
        <Image src={ProfileImage} alt="Profile Image" className="object-cover w-full h-full rounded-profile-image" />
      </figure>
      <div className="mb-12 flex flex-col gap-1">
        <h2 className="text-center text-amber-50 text-3xl font-roboto">
          Web Developer
        </h2>
        <h2 className="text-center text-amber-50 text-3xl font-sans">
          Base in São Paulo, BR
        </h2>
      </div>
      <p className="text-center text-third-gray text-lg mb-10" >© 2024 Bruno. All Rights Reserved</p>
      <ul className="flex flex-row gap-5 mb-8">
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
      <a href="#" className="flex flex-row gap-3 justify-center items-center w-5/6 h-16 border border-solid border-primary-gray bg-sky-400 group hover:border-sky-400 hover:bg-primary-gray rounded-full duration-300">
        <i className="text-zinc-800 group-hover:text-sky-400 duration-300 flex items-center">
          <MdOutlineMail size={28} />
        </i>
        <h1 className="group-hover:text-sky-400 duration-300 text-xl flex items-center">
          HIRE ME!
        </h1>
      </a>
    </aside>
  );
}
