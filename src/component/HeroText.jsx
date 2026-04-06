import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"
const HeroText = () => {
    const words = ["Developer","Data Scientist","Problem Solver"]
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left
    rounded-3xl bg-clip-text">
        {/* DesktopView */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1}}
                    >Hi I'm Naman Bachhawat</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-3xl font-medium
                    text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1.2}}
                        >CS Student & ML Enthusiast | <br/>Building 
                        Data-Driven Solutions
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1.5}}>
                            <FlipWords words={words} className="font-black text-white
                    text-5xl"/></motion.div>
                    <motion.p className="text-2xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1.8}}>Data & Web Creator</motion.p>

                    <motion.a
                        href="/NAMAN_BACHHAWAT_RESUME.pdf"
                        download="Naman_Bachhawat_Resume.pdf"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:2.1}}
                        className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
                        rounded-full bg-gradient-to-r from-lavender to-royal text-white
                        hover:-translate-y-1 duration-200 cursor-pointer shadow-lg shadow-royal/25">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Download Resume
                    </motion.a>

                </div>
            
        </div>
        {/* MobileView */}
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p className="text-xl font-medium"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1}}>Hi, I'm Naman Bachhawat</motion.p>
            <motion.p className="text-3xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1.2}}>CS & ML</motion.p>
            <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1.5}}><FlipWords words={words} className="font-black text-white text-5xl"/></motion.div>
            <motion.p className="text-5xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:1.8}}>Data & Web Creator</motion.p>
            <motion.a
                        href="/NAMAN_BACHHAWAT_RESUME.pdf"
                        download="Naman_Bachhawat_Resume.pdf"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay:2.1}}
                        className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium
                        rounded-full bg-gradient-to-r from-lavender to-royal text-white
                        hover:-translate-y-1 duration-200 cursor-pointer shadow-lg shadow-royal/25">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Download Resume
                    </motion.a>
            </div>
    </div>
  )
}

export default HeroText