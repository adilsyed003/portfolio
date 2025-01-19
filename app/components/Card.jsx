"use client";
import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
const Card = ({ img, head, information, link, code }) => {
    // return (
    //     <div>


    //         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
    //             <a href={link}>
    //                 <img className="rounded-t-lg w-full h-64 object-contain" src={img} alt="" />
    //             </a>
    //             <div className="p-5">
    //                 <a href={link}>
    //                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {head} </h5>
    //                 </a>
    //                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{information}</p>
    //                 <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //                     View project
    //                 </a>
    //             </div>
    //         </div>

    //     </div>
    // )
    return (
        <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    {head}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                    {information}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                {(link && code) ? (


                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href={code}
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal text-white border border-slate-200"
                        >
                            <div className=' inline-flex items-center justify-around gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 256 256">
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                        <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                                    </g>
                                    <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                        <g transform="scale(10.66667,10.66667)">
                                            <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <p>
                                    {"  "} Code</p>
                            </div>
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href={link}
                            target="__blank"
                            className="px-6 py-3  rounded-full   bg-white text-black text-lg  font-bold"
                        >
                            Visit
                        </CardItem>
                    </div>
                ) :
                    <div className="flex justify-between items-center mt-20">
                        <button className="px-6 py-3  rounded-full   bg-white text-black text-lg  font-bold">

                            Coming Soon
                        </button>
                    </div>


                }
            </CardBody>
        </CardContainer>
    );


}

export default Card
