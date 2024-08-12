import React from 'react'

const Card = ({ img, head, information }) => {
    return (
        <div>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
                <a href="https://learners-way.vercel.app/">
                    <img className="rounded-t-lg w-full h-64 object-contain" src={img} alt="" />
                </a>
                <div className="p-5">
                    <a href="https://turbo-typer.netlify.app/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {head} </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{information}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View project
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card
