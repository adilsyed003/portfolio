"use client";
import { motion } from "framer-motion";
import { Highlight } from "@/app/components/ui/hero-highlight";

export default function HeroHighlightDemo() {
    return (
        (
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
                Hi , I am Adil.<br /> I'm a Full Stack  {"<"}Developer {"/>"} <br />
                <Highlight className="text-white">
                    I Build , Debug and Deliver
                </Highlight>
                <br></br>
                awesome web apps.
            </motion.h1>
        )
    );
}
