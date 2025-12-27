"use client"
import React from 'react'
import Links from './Links'
import { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem, HoveredLinkInPage } from "@/app/components/ui/menu-items";
import { cn } from "@/lib/utils";
const Header = ({ scrollToSection, sections }) => {




    return (
        <div className="relative w-full">
            <nav className="flex  flex-col sm:flex-row justify-center gap-6  sm:gap-10 md:gap-36  items-center sticky top-0 bg-inherit shadow-sm p-4 z-10">
                <div>
                    <h1 className="text-2xl font-bold">Adil's Portfolio</h1>
                </div>

                <div>
                    <Navbar />
                </div>
            </nav>
        </div>
    );
};

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
        <div className={cn(" top-4 mx-auto z-50", className)}>
            <Menu setActive={setActive} className={`flex flex-row items-center space-x-4 ${className}`}>
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="mailto:adilsyed2803@gmail.com" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                                <path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"></path><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"></path><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"></path><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"></path><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"></path><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"></path><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"></path>
                            </svg>
                            Gmail</HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/adilsyed1/" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                                <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                            </svg>
                            Linked In
                        </HoveredLink>
                        <HoveredLink href="https://github.com/adilsyed003" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 256 256">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                                </g>
                                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <g transform="scale(10.66667,10.66667)">
                                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                                    </g>
                                </g>
                            </svg>
                            GitHub</HoveredLink>
                        <HoveredLink href="https://x.com/codeaxy" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                                <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                            </svg>
                            Twitter</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="text-sm grid sm:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Web Cursor AI"
                            href="https://web-cursor-ai.netlify.app/"
                            src="/new1.png"
                            description="Web Cursor AI is a AI based No Code website generation platform. Create a functional website with a single prompt."
                        />
                        <ProductItem
                            title="Skelo LMS"
                            href="https://lms-neon-six-33.vercel.app/"
                            src="/new22.png"
                            description="Smart Cloud Native Learning Management System for creating and managing educational courses efficiently."
                        />
                        <ProductItem
                            title="Cater Ease"
                            href="https://cater-ease-one.vercel.app/"
                            src="/new23.png"
                            description="Catering management platform to streamline event planning and food service operations."
                        />
                        <ProductItem
                            title="Valid Mail"
                            href="https://valid-mail.vercel.app/"
                            src="/new3.png"
                            description="Tool for verifying email addresses to ensure they are valid and active or temporary."
                        />
                    </div>
                    <div className="flex justify-end mt-2">
                        <a href="#projects" className="flex items-center text-blue-500 hover:underline font-medium group">
                            View All Projects
                            <svg className="ml-1 group-hover:translate-x-1 transition-transform" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Sections">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLinkInPage href="#about">About</HoveredLinkInPage>
                        <HoveredLinkInPage href="#projects">projects</HoveredLinkInPage>
                        <HoveredLinkInPage href="#tech">Skills</HoveredLinkInPage>
                    </div>
                </MenuItem>
            </Menu>
        </div >
    );
}

export default Header