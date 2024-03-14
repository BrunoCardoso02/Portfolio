import CardProfile from "@/components/CardProfile";
import AboutMeSection from '@/components/AboutMeSection';
import NavBarContainer from "@/components/NavBarContainer"
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <section id="start" className="h-full w-full flex sm:flex-col lg:flex-row md:flex-col lg:gap-20 bg-primary-gray md:py-4 lg:pl-8 lg:pr-14 lg:py-10">
        <CardProfile/>
        <AboutMeSection/>
        <NavBarContainer/>
      </section>
    </ModalProvider>
  );
}
