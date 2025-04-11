import ThemeToggle from "@/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import About from "./About";
import {CgProfile, CgMenuGridR} from 'react-icons/cg'
import { Menu } from "lucide-react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { useState } from "react";

function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="lg:text-3xl xl:text-xl flex justify-between px-5 bg-[black] mt-0 text-slate-200 h-20 dark:bg-[#395B64]">
      <Link href="/" className="flex items-center self-center dark:text-black">
        <Image src="/logo.svg" width={60} height={20} />
       <h1 className="pl-2 text-[30px] lg:text-3xl xl:text-3xl"> Baay<span className="text-red-400">Meissa</span></h1>
      </Link>
      <div className="flex items-center">
        <nav className="dark:text-black xl:text-xl text-sm sm:flex gap-4 px-5 hidden">
          <Link
            href="#about"
            className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100"
          >
            Contact
          </Link>
        </nav>
        <ThemeToggle className="hidden" />
        <Menu onClick={()=>setVisible(true)} className='text-white sm:hidden' />
      </div>

      

      <div
        className={`absolute  top-0 right-0 left-[50%] bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-[50%]" : "w-0"
        }`}
      >
        
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center justify-between gap-4 p-3"
          >
            <div onClick={() => setVisible(false)} className="flex items-center gap-3">
            <IoArrowBackCircleOutline onClick={() => setVisible(false)}/>
            <p>Back</p>
            </div>
            <div className='flex flex-col gap-4'>
  <ThemeToggle sidebar={true} />
</div>    
          </div>
          <Link
            href="/about"
            className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100"
          >
            Contact
          </Link>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
