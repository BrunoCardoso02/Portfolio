import { LuUser } from "react-icons/lu";
import { LiaHomeSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";
import Image from "next/image";

import skillsData from "@/utils/skills.json";


export default function AboutMeSection() {

  const { skills } = skillsData;
  return (
    <section className="w-[900px] xl:w-[800px] xl:min-w-[476px] 2xl:w-[850px] 2xl:min-w-[695px]  h-full ml-second-custom-margin py-10 px-5" >
      <header className="flex flex-col gap-14 xl:mb-36 2xl:mb-48">
        <div className="w-48 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LiaHomeSolid color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            INTRODUCE
          </h3>
        </div>
        <h1 className="xl:text-5xl xl:leading-snug 2xl:text-7xl 2xl:leading-tight text-amber-50 text-wrap font-hairline font-inter ">
          Say Hi from <span className="text-sky-500">Bruno</span>, <br /> Full-Stack Web <br /> Developer
        </h1>
        <p className="text-third-gray text-xl xl:text-lg 2xl:text-xl text-left">
          Full Stack Developer with a focus on web and mobile applications graduated in Systems Analysis and Development, specialized in creating and maintaining complete digital solutions.
        </p>
      </header>
      <section id="about" className=" xl:min-w-[450px] 2xl:w-full 2xl:min-w-[760px] flex flex-col gap-14 mb-48 py-20">
        <div className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LuUser color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            ABOUT
          </h3>
        </div>
        <h1 className=" xl:text-[35px] 2xl:text-6xl text-amber-50 text-wrap font-hairline leading-tight ">
          Hello everyone! <span className="text-sky-500">How are you?</span>
        </h1>
        <div>
          <p className="text-third-gray mb-5 xl:text-lg 2xl:text-xl">My name is Bruno Cardoso, from Brazil, born in 2004. I am a Full-Stack developer with extensive experience in web development, having had my first contact with programming approximately 5 years ago, building web pages for fun and curiosity.</p>

          <p className="text-third-gray mb-5 xl:text-lg 2xl:text-xl">After graduating from high school, I entered college, majoring in Analysis and Systems Development at FIAP, where I graduated in December 2023. Before that, I sought to acquire basic knowledge through some online courses that helped me gain a general understanding of technology.</p>

          <p className="text-third-gray mb-5 xl:text-lg 2xl:text-xl">In my free time, I enjoy watching football, movies, series, listening to music, and exploring the vast world of the web.</p>
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
        <h2 className=" xl:text-[35px] 2xl:text-6xl text-amber-50 text-wrap font-hairline leading-tight ">
          My <span className="text-sky-500">Advantages</span>
        </h2>
        <div className="flex flex-wrap gap-8 w-full ">
          {
            skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="w-52 h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center gap-5 hover:border-sky-500 duration-300">
                  <figure className="h-40 w-32">
                    <Image src={skill.logo} alt={skill.alt} height={100} width={100} className="h-full w-full" />
                  </figure>
                  <p className="text-sky-500 text-2xl">{skill.level}</p>
                </div>
                <span className="m-auto text-white text-xl">{skill.name}</span>
              </div>
            ))
          }
        </div>
      </section>
    </section>
  )
}