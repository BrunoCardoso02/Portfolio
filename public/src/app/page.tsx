import CardProfile from "@/components/CardProfile";
import AboutMeSection from '@/components/AboutMeSection';
import NavBarContainer from "@/components/NavBarContainer"

export default function Home() {
  return (
    <section id="start" className="h-full w-full flex flex-row gap-20 bg-primary-gray px-8 py-10">
      <CardProfile/>
      <AboutMeSection/>
      <NavBarContainer/>
    </section>
    
  );
}
