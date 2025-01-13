import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import ThemeToggle from "@/ThemeToggle";
import RotatingText from "./components/RotatingText";

export default function Home() {
  const words = ['Software Developper 💻', 'Python enthousiast 🐍']
  return (
    <div className="">
      <header className="text-3xl flex justify-between px-5 mt-3">
      <h1 className="light:text-white">Papa Meissa MBAYE</h1>
      <div className="flex items-center">
      <nav className="text-xl flex gap-4 px-5">
        <a href="" className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100">About</a>
        <a href="" className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100">Projects</a>
        <a href="" className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100">Contact</a>
      </nav>
      <ThemeToggle/>
      </div>
      </header>
      <section className="text-center justify-items-center">
        <h1 className="text-7xl mt-[14%]">Hi, I'm Baay Meissa</h1>
        <h1 className="text-4xl mt-6"><RotatingText words={words}/></h1>
        <div className="flex space-x-3 text-2xl mt-9">
          <div className="bg-[#1DA1F2] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
          <a href="https://x.com/PapaMeissaMbay2" target="_blank"><FaTwitter className="text-4xl p-1" color="white"/></a>
          </div>
          <div className="bg-[#0a66c2] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
          <a href="https://www.linkedin.com/in/papa-meissa-mbaye-a76ab4207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><CiLinkedin className="text-4xl p-1" color="white"/></a>
          </div>
          <div className="bg-[#ea4335] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
          <a href="mailto:meissambaye09@gmail.com" target="_blank"><SiGmail color="white" className="text-4xl p-1"/></a>
          </div>
          <div className= "bg-[#181717] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
          <a href="https://github.com/BaayMeissa/" target="_blank"><FaGithub color="white" className="text-4xl p-1"/></a>
          </div>
        </div>
        <button className="mt-[130px] flex items-center gap-6 bg-slate-50 p-3 rounded-lg text-black">
          See more about me <FaArrowRightLong color="181717"/></button>
      </section>
    </div>
  );
}
