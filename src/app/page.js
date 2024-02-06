import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function Home() {
  return (
    <main className=" min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <About />
      </div>
    </main>
  );
}
