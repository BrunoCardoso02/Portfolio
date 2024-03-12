import { LuUser } from "react-icons/lu";
import { LiaHomeSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";
import Image from "next/image";
import skillsData from "@/utils/skills.json";

export default function AboutMeSection() {
  const { skills } = skillsData;
  return (
    <section className=" sm:w-[300px] md:w-[580px] w-[900px] xl:w-[800px] xl:min-w-[476px] 2xl:w-[850px] 2xl:min-w-[695px] sm:m-auto h-full lg:ml-[500px] xl:ml-[600px] 2xl:ml-[700px] py-10 px-5" >
      <header className="flex flex-col sm:gap-10 lg:gap-8 xl:gap-10 2xl:gap-14 sm:mb-24 lg:mb-52 xl:mb-36 2xl:mb-48 sm:mt-5 lg:mt-0">
        <div className="w-48 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LiaHomeSolid color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            INTRODUCE
          </h3>
        </div>
        <h1 className=" sm:text-[2rem] md:text-[4rem] md:leading-[4.8rem] lg:text-[2.39rem] xl:text-5xl 2xl:text-7xl lg:leading-tight xl:leading-snug 2xl:leading-tight text-amber-50 text-wrap font-hairline font-inter ">
          Say Hi from <span className="text-sky-500">Bruno</span>, <br /> Full-Stack Web <br /> Developer
        </h1>
        <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">
          Full Stack Developer with a focus on web and mobile applications graduated in Systems Analysis and Development, specialized in creating and maintaining complete digital solutions.
        </p>
      </header>
      <section id="about" className=" xl:min-w-[450px] 2xl:w-full flex flex-col sm:gap-10 lg:gap-10 xl:gap-14 sm:mb-12 lg:mb-32 xl:mb-48 2xl:mb-48 py-20">
        <div className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LuUser color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            ABOUT
          </h3>
        </div>
        <h1 className=" sm:text-[1.2rem] md:text-[2.5rem] lg:text-[1.4rem] xl:text-4xl 2xl:text-5xl xl:leading-snug 2xl:leading-tight text-amber-50 text-wrap font-hairline font-inter ">
          Hello everyone! <span className="text-sky-500">How are you?</span>
        </h1>
        <div className="flex flex-row flex-wrap gap-5">
          <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-pretty">My name is Bruno Cardoso, from Brazil, born in 2004. I am a Full-Stack developer with extensive experience in web development, having had my first contact with programming approximately 5 years ago, building web pages for fun and curiosity.</p>
          
          <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">After graduating from high school, I entered college, majoring in Analysis and Systems Development at FIAP, where I graduated in December 2023. Before that, I sought to acquire basic knowledge through some online courses that helped me gain a general understanding of technology.</p>

          <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">In my free time, I enjoy watching football, movies, series, listening to music, and exploring the vast world of the web.</p>
        </div>
      </section>
      <section id="skills" className=" flex xl:max-w-[30rem] 2xl:max-w-full flex-col gap-14 mb-48 py-20">
        <div className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <VscTools color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            SKILLS
          </h3>
        </div>
        <h2 className=" sm:text-[1.2rem] md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2.2rem] 2xl:text-5xl text-amber-50 text-wrap font-hairline leading-tight ">
          My <span className="text-sky-500">Advantages</span>
        </h2>
        <div className="flex justify-between flex-wrap w-full">
          {
            skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-3 mb-10">
                <div className=" sm:w-32 md:w-40 lg:w-36 xl:w-36 2xl:w-52 sm:h-44 md:h-60 lg:h-44 xl:h-52 2xl:h-72 rounded-full border border-second-gray border-solid flex flex-col justify-center items-center  sm:gap-3 md:gap-8 lg:gap-4 hover:border-sky-500 duration-300">
                  <figure className=" sm:h-11 md:h-20 lg:h-20 xl:h-28 2xl:h-40 lg:w-20 xl:w-24 2xl:w-32">
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