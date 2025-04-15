import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Text from "@/components/Text"
import Header from "@/components/header";
import RotatingText from "@/components/RotatingText";
import Social from "@/components/social";
import Button from "@/components/button";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

function Home() {
  const words = ['Software Developper 💻', 'Python enthousiast 🐍', 'Web Designer 🎨']
  return (
    <div  className="">
      <Header/>
      <section className="flex  lg:flex-row-reverse flex-col-reverse justify-between  lg:px-36  lg:py-12 text-center items-center mt-[-20px]">
      <Image src="/img.svg" width={450} height={200}/>
      <div>
        <h1 className="pt-3  lg:text-7xl text-[40px] mt-[15%] lg:mb-[10px]">Hi, I&apos;m Baay Meissa</h1>
        <h1 className= "lg:text-4xl text-xl  mt-0"><RotatingText words={words}/></h1>
        <div className="flex justify-center my-10">
        <Social />
        </div>
      </div>
      </section>
      <div className="flex justify-center pb-[3%]"> 
      <Button text="PROJECTS" icon={<FaArrowRightLong/>} href="#projects"/>
      </div>


    <div id="about">
    <Text text1="ABOUT ME"/>
    <About/>
    </div>

    <div id="projects">
    <Text text1="PROJECTS"/>
    <Projects/>
    </div>

      <div id="contact">
      <Text text1="CONTACT"/>
      <Contact/>
        </div>

        <Footer/>
    </div>
  );
}

export default Home;