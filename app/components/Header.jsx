import React from 'react'
import Links from './Links'
const Header = ({ scrollToSection, sections }) => {


    return (
        <>
            <header >
                <nav className='text-slate-200 flex justify-around m-4 items-center sticky top-0 z-10 bg-inherit shadow-sm'>
                    <h1 className='text-2xl font-bold'>Adil's Portfolio</h1>
                    <ul className='flex flex-row gap-6 '>
                        <li>
                            <a href='#home'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a href='#tech'>Tech</a>
                        </li>
                    </ul>
                    <Links />
                </nav>
                <hr className=' opacity-50'></hr>
            </header>
        </>
    )
}

export default Header