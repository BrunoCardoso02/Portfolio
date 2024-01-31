import Image from "next/image";
import ProfileImage from "@/assets/92158759.jpg";

export default function CardProfile() {
  return (
    <aside className="w-3/12 border border-solid border-second-gray rounded-xl overflow-hidden p-8 fixed flex flex-col items-center">
      <div className="flex flex-row items-center gap-5 text-center">
        <h2 className="text-4xl font-bold text-white font-roboto">Bruno</h2>
        <p  className="text-white font-inter">Full Stack Developer</p>
      </div>
      <figure className="pt-5 h-auto w-64">
        <Image src={ProfileImage} alt="Profile Image" className="object-cover w-full h-full rounded-3xl" />
      </figure>
      <div>
        <h2 >
          bruno
        </h2>
      </div>
    </aside>
  );
}
