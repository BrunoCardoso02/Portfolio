import Skills from "./Skills";
import About from "./About";
import Introduce from "./Introduce";
import ModalButton from "./ModalButton";

export default function AboutMeSection() {
  

  return (
    <section className="mm:w-[360px] md:w-[550px] w-[900px] xl:w-[800px] xl:min-w-[476px] 2xl:w-[850px] 2xl:min-w-[695px] mm:m-auto  h-full lg:ml-[500px] xl:ml-[600px] 2xl:ml-[700px] mm:px-2 py-10 md:px-5" >
      <Introduce/>
      <About/>
      <Skills/>
      <ModalButton/>
    </section>
  )
}

