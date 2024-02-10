import { LuUser } from "react-icons/lu";
import { LiaHomeSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";
import Image from "next/image";
import Reactlogo from "@/assets/React_Logo_SVG.svg";
import FigmaLogo from "@/assets/Figma-logo.svg";
import TailwindLogo from "@/assets/tailwind-css-2.svg";
import NodeLogo from "@/assets/Node.js_logo.svg";
import ExpressLogo from "@/assets/3db5d2f118206486f17bc7325886c735.svg";
import PostgreLogo from "@/assets/Postgresql_elephant.svg";
import StyledComponentsLogo from "@/assets/styled-components-1.svg";
import NextJsLogo from "@/assets/nextjs-2.svg";

export default function AboutMeSection() {
  return (
    <section className="w-screen min-w-96 h-full ml-[670px] py-10 2xl:w-[850px] 5xl:max-w-[800px] " >
      <header className="flex flex-col gap-14 mb-48 ">
        <div className="w-48 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LiaHomeSolid color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            INTRODUCE
          </h3>
        </div>
        <h1 className="text-[3rem] text-amber-50 xl:text-[2.8rem] 2xl:text-[3rem] 3xl:text-[3.5rem] 4xl:text-[4rem] 5xl:text-[4.5rem] leading-[4.5rem]">
          Say Hi from <span className="text-sky-500">Bruno</span>, Full-Stack Web Developer
        </h1>
        <p className="text-third-gray text-xl ">
          Full Stack Developer with a focus on web and mobile applications graduated in Systems Analysis and Development, specialized in creating and maintaining complete digital solutions.
        </p>
      </header>

      <section id="about" className="flex flex-col gap-14 mb-48 py-20">
        <div className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LuUser color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            ABOUT
          </h3>
        </div>
        <h1 className="text-6xl text-amber-50 text-wrap font-hairline leading-tight ">
          Hello everyone! <span className="text-sky-500">How are you?</span>
        </h1>
        <div className="text-third-gray text-xl">
          <p className="mb-5">My name is Bruno Cardoso, from Brazil, born in 2004. I am a Full-Stack developer with extensive experience in web development, having had my first contact with programming approximately 5 years ago, building web pages for fun and curiosity.</p>

          <p className="mb-5">After graduating from high school, I entered college, majoring in Analysis and Systems Development at FIAP, where I graduated in December 2023. Before that, I sought to acquire basic knowledge through some online courses that helped me gain a general understanding of technology.</p>

          <p>In my free time, I enjoy watching football, movies, series, listening to music, and exploring the vast world of the web.</p>
        </div>
      </section>
      <section id="skills" className="flex flex-col gap-14 mb-48 py-20">
        <div className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <VscTools color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            SKILLS
          </h3>
        </div>
        <h2 className="text-6xl text-amber-50 text-wrap font-hairline leading-tight ">
          My <span className="text-sky-500">Advantages</span>
        </h2>
        <div className="flex flex-wrap gap-8 w-full ">
          <div className="flex flex-col gap-5">
            <div className="w-52 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32">
                <Image src={Reactlogo} alt="React Logo" className="h-full w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">95%</p>
            </div>
            <span className="m-auto text-white text-xl">React</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-48 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32 flex flex-col justify-center">
                <Image src={FigmaLogo} alt="React Logo" className="h-5/6 w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">86%</p>
            </div>
            <span className="m-auto text-white text-xl">Figma</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-48 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32">
                <Image src={TailwindLogo} alt="React Logo" className="h-full w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">92%</p>
            </div>
            <span className="m-auto text-white text-xl">Tailwind</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-48 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32">
                <Image src={NodeLogo} alt="React Logo" className="h-full w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">97%</p>
            </div>
            <span className="m-auto text-white text-xl">NodeJS</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-48 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32">
                <Image src={ExpressLogo} alt="React Logo" className="h-full w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">90%</p>
            </div>
            <span className="m-auto text-white text-xl">ExpressJS</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-48 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32">
                <Image src={PostgreLogo} alt="React Logo" className="h-full w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">87%</p>
            </div>
            <span className="m-auto text-white text-xl">PostgreSQL</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-48 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32">
                <Image src={StyledComponentsLogo} alt="React Logo" className="h-full w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">91%</p>
            </div>
            <span className="m-auto text-white text-xl">Styled Components</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-48 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
              <figure className="h-40 w-32">
                <Image src={NextJsLogo} alt="React Logo" className="h-full w-full" />
              </figure>
              <p className="text-sky-500 text-2xl">94%</p>
            </div>
            <span className="m-auto text-white text-xl">NextJS </span>
          </div>
        </div>
      </section>
    </section>
  )
}