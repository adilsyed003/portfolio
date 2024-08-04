import React from 'react'
import Card from './Card'
const Projects = () => {
    return (
        <div className='flex flex-row gap-4 m-10 justify-around'>
            <Card
                img="project1.png"
                head="Learners Way"
                information="Learners Way is an innovative online platform developed using Next.js, offering a vast collection of free content aimed at helping developers enhance their skills. The platform features tutorials, and Road maps."
            />
            <Card
                img="project2.png"
                head="Turbo - Typer"
                information="Turbo - Typer is an engaging online game designed to help users improve their typing speed and accuracy. Built with React.js, the game provides real-time feedback."
            />
            <Card
                img="project3.png"
                head="QR Generator"
                information="QR Generator is a user-friendly platform that allows you to create custom QR codes effortlessly. By simply entering the URL, users can generate a QR code.It's a quick and efficient way to share web links."
            /></div>
    )
}

export default Projects