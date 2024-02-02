import { LuUser } from "react-icons/lu";
import { LiaHomeSolid } from "react-icons/lia";


export default function AboutMeSection() {
  return (
    <section className="w-4/6 h-full  relative ml-auto px-72" >
      <header className="flex flex-col gap-14 mb-64">
        <div className="w-48 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LiaHomeSolid color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            INTRODUCE
          </h3>
        </div>
        <h1 className="text-8xl text-amber-50 text-wrap font-hairline leading-tight ">
          Say Hi from <span className="text-sky-500">Bruno</span>, Full-Stack Web Developer
        </h1>
        <p className="text-third-gray text-xl">
          Full Stack Web Developer graduated in Systems Analysis and Development, specialized in creating and maintaining complete digital solutions.
        </p>
      </header>
      <section className="flex flex-col gap-14 mb-64">
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
    </section>
  )
}