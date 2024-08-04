import React from 'react'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
const Intro = (() => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["I'm a React JS Developer.", "I'm a Next.js Developer", "I'm a Full Stack Developer..."],
            typeSpeed: 50,
            contentType: 'html',
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className='min-h-screen flex'>
            <div className='pl-10 pt-32 '>
                <div className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl'>Hi, I am
                    <span className='text-sky-400'> Adil </span>
                    <br /> and <span className='text-sky-400'>Coding </span>is my Superpower..</div>
                <span ref={el} className=" font-bold text-5xl text-sky-400" />
            </div>
            <div>
                <img src='computer.png' alt='image' className='w-full h-5/6 pr-20 pt-10' />
            </div>
        </div>
    )
});

export default Intro