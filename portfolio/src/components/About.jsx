import React from "react";
import Skill from "./Skill";

const About = () => {
  return (
    <div>
      <h1 className="text-center sm:text-xl px-5 sm:px-6 mb-28">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </h1>
      <div className="flex flex-col sm:flex-row sm:px-20 px-2 gap-28">
        <div className="">
          <h1 className="text-xl pb-6">
            <b>Get to know me!</b>
          </h1>
          <h1>
            I am a web and mobile developer passionate about creating modern,
            intuitive, and high-performance applications. Graduated in Computer
            Science from Cheikh Anta Diop University, I have gained solid
            expertise in HTML, CSS, JavaScript, as well as frameworks and
            libraries like React, Next.js, and Flutter. Always eager to learn, I
            love tackling technical challenges and exploring new technologies to
            build innovative solutions. My goal is to design smooth and
            user-friendly applications that enhance user experience.
            <br />
            <br />
            💡 What I Do: <br />
            ✅ Building responsive web interfaces with React & Next.js <br />
            ✅ Developing mobile applications with Flutter <br />
            ✅ Crafting modern designs with TailwindCSS, Sass, DaisyUI <br />
            ✅ Backend development with Node.js, Express.js <br />
            ✅ Database management with MySQL and MongoDB <br />
            <br />
            🚀 Why Work With Me?
            <br />
            <br />
            Ability to quickly adapt to new technologies
            <br />
            Strong skills in teamwork and collaboration
            <br />
            Passion for design and user experience
            <br />
            <br />
            I’m always looking for new opportunities and exciting
            collaborations. If you're interested in working with me, feel free
            to reach out! 📩
          </h1>
        </div>
        <div>
          <h1 className="text-xl pb-6">
            <b>My skills</b>
          </h1>
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default About;
