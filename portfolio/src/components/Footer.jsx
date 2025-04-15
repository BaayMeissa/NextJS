import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='flex bg-[#181717] dark:bg-[#395B64] justify-center text-slate-50 dark:text-[#181717] mt-56'>
      <div className='sm:px-56 px-10 pt-3 text-center'>
        <h1 className='sm:text-2xl text-xl mb-6 font-bold'>Papa Meissa Mbaye</h1>
        <p className='sm:text-sm text-sm'>A passionate Full Stack Developer with a deep fascination for artificial intelligence,<br />
            crafting innovative solutions that blend technology and creativity.</p>
      
      <div className="justify-center pt-4 flex space-x-3 md:text-xl pb-8">
        <div className="bg-[#1DA1F2] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="https://x.com/PapaMeissaMbay2" target="_blank"><FaTwitter className="text-[60px] md:text-2xl text-2xl p-1" color="white"/></a>
        </div>
        <div className="bg-[#0a66c2] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="https://www.linkedin.com/in/papa-meissa-mbaye-a76ab4207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><CiLinkedin className="text-[60px] md:text-2xl text-2xl p-1" color="white"/></a>
        </div>
        <div className="bg-[#ea4335] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="mailto:meissambaye09@gmail.com" target="_blank"><SiGmail color="white" className="text-[60px] md:text-2xl text-2xl p-1"/></a>
        </div>
        <div className= "bg-[#181717] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="https://github.com/BaayMeissa/" target="_blank"><FaGithub color="white" className="text-[60px] md:text-2xl text-2xl p-1"/></a>
        </div>
        </div>
        <hr classname="border-black"></hr>
        <p className='pt-8 text-sm'>© Copyright 2025 . Made by <span className='underline font-bold'>Baay Meissa</span></p>
        </div>
    </div>
  )
}

export default Footer
