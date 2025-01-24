import React from 'react'
import Card from './Card'
const Projects = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 m-10 justify-around'>
                <Card
                    img="/project1.png"
                    head="Learners Way"
                    information="Learners Way is an innovative online platform developed using Next.js, offering a vast collection of free content aimed at helping developers enhance their skills. The platform features tutorials, and Road maps."
                    link="https://learners-way.vercel.app/"
                    code="https://github.com/adilsyed003/learners-way"
                />
                <Card
                    img="/project2.png"
                    head="Turbo Typer"
                    information="Turbo - Typer is an engaging online game designed to help users improve their typing speed and accuracy. Built with React.js, the game provides real-time feedback."
                    code="https://github.com/adilsyed003/turbotyper"
                    link="https://turbo-typer.netlify.app/"
                />
                <Card
                    img="/project4.png"
                    head="Birnihigo"
                    information="A Online solution for poultry farms to manage their Hen's feed and health, Enabled tracking of over 10 key metrics, including water, feed, and egg production, in one platform.
Reduced manual recordkeeping."
                    code="https://github.com/adilsyed003/Pernhen"
                    link="https://birnihigo.vercel.app/"

                />
            </div>
            <div className='flex flex-col md:flex-row gap-4 mx-10 mt-3 justify-around'>
                <Card
                    img="/project5.png"
                    head="Video Stream App"
                    information="A Realtime Video streaming app where users can video call , chat and share files with each other. The app is built using Next.js, Socket.io and WebRTC."
                    link="https://video-stream-app-five.vercel.app/"
                    code="https://github.com/adilsyed003/VideoStreamApp"
                />

                <Card
                    img="/project6.png"
                    head="Glider UI"
                    information=" Gilder UI is a modern, responsive, and customizable UI library for React.js and Next js. The library offers a wide range of components, including buttons, modals, and sliders."

                />
            </div>
        </>
    )
}

export default Projects