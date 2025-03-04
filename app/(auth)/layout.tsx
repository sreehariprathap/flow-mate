"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroHighlight>
            <div className="flex justify-evenly items-center p-5">
                <div className="flex flex-col items-center">
                <img src="/app-logo.png" className="w-36 my-2" />
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
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto text-start"
                >
                    With Flow Starter, Everything is a step ahead. <br/>
                    <Highlight className="text-white dark:text-white">
                    Automate. Simplify. Accelerate...
                    </Highlight>
                </motion.h1>
                </div>
                {children}
            </div>
        </HeroHighlight>
    )
}
export default layout