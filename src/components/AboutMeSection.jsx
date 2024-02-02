import { LuUser } from "react-icons/lu";

export default function AboutMeSection() {
  return (
    <section className="w-4/6 h-full  relative ml-auto px-72" >
      <header className="flex flex-col gap-14">
        <div className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-4 items-center justify-center">
          <i>
            <LuUser color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            ABOUT
          </h3>
        </div>
        <h1 className="text-8xl text-amber-50 text-wrap font-hairline ">
          Say Hi from <span className="text-sky-500">Bruno</span> Full-Stack Web Developer
        </h1>
        <p className="text-third-gray text-xl">
          Full Stack Web Developer graduated in Systems Analysis and Development, specialized in creating and maintaining complete digital solutions.
        </p>
      </header>

    </section>
  )
}