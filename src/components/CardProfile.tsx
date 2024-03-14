import Image from "next/image";
import ProfileImage from "../../public/assets/92158759.jpg";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import socialMediaLinks from "@/utils/contact.json"

export default function CardProfile() {
  const { socialLinks } = socialMediaLinks;
  return (
    <aside className=" sm:w-[23.4rem] md:w-[32rem] border border-solid border-second-gray rounded-3xl overflow-hidden sm:py-5 lg:py-10 lg:px-10 sm:m-auto lg:fixed flex flex-col items-center lg:w-[420px] xl:w-[480px] 2xl:w-[512px] 2xl:py-10">
      <div className="flex flex-col gap-4 md:gap-4 xl:gap-5 2xl:gap-7 items-center ">
        <div className=" items-center text-center">
          <h2 className=" md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-roboto">Bruno Cardoso</h2>
        </div>
        <figure className="h-80 lg:w-[22rem]">
          <Image src={ProfileImage} alt="Profile Image" className="object-cover w-full h-full rounded-profile-image" />
        </figure>

        <h2 className="text-center text-amber-50 md:text-xl xl:text-2xl 2xl:text-3xl font-roboto">
          Web Developer <br /> Base in São Paulo, BR
        </h2>
        <p className="text-center text-third-gray xl:text-base 2xl:text-lg">© 2024 Bruno. All Rights Reserved</p>
        <ul className="flex flex-row gap-5">
          {
            socialLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" className="flex items-center justify-center border border-solid border-second-gray rounded-full p-5 group hover:border-blue-500 duration-300 cursor-pointer">
                  <i className="text-gray-500 group-hover:text-sky-400 duration-300">
                    {item.icon === "FaGithub" && <FaGithub size={item.size} />}
                    {item.icon === "FaWhatsapp" && <FaWhatsapp size={item.size} />}
                    {item.icon === "FaLinkedin" && <FaLinkedin size={item.size} />}
                  </i>
                </a>
              </li>
            ))
          }

        </ul>
        <a href="mailto:bruno.cardoso02@outlook.com" target="_blank" className="flex flex-row gap-3 justify-center items-center sm:w-[20rem] md:w-[30rem] lg:w-[22rem] xl:w-[24rem] sm:h-12 md:h-12 lg:h-12 xl:h-14 2xl:h-16 border border-solid border-primary-gray bg-sky-400 group hover:border-sky-400 hover:bg-primary-gray rounded-full duration-300 shadow-blue-500">
          <i className="text-zinc-800 group-hover:text-sky-400 duration-300 flex items-center">
            <MdOutlineMail size={28} />
          </i>
          <h1 className="group-hover:text-sky-400 duration-300 text-xl flex items-center ">
            HIRE ME!
          </h1>
        </a>
      </div>

    </aside>
  );
}
