import React from 'react'
import Card from './Card'
const Projects = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 m-10 justify-around'>
                <Card
                    img="/new1.png"
                    head="Web Cursor AI"
                    information="Web Cursor AI is a AI based No Code website generation platform, You can create whole functionable website with single prompt by describing your idea in natural language prompts to generate functional code."
                    link="https://web-cursor-ai.netlify.app/"
                    code="https://github.com/adilsyed003/WebCursorAI"
                />
                <Card
                    img="/new22.png"
                    head="Skelo LMS"
                    information="Smart Cloud Native Learning Management System which helps to create and manage educational courses efficiently.Which consists of features like course creation, Editing , Quizzes , Video Lectures, and assessments."
                    link="https://lms-neon-six-33.vercel.app/"
                    code="https://github.com/adilsyed003/LMS"
                />
                <Card
                    img="/new23.png"
                    head="Cater Ease"
                    information="Cater Ease is a catering management platform designed to streamline event planning and food service operations. It offers features like menu customization, order tracking, and customer management."
                    link="https://cater-ease-one.vercel.app/"
                    code="https://github.com/adilsyed003/cater-ease"
                />



            </div>
            <div className='flex flex-col md:flex-row gap-4 mx-10 mt-3 justify-around'>
                <Card
                    img="/new3.png"
                    head="Valid Mail"
                    information="Valid Mail is a tool for verifying email addresses to ensure they are valid and active or any Temporary addresses. It helps users maintain clean email lists and improve email deliverability."
                    link="https://valid-mail.vercel.app/"
                    code="https://github.com/adilsyed003/valid-mail"
                />
                <Card
                    img="/new4.png"
                    head="PDF Chat"
                    information="PDF Chat is an application that allows users to interact with PDF documents through chat, enabling easy extraction and querying of information."
                    link="https://pdf-chat-alpha-three.vercel.app"
                    code="https://github.com/adilsyed003/PDFChat"
                />
                <Card
                    img="/project5.png"
                    head="Video Stream App"
                    information="A Realtime Video streaming app where users can video call , chat and share files with each other. The app is built using Next.js, Socket.io and WebRTC."
                    link="https://videomeet-murex.vercel.app/"
                    code="https://github.com/adilsyed003/VideoStreamApp"
                />


            </div>
        </>
    )
}

export default Projects