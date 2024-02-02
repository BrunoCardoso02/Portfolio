import CardProfile from "@/components/CardProfile";
import AboutMeSection from '@/components/AboutMeSection'

export default function Home() {
  return (
    <section className="h-full w-full flex flex-row bg-primary-gray px-8 py-20">
      <CardProfile/>
      <AboutMeSection/>
      <div className="h-full w-72">

      </div>
    </section>
    
  );
}
