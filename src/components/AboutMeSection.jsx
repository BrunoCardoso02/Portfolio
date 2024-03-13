import Skills from "./Skills";
import About from "./About";
import Introduce from "./Introduce";

export default function AboutMeSection() {

  return (
    <section className="sm:w-[330px] md:w-[550px] w-[900px] xl:w-[800px] xl:min-w-[476px] 2xl:w-[850px] 2xl:min-w-[695px] sm:m-auto h-full lg:ml-[500px] xl:ml-[600px] 2xl:ml-[700px] py-10 px-5" >
      <Introduce/>
      <About/>
      <Skills/>
    </section>
  )
}

