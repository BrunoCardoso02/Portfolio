import CardProfile from "@/components/CardProfile";
import AboutMeSection from '@/components/AboutMeSection';
import NavBarContainer from "@/components/NavBarContainer"

export default function Home() {
  return (
    <section id="start" className="h-full w-full lg:flex lg:flex-row lg:gap-20 bg-primary-gray pl-8 pr-14 py-10">
      <CardProfile/>
      <AboutMeSection/>
      <NavBarContainer/>
    </section>
    
  );
}
