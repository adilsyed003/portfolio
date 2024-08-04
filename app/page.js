"use client"
import Header from "./components/Header";
import Intro from "./components/Intro";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Database from "./components/Database";
import Others from "./components/Others";
import Footer from "./components/Footer";
import React from "react";
import Projects from "./components/Projects";
export default function Home() {



  return (
    <div className="flex flex-col justify-between h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden">
      <Header />
      <div className='min-h-screen flex '>
        <Intro />
      </div>

      <section id="about" className="flex-center flex-col mb-0 min-h-screen w-screen pt-6">
        <div className="flex items-center justify-center"><div className="text-6xl "><h3>About me </h3></div><hr className=' flex-grow h-1 opacity-50 ml-5 mr-10'></hr></div>

        <p className="text-2xl m-20">My name is <span className='text-sky-400'>Adil</span>, and  I am currently pursuing a Bachelor's degree in <span className='text-sky-400'>Computer Science</span> at Kakatiya Institute of Technology. I discovered a deep passion for web programming during my university years. My journey as a web developer began with learning <span className='text-sky-400'>JavaScript, Tailwind CSS, Node.js</span>, and working with databases like <span className='text-sky-400'>MongoDB</span> and SQL-based systems such as <span className='text-sky-400'>PostgreSQL</span>.<br /><br />
          Seeking to expand my skills, I decided to explore <span className='text-sky-400'>React</span>. I was amazed at how quickly I could build and maintain websites with it. This excitement led me to learn <span className='text-sky-400'>Next.js</span>, which I have used to build several projects in collaboration with backend developers.<br /><br />

          I have a strong interest in cloud computing and <span className='text-sky-400'>DevOps</span>, actively exploring platforms like <span className='text-sky-400'>Docker</span> to streamline my workflow. My goal is to integrate cloud technologies into my projects.<br /><br />

          Beyond this, I also work with <span className='text-sky-400'>Python , Django </span>for backend development. This diverse skill set allows me to handle a variety of projects.</p>
      </section>

      <section id="projects" className="flex-center flex-col mb-0 min-h-screen w-screen pt-6">
        <div className="flex items-center justify-center"><div className="text-6xl "><h3>Projects </h3></div><hr className=' flex-grow h-1 opacity-50 ml-5 mr-10'></hr></div>
        <div>
          <Projects />
        </div>
      </section>

      <section id="tech" className="flex-center flex-col mb-0 min-h-screen w-screen pt-6">
        <div className="flex items-center justify-center"><div className="text-6xl "><h3>Technology </h3></div><hr className=' flex-grow h-1 opacity-50 ml-5 mr-10'></hr></div>
        <div className="text-2xl mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <Frontend />
          <Backend />
          <Database />
          <Others />
          <Footer />
        </div>
      </section>
    </div>
  );
}
