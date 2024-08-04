import React from 'react'
import Links from './Links'
const Footer = () => {
    return (
        <div className=' mt-52'>
            <div className=' bg-slate-500 h-1 w-screen'></div>
            <footer className="flex w-screen justify-center items-center h-16 gap-10 text-white mx-auto">
                <div><p>© 2024 Adil</p></div>
                <div><Links /></div>
            </footer>
        </div>
    )
}

export default Footer