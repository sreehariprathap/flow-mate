"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { appIntegrations } from "@/config/appConstants";
import { motion } from "framer-motion";
import Image from "next/image";

const images = appIntegrations
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>

            <HeroHighlight>
                <div className="flex justify-evenly items-center gap-4">
                    <div className="flex flex-col items-center p-5 gap-3">
                        <Image alt='app logo' src="/app-logo-2.png" className="w-36 my-2" width={400} height={400} />
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
                            With Flow Starter, Everything is a step ahead. <br />
                            <Highlight className="text-white dark:text-white text-xl p-3">
                                Automate. Simplify. Accelerate...
                            </Highlight>
                        </motion.h1>
                    </div>
                    {children}
                </div>
            </HeroHighlight>
            <InfiniteMovingCards
                items={images}
                direction="right"
                speed="slow"
            />
        </div>
    )
}
export default layout