import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "@/components/header";
import RotatingText from "@/components/RotatingText";
import Social from "@/components/social";
import Button from "@/components/button";

function Home() {
  const words = ['Software Developper 💻', 'Python enthousiast 🐍', 'Web Designer 🎨']
  return (
    <div className="">
      <Header/>
      <section className="text-center justify-items-center">
        <h1 className="text-7xl mt-[14%]">Hi, I'm Baay Meissa</h1>
        <h1 className="text-4xl mt-6"><RotatingText words={words}/></h1>
        <Social/>
        <div className="mt-[130px]">
        <Button text="See more about me" icon={<FaArrowRightLong/>} href="about"/>
        </div>
      </section>
    </div>
  );
}

export default Home;